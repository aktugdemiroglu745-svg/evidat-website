import { useTranslations } from 'next-intl';

export default function Portfolio() {
  const t = useTranslations('portfolio');
  const items = t.raw('items') as Array<{ tag: string; title: string; desc: string; tech: string[] }>;

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#2a9d8f]/12 text-[#2a9d8f] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {t('tag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">{t('title')}</h2>
          <p className="text-slate-500 text-lg">{t('sub')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {items.map((item, i) => (
            <div key={i}
                 className="relative bg-[#f8f9fb] border border-slate-200 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                   style={{ background: 'linear-gradient(90deg, #1a3a5c, #2a9d8f)' }} />

              <span className="inline-block bg-[#2a9d8f]/10 text-[#2a9d8f] text-[0.7rem] font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-4">
                {item.tag}
              </span>
              <h3 className="text-base font-bold text-[#1a3a5c] mb-3 leading-snug">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tech.map(tech => (
                  <span key={tech} className="bg-[#1a3a5c]/8 text-[#1a3a5c] text-xs font-semibold px-2.5 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-500 bg-[#f8f9fb] border border-slate-200 rounded-xl py-3.5 px-6">
          {t('note')}
        </p>
      </div>
    </section>
  );
}
