'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

// ✏️  HIER deine Formspree-ID eintragen (von formspree.io/new)
// Beispiel: "xbjnkpqr"  →  FORMSPREE_ID = "xbjnkpqr"
const FORMSPREE_ID = 'xpqnpzny';

export default function Contact() {
  const t = useTranslations('contact');
  const subjectOpts = t.raw('formSubjectOpts') as string[];
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message ?? 'Fehler beim Senden. Bitte versuche es erneut.');
      }
    } catch {
      setError('Verbindungsfehler. Bitte versuche es erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24"
             style={{ background: 'linear-gradient(135deg, #0f2540 0%, #1a3a5c 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Info */}
        <div>
          <span className="inline-block bg-[#2a9d8f]/20 text-[#5dd6c8] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            {t('tag')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">{t('title')}</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10">{t('sub')}</p>

          <div className="space-y-4 mb-8">
            {[
              { icon: '📧', content: <a href="mailto:kontakt@evidat.ch" className="text-[#3dbdb0] hover:underline">kontakt@evidat.ch</a> },
              { icon: '🇨🇭', content: <span className="text-white/80">{t('location')}</span> },
              { icon: '💬', content: <span className="text-white/80">{t('langs')}</span> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                {item.content}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2.5 text-sm text-white/40 pt-6 border-t border-white/10">
            <span>⏱️</span>
            <span>{t('response')}</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-10 space-y-5">
          {[
            { id: 'name',  label: t('formName'),  type: 'text',  ph: t('formNamePh'),  required: true },
            { id: 'org',   label: t('formOrg'),   type: 'text',  ph: t('formOrgPh'),   required: false },
            { id: 'email', label: t('formEmail'), type: 'email', ph: t('formEmailPh'), required: true },
          ].map(f => (
            <div key={f.id}>
              <label className="block text-[0.72rem] font-bold uppercase tracking-wide text-slate-500 mb-1.5">
                {f.label}
              </label>
              <input id={f.id} name={f.id} type={f.type} required={f.required} placeholder={f.ph}
                     className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#f8f9fb] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2a9d8f] focus:ring-2 focus:ring-[#2a9d8f]/15 focus:bg-white transition" />
            </div>
          ))}

          <div>
            <label className="block text-[0.72rem] font-bold uppercase tracking-wide text-slate-500 mb-1.5">
              {t('formSubject')}
            </label>
            <select name="subject" className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#f8f9fb] text-slate-800 focus:outline-none focus:border-[#2a9d8f] focus:ring-2 focus:ring-[#2a9d8f]/15 focus:bg-white transition">
              {subjectOpts.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-[0.72rem] font-bold uppercase tracking-wide text-slate-500 mb-1.5">
              {t('formMessage')}
            </label>
            <textarea name="message" required rows={5} placeholder={t('formMessagePh')}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm bg-[#f8f9fb] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2a9d8f] focus:ring-2 focus:ring-[#2a9d8f]/15 focus:bg-white transition resize-y min-h-[120px]" />
          </div>

          {error && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl py-3 px-4">
              ⚠️ {error}
            </div>
          )}

          {!submitted ? (
            <button type="submit" disabled={loading}
                    className="w-full py-3.5 bg-[#1a3a5c] hover:bg-[#2d5986] disabled:opacity-60 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg text-sm">
              {loading ? '⏳ Wird gesendet...' : t('formSubmit')}
            </button>
          ) : (
            <div className="text-center text-sm font-semibold text-[#2a9d8f] bg-[#2a9d8f]/10 rounded-xl py-3.5 px-4">
              ✅ {t('formSuccess')}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
