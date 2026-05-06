'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'How We Work', href: '/#how-it-works' },
  { label: 'Services', href: '/#commercialization-services' },
  { label: 'Legal Toolbox', href: '/#legal-toolbox' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 w-full"
      style={{
        background: scrolled ? 'rgba(1,9,61,0.97)' : '#01093d',
        boxShadow: scrolled
          ? '0 4px 24px rgba(1,9,61,0.5), 0 1px 0 rgba(74,129,246,0.3)'
          : '0 2px 0 rgba(74,129,246,0.25)',
        transition: 'background 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between" style={{ height: '70px' }}>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/nctc-logo-hq.png"
              alt="NCTC"
              width={160}
              height={54}
              className="object-contain"
              style={{ height: '46px', width: 'auto', filter: 'brightness(0) invert(1)' }}
              priority
            />
          </Link>

          {/* Desktop nav — shown at md+ (768px) */}
          <div className="nav-desktop-links items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150"
                style={{ color: '#c8d8ff' }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = '#ffffff';
                  el.style.background = 'rgba(255,255,255,0.12)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = '#c8d8ff';
                  el.style.background = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/technologies"
              className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150"
              style={{
                color: pathname === '/technologies' ? '#ffffff' : '#c8d8ff',
                background: pathname === '/technologies' ? 'rgba(74,129,246,0.3)' : 'transparent',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = '#ffffff';
                if (pathname !== '/technologies') el.style.background = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = pathname === '/technologies' ? '#ffffff' : '#c8d8ff';
                el.style.background = pathname === '/technologies' ? 'rgba(74,129,246,0.3)' : 'transparent';
              }}
            >
              Projects
            </Link>
          </div>

          {/* Desktop CTA — shown at md+ */}
          <div className="nav-desktop-cta items-center">
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, #4a81f6 0%, #1d4ed8 100%)',
                boxShadow: '0 0 0 1px rgba(74,129,246,0.5), 0 4px 16px rgba(74,129,246,0.35)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  '0 0 0 1px rgba(74,129,246,0.8), 0 6px 24px rgba(74,129,246,0.55)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  '0 0 0 1px rgba(74,129,246,0.5), 0 4px 16px rgba(74,129,246,0.35)';
              }}
            >
              Contact Us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger — shown below md */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile-toggle items-center justify-center w-10 h-10 rounded-xl transition-all duration-150"
            style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="px-5 pb-5"
          style={{ background: '#020c3e', borderTop: '1px solid rgba(74,129,246,0.2)' }}
        >
          <div className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-150"
                style={{ color: '#c8d8ff' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/technologies"
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-150"
              style={{ color: '#c8d8ff' }}
            >
              Projects
            </Link>
            <div className="mt-2 pt-3" style={{ borderTop: '1px solid rgba(74,129,246,0.2)' }}>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-bold text-white text-center rounded-xl"
                style={{ background: 'linear-gradient(135deg, #4a81f6 0%, #1d4ed8 100%)' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
