export interface Template {
  id: string
  name: string
  slug: string
  category: 'E-commerce' | 'Services' | 'B2B' | 'Local Business' | 'Universal' | 'Retention'
  description: string
  fullDescription: string
  price: string
  priceValue: number
  roi: string
  time: string
  platforms: string[]
  popular: boolean
  integrations: string[]
  features: string[]
  roiBreakdown: {
    metric: string
    value: string
  }[]
}

export const templates: Template[] = [
  {
    id: '001',
    name: 'Abandoned Cart Recovery',
    slug: 'abandoned-cart-recovery',
    category: 'E-commerce',
    description: 'Recuperez 15-25% des paniers abandonnes avec 3 emails automatiques. Un client a genere 847EUR en 7 jours.',
    fullDescription: 'Workflow complet de recuperation de paniers abandonnes pour Shopify. Sequence automatique de 3 emails (1h, 24h, 72h) avec personnalisation dynamique. Integration directe avec SendGrid ou SMTP. Teste avec 500+ boutiques e-commerce.',
    price: '€49',
    priceValue: 49,
    roi: '600%',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    popular: true,
    integrations: ['Shopify', 'SendGrid', 'Resend', 'SMTP', 'Twilio (optional)'],
    features: [
      'Webhook Shopify (checkout abandoned)',
      'Sequence 3 emails (1h, 24h, 72h)',
      'Personnalisation dynamique (produits, prix, client)',
      'SMS optionnel pour paniers >200EUR',
      'Stop automatique si commande completee',
      'Dashboard ROI integre'
    ],
    roiBreakdown: [
      { metric: 'Taux recuperation', value: '15-25% paniers abandonnes' },
      { metric: 'Valeur moyenne panier', value: '80-150EUR' },
      { metric: 'ROI moyen', value: '600% (6x investissement)' },
      { metric: 'Temps setup', value: '15 minutes' }
    ]
  },
  {
    id: '002',
    name: 'SMS Appointment Reminder',
    slug: 'sms-appointment-reminder',
    category: 'Services',
    description: 'Reduisez les no-shows de 40%. Rappels 24h avant rendez-vous via SMS. Economisez 1,200EUR/mois.',
    fullDescription: 'Rappels SMS automatiques 24h avant rendez-vous. Integration Google Calendar, Calendly, Cal.com. Reduction prouvee de 40% des no-shows. Parfait pour salons, cliniques, consultants, avocats.',
    price: '€39',
    priceValue: 39,
    roi: '300%',
    time: '20 min',
    platforms: ['n8n', 'Make.com'],
    popular: true,
    integrations: ['Google Calendar', 'Calendly', 'Cal.com', 'Twilio', 'Vonage', 'ClickSend'],
    features: [
      'Trigger quotidien (check rendez-vous J+1)',
      'SMS personnalise (nom, heure, lieu)',
      'Integration CRM optionnelle',
      'Gestion timezone automatique',
      'Retry logic si echec envoi',
      'Logs complets'
    ],
    roiBreakdown: [
      { metric: 'Reduction no-shows', value: '40% (20% → 8%)' },
      { metric: 'Valeur moyenne RDV', value: '50-200EUR' },
      { metric: 'ROI moyen', value: '300%' },
      { metric: 'Temps economise', value: '2h/semaine gestion rappels' }
    ]
  },
  {
    id: '003',
    name: 'Lead Capture → CRM → Nurture',
    slug: 'lead-capture-crm-nurture',
    category: 'B2B',
    description: 'Convertissez 30% de leads (vs 12% sans nurture). Sequence 7 jours automatique. Typeform + HubSpot.',
    fullDescription: 'Pipeline complet lead gen B2B. Capture via formulaire, enrichissement donnees, ajout CRM, sequence nurture 7 jours (4 emails). Conversion 2.5x vs sans nurture. Parfait SaaS, agences, consultants.',
    price: '€59',
    priceValue: 59,
    roi: '451%',
    time: '25 min',
    platforms: ['n8n', 'Make.com'],
    popular: true,
    integrations: ['Typeform', 'Google Forms', 'HubSpot', 'Pipedrive', 'Salesforce', 'SendGrid', 'Clearbit (optional)'],
    features: [
      'Webhook form submission',
      'Enrichissement donnees (Clearbit)',
      'Creation/update contact CRM',
      'Sequence nurture 4 emails (J0, J1, J3, J7)',
      'Scoring lead automatique',
      'Notification equipe si hot lead'
    ],
    roiBreakdown: [
      { metric: 'Conversion lead → client', value: '30% (vs 12% sans nurture)' },
      { metric: 'Valeur client moyenne', value: '2,000-10,000EUR' },
      { metric: 'ROI moyen', value: '451%' },
      { metric: 'Engagement', value: '+300%' }
    ]
  },
  {
    id: '004',
    name: 'Google Reviews Request',
    slug: 'google-reviews-request',
    category: 'Local Business',
    description: 'Augmentez vos avis de 400%. Demande automatique 3 jours apres achat. Ameliorez SEO local.',
    fullDescription: 'Workflow demande avis Google automatise. Email 3 jours apres achat/service, relance SMS si pas de reponse. 4.2+ etoiles = +30% conversion. Parfait pour commerces locaux, restaurants, salons.',
    price: '€39',
    priceValue: 39,
    roi: '250%',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
    integrations: ['Shopify', 'WooCommerce', 'Calendly', 'SendGrid', 'Twilio', 'Google My Business API'],
    features: [
      'Trigger achat/service complete',
      'Wait 3 jours (periode utilisation)',
      'Email demande avis personnalise',
      'Relance SMS J+7 si pas d\'avis',
      'Tracking statut demande',
      'Alert equipe si avis negatif'
    ],
    roiBreakdown: [
      { metric: 'Augmentation volume avis', value: '400% (1/mois → 5/mois)' },
      { metric: 'Impact conversion', value: '+30% avec 4.2+ etoiles' },
      { metric: 'ROI SEO local', value: '+3 positions moyenne' },
      { metric: 'ROI moyen', value: '250%' }
    ]
  },
  {
    id: '005',
    name: 'Invoice Payment Reminder',
    slug: 'invoice-payment-reminder',
    category: 'B2B',
    description: 'Reduisez les retards de paiement de 30%. Relances automatiques 3, 7, 14 jours. Stripe + QuickBooks.',
    fullDescription: 'Gestion relances paiement automatisees. Sequence escalade (J+3, J+7, J+14, J+30+). Integration comptabilite. Reduction DSO de 45j → 32j. Alert equipe si 30+ jours.',
    price: '€49',
    priceValue: 49,
    roi: '30% DSO reduction',
    time: '20 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
    integrations: ['Stripe', 'QuickBooks', 'Xero', 'Invoice2go', 'Gmail', 'SendGrid', 'Twilio (optional)'],
    features: [
      'Check quotidien factures overdue',
      'Emails relance escalade (ton progressif)',
      'SMS pour factures >5,000EUR',
      'Tag CRM "reminder sent"',
      'Alert equipe 30+ jours',
      'Dashboard cashflow'
    ],
    roiBreakdown: [
      { metric: 'Reduction retards', value: '30% (45j → 32j DSO)' },
      { metric: 'Cashflow ameliore', value: '10,000-50,000EUR' },
      { metric: 'Temps economise', value: '80% suivi manuel' },
      { metric: 'ROI', value: 'Critique cashflow' }
    ]
  },
  {
    id: '006',
    name: 'Order Confirmation + Shipping',
    slug: 'order-confirmation-shipping',
    category: 'E-commerce',
    description: 'Emails de confirmation + tracking automatiques. Reduisez tickets support de 60%. Shopify compatible.',
    fullDescription: 'Suite emails transactionnels e-commerce. Confirmation commande, expedition, livraison. Tracking link automatique. Opportunite upsell. Reduction tickets "Ou est ma commande?".',
    price: '€39',
    priceValue: 39,
    roi: 'Essential',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
    integrations: ['Shopify', 'WooCommerce', 'BigCommerce', 'SendGrid', 'Klaviyo', 'ShipStation', 'Aftership'],
    features: [
      'Email confirmation commande immediate',
      'Email tracking expedition automatique',
      'Email livraison complete',
      'Recommandations produits upsell',
      'Branding personnalise',
      'Mobile-responsive'
    ],
    roiBreakdown: [
      { metric: 'Essential', value: '100% e-commerce ont besoin' },
      { metric: 'Reduction tickets support', value: '-60%' },
      { metric: 'CSAT', value: '+15%' },
      { metric: 'Opportunite upsell', value: 'Recommendations incluses' }
    ]
  },
  {
    id: '007',
    name: 'Contact Form Notification',
    slug: 'contact-form-notification',
    category: 'Universal',
    description: 'Notifications instantanees via Email/Slack/SMS. Repondez en 5 min au lieu de 4h. 25% plus de conversions.',
    fullDescription: 'Notifications multi-canal formulaire contact. Email + Slack + SMS (si urgent). Reponse rapide = conversion haute. CRM optionnel. Universel tous secteurs.',
    price: '€29',
    priceValue: 29,
    roi: '80% faster',
    time: '10 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
    integrations: ['Typeform', 'Google Forms', 'Website Webhook', 'Email', 'Slack', 'Twilio', 'HubSpot (optional)'],
    features: [
      'Webhook form submission',
      'Parse donnees form',
      'Email equipe immediate',
      'Post Slack #leads',
      'SMS si checkbox urgent',
      'Creation contact CRM optionnelle'
    ],
    roiBreakdown: [
      { metric: 'Temps reponse', value: '5 min (vs 4h avant)' },
      { metric: 'Impact conversion', value: '+25% reponse rapide' },
      { metric: 'ROI', value: '80% plus rapide' },
      { metric: 'Setup', value: '10 minutes' }
    ]
  },
  {
    id: '008',
    name: 'Appointment Booking Sync',
    slug: 'appointment-booking-sync',
    category: 'Services',
    description: 'Calendly → Google Calendar automatique. Confirmation emails. Zero double-bookings. 30 min/jour economisees.',
    fullDescription: 'Synchronisation booking automatique. Calendly/Cal.com → Google Calendar. Emails confirmation client + equipe. Prevention double-bookings. Log CRM optionnel.',
    price: '€39',
    priceValue: 39,
    roi: 'Time-saver',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
    integrations: ['Calendly', 'Cal.com', 'Acuity', 'Google Calendar', 'Outlook', 'Gmail', 'SendGrid', 'HubSpot (optional)'],
    features: [
      'Webhook booking Calendly',
      'Creation event Google Calendar',
      'Email confirmation client',
      'Reminder equipe',
      'Log activite CRM',
      'Prevention conflits'
    ],
    roiBreakdown: [
      { metric: 'Temps economise', value: '30 min/jour gestion manuelle' },
      { metric: 'Zero double-bookings', value: 'Prevention conflits' },
      { metric: 'Experience client', value: 'Professionnelle automatisee' },
      { metric: 'ROI', value: 'Base automation' }
    ]
  },
  {
    id: '009',
    name: 'Customer Feedback Loop',
    slug: 'customer-feedback-loop',
    category: 'Retention',
    description: 'Enquetes NPS automatiques 7 jours apres achat. Detectez les clients mecontents avant churn. +10% retention.',
    fullDescription: 'Boucle feedback automatisee. NPS/CSAT 7 jours post-achat. Routing detractors → support. Promoters → demande review/referral. Prevention churn proactive.',
    price: '€49',
    priceValue: 49,
    roi: '10% retention',
    time: '20 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
    integrations: ['Shopify', 'SaaS webhooks', 'Typeform', 'Google Forms', 'SurveyMonkey', 'SendGrid', 'Slack'],
    features: [
      'Trigger achat/milestone',
      'Wait 7 jours',
      'Email survey NPS (1-10)',
      'Routing score: 9-10 → review request',
      '7-8 → thank you + nurture',
      '0-6 → alert support immediate'
    ],
    roiBreakdown: [
      { metric: 'Retention', value: '+10% repeat purchase' },
      { metric: 'Detection churn', value: 'Proactive avant depart' },
      { metric: 'Insights produit', value: 'Feedback actionable' },
      { metric: 'ROI', value: '10% retention improvement' }
    ]
  },
  {
    id: '010',
    name: 'Product Review Request',
    slug: 'product-review-request',
    category: 'E-commerce',
    description: 'Collectez 300% plus d\'avis produits. Demande 14 jours apres livraison. 20% augmentation conversions.',
    fullDescription: 'Workflow demande avis produits automatise. 14 jours post-livraison (periode usage). Incentive optionnel (10% discount). Auto-publish 5 etoiles. Alert support <3 etoiles.',
    price: '€39',
    priceValue: 39,
    roi: '20% conversion',
    time: '15 min',
    platforms: ['n8n', 'Make.com'],
    popular: false,
    integrations: ['Shopify', 'WooCommerce', 'SendGrid', 'Klaviyo', 'Yotpo', 'Judge.me', 'Loox'],
    features: [
      'Trigger commande delivered',
      'Wait 14 jours (periode usage)',
      'Email demande review personnalise',
      'Incentive optionnel (discount code)',
      'Auto-publish 5 etoiles',
      'Alert support <3 etoiles'
    ],
    roiBreakdown: [
      { metric: 'Conversion lift', value: '+20% (produits 5+ reviews vs 0)' },
      { metric: 'Volume reviews', value: '+300%' },
      { metric: 'Social proof', value: 'Essential trust' },
      { metric: 'ROI', value: '20% conversion increase' }
    ]
  },
]

export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find(t => t.slug === slug)
}

export function getTemplatesByCategory(category: string): Template[] {
  if (category === 'all') return templates
  return templates.filter(t => t.category.toLowerCase() === category.toLowerCase())
}
