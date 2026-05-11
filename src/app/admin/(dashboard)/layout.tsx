export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { LayoutDashboard, Mail, FlaskConical } from 'lucide-react';
import SignOutButton from '../_components/SignOutButton';

const navItems = [
  { href: '/admin/contacts', label: 'Contacts', icon: Mail },
  { href: '/admin/inventions', label: 'Inventions', icon: FlaskConical },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex"
      style={{ background: 'linear-gradient(160deg, #010b40 0%, #0d1545 100%)' }}
    >
      {/* Sidebar */}
      <aside
        className="w-60 flex-shrink-0 flex flex-col border-r"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        {/* Logo */}
        <div className="px-6 py-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #243996 0%, #4a81f6 100%)' }}
            >
              <LayoutDashboard className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-none">NCTC</p>
              <p className="text-white/40 text-xs mt-0.5">Admin Portal</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium"
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Sign Out */}
        <div className="px-3 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
          <SignOutButton />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
