import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getLocale } from 'next-intl/server';

const content = {
  de: {
    title: 'Impressum & Datenschutz',
    impTitle: 'Impressum',
    impItems: [
      { label: 'Name',       value: 'Aktug Demiroglu' },
      { label: 'Tätigkeit',  value: 'Freiberuflicher Datenanalytiker & Berater' },
      { label: 'Adresse',    value: 'Rosengartenstrasse 6, 8037 Zürich' },
      { label: 'E-Mail',     value: 'kontakt@evidat.ch' },
      { label: 'Sprachen',   value: 'Deutsch · Englisch · Französisch' },
    ],
    impNote: 'Diese Website wird als freiberufliche Einzelperson betrieben. Es besteht keine Mehrwertsteuerpflicht.',

    dsTitle: 'Datenschutzerklärung',
    dsUpdated: 'Stand: Mai 2026',
    dsSections: [
      {
        heading: '1. Verantwortliche Person',
        text: 'Verantwortlich für die Datenbearbeitung auf dieser Website ist Aktug Demiroglu (Kontakt: siehe Impressum oben). Diese Datenschutzerklärung richtet sich nach dem revidierten Schweizer Bundesgesetz über den Datenschutz (DSG), in Kraft seit 1. September 2023.',
      },
      {
        heading: '2. Erhobene Daten & Zweck',
        text: 'Über das Kontaktformular werden folgende Angaben erhoben: Name, E-Mail-Adresse, Organisation (freiwillig), Betreff und Ihre Nachricht. Diese Daten werden ausschliesslich zur Beantwortung Ihrer Anfrage verwendet und nicht zu Marketingzwecken genutzt.',
      },
      {
        heading: '3. Drittanbieter: Formspree',
        text: 'Das Kontaktformular wird über den Dienst Formspree (Formspree, Inc., USA) betrieben. Ihre Formulardaten werden an Server von Formspree übermittelt und dort verarbeitet. Formspree ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen finden Sie in der Datenschutzrichtlinie von Formspree unter formspree.io/legal/privacy-policy.',
      },
      {
        heading: '4. Speicherdauer',
        text: 'Ihre Daten werden nur so lange aufbewahrt, wie es zur Bearbeitung Ihrer Anfrage notwendig ist. Danach werden sie gelöscht.',
      },
      {
        heading: '5. Keine Cookies / kein Tracking',
        text: 'Diese Website verwendet keine Cookies, kein Web-Tracking und keine Analysetools (z. B. Google Analytics). Es werden keine Nutzerprofile erstellt.',
      },
      {
        heading: '6. Ihre Rechte',
        text: 'Sie haben das Recht auf Auskunft über Ihre gespeicherten Daten, auf Berichtigung, Löschung sowie auf Einschränkung der Bearbeitung. Richten Sie entsprechende Anfragen per E-Mail an die oben angegebene Adresse.',
      },
      {
        heading: '7. Änderungen',
        text: 'Diese Datenschutzerklärung kann jederzeit angepasst werden. Es gilt jeweils die auf dieser Seite publizierte aktuelle Version.',
      },
    ],
  },

  en: {
    title: 'Legal Notice & Privacy Policy',
    impTitle: 'Legal Notice',
    impItems: [
      { label: 'Name',       value: 'Aktug Demiroglu' },
      { label: 'Occupation', value: 'Freelance Data Analyst & Consultant' },
      { label: 'Address',    value: 'Rosengartenstrasse 6, 8037 Zurich' },
      { label: 'Email',      value: 'kontakt@evidat.ch' },
      { label: 'Languages',  value: 'German · English · French' },
    ],
    impNote: 'This website is operated by a sole freelancer. VAT registration is not required.',

    dsTitle: 'Privacy Policy',
    dsUpdated: 'Last updated: May 2026',
    dsSections: [
      {
        heading: '1. Data Controller',
        text: 'The data controller for this website is Aktug Demiroglu (contact: see legal notice above). This privacy policy is based on the revised Swiss Federal Act on Data Protection (FADP), in force since 1 September 2023.',
      },
      {
        heading: '2. Data Collected & Purpose',
        text: 'The contact form collects the following information: name, email address, organisation (optional), subject and your message. This data is used solely to respond to your enquiry and is not used for marketing purposes.',
      },
      {
        heading: '3. Third-Party Provider: Formspree',
        text: 'The contact form is operated via Formspree (Formspree, Inc., USA). Your form data is transmitted to and processed on Formspree servers. Formspree is certified under the EU-US Data Privacy Framework. For more information, please refer to Formspree\'s privacy policy at formspree.io/legal/privacy-policy.',
      },
      {
        heading: '4. Retention Period',
        text: 'Your data is retained only as long as necessary to process your enquiry, after which it is deleted.',
      },
      {
        heading: '5. No Cookies / No Tracking',
        text: 'This website does not use cookies, web tracking or analytics tools (e.g. Google Analytics). No user profiles are created.',
      },
      {
        heading: '6. Your Rights',
        text: 'You have the right to access, correct, delete or restrict the processing of your personal data. Please direct any such requests by email to the address listed above.',
      },
      {
        heading: '7. Changes',
        text: 'This privacy policy may be updated at any time. The current version published on this page shall apply.',
      },
    ],
  },

  fr: {
    title: 'Mentions légales & Politique de confidentialité',
    impTitle: 'Mentions légales',
    impItems: [
      { label: 'Nom',        value: 'Aktug Demiroglu' },
      { label: 'Activité',   value: 'Analyste de données & Consultant indépendant' },
      { label: 'Adresse',    value: 'Rosengartenstrasse 6, 8037 Zurich' },
      { label: 'E-mail',     value: 'kontakt@evidat.ch' },
      { label: 'Langues',    value: 'Allemand · Anglais · Français' },
    ],
    impNote: 'Ce site est exploité par un indépendant. Aucun assujettissement à la TVA.',

    dsTitle: 'Politique de confidentialité',
    dsUpdated: 'Dernière mise à jour: mai 2026',
    dsSections: [
      {
        heading: '1. Responsable du traitement',
        text: 'Le responsable du traitement des données sur ce site est Aktug Demiroglu (contact: voir mentions légales ci-dessus). La présente politique est établie conformément à la loi fédérale suisse sur la protection des données (LPD révisée), en vigueur depuis le 1er septembre 2023.',
      },
      {
        heading: '2. Données collectées & finalité',
        text: 'Le formulaire de contact collecte les informations suivantes: nom, adresse e-mail, organisation (facultatif), sujet et message. Ces données sont utilisées uniquement pour répondre à votre demande et ne sont pas utilisées à des fins marketing.',
      },
      {
        heading: '3. Prestataire tiers: Formspree',
        text: 'Le formulaire de contact est géré via Formspree (Formspree, Inc., États-Unis). Vos données sont transmises et traitées sur les serveurs de Formspree, certifié dans le cadre du Data Privacy Framework UE-États-Unis. Pour plus d\'informations, consultez la politique de confidentialité de Formspree sur formspree.io/legal/privacy-policy.',
      },
      {
        heading: '4. Durée de conservation',
        text: 'Vos données sont conservées uniquement le temps nécessaire au traitement de votre demande, puis supprimées.',
      },
      {
        heading: '5. Aucun cookie / aucun suivi',
        text: 'Ce site n\'utilise pas de cookies, de suivi web ni d\'outils d\'analyse (ex. Google Analytics). Aucun profil utilisateur n\'est créé.',
      },
      {
        heading: '6. Vos droits',
        text: 'Vous disposez d\'un droit d\'accès, de rectification, de suppression et de limitation du traitement de vos données. Adressez vos demandes par e-mail à l\'adresse indiquée ci-dessus.',
      },
      {
        heading: '7. Modifications',
        text: 'Cette politique de confidentialité peut être modifiée à tout moment. La version publiée sur cette page fait foi.',
      },
    ],
  },
};

