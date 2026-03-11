'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Features', href: '/features/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Enterprise', href: '/enterprise/' },
  { label: 'Compliance', href: '/compliance/' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-zubda-900 border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="text-xl font-semibold text-white tracking-tight">zubda</span>
            <span className="text-sm font-arabic text-zubda-400">زبدة</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="mailto:sales@zubda.com" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link
              href="/pricing/"
              className="px-5 py-2 text-sm font-medium bg-zubda-500 text-white hover:bg-zubda-600 transition-colors"
            >
              Start free trial
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-zubda-900 border-t border-white/10">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm text-gray-300 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link href="/pricing/" className="block w-full text-center py-2.5 text-sm font-medium bg-zubda-500 text-white">
                Start free trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
