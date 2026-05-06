'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Plus, Pencil, Trash2, X, Check, Eye, EyeOff, Star } from 'lucide-react';

type TechStatus = 'active' | 'evidence-needed' | 'not-initiated';

interface Technology {
  id: string;
  priority: number | null;
  title: string;
  inventor: string;
  field: string;
  trl_current: number;
  mrl_current: number;
  crl_current: number;
  status: TechStatus;
  highlight: string | null;
  notes: string | null;
  evidence_link: string | null;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

interface TechField {
  name: string;
  color_hex: string;
}

const statusLabels: Record<TechStatus, string> = {
  active: 'Active',
  'evidence-needed': 'Evidence Needed',
  'not-initiated': 'Not Initiated',
};

const statusColors: Record<TechStatus, string> = {
  active: 'bg-green-500/20 text-green-300 border-green-500/30',
  'evidence-needed': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
  'not-initiated': 'bg-white/10 text-white/40 border-white/10',
};

const emptyForm = {
  priority: '',
  title: '',
  inventor: '',
  field: '',
  trl_current: '1',
  mrl_current: '1',
  crl_current: '1',
  status: 'evidence-needed' as TechStatus,
  highlight: '',
  notes: '',
  evidence_link: '',
  is_published: false,
  is_featured: false,
};

export default function InventionsPage() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [fields, setFields] = useState<TechField[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(emptyForm);
  const [formError, setFormError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const supabase = createClient();

  const fetchData = useCallback(async () => {
    setLoading(true);
    const [techRes, fieldsRes] = await Promise.all([
      supabase.from('technologies').select('*').order('priority', { ascending: true, nullsFirst: false }),
      supabase.from('technology_fields').select('name, color_hex').order('name'),
    ]);
    if (techRes.error) setError(techRes.error.message);
    else setTechnologies(techRes.data as Technology[]);
    if (fieldsRes.data) setFields(fieldsRes.data as TechField[]);
    setLoading(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => { fetchData(); }, [fetchData]);

  const openCreate = () => {
    setEditingId(null);
    setFormData({ ...emptyForm, field: fields[0]?.name ?? '' });
    setFormError(null);
    setShowModal(true);
  };

  const openEdit = (tech: Technology) => {
    setEditingId(tech.id);
    setFormData({
      priority: tech.priority?.toString() ?? '',
      title: tech.title,
      inventor: tech.inventor,
      field: tech.field,
      trl_current: tech.trl_current.toString(),
      mrl_current: tech.mrl_current.toString(),
      crl_current: tech.crl_current.toString(),
      status: tech.status,
      highlight: tech.highlight ?? '',
      notes: tech.notes ?? '',
      evidence_link: tech.evidence_link ?? '',
      is_published: tech.is_published,
      is_featured: tech.is_featured,
    });
    setFormError(null);
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setFormError(null);

    const payload = {
      priority: formData.priority ? parseInt(formData.priority) : null,
      title: formData.title.trim(),
      inventor: formData.inventor.trim(),
      field: formData.field,
      trl_current: parseInt(formData.trl_current),
      mrl_current: parseInt(formData.mrl_current),
      crl_current: parseInt(formData.crl_current),
      trl_max: 9,
      mrl_max: 9,
      crl_max: 9,
      status: formData.status,
      highlight: formData.highlight.trim() || null,
      notes: formData.notes.trim() || null,
      evidence_link: formData.evidence_link.trim() || null,
      is_published: formData.is_published,
      is_featured: formData.is_featured,
    };

    const { error: saveError } = editingId
      ? await supabase.from('technologies').update(payload).eq('id', editingId)
      : await supabase.from('technologies').insert(payload);

    if (saveError) {
      setFormError(saveError.message);
      setSaving(false);
      return;
    }

    setShowModal(false);
    fetchData();
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    await supabase.from('technologies').delete().eq('id', deleteId);
    setDeleteId(null);
    setDeleting(false);
    fetchData();
  };

  const toggleField = async (id: string, field: 'is_published' | 'is_featured', value: boolean) => {
    await supabase.from('technologies').update({ [field]: value }).eq('id', id);
    setTechnologies((prev) =>
      prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
    );
  };

  const inputCls = 'w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#4a81f6] rounded-xl px-3 py-2.5 text-white placeholder-white/30 text-sm outline-none transition-all duration-200';
  const labelCls = 'block text-white/50 text-xs font-medium uppercase tracking-widest mb-1.5';

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Inventions</h1>
          <p className="text-white/40 text-sm mt-1">{technologies.length} technolog{technologies.length !== 1 ? 'ies' : 'y'}</p>
        </div>
        <button
          onClick={openCreate}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)' }}
        >
          <Plus className="w-4 h-4" />
          Add Technology
        </button>
      </div>

      {loading && <p className="text-white/40 text-sm">Loading…</p>}
      {error && <p className="text-red-400 text-sm">Error: {error}</p>}

      {!loading && !error && (
        technologies.length === 0 ? (
          <div
            className="rounded-2xl p-16 text-center"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <p className="text-white/30 text-sm mb-4">No technologies yet.</p>
            <button onClick={openCreate} className="text-[#4a81f6] text-sm hover:underline">Add the first one</button>
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  {['#', 'Title', 'Inventor', 'Field', 'TRL/MRL/CRL', 'Status', 'Pub', 'Feat', 'Actions'].map((col) => (
                    <th key={col} className="text-left px-4 py-3.5 text-white/40 font-medium text-xs uppercase tracking-widest">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {technologies.map((t, idx) => {
                  const fieldColor = fields.find((f) => f.name === t.field)?.color_hex ?? '#4a81f6';
                  return (
                    <tr
                      key={t.id}
                      style={{
                        borderBottom: idx < technologies.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)',
                      }}
                    >
                      <td className="px-4 py-3.5 text-white/30 text-xs">{t.priority ?? '—'}</td>
                      <td className="px-4 py-3.5">
                        <p className="text-white font-medium max-w-[200px] truncate" title={t.title}>{t.title}</p>
                        {t.highlight && (
                          <p className="text-white/35 text-xs mt-0.5 max-w-[200px] truncate" title={t.highlight}>{t.highlight}</p>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-white/60">{t.inventor}</td>
                      <td className="px-4 py-3.5">
                        <span
                          className="text-xs font-medium px-2.5 py-1 rounded-lg border"
                          style={{
                            background: `${fieldColor}25`,
                            borderColor: `${fieldColor}50`,
                            color: fieldColor,
                          }}
                        >
                          {t.field}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="text-white/60 font-mono text-xs">{t.trl_current}/{t.mrl_current}/{t.crl_current}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${statusColors[t.status]}`}>
                          {statusLabels[t.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3.5">
                        <button
                          onClick={() => toggleField(t.id, 'is_published', !t.is_published)}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${t.is_published ? 'text-green-400 bg-green-500/15' : 'text-white/20 hover:text-white/40 bg-white/5'}`}
                          title={t.is_published ? 'Published — click to unpublish' : 'Unpublished — click to publish'}
                        >
                          {t.is_published ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                        </button>
                      </td>
                      <td className="px-4 py-3.5">
                        <button
                          onClick={() => toggleField(t.id, 'is_featured', !t.is_featured)}
                          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${t.is_featured ? 'text-yellow-400 bg-yellow-500/15' : 'text-white/20 hover:text-white/40 bg-white/5'}`}
                          title={t.is_featured ? 'Featured — click to unfeature' : 'Not featured — click to feature'}
                        >
                          <Star className="w-3.5 h-3.5" />
                        </button>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => openEdit(t)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/8 transition-all duration-200"
                          >
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setDeleteId(t.id)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )
      )}

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
          <div
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-8"
            style={{ background: '#0d1545', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">{editingId ? 'Edit Technology' : 'Add Technology'}</h2>
              <button onClick={() => setShowModal(false)} className="text-white/40 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Title *</label>
                  <input required className={inputCls} placeholder="Technology title" value={formData.title}
                    onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))} />
                </div>
                <div>
                  <label className={labelCls}>Inventor *</label>
                  <input required className={inputCls} placeholder="Dr. Name / Institution" value={formData.inventor}
                    onChange={(e) => setFormData((p) => ({ ...p, inventor: e.target.value }))} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelCls}>Field *</label>
                  <select required className={`${inputCls} appearance-none`} style={{ colorScheme: 'dark' }}
                    value={formData.field}
                    onChange={(e) => setFormData((p) => ({ ...p, field: e.target.value }))}>
                    {fields.map((f) => (
                      <option key={f.name} value={f.name} className="bg-[#0d1545]">{f.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Status *</label>
                  <select className={`${inputCls} appearance-none`} style={{ colorScheme: 'dark' }}
                    value={formData.status}
                    onChange={(e) => setFormData((p) => ({ ...p, status: e.target.value as TechStatus }))}>
                    <option value="active" className="bg-[#0d1545]">Active</option>
                    <option value="evidence-needed" className="bg-[#0d1545]">Evidence Needed</option>
                    <option value="not-initiated" className="bg-[#0d1545]">Not Initiated</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className={labelCls}>Priority</label>
                  <input type="number" min="1" className={inputCls} placeholder="e.g. 1" value={formData.priority}
                    onChange={(e) => setFormData((p) => ({ ...p, priority: e.target.value }))} />
                </div>
                <div>
                  <label className={labelCls}>TRL (1–9) *</label>
                  <input required type="number" min="1" max="9" className={inputCls} value={formData.trl_current}
                    onChange={(e) => setFormData((p) => ({ ...p, trl_current: e.target.value }))} />
                </div>
                <div>
                  <label className={labelCls}>MRL (1–9) *</label>
                  <input required type="number" min="1" max="9" className={inputCls} value={formData.mrl_current}
                    onChange={(e) => setFormData((p) => ({ ...p, mrl_current: e.target.value }))} />
                </div>
                <div>
                  <label className={labelCls}>CRL (1–9) *</label>
                  <input required type="number" min="1" max="9" className={inputCls} value={formData.crl_current}
                    onChange={(e) => setFormData((p) => ({ ...p, crl_current: e.target.value }))} />
                </div>
              </div>

              <div>
                <label className={labelCls}>Highlight (public summary)</label>
                <input className={inputCls} placeholder="One-line public summary for the portfolio card" value={formData.highlight}
                  onChange={(e) => setFormData((p) => ({ ...p, highlight: e.target.value }))} />
              </div>

              <div>
                <label className={labelCls}>Evidence Link</label>
                <input type="url" className={inputCls} placeholder="https://drive.google.com/…" value={formData.evidence_link}
                  onChange={(e) => setFormData((p) => ({ ...p, evidence_link: e.target.value }))} />
              </div>

              <div>
                <label className={labelCls}>Internal Notes</label>
                <textarea rows={3} className={`${inputCls} resize-none`} placeholder="Internal evaluator notes (not public)" value={formData.notes}
                  onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))} />
              </div>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, is_published: !p.is_published }))}
                    className={`w-10 h-6 rounded-full transition-all duration-200 flex items-center px-1 ${formData.is_published ? 'bg-[#4a81f6]' : 'bg-white/10'}`}
                  >
                    <span className={`w-4 h-4 bg-white rounded-full transition-all duration-200 ${formData.is_published ? 'translate-x-4' : 'translate-x-0'}`} />
                  </button>
                  <span className="text-white/70 text-sm">Published (public)</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, is_featured: !p.is_featured }))}
                    className={`w-10 h-6 rounded-full transition-all duration-200 flex items-center px-1 ${formData.is_featured ? 'bg-[#4a81f6]' : 'bg-white/10'}`}
                  >
                    <span className={`w-4 h-4 bg-white rounded-full transition-all duration-200 ${formData.is_featured ? 'translate-x-4' : 'translate-x-0'}`} />
                  </button>
                  <span className="text-white/70 text-sm">Featured (homepage)</span>
                </label>
              </div>

              {formError && <p className="text-red-400 text-sm">{formError}</p>}

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-white text-sm transition-all duration-200 disabled:opacity-60 hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)' }}
                >
                  <Check className="w-4 h-4" />
                  {saving ? 'Saving…' : editingId ? 'Save Changes' : 'Add Technology'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2.5 rounded-xl text-white/50 hover:text-white text-sm transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
          <div
            className="w-full max-w-sm rounded-2xl p-8 text-center"
            style={{ background: '#0d1545', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="w-12 h-12 rounded-full bg-red-500/15 flex items-center justify-center mx-auto mb-5">
              <Trash2 className="w-5 h-5 text-red-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Delete Technology?</h3>
            <p className="text-white/40 text-sm mb-6">This action cannot be undone. The record will be permanently removed from the database.</p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="flex-1 py-2.5 rounded-xl font-semibold text-white text-sm bg-red-600 hover:bg-red-700 transition-colors disabled:opacity-60"
              >
                {deleting ? 'Deleting…' : 'Delete'}
              </button>
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 py-2.5 rounded-xl text-white/50 hover:text-white text-sm transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
