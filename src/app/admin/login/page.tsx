'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError('Invalid email or password.');
      setLoading(false);
      return;
    }

    router.push('/admin/contacts');
    router.refresh();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(160deg, #010b40 0%, #0d1545 60%, #18256b 100%)' }}
    >
      <div className="w-full max-w-sm">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-5"
            style={{ background: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)' }}
          >
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Admin Portal</h1>
          <p className="text-white/40 text-sm mt-1">NCTC — Authorised access only</p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@nctc.gov.eg"
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#4a81f6] focus:shadow-[0_0_0_3px_rgba(74,129,246,0.12)] rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-white/50 text-xs font-medium uppercase tracking-widest mb-2">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#4a81f6] focus:shadow-[0_0_0_3px_rgba(74,129,246,0.12)] rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-all duration-300"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)',
                boxShadow: '0 4px 24px rgba(74,129,246,0.3)',
              }}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
