import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');
  const skills = t.raw('skills') as string[];

  const credentials = [
    { title: t('cred1Title'), sub: t('cred1Sub') },
    { title: t('cred2Title'), sub: t('cred2Sub') },
    { title: t('cred3Title'), sub: t('cred3Sub') },
  ];

  return (
    <section id="about" className="py-24 bg-[#f8f9fb]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Visual side */}
        <div className="flex flex-col gap-6">
          {/* Avatar */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative flex items-center justify-center w-52 h-52">
              <div className="w-36 h-36 rounded-full flex items-center justify-center text-4xl font-bold text-white z-10"
                   style={{ background: 'linear-gradient(135deg, #1a3a5c, #2a9d8f)' }}>
                AD
              </div>
              <div className="absolute w-48 h-48 rounded-full border-2 border-dashed border-[#2a9d8f]/30 animate-rotate" />
            </div>
          </div>

          {/* Credentials */}
          <div className="flex flex-col gap-4">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-4">
                <div>
                  <strong className="block text-sm font-bold text-[#1a3a5c]">{c.title}</strong>
                  <span className="text-xs text-slate-500">{c.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text side */}
        <div>
          <span className="inline-block bg-[#2a9d8f]/12 text-[#2a9d8f] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            {t('tag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-6">{t('title')}</h2>

          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2.5 my-7">
            {skills.map(skill => (
              <span key={skill}
                    className="bg-white border border-slate-200 hover:border-[#2a9d8f] text-[#1a3a5c] text-sm font-semibold px-4 py-1.5 rounded-full transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>

          <a href="#contact"
             className="inline-block px-7 py-3.5 bg-[#1a3a5c] hover:bg-[#2d5986] text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg">
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
