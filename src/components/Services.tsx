import { useTranslations } from 'next-intl';


export default function Services() {
  const t = useTranslations('services');
  const items = t.raw('items') as Array<{
    icon: string; title: string; desc: string; tags: string[]; featured?: boolean;
  }>;

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-[#2a9d8f]/12 text-[#2a9d8f] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {t('tag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">{t('title')}</h2>
          <p className="text-slate-500 text-lg">{t('sub')}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i}
                 className="relative rounded-2xl p-8 border bg-[#f8f9fb] border-slate-200 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-[#2a9d8f]/30">
              {item.featured && (
                <span className="absolute top-5 right-5 bg-[#2a9d8f] text-white text-[0.65rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                  {t('badge')}
                </span>
              )}
              <h3 className="text-lg font-bold mb-3 text-[#1a3a5c]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 text-slate-500">
                {item.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1a3a5c]/8 text-[#1a3a5c]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
