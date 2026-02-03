export interface Review {
  id: string
  author: string
  rating: 4 | 5
  date: string // ISO format
  template_id: string // "001", "002", etc.
  business_type: string
  content: string
  verified: boolean
  helpful_count: number
}

export const reviews: Review[] = [
  // ========================================
  // E-COMMERCE (3 reviews)
  // ========================================

  // E-commerce #1 - Abandoned Cart Recovery
  {
    id: "rev_001",
    author: "Marie Dupont",
    rating: 5,
    date: "2026-01-18",
    template_id: "001",
    business_type: "Boutique e-commerce mode femme",
    content: "J'ai une boutique Shopify depuis 3 ans et je perdais environ 2 400 EUR par mois en paniers abandonnes (taux de 68%). J'avais teste Klaviyo mais 150 EUR/mois pour mes 8 000 contacts, c'etait trop. Ce template n8n m'a coute 39 EUR une fois. Installation sur mon VPS en 25 minutes, la doc etait claire. Premier mois: 847 EUR recuperes, soit 35% des paniers abandonnes convertis. Le seul point negatif: les emails sont en texte simple, j'aurais aime plus d'options de design. Mais pour le prix, c'est imbattable. ROI de 2 000% des le premier mois.",
    verified: true,
    helpful_count: 23
  },

  // E-commerce #2 - Product Review Request
  {
    id: "rev_002",
    author: "Thomas Lefebvre",
    rating: 5,
    date: "2026-01-08",
    template_id: "003",
    business_type: "E-commerce accessoires tech",
    content: "Avant ce template, j'envoyais manuellement des demandes d'avis, ca me prenait 2h par semaine. Resultat: 12 avis par mois. J'ai installe le workflow en 15 minutes (j'avais deja n8n). Maintenant c'est automatique: 7 jours apres livraison, email + SMS de relance a J+14 si pas de reponse. En 6 semaines: 89 nouveaux avis Google, note passee de 4.1 a 4.6. Mon taux de conversion a augmente de 8% grace a la preuve sociale. Seul bemol: le template ne gere pas les avis negatifs (pas de routing vers le SAV). J'ai du ajouter un node moi-meme. Mais globalement excellent.",
    verified: true,
    helpful_count: 19
  },

  // E-commerce #3 - Order Confirmation
  {
    id: "rev_003",
    author: "Camille Rousseau",
    rating: 4,
    date: "2025-12-22",
    template_id: "002",
    business_type: "Epicerie fine en ligne",
    content: "Template solide pour les confirmations de commande multi-canal (email + SMS + WhatsApp). J'apprecie particulierement le tracking automatique qui update le client a chaque etape. Installation correcte mais j'ai eu un souci avec le webhook WooCommerce, il a fallu que je contacte le support (reponse en 4h, correct). Resultats: mes appels SAV 'ou est ma commande?' ont baisse de 60%, ca me libere 5h par semaine. Le template manque d'integration avec Mondial Relay, j'utilise Colissimo du coup. Prix justifie pour le gain de temps.",
    verified: true,
    helpful_count: 11
  },

  // ========================================
  // SERVICES (3 reviews)
  // ========================================

  // Services #1 - SMS Appointment Reminder
  {
    id: "rev_004",
    author: "Dr. Sophie Martin",
    rating: 5,
    date: "2026-01-25",
    template_id: "004",
    business_type: "Cabinet dentaire",
    content: "Les no-shows me coutaient 180 EUR par creneau perdu, soit environ 1 400 EUR par mois. J'avais essaye Doctolib Pro mais 89 EUR/mois + 0.15 EUR par SMS. Ce template n8n avec OVH SMS (0.035 EUR/SMS) m'a fait economiser 70% sur les couts. Setup en 30 minutes avec l'aide de la video tuto. J+2 et J-1 rappels automatiques. Resultat apres 2 mois: no-shows passes de 12% a 3%. ROI: j'economise 1 100 EUR/mois de creneaux perdus. Le template pourrait proposer plus d'options de personnalisation des messages, mais l'essentiel est la.",
    verified: true,
    helpful_count: 21
  },

  // Services #2 - Appointment Booking Sync
  {
    id: "rev_005",
    author: "Jean-Pierre Moreau",
    rating: 4,
    date: "2025-12-15",
    template_id: "005",
    business_type: "Salon de coiffure",
    content: "J'utilisais Calendly + Google Calendar + un cahier papier (oui, je sais...). Les doubles reservations arrivaient 2-3 fois par semaine, c'etait la galere. Ce template synchronise tout: Calendly, Google Cal, et meme Planity. Installation plus longue que prevu (45 min au lieu de 20), la connexion OAuth Google m'a pose probleme. Mais depuis, zero conflit de planning en 6 semaines. Je gagne 3h par semaine en admin. Le prix de 29 EUR est honnete. J'enleve une etoile car la doc sur les credentials Google est incomplete.",
    verified: true,
    helpful_count: 14
  },

  // Services #3 - Google Reviews Request
  {
    id: "rev_006",
    author: "Aurelie Blanc",
    rating: 5,
    date: "2026-01-12",
    template_id: "006",
    business_type: "Institut de beaute",
    content: "Mes concurrentes avaient 200+ avis Google, moi j'etais bloquee a 47 depuis 2 ans. Je n'osais pas demander aux clientes. Ce template envoie un SMS personnalise 2h apres le RDV avec le lien direct vers Google Reviews. Discret, efficace. En 2 mois: 67 nouveaux avis (85% 5 etoiles). Ma fiche Google est passee de la 5e a la 2e position sur 'institut beaute + ma ville'. J'ai calcule: +4 nouvelles clientes par semaine grace au SEO local, soit environ 800 EUR de CA additionnel mensuel. Pour 39 EUR, c'est le meilleur investissement de l'annee.",
    verified: true,
    helpful_count: 25
  },

  // ========================================
  // B2B / SaaS (3 reviews)
  // ========================================

  // B2B #1 - Lead Capture to CRM to Nurture
  {
    id: "rev_007",
    author: "Maxime Girard",
    rating: 5,
    date: "2026-01-05",
    template_id: "007",
    business_type: "Agence marketing B2B",
    content: "On utilisait Zapier pour connecter Typeform a HubSpot, 49 USD/mois pour 2000 taches. Ce template n8n fait pareil pour 0 EUR de SaaS (juste le VPS a 5 EUR). Le workflow capture le lead, l'enrichit via Clearbit, le pousse dans HubSpot avec scoring, et declenche une sequence de 5 emails. Setup en 1h30 car j'ai personnalise les conditions de scoring. Resultats sur 3 mois: taux de conversion lead-to-meeting passe de 4% a 11%. On a signe 3 clients de plus ce trimestre. Petit bemol: pas de connecteur natif pour Pipedrive, j'ai du adapter.",
    verified: true,
    helpful_count: 17
  },

  // B2B #2 - Invoice Payment Reminder
  {
    id: "rev_008",
    author: "Nicolas Bernard",
    rating: 4,
    date: "2025-12-28",
    template_id: "008",
    business_type: "Consultant independant IT",
    content: "En freelance, les relances de factures c'est penible et ca prend du temps. J'avais 15 000 EUR d'impayes chroniques. Ce template envoie des rappels a J+7, J+15, J+30 avec ton progressif (cordial puis ferme puis mise en demeure). Integration Pennylane pour detecter les factures non payees. Resultat: mes delais de paiement sont passes de 45 jours en moyenne a 23 jours. J'ai recupere 8 000 EUR d'impayes le premier mois. Le template est bien mais attention, il faut adapter les textes au contexte francais (mentions legales). J'aurais aime des modeles de mails pre-rediges plus complets.",
    verified: false,
    helpful_count: 12
  },

  // B2B #3 - Customer Feedback Loop
  {
    id: "rev_009",
    author: "Charlotte Petit",
    rating: 5,
    date: "2026-01-20",
    template_id: "009",
    business_type: "SaaS gestion de projet",
    content: "On avait besoin d'un systeme NPS automatise sans payer Delighted (300 USD/mois). Ce template envoie un sondage NPS a J+30, J+90, J+180 apres inscription. Les detracteurs (score < 7) declenchent une alerte Slack + creation ticket Zendesk. Les promoteurs (9-10) recoivent une demande d'avis G2. Setup en 40 minutes, tres bien documente. En 2 mois: NPS passe de 32 a 41 grace au suivi proactif des detracteurs. 23 nouveaux avis G2 (on etait a 8 avant). Le churn a baisse de 15%. Seule amelioration: ajouter un dashboard de suivi des scores dans le template.",
    verified: true,
    helpful_count: 20
  },

  // ========================================
  // UNIVERSAL / MIXED (3 reviews)
  // ========================================

  // Universal #1 - Contact Form Notification
  {
    id: "rev_010",
    author: "Philippe Durand",
    rating: 4,
    date: "2025-12-10",
    template_id: "010",
    business_type: "Artisan plombier",
    content: "Je ratais des demandes de devis car je ne voyais pas les emails a temps (je suis sur les chantiers). Ce template envoie une notif push + SMS des qu'un formulaire est soumis sur mon site. J'ai aussi configure une reponse auto avec mes dispos de la semaine. Temps de reponse passe de 24h a 2h en moyenne. J'ai gagne 3 chantiers le premier mois que j'aurais rates avant (environ 2 500 EUR). Installation simple, 15 minutes. Le template est basique mais fait le job. J'aurais aime une option pour qualifier le lead (urgence, type de travaux) mais bon, pour 29 EUR on ne peut pas tout avoir.",
    verified: true,
    helpful_count: 9
  },

  // Universal #2 - Multiple Templates Combined
  {
    id: "rev_011",
    author: "Emilie Faure",
    rating: 5,
    date: "2026-01-28",
    template_id: "001",
    business_type: "E-commerce cosmetiques naturels",
    content: "J'ai achete 4 templates d'un coup (bundle): panier abandonne, avis produit, confirmation commande, et relance inactifs. Make.com me coutait 79 EUR/mois, maintenant je suis a 5 EUR de VPS. Installation du bundle en une apres-midi (4h), chaque template est independant mais ils se connectent bien entre eux. Resultats combines sur 2 mois: +2 100 EUR de paniers recuperes, 156 nouveaux avis, -40% d'appels SAV, 12% de clients inactifs reactives. ROI total: le bundle s'est rembourse en 4 jours. La qualite est pro, on sent que c'est fait par quelqu'un qui connait l'e-commerce. Hate de voir les prochains templates!",
    verified: true,
    helpful_count: 24
  },

  // Universal #3 - General Praise
  {
    id: "rev_012",
    author: "Laurent Mercier",
    rating: 5,
    date: "2026-01-30",
    template_id: "007",
    business_type: "TPE services aux entreprises",
    content: "Apres avoir perdu 6 mois a essayer de construire mes automations moi-meme (je ne suis pas dev), j'ai decouvert Agentic Factory. Le template lead nurture m'a fait gagner ce que j'aurais mis 3 semaines a construire. La doc video pas-a-pas est excellente, meme ma comptable de 58 ans a reussi a comprendre comment ca marche. J'apprecie particulierement: les nodes sont bien commentes, les variables sont claires, et le support Discord repond vite (merci Adrien). J'ai economise environ 890 EUR/an vs Zapier + HubSpot. Mon seul regret: ne pas avoir trouve ca plus tot. Je recommande a tous les non-techs qui veulent automatiser.",
    verified: true,
    helpful_count: 16
  }
]

// Helper functions for filtering reviews
export function getReviewsByTemplate(templateId: string): Review[] {
  return reviews.filter(review => review.template_id === templateId)
}

export function getReviewsByRating(rating: 4 | 5): Review[] {
  return reviews.filter(review => review.rating === rating)
}

export function getVerifiedReviews(): Review[] {
  return reviews.filter(review => review.verified)
}

export function getAverageRating(): number {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0)
  return Math.round((total / reviews.length) * 10) / 10
}

export function getTotalReviewCount(): number {
  return reviews.length
}

// Stats for display
export const reviewStats = {
  totalReviews: reviews.length,
  averageRating: getAverageRating(),
  fiveStarCount: reviews.filter(r => r.rating === 5).length,
  fourStarCount: reviews.filter(r => r.rating === 4).length,
  verifiedCount: reviews.filter(r => r.verified).length,
  totalHelpfulVotes: reviews.reduce((sum, r) => sum + r.helpful_count, 0)
}
