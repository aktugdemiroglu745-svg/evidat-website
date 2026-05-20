'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

const locales = ['de', 'en', 'fr'] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { href: '#services', label: t('services') },
    { href: '#about',    label: t('about') },
    { href: '#portfolio',label: t('portfolio') },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center gap-8">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight mr-auto">
          <span className="text-xl font-bold text-[#1a3a5c] tracking-tight">EviDat</span>
          <span className="text-[0.65rem] text-slate-500 uppercase tracking-wide">{t('logoSub')}</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
               className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-[#1a3a5c] hover:bg-slate-100 rounded-lg transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact"
             className="ml-2 px-4 py-2 bg-[#1a3a5c] text-white text-sm font-semibold rounded-lg hover:bg-[#2d5986] transition-colors">
            {t('contact')}
          </a>
        </div>

        {/* Language switcher */}
        <div className="hidden md:flex items-center gap-1 text-xs">
          {locales.map((l, i) => (
            <span key={l} className="flex items-center gap-1">
              {i > 0 && <span className="text-slate-300">|</span>}
              <button onClick={() => switchLocale(l)}
                      className={`px-1.5 py-1 rounded font-semibold transition-colors ${locale === l ? 'text-[#1a3a5c] bg-slate-100' : 'text-slate-500 hover:text-[#1a3a5c]'}`}>
                {l.toUpperCase()}
              </button>
            </span>
          ))}
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-[#1a3a5c] text-2xl" onClick={() => setMobileOpen(o => !o)}>
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 pb-5 pt-3 flex flex-col gap-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
               className="py-2.5 px-3 font-medium text-slate-700 hover:bg-slate-50 rounded-lg">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}
             className="py-2.5 px-3 font-medium text-slate-700 hover:bg-slate-50 rounded-lg">
            {t('contact')}
          </a>
          <div className="flex gap-3 mt-3 px-3">
            {locales.map(l => (
              <button key={l} onClick={() => { switchLocale(l); setMobileOpen(false); }}
                      className={`text-sm font-bold px-2 py-1 rounded ${locale === l ? 'bg-[#1a3a5c] text-white' : 'text-slate-500 hover:text-[#1a3a5c]'}`}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
