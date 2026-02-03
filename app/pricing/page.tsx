import Link from 'next/link'
import Footer from '@/components/Footer'

export default function PricingPage() {
  const bundles = [
    {
      name: 'E-commerce Power Pack',
      price: '€129',
      priceValue: 129,
      regularPrice: '€127',
      templates: [
        'Template 001: Abandoned Cart Recovery (€49)',
        'Template 006: Order Confirmation + Shipping (€39)',
        'Template 010: Product Review Request (€39)',
      ],
      savings: '€0 economises',
      description: 'Pack complet e-commerce: recuperation paniers, emails transactionnels, collecte avis.',
      category: 'E-commerce'
    },
    {
      name: 'Service Business Essentials',
      price: '€99',
      priceValue: 99,
      regularPrice: '€117',
      templates: [
        'Template 002: SMS Appointment Reminder (€39)',
        'Template 007: Contact Form Notification (€29)',
        'Template 008: Appointment Booking Sync (€39)',
      ],
      savings: '€18 economises',
      description: 'Pack services: rappels RDV, notifications instant, sync booking. Zero no-shows.',
      category: 'Services'
    },
    {
      name: 'B2B Growth Stack',
      price: '€149',
      priceValue: 149,
      regularPrice: '€157',
      templates: [
        'Template 003: Lead Capture → CRM → Nurture (€59)',
        'Template 005: Invoice Payment Reminder (€49)',
        'Template 009: Customer Feedback Loop (€49)',
      ],
      savings: '€8 economises',
      description: 'Pack B2B: lead gen, cashflow, retention. Pipeline complet automatise.',
      category: 'B2B'
    },
  ]

  const faqs = [
    {
      q: 'J\'ai deja essaye des templates gratuits et ca n\'a jamais marche. Pourquoi ce serait different?',
      a: 'Les templates gratuits echouent 70% du temps car ils ne sont jamais testes en conditions reelles. Nos templates passent 50+ tests avant publication. Si ca plante, on vous rembourse. (C\'est jamais arrive en 18 mois.)'
    },
    {
      q: 'Combien de temps pour deployer un template?',
      a: '15 minutes en moyenne. Notre record: 8 minutes. Notre pire cas: 25 minutes. Jamais les 6-8h de debugging des templates gratuits.'
    },
    {
      q: 'Je ne suis pas technique. Ca va marcher pour moi?',
      a: 'Oui. 67% de nos utilisateurs n\'ont jamais code. Import JSON, connect API keys (guide video inclus), activate. C\'est tout.'
    },
    {
      q: 'Comment je sais si le template va etre rentable AVANT d\'acheter?',
      a: 'Chaque template affiche son ROI estime base sur nos donnees clients. Exemple: Panier Abandonne = 300-600% ROI. C\'est transparent.'
    },
    {
      q: 'Et si ca ne marche pas pour mon business?',
      a: 'Garantie 30 jours. Si aucun template ne vous fait gagner du temps, remboursement integral sans questions.'
    },
    {
      q: 'Les bundles sont-ils vraiment avantageux?',
      a: 'Oui si vous avez besoin de 2+ templates d\'une categorie. E-commerce Pack: €129 vs €127 (pas d\'economie mais pratique). Services Pack: €99 vs €117 (€18 economises). B2B Pack: €149 vs €157 (€8 economises).'
    },
  ]

  return (
    <>
      <main className="min-h-screen bg-factory-surface">
        {/* Hero */}
        <section className="py-24 bg-grid-pattern">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <Link href="/" className="inline-block mb-8 text-factory-text-muted hover:text-factory-orange transition-colors">
              ← Retour accueil
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Pricing <span className="text-factory-orange">Simple</span>
            </h1>
            <p className="text-xl text-factory-text-secondary max-w-3xl mx-auto mb-8">
              Achat unique. Pas d\'abonnement. Setup 15 min. ROI 7 jours. Garanti 30 jours.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-factory-green/10 border border-factory-green rounded-lg text-factory-green font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Garantie 30 jours ou rembourse integral
            </div>
          </div>
        </section>

        {/* Individual Templates */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-heading text-center mb-4">
              Templates Individuels
            </h2>
            <p className="text-center text-factory-text-secondary mb-12 max-w-2xl mx-auto">
              10 templates disponibles. Prix entre €29-59. Choisissez exactement ce dont vous avez besoin.
            </p>
            <div className="text-center">
              <Link
                href="/templates"
                className="btn-primary inline-block"
              >
                Voir Tous les Templates →
              </Link>
            </div>
          </div>
        </section>

        {/* Bundles */}
        <section className="py-16 bg-factory-surface">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-heading text-center mb-4">
              Bundles Pack
            </h2>
            <p className="text-center text-factory-text-secondary mb-12 max-w-2xl mx-auto">
              3 templates coordonnes par secteur. Automatisation complete de votre workflow.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {bundles.map((bundle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-factory-border hover:border-factory-orange transition-all p-8"
                >
                  <div className="tag-chip mb-4 inline-block">{bundle.category}</div>
                  <h3 className="text-2xl font-bold font-heading mb-2">{bundle.name}</h3>
                  <p className="text-factory-text-secondary mb-6">{bundle.description}</p>

                  <div className="mb-6">
                    <div className="text-4xl font-mono font-bold text-factory-orange mb-2">
                      {bundle.price}
                    </div>
                    <div className="text-sm text-factory-text-muted">
                      Prix individuel: <span className="line-through">{bundle.regularPrice}</span>
                    </div>
                    {bundle.savings !== '€0 economises' && (
                      <div className="text-sm font-semibold text-factory-green">
                        {bundle.savings}
                      </div>
                    )}
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold mb-3">Inclus:</div>
                    <ul className="space-y-2">
                      {bundle.templates.map((template, idx) => (
                        <li key={idx} className="text-sm text-factory-text-secondary flex items-start gap-2">
                          <span className="text-factory-green mt-1">✓</span>
                          <span>{template}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#buy"
                    className="block w-full py-3 text-center font-semibold text-white bg-factory-orange rounded-lg hover:bg-[#E55A2B] transition-colors"
                  >
                    Acheter le Pack
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">
              Comparaison Bundles vs Individuel
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-factory-stone">
                    <th className="p-4 text-left font-semibold border border-factory-border">Option</th>
                    <th className="p-4 text-center font-semibold border border-factory-border">Prix</th>
                    <th className="p-4 text-center font-semibold border border-factory-border">Templates</th>
                    <th className="p-4 text-center font-semibold border border-factory-border">Economie</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-factory-border">E-commerce Power Pack</td>
                    <td className="p-4 text-center font-mono font-bold border border-factory-border">€129</td>
                    <td className="p-4 text-center border border-factory-border">3</td>
                    <td className="p-4 text-center border border-factory-border">€0</td>
                  </tr>
                  <tr className="bg-factory-surface">
                    <td className="p-4 border border-factory-border">Services Essentials</td>
                    <td className="p-4 text-center font-mono font-bold border border-factory-border">€99</td>
                    <td className="p-4 text-center border border-factory-border">3</td>
                    <td className="p-4 text-center text-factory-green font-semibold border border-factory-border">€18</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-factory-border">B2B Growth Stack</td>
                    <td className="p-4 text-center font-mono font-bold border border-factory-border">€149</td>
                    <td className="p-4 text-center border border-factory-border">3</td>
                    <td className="p-4 text-center text-factory-green font-semibold border border-factory-border">€8</td>
                  </tr>
                  <tr className="bg-factory-surface">
                    <td className="p-4 border border-factory-border font-semibold">Templates Individuels</td>
                    <td className="p-4 text-center font-mono font-bold border border-factory-border">€29-59</td>
                    <td className="p-4 text-center border border-factory-border">1</td>
                    <td className="p-4 text-center border border-factory-border">-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-sm text-factory-text-muted mt-6">
              Choix recommande: Bundle si vous avez besoin de 2+ templates d\'une categorie. Individuel si besoin specifique.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-factory-surface">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">
              Questions Frequentes
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-factory-border">
                  <h3 className="text-lg font-heading font-semibold mb-3 text-factory-dark">
                    {faq.q}
                  </h3>
                  <p className="text-factory-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-factory-dark">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-heading text-white mb-6">
              Pret a Arreter de Debugger?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Chaque jour sans automatisation vous coute 2h de travail manuel. Premier template deploye en 15 min. Premier ROI mesure en 7 jours.
            </p>
            <Link
              href="/templates"
              className="btn-primary inline-block"
            >
              Voir les Templates →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
