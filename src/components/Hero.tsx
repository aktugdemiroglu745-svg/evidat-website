'use client';

import { useTranslations } from 'next-intl';

const bars = [55, 80, 45, 90, 65];

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="min-h-screen pt-[72px] flex items-center relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #0f2540 0%, #1a3a5c 50%, #1e4976 100%)' }}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(42,157,143,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(45,89,134,0.3) 0%, transparent 50%)' }} />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full flex items-center justify-between gap-12 z-10">
        {/* Content */}
        <div className="flex flex-col gap-6 max-w-[580px]">
          <span className="inline-block w-fit bg-[#2a9d8f]/20 border border-[#2a9d8f]/40 text-[#5dd6c8] text-sm font-semibold px-4 py-1.5 rounded-full">
            {t('badge')}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            {t('title')}<br />
            <span className="text-[#3dbdb0]">{t('titleAccent')}</span>
          </h1>

          <p className="text-lg text-white/75 leading-relaxed max-w-lg">
            {t('sub')}
          </p>

          <div className="flex gap-4 flex-wrap mt-2">
            <a href="#services"
               className="px-7 py-3.5 bg-[#2a9d8f] hover:bg-[#3dbdb0] text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg">
              {t('cta1')}
            </a>
            <a href="#contact"
               className="px-7 py-3.5 border-2 border-white/50 hover:border-white hover:bg-white hover:text-[#1a3a5c] text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5">
              {t('cta2')}
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-4 flex-wrap">
            {[
              { num: 'PhD', label: t('stat1Label') },
              { num: 'MSc', label: t('stat2Label') },
              { num: 'R',   label: t('stat3Label') },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <div className="w-px h-10 bg-white/20" />}
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-[#3dbdb0]">{s.num}</span>
                  <span className="text-xs text-white/60">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="hidden lg:block flex-shrink-0">
          <div className="bg-white/7 border border-white/12 backdrop-blur-md rounded-2xl p-8 min-w-[280px]"
               style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(255,255,255,0.12)' }}>
            <div className="flex items-end gap-3 h-36 mb-6">
              {bars.map((h, i) => (
                <div key={i}
                     className="flex-1 rounded-t-md animate-bar flex items-start justify-center pt-2"
                     style={{
                       height: `${h}%`,
                       background: 'linear-gradient(to top, #2a9d8f, #3dbdb0)',
                       animationDelay: `${i * 0.1}s`,
                       opacity: 0.85
                     }}>
                  <span className="text-[0.6rem] text-white font-bold">{String.fromCharCode(65 + i)}</span>
                </div>
              ))}
            </div>
            <div className="h-px bg-white/15 mb-4" />
            <p className="text-xs text-white/60 text-center">{t('visCaption')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
