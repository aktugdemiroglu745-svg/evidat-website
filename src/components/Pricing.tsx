import { useTranslations } from 'next-intl';

export default function Pricing() {
  const t = useTranslations('pricing');
  const tiers = t.raw('tiers') as Array<{
    label: string;
    price: string;
    desc: string;
    features: string[];
    highlight?: boolean;
  }>;

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block bg-[#2a9d8f]/12 text-[#2a9d8f] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {t('tag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-4">{t('title')}</h2>
          <p className="text-slate-500 text-lg">{t('sub')}</p>
        </div>

        {/* Pro Bono Banner */}
        <div className="max-w-3xl mx-auto mb-12 bg-[#2a9d8f]/8 border border-[#2a9d8f]/25 rounded-2xl p-6 flex gap-4 items-start">
          <span className="text-2xl">🤝</span>
          <div>
            <strong className="block text-[#1a3a5c] font-bold mb-1">{t('proBonoTitle')}</strong>
            <p className="text-slate-600 text-sm leading-relaxed">{t('proBonoDesc')}</p>
          </div>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tiers.map((tier, i) => (
            <div key={i}
                 className={`relative rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-xl ${
                   tier.highlight
                     ? 'bg-[#1a3a5c] border-transparent'
                     : 'bg-[#f8f9fb] border-slate-200 hover:border-[#2a9d8f]/30'
                 }`}>
              {tier.highlight && (
                <span className="absolute top-5 right-5 bg-[#2a9d8f] text-white text-[0.65rem] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                  {t('popular')}
                </span>
              )}
              <p className={`text-xs font-bold uppercase tracking-widest mb-3 ${tier.highlight ? 'text-[#3dbdb0]' : 'text-[#2a9d8f]'}`}>
                {tier.label}
              </p>
              <p className={`text-3xl font-bold mb-1 ${tier.highlight ? 'text-white' : 'text-[#1a3a5c]'}`}>
                {tier.price}
              </p>
              <p className={`text-sm mb-6 ${tier.highlight ? 'text-white/70' : 'text-slate-500'}`}>
                {tier.desc}
              </p>
              <ul className="space-y-2.5">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className={`mt-0.5 text-sm font-bold ${tier.highlight ? 'text-[#3dbdb0]' : 'text-[#2a9d8f]'}`}>✓</span>
                    <span className={`text-sm ${tier.highlight ? 'text-white/85' : 'text-slate-600'}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-slate-500 bg-[#f8f9fb] border border-slate-200 rounded-xl py-3.5 px-6 max-w-2xl mx-auto">
          {t('note')}
        </p>
      </div>
    </section>
  );
}
