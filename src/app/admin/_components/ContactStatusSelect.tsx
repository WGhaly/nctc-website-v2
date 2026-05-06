'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type Status = 'new' | 'in-progress' | 'resolved' | 'archived';

interface Props {
  submissionId: string;
  currentStatus: Status;
  statusColors: Record<Status, string>;
}

export default function ContactStatusSelect({ submissionId, currentStatus, statusColors }: Props) {
  const [status, setStatus] = useState<Status>(currentStatus);
  const [saving, setSaving] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as Status;
    setSaving(true);
    const supabase = createClient();
    const { error } = await supabase
      .from('contact_submissions')
      .update({ status: newStatus })
      .eq('id', submissionId);

    if (!error) setStatus(newStatus);
    setSaving(false);
  };

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={saving}
      className={`text-xs font-medium px-3 py-1.5 rounded-lg border outline-none cursor-pointer transition-all duration-200 ${statusColors[status]} bg-transparent disabled:opacity-50`}
    >
      <option value="new" className="bg-[#0d1545] text-white">New</option>
      <option value="in-progress" className="bg-[#0d1545] text-white">In Progress</option>
      <option value="resolved" className="bg-[#0d1545] text-white">Resolved</option>
      <option value="archived" className="bg-[#0d1545] text-white">Archived</option>
    </select>
  );
}