export default async function ImpressumPage() {
  const locale = await getLocale();
  const c = content[locale as keyof typeof content] ?? content.de;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8f9fb] pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">

          <h1 className="text-3xl md:text-4xl font-bold text-[#1a3a5c] mb-12">
            {c.title}
          </h1>

          {/* Impressum */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8 mb-8">
            <h2 className="text-xl font-bold text-[#1a3a5c] mb-6">{c.impTitle}</h2>
            <dl className="space-y-3">
              {c.impItems.map((item) => (
                <div key={item.label} className="grid grid-cols-[140px_1fr] gap-2">
                  <dt className="text-sm font-semibold text-slate-500">{item.label}</dt>
                  <dd className={`text-sm text-slate-800 ${item.value.startsWith('[') ? 'text-amber-600 font-medium' : ''}`}>
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-slate-400 border-t border-slate-100 pt-4">
              {c.impNote}
            </p>
          </section>

          {/* Datenschutz */}
          <section className="bg-white rounded-2xl border border-slate-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-[#1a3a5c]">{c.dsTitle}</h2>
              <span className="text-xs text-slate-400">{c.dsUpdated}</span>
            </div>
            <div className="space-y-6">
              {c.dsSections.map((s) => (
                <div key={s.heading}>
                  <h3 className="text-sm font-bold text-[#1a3a5c] mb-1.5">{s.heading}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
