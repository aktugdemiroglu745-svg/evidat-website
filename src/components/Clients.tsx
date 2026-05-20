import { useTranslations } from 'next-intl';

export default function Clients() {
  const t = useTranslations('clients');
  const items = t.raw('items') as string[];

  return (
    <section className="py-16 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-7">
          {t('label')}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {items.map(item => (
            <span key={item}
                  className="bg-white border border-slate-200 hover:border-[#1a3a5c] text-slate-700 text-sm font-medium px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 cursor-default">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
