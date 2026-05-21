import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');

  const links = [
    { href: '#services',  label: tNav('services') },
    { href: '#about',     label: tNav('about') },
    { href: '#pricing',   label: tNav('pricing') },
    { href: '#contact',   label: tNav('contact') },
  ];

  const legalLabel = tFooter('legal');

  return (
    <footer className="bg-[#0a1f35] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold text-white">EviDat</span>
          <span className="text-xs text-white/40">{tFooter('tagline')}</span>
        </div>
        <div className="flex gap-6 flex-wrap">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className="text-sm text-white/40 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <Link href="/impressum"
                className="text-xs text-white/30 hover:text-white/70 transition-colors underline underline-offset-2">
            {legalLabel}
          </Link>
          <p className="text-xs text-white/30">© {new Date().getFullYear()} EviDat Analytics</p>
        </div>
      </div>
    </footer>
  );
}
