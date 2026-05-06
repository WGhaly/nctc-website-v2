import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import ContactStatusSelect from '../../_components/ContactStatusSelect';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  organization: string | null;
  service: string | null;
  subject: string | null;
  message: string;
  status: 'new' | 'in-progress' | 'resolved' | 'archived';
  admin_notes: string | null;
  created_at: string;
};

const statusColors: Record<ContactSubmission['status'], string> = {
  new: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'in-progress': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  resolved: 'bg-green-500/20 text-green-300 border-green-500/30',
  archived: 'bg-white/10 text-white/40 border-white/10',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default async function ContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/admin/login');

  const { status: filterStatus } = await searchParams;

  let query = supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });

  if (filterStatus && filterStatus !== 'all') {
    query = query.eq('status', filterStatus);
  }

  const { data: contacts, error } = await query;

  if (error) {
    return (
      <div className="p-8 text-red-400">
        Failed to load contacts: {error.message}
      </div>
    );
  }

  const submissions = (contacts ?? []) as ContactSubmission[];

  const filterOptions: Array<{ value: string; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'new', label: 'New' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'resolved', label: 'Resolved' },
    { value: 'archived', label: 'Archived' },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Contact Submissions</h1>
          <p className="text-white/40 text-sm mt-1">{submissions.length} submission{submissions.length !== 1 ? 's' : ''}</p>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {filterOptions.map(({ value, label }) => {
            const active = (filterStatus ?? 'all') === value;
            return (
              <a
                key={value}
                href={value === 'all' ? '/admin/contacts' : `/admin/contacts?status=${value}`}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-[#243996] text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Table */}
      {submissions.length === 0 ? (
        <div
          className="rounded-2xl p-16 text-center"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-white/30 text-sm">No submissions yet.</p>
        </div>
      ) : (
        <div
          className="rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                {['Name', 'Email', 'Organization', 'Service', 'Subject', 'Status', 'Date'].map((col) => (
                  <th
                    key={col}
                    className="text-left px-5 py-3.5 text-white/40 font-medium text-xs uppercase tracking-widest"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {submissions.map((s, idx) => (
                <tr
                  key={s.id}
                  style={{
                    borderBottom: idx < submissions.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                  }}
                >
                  <td className="px-5 py-4">
                    <p className="text-white font-medium">{s.name}</p>
                    {s.message && (
                      <p className="text-white/35 text-xs mt-0.5 max-w-[180px] truncate" title={s.message}>
                        {s.message}
                      </p>
                    )}
                  </td>
                  <td className="px-5 py-4 text-white/70">{s.email}</td>
                  <td className="px-5 py-4 text-white/50">{s.organization ?? '—'}</td>
                  <td className="px-5 py-4 text-white/50 max-w-[150px]">
                    <span className="truncate block" title={s.service ?? ''}>
                      {s.service ?? '—'}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-white/50 max-w-[160px]">
                    <span className="truncate block" title={s.subject ?? ''}>
                      {s.subject ?? '—'}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <ContactStatusSelect submissionId={s.id} currentStatus={s.status} statusColors={statusColors} />
                  </td>
                  <td className="px-5 py-4 text-white/40 whitespace-nowrap">{formatDate(s.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
