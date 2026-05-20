'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

const SHINY_URL = 'https://akdemi.shinyapps.io/evidat-gesundheitsanalyse/';

export default function ShinyDemo() {
  const t = useTranslations('demo');
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="demo" className="py-24 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#1a3a5c]/10 text-[#1a3a5c] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {t('tag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">
            {t('title')}
          </h2>
          <p className="text-slate-500 text-lg">{t('sub')}</p>
        </div>

        {/* iframe card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

          {/* Card header bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2a9d8f]" />
              <span className="text-sm font-semibold text-[#1a3a5c]">{t('appTitle')}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 bg-slate-50 border border-slate-200 rounded-full px-3 py-0.5">
                {t('dataNote')}
              </span>
              <a
                href={SHINY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#2a9d8f] hover:underline font-medium"
              >
                {t('openFull')} ↗
              </a>
            </div>
          </div>

          {/* Loading indicator */}
          {!loaded && (
            <div className="flex flex-col items-center justify-center h-48 gap-3 text-slate-400">
              <div className="w-8 h-8 border-2 border-[#2a9d8f] border-t-transparent rounded-full animate-spin" />
              <span className="text-sm">{t('loading')}</span>
            </div>
          )}

          {/* iframe */}
          <iframe
            src={SHINY_URL}
            title="EviDat Interaktive Gesundheitsanalyse"
            width="100%"
            height="780"
            style={{ display: loaded ? 'block' : 'none', border: 'none' }}
            onLoad={() => setLoaded(true)}
            allow="fullscreen"
          />
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-slate-400 mt-4">
          {t('footerNote')}
        </p>

      </div>
    </section>
  );
}
