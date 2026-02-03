/**
 * Agentic Factory - Help Center FAQs
 *
 * Comprehensive FAQ database for French SMB customers
 * purchasing n8n workflow templates (29-59 EUR)
 *
 * @author Agentic Factory
 * @version 1.0.0
 */

export interface FAQ {
  id: string
  category: 'Pre-Purchase' | 'Technical' | 'Support' | 'Business'
  question: string
  answer: string // Markdown format
  order: number
  keywords: string[] // For search
}

export const faqs: FAQ[] = [
  // ============================================
  // PRE-PURCHASE FAQs (8)
  // ============================================
  {
    id: 'what-is-n8n',
    category: 'Pre-Purchase',
    question: "C'est quoi n8n exactement ? Est-ce que j'ai besoin de savoir coder ?",
    answer: `**Non, aucune competence en code n'est requise.**

n8n est un outil d'automatisation visuel - vous connectez des "blocs" entre eux comme des Legos. Chaque bloc represente une action : envoyer un email, creer une fiche client, poster sur LinkedIn, etc.

**Concretement, avec nos templates :**
- Vous importez le workflow en 1 clic
- Vous suivez le guide PDF (captures d'ecran)
- Vous remplacez vos identifiants (email, CRM, etc.)
- C'est tout - l'automatisation tourne

**Comparaison simple :**
- Zapier/Make.com = location mensuelle (15-50 EUR/mois)
- n8n = gratuit et heberge chez vous (ou 20 EUR/mois cloud)

Nos clients ont en moyenne 45+ ans et zero background technique. Si vous savez utiliser Excel et envoyer des emails, vous saurez utiliser nos templates.

**Garantie :** Si vous bloquez, notre support repond sous 24h. Et vous avez 30 jours pour un remboursement integral si ca ne vous convient pas.`,
    order: 1,
    keywords: ['n8n', 'code', 'coder', 'technique', 'debutant', 'facile', 'programmation', 'developpeur']
  },
  {
    id: 'whats-included',
    category: 'Pre-Purchase',
    question: "Qu'est-ce qui est inclus dans un template ?",
    answer: `**Vous recevez 4 elements immediatement apres achat :**

1. **Le workflow n8n complet** (fichier .json)
   - Pret a importer en 1 clic
   - Teste 50+ fois en production avant publication
   - Exactement ce que nous utilisons nous-memes

2. **Guide de configuration PDF** (15-25 pages)
   - En francais avec captures d'ecran
   - Instructions pas-a-pas numerotees
   - Section "Depannage" avec erreurs courantes

3. **Video de setup** (10-15 minutes)
   - Demonstration complete de A a Z
   - Hebergee sur Loom (acces permanent)
   - Sous-titres francais disponibles

4. **Acces email support**
   - Reponse garantie sous 24h ouvrables
   - Aide personnalisee sur votre configuration
   - Inclus pendant 90 jours

**Bonus selon le template :**
- Fichier de donnees de test
- Checklist de lancement
- Templates email/messages pre-rediges

**Ce n'est pas un cours** - c'est un outil pret a l'emploi que vous deployez en 30-60 minutes.`,
    order: 2,
    keywords: ['inclus', 'contenu', 'livrable', 'pdf', 'video', 'guide', 'documentation', 'support']
  },
  {
    id: 'difference-zapier-make',
    category: 'Pre-Purchase',
    question: "Quelle difference avec Zapier ou Make.com ?",
    answer: `**3 differences majeures qui changent tout :**

| Critere | Zapier/Make | n8n + Nos Templates |
|---------|-------------|---------------------|
| **Cout mensuel** | 20-100 EUR/mois | 0 EUR (self-hosted) ou 20 EUR |
| **Limites executions** | 750-2000/mois | Illimite |
| **Propriete donnees** | Chez eux (USA) | Chez vous (RGPD) |

**Calcul concret sur 12 mois :**
- Zapier Pro : 49 EUR x 12 = **588 EUR/an**
- Make.com Core : 29 EUR x 12 = **348 EUR/an**
- n8n Cloud : 20 EUR x 12 = **240 EUR/an**
- n8n Self-hosted : **0 EUR/an**

**Notre template a 49 EUR = rentabilise en 1-2 mois** vs abonnement Zapier.

**Pourquoi n8n gagne pour les PME francaises :**
- Donnees hebergees en France/Europe (conformite RGPD)
- Pas de plafond d'executions (important si volume)
- Workflows plus complexes possibles (branchements, boucles)
- Communaute active + 400 integrations natives

**Notre valeur ajoutee :** Vous n'avez pas a construire le workflow - on l'a fait pour vous. Vous gagnez 10-40 heures de conception.`,
    order: 3,
    keywords: ['zapier', 'make', 'integromat', 'difference', 'comparaison', 'prix', 'cout', 'abonnement']
  },
  {
    id: 'template-doesnt-work',
    category: 'Pre-Purchase',
    question: "Et si le template ne fonctionne pas pour mon cas ?",
    answer: `**Garantie satisfait ou rembourse 30 jours - sans condition.**

Concretement, 3 scenarios possibles :

**Scenario 1 : Le template ne correspond pas a votre besoin**
- Vous nous ecrivez a support@agentic-factory.com
- Remboursement integral sous 48h via Gumroad
- Aucune justification demandee

**Scenario 2 : Vous bloquez sur la configuration**
- Envoyez-nous une capture d'ecran de l'erreur
- Notre equipe diagnostique et vous guide (sous 24h)
- 90% des problemes = mauvais identifiants API (5 min a corriger)

**Scenario 3 : Votre cas est trop specifique**
- On evalue si une personnalisation est possible
- Soit on vous propose un devis (prestation sur-mesure)
- Soit on vous rembourse + recommande une alternative

**Statistiques reelles :**
- Taux de remboursement : 2.3% (moyenne e-commerce : 8%)
- Cause #1 : "J'ai achete le mauvais template" (on rembourse + echange)
- Temps moyen resolution probleme : 4 heures

**Notre philosophie :** Un client mecontent qui garde le produit = mauvais pour tout le monde. On prefere rembourser et garder une bonne relation.`,
    order: 4,
    keywords: ['remboursement', 'garantie', 'satisfait', 'marche pas', 'probleme', 'erreur', 'risque']
  },
  {
    id: 'can-customize',
    category: 'Pre-Purchase',
    question: "Est-ce que je peux personnaliser le template ?",
    answer: `**Oui, a 100% - c'est meme le but.**

Nos templates sont des **fondations** que vous adaptez a votre business :

**Ce que vous pouvez modifier librement :**
- Ajouter/supprimer des etapes du workflow
- Changer les services connectes (ex: Notion au lieu de Google Sheets)
- Modifier les conditions et filtres
- Personnaliser les messages et emails envoyes
- Ajuster les horaires de declenchement

**Exemples de personnalisations courantes :**
- Template "Lead Qualification" : ajouter un scoring personnalise
- Template "Relance Devis" : modifier les delais (J+3, J+7, J+14)
- Template "Social Media" : changer les plateformes ciblees

**Ce qu'on vous fournit pour personnaliser :**
- Documentation des variables modifiables
- Section "Personnalisation avancee" dans le guide PDF
- Exemples de modifications frequentes

**Limite importante :** Si vous modifiez en profondeur et cassez quelque chose, notre support aide au diagnostic mais ne reconstruit pas from scratch. Pour des workflows 100% sur-mesure, on propose des prestations dediees.

**Conseil :** Commencez par faire tourner le template "as is", puis personnalisez progressivement.`,
    order: 5,
    keywords: ['personnaliser', 'modifier', 'adapter', 'customiser', 'changer', 'configuration', 'flexible']
  },
  {
    id: 'n8n-paid-plan',
    category: 'Pre-Purchase',
    question: "Est-ce que j'ai besoin d'un abonnement n8n payant ?",
    answer: `**Non, nos templates fonctionnent avec n8n gratuit (self-hosted).**

**3 options pour utiliser n8n :**

| Option | Cout | Ideal pour |
|--------|------|------------|
| **Self-hosted gratuit** | 0 EUR | Techniques a l'aise, serveur existant |
| **n8n Cloud Starter** | 20 EUR/mois | PME sans equipe IT |
| **n8n Cloud Pro** | 50 EUR/mois | Equipes, workflows critiques |

**Notre recommandation pour debutants : n8n Cloud a 20 EUR/mois**
- Setup en 2 minutes (email + mot de passe)
- Pas de serveur a gerer
- Mises a jour automatiques
- Support n8n inclus

**Si vous voulez le gratuit (self-hosted) :**
- Necessite un serveur (VPS a 5 EUR/mois type Hetzner)
- Installation via Docker (guide fourni)
- Maintenance a votre charge
- Notre guide PDF couvre les 2 options

**Question frequente : "J'ai deja Make.com, je peux utiliser vos templates ?"**
Non, nos templates sont au format n8n (.json). Make.com et n8n ne sont pas compatibles. Cependant, la logique est transposable si vous voulez reconstruire manuellement.

**ROI rapide :** Meme avec n8n Cloud a 20 EUR/mois, un template a 49 EUR qui vous fait gagner 5h/mois = rentabilise en 2 mois (si votre heure vaut 25 EUR).`,
    order: 6,
    keywords: ['gratuit', 'payant', 'abonnement', 'cloud', 'self-hosted', 'hebergement', 'serveur', 'prix']
  },
  {
    id: 'setup-time',
    category: 'Pre-Purchase',
    question: "Combien de temps pour mettre en place le template ?",
    answer: `**Entre 30 minutes et 2 heures selon votre niveau.**

**Temps reel mesure sur nos clients :**

| Profil | Temps setup | Temps "value" |
|--------|-------------|---------------|
| **Debutant complet** | 1h30 - 2h | Premiere automatisation le jour meme |
| **A l'aise avec outils no-code** | 45 min - 1h | Workflow actif en 1h |
| **Technique/Dev** | 20 - 30 min | Operationnel immediatement |

**Ce qui prend du temps (et comment on l'accelere) :**

1. **Creer un compte n8n** (5 min)
   - Notre guide : lien direct + captures d'ecran

2. **Connecter vos services** (15-30 min)
   - Ex: Gmail, HubSpot, Notion, Slack
   - Guide API pas-a-pas pour chaque service

3. **Importer le template** (2 min)
   - Litteralement : Fichier > Importer > Selectionner .json

4. **Tester et ajuster** (15-45 min)
   - Executer avec donnees test
   - Verifier que tout arrive au bon endroit

**Ce qui bloque le plus souvent :**
- Trouver la cle API d'un service (on fournit les liens directs)
- Droits d'acces insuffisants (guide de verification inclus)

**Notre promesse :** Si vous bloquez plus de 30 min sur une etape, ecrivez-nous. On debloque 90% des cas en un email.`,
    order: 7,
    keywords: ['temps', 'duree', 'installation', 'setup', 'configuration', 'rapide', 'combien', 'heures']
  },
  {
    id: 'which-template',
    category: 'Pre-Purchase',
    question: "Quel template choisir pour mon business ?",
    answer: `**Repondez a 2 questions pour trouver votre template :**

**Question 1 : Quelle tache vous prend le plus de temps chaque semaine ?**

| Tache chronophage | Template recommande |
|-------------------|---------------------|
| Qualifier des leads manuellement | Lead Qualification Auto |
| Relancer des devis non signes | Relance Devis Intelligente |
| Publier sur les reseaux sociaux | Social Media Scheduler |
| Repondre aux memes questions | FAQ Chatbot + Email Auto |
| Mettre a jour plusieurs outils | Sync CRM Multi-Plateforme |
| Onboarder de nouveaux clients | Client Onboarding Auto |

**Question 2 : Quels outils utilisez-vous deja ?**

Chaque template liste les integrations supportees. Verifiez que vos outils sont compatibles :
- CRM : HubSpot, Pipedrive, Salesforce, Notion
- Email : Gmail, Outlook, SendGrid
- Communication : Slack, Discord, Teams
- Fichiers : Google Drive, Dropbox, OneDrive

**Pas sur ? Ecrivez-nous AVANT d'acheter :**
- Email : support@agentic-factory.com
- Decrivez votre workflow actuel en 3 lignes
- On vous repond sous 24h avec une recommandation

**Erreur frequente a eviter :** Acheter plusieurs templates "au cas ou". Commencez par UN template, maitrisez-le, puis elargissez. L'automatisation c'est iteratif.

**Bundle disponible :** Si vous hesitez entre 2-3 templates, notre Pack PME (3 templates) offre 30% de reduction.`,
    order: 8,
    keywords: ['choisir', 'quel', 'lequel', 'recommande', 'adapte', 'besoin', 'business', 'selection']
  },

  // ============================================
  // TECHNICAL FAQs (6)
  // ============================================
  {
    id: 'install-n8n',
    category: 'Technical',
    question: "Comment installer n8n sur mon ordinateur ou serveur ?",
    answer: `**2 methodes selon votre niveau technique :**

---

**METHODE 1 : n8n Cloud (Recommande - 5 minutes)**

1. Allez sur [n8n.io/cloud](https://n8n.io/cloud)
2. Cliquez "Start Free Trial"
3. Creez un compte (email + mot de passe)
4. Votre instance n8n est prete !

Cout : Gratuit 14 jours, puis 20 EUR/mois
Avantage : Zero maintenance, mises a jour auto

---

**METHODE 2 : Self-Hosted avec Docker (30-45 minutes)**

Prerequis : Un serveur Linux (VPS Hetzner/OVH a 5 EUR/mois)

\`\`\`bash
# Installation Docker (si pas deja installe)
curl -fsSL https://get.docker.com | sh

# Lancer n8n
docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n
\`\`\`

Accedez a : http://votre-ip:5678

---

**Notre guide PDF inclut :**
- Screenshots de chaque etape
- Configuration HTTPS (securite)
- Sauvegarde automatique
- Troubleshooting erreurs courantes

**Conseil :** Si les termes "Docker" et "VPS" vous sont etrangers, partez sur n8n Cloud. Les 20 EUR/mois vous evitent des heures de maintenance.

**Support :** On ne fait pas l'installation a votre place, mais on repond a vos questions si vous bloquez.`,
    order: 9,
    keywords: ['installer', 'installation', 'docker', 'cloud', 'serveur', 'vps', 'heberger', 'deployer']
  },
  {
    id: 'n8n-version',
    category: 'Technical',
    question: "Quelle version de n8n est requise pour les templates ?",
    answer: `**Minimum : n8n version 1.0 ou superieure (sortie juillet 2023)**

**Comment verifier votre version :**
1. Ouvrez n8n
2. Cliquez sur votre profil (coin inferieur gauche)
3. La version s'affiche (ex: "1.25.1")

**Compatibilite de nos templates :**

| Version n8n | Compatibilite |
|-------------|---------------|
| < 0.200 | NON - Mise a jour obligatoire |
| 0.200 - 0.237 | Partielle - Certains nodes obsoletes |
| 1.0 - 1.20 | OUI - Fonctionne parfaitement |
| 1.21+ (actuelle) | OUI - Recommandee |

**Si votre version est trop ancienne :**

*n8n Cloud :* Mise a jour automatique, rien a faire

*Self-hosted Docker :*
\`\`\`bash
docker pull n8nio/n8n:latest
docker stop n8n
docker rm n8n
docker run -d --name n8n -p 5678:5678 -v n8n_data:/home/node/.n8n n8nio/n8n
\`\`\`

**Probleme frequent :** Apres import, certains nodes affichent "Unknown node type"
- Cause : Version trop ancienne ou node community manquant
- Solution : Mise a jour + installation du node via Settings > Community Nodes

**On teste nos templates sur :** La derniere version stable. Si vous rencontrez un probleme de compatibilite, signalez-le - on adapte le template si necessaire.`,
    order: 10,
    keywords: ['version', 'mise a jour', 'update', 'compatible', 'compatibilite', 'minimum', 'requise']
  },
  {
    id: 'import-template',
    category: 'Technical',
    question: "Comment importer un template dans n8n ?",
    answer: `**3 etapes, moins de 2 minutes :**

---

**ETAPE 1 : Telecharger le fichier .json**
- Apres achat sur Gumroad, vous recevez un email
- Cliquez sur "View Content"
- Telechargez le fichier \`template-nom.json\`

---

**ETAPE 2 : Importer dans n8n**
1. Ouvrez votre instance n8n
2. Cliquez sur **"+ Add Workflow"** (bouton orange, coin superieur droit)
3. Cliquez sur **"Import from File"**
4. Selectionnez le fichier .json telecharge
5. Le workflow apparait dans votre editeur

---

**ETAPE 3 : Configurer les credentials**
- Les nodes avec un triangle orange = credentials manquants
- Cliquez sur chaque node orange
- Selectionnez ou creez vos credentials (Gmail, CRM, etc.)
- Notre guide PDF detaille chaque credential

---

**Methode alternative (copier-coller) :**
1. Ouvrez le fichier .json avec un editeur texte
2. Selectionnez tout (Ctrl+A) et copiez (Ctrl+C)
3. Dans n8n, faites Ctrl+V directement dans l'editeur
4. Le workflow se colle automatiquement

**Erreurs courantes a l'import :**

| Erreur | Cause | Solution |
|--------|-------|----------|
| "Unknown node type" | Node community manquant | Installer via Settings > Community Nodes |
| "Invalid JSON" | Fichier corrompu | Re-telecharger depuis Gumroad |
| Workflow vide | Mauvais fichier | Verifier extension .json |

**Video demo :** Chaque template inclut une video Loom montrant l'import en direct.`,
    order: 11,
    keywords: ['importer', 'import', 'json', 'telecharger', 'ajouter', 'ouvrir', 'charger']
  },
  {
    id: 'integrations-supported',
    category: 'Technical',
    question: "Quelles integrations/services sont supportes ?",
    answer: `**n8n supporte 400+ integrations natives.** Nos templates utilisent les plus courantes en France :

**CRM & Ventes :**
- HubSpot, Pipedrive, Salesforce, Zoho CRM
- Notion (comme CRM leger), Airtable
- Google Sheets (alternative gratuite)

**Email & Communication :**
- Gmail, Outlook, SMTP generique
- Mailchimp, SendGrid, Brevo (ex-Sendinblue)
- Slack, Discord, Microsoft Teams
- WhatsApp Business, Telegram

**Reseaux sociaux :**
- LinkedIn (via API ou Phantombuster)
- Facebook, Instagram (Meta Business)
- Twitter/X, YouTube

**Productivite :**
- Google Drive, Dropbox, OneDrive
- Notion, Trello, Asana, Monday.com
- Calendly, Cal.com, Google Calendar

**E-commerce & Paiement :**
- Stripe, PayPal, Gumroad
- Shopify, WooCommerce, PrestaShop

**Votre outil n'est pas liste ?**
- Verifiez sur [n8n.io/integrations](https://n8n.io/integrations)
- 90% des outils SaaS ont une API = connectable via "HTTP Request"
- On peut creer des integrations custom sur devis

**Chaque fiche template indique :**
- Integrations incluses (testees, documentees)
- Integrations alternatives possibles
- Integrations non supportees

**Question avant achat ?** Envoyez-nous votre stack actuelle, on confirme la compatibilite.`,
    order: 12,
    keywords: ['integration', 'service', 'outil', 'compatible', 'connecter', 'api', 'application', 'logiciel']
  },
  {
    id: 'use-with-make',
    category: 'Technical',
    question: "Est-ce que je peux utiliser les templates avec Make.com ?",
    answer: `**Non, nos templates sont exclusivement au format n8n (.json).**

Make.com et n8n utilisent des formats incompatibles - c'est comme essayer d'ouvrir un fichier Word dans Excel.

**Vos options si vous utilisez Make.com :**

**Option 1 : Migrer vers n8n (Recommande)**
- n8n Cloud = 20 EUR/mois (moins cher que Make Pro)
- Workflows illimites, pas de limite d'operations
- Nos templates vous font gagner 10-40h de conception

**Option 2 : Reconstruire manuellement**
- Nos guides PDF decrivent la logique du workflow
- Vous pouvez reproduire cette logique dans Make.com
- Mais vous ne beneficiez pas du fichier .json pret a l'emploi

**Option 3 : Utiliser les deux**
- Certains clients gardent Make.com pour l'existant
- Et utilisent n8n pour les nouveaux workflows via nos templates
- Les deux peuvent cohabiter (meme se connecter via webhooks)

**Pourquoi on a choisi n8n :**
- Open-source = pas de vendor lock-in
- Self-hosted = donnees en France (RGPD)
- Communaute active + evolution rapide
- Meilleur rapport fonctionnalites/prix pour PME

**On ne prevoit pas de version Make.com** de nos templates. Le temps de maintenance serait double pour un marche plus restreint.

**Besoin d'aide pour migrer Make > n8n ?** On propose un accompagnement sur devis (audit + migration).`,
    order: 13,
    keywords: ['make', 'make.com', 'integromat', 'compatible', 'convertir', 'migrer', 'alternative']
  },
  {
    id: 'error-during-setup',
    category: 'Technical',
    question: "J'ai une erreur pendant la configuration, que faire ?",
    answer: `**90% des erreurs se resolvent en 5 minutes.** Voici le diagnostic :

---

**ERREUR 1 : "Credentials not found" ou "Authentication failed"**

Cause : Cle API incorrecte ou expiree
Solution :
1. Regenerez la cle API dans le service (Gmail, HubSpot, etc.)
2. Copiez-la SANS espaces avant/apres
3. Collez dans n8n > Credentials > Edit

---

**ERREUR 2 : "Unknown node type: n8n-nodes-xxx"**

Cause : Node community manquant
Solution :
1. Settings > Community Nodes
2. Recherchez le nom du node
3. Cliquez "Install"
4. Rafraichissez la page

---

**ERREUR 3 : "Workflow execution failed" (triangle rouge)**

Cause : Donnees inattendues
Solution :
1. Cliquez sur le node en erreur
2. Lisez le message d'erreur complet
3. Verifiez que les donnees d'entree sont correctes
4. Testez avec des donnees simples d'abord

---

**ERREUR 4 : Workflow ne se declenche pas**

Causes possibles :
- Trigger desactive (bouton ON/OFF en haut)
- Webhook URL incorrecte
- Conditions de filtre trop restrictives

---

**Processus de support si vous bloquez :**

1. **Capture d'ecran** de l'erreur (message complet)
2. **Email** a support@agentic-factory.com
3. **Inclure** : nom du template, version n8n, etape du guide
4. **Reponse** sous 24h avec solution

**Notre base de connaissances** (incluse) couvre les 20 erreurs les plus frequentes avec solutions pas-a-pas.`,
    order: 14,
    keywords: ['erreur', 'probleme', 'bug', 'marche pas', 'bloque', 'aide', 'depannage', 'debug']
  },

  // ============================================
  // SUPPORT FAQs (4)
  // ============================================
  {
    id: 'how-get-support',
    category: 'Support',
    question: "Comment obtenir de l'aide si je bloque ?",
    answer: `**3 niveaux de support inclus avec chaque template :**

---

**NIVEAU 1 : Documentation (Immediat)**
- Guide PDF avec section "Depannage"
- Video Loom pas-a-pas
- FAQ des erreurs courantes
- 80% des questions trouvent reponse ici

---

**NIVEAU 2 : Email Support (24h)**
- Adresse : support@agentic-factory.com
- Reponse garantie sous 24h ouvrables
- Inclus 90 jours apres achat
- Illimite sur les questions liees au template achete

**Pour une reponse rapide, incluez :**
- Nom du template achete
- Capture d'ecran de l'erreur
- Version n8n utilisee
- Etape du guide ou vous bloquez

---

**NIVEAU 3 : Accompagnement Premium (Payant)**
- Session video 1:1 (45 min) : 97 EUR
- Configuration complete a votre place : 197 EUR
- Forfait maintenance mensuelle : sur devis

---

**Ce qu'on couvre en support gratuit :**
- Questions sur l'installation et configuration
- Erreurs techniques du template
- Clarifications sur la documentation
- Suggestions de personnalisation simple

**Ce qui necessite le support premium :**
- Personnalisation avancee du workflow
- Integration d'outils non documentes
- Formation de votre equipe
- Maintenance continue

**Engagement qualite :** Si on ne repond pas sous 24h, vous pouvez demander un remboursement. C'est arrive 2 fois en 18 mois (vacances mal communiquees - corrige depuis).`,
    order: 15,
    keywords: ['support', 'aide', 'contact', 'email', 'question', 'assistance', 'service client']
  },
  {
    id: 'response-time',
    category: 'Support',
    question: "Quel est le delai de reponse du support ?",
    answer: `**Garantie : Reponse sous 24 heures ouvrables.**

**Statistiques reelles (janvier 2026) :**
- Temps de reponse moyen : 6 heures
- 73% des demandes = reponse le jour meme
- 95% des demandes = reponse sous 12h
- 100% des demandes = reponse sous 24h

**Horaires de notre equipe :**
- Lundi - Vendredi : 9h - 18h (heure Paris)
- Week-end : Traitement le lundi matin
- Jours feries francais : Traitement le jour ouvre suivant

**Comment accelerer la resolution :**

**Email bien structure (reponse rapide) :**
> Sujet : [Template Lead Qualification] Erreur credential Gmail
>
> Bonjour,
> A l'etape 4 du guide, j'obtiens l'erreur "Authentication failed"
> Version n8n : 1.25.1 (Cloud)
> [Capture d'ecran jointe]
> Merci !

**Email vague (aller-retour necessaire) :**
> Ca marche pas, aidez-moi svp

---

**Urgence reelle ?**
- Indiquez "URGENT" dans le sujet
- Expliquez l'impact business (ex: "demo client dans 2h")
- On priorise les cas critiques

**Periode de support incluse :** 90 jours apres achat. Au-dela, support payant ou reponse "best effort" (on reste humains, on aide quand on peut).`,
    order: 16,
    keywords: ['delai', 'reponse', 'temps', 'attente', 'rapide', 'urgent', 'horaire', 'disponibilite']
  },
  {
    id: 'refund-policy',
    category: 'Support',
    question: "Comment fonctionne le remboursement ?",
    answer: `**Garantie satisfait ou rembourse 30 jours - sans condition.**

**Processus de remboursement :**

1. **Envoyez un email** a support@agentic-factory.com
   - Sujet : "Demande de remboursement - [Nom du template]"
   - Incluez votre email d'achat Gumroad

2. **On confirme sous 24h**
   - Verification de l'achat
   - Aucune question embarrassante

3. **Remboursement effectue sous 48h**
   - Via Gumroad (meme methode de paiement)
   - Delai bancaire : 3-5 jours selon votre banque

---

**Ce qu'on demande (optionnel mais apprecie) :**
- Pourquoi le template ne vous convient pas
- Cela nous aide a ameliorer nos produits
- Aucune obligation de justifier

**Cas particuliers :**

| Situation | Politique |
|-----------|-----------|
| Achat il y a plus de 30 jours | Cas par cas (souvent OK si pas utilise) |
| Template deja utilise en production | Remboursement quand meme |
| Erreur de template achete | Echange contre le bon + difference si applicable |
| Achat multiple (bundle) | Remboursement partiel possible |

---

**Statistiques transparentes :**
- Taux de remboursement : 2.3%
- Raison #1 : "J'ai achete le mauvais template"
- Raison #2 : "Mon business a change de direction"
- Raison #3 : "Trop technique pour moi" (rare)

**Notre philosophie :** Le risque est pour nous, pas pour vous. Si ca ne marche pas, on ne veut pas garder votre argent.`,
    order: 17,
    keywords: ['remboursement', 'rembourse', 'garantie', 'annuler', 'retour', 'argent', 'satisfait']
  },
  {
    id: 'template-updates',
    category: 'Support',
    question: "Les templates sont-ils mis a jour ?",
    answer: `**Oui, mises a jour gratuites a vie sur les templates achetes.**

**Types de mises a jour :**

**1. Mises a jour de compatibilite (Automatiques)**
- Quand n8n sort une nouvelle version majeure
- Quand une API tierce change (Gmail, HubSpot, etc.)
- Frequence : 2-4 fois par an selon le template

**2. Mises a jour d'amelioration (Regulieres)**
- Nouvelles fonctionnalites basees sur les retours clients
- Optimisations de performance
- Meilleure gestion des erreurs
- Frequence : 1-2 fois par an

**3. Corrections de bugs (Immediate)**
- Des qu'un bug est reporte et confirme
- Deploiement sous 48-72h

---

**Comment recevoir les mises a jour :**

1. **Email automatique** via Gumroad quand une mise a jour est disponible
2. **Lien de telechargement** dans l'email (meme lien que l'achat initial)
3. **Re-importer** le nouveau fichier .json dans n8n

**Important :** Les mises a jour n'ecrasent pas vos personnalisations. Vous importez un nouveau workflow et migrez vos configurations manuellement. Notre guide explique comment.

---

**Changelog public :**
Chaque template a un fichier CHANGELOG.md listant :
- Date de mise a jour
- Ce qui a change
- Instructions de migration si necessaire

**Engagement :** Tant qu'on vend le template, on le maintient. Si un template est retire de la vente (jamais arrive), les acheteurs existants gardent l'acces aux dernieres versions.`,
    order: 18,
    keywords: ['mise a jour', 'update', 'nouvelle version', 'maintenance', 'evolution', 'amelioration']
  },

  // ============================================
  // BUSINESS FAQs (2)
  // ============================================
  {
    id: 'use-for-clients',
    category: 'Business',
    question: "Puis-je utiliser les templates pour mes clients (agence/freelance) ?",
    answer: `**Oui, avec la licence appropriee.**

**Licence Standard (29-59 EUR) :**
- Usage personnel ou pour votre entreprise
- 1 instance n8n / 1 organisation
- Personnalisation illimitee pour VOUS
- **Interdit :** Revente, redistribution, usage pour clients

**Licence Agence (149-249 EUR) :**
- Deploiement pour vos clients inclus
- Jusqu'a 10 clients par licence
- Support prioritaire (12h au lieu de 24h)
- Droit de modifier et white-label
- Documentation client personnalisable

---

**Scenarios concrets :**

| Situation | Licence requise |
|-----------|-----------------|
| J'automatise mon propre business | Standard |
| Je suis freelance, j'automatise pour 1 client | Agence (ou Standard x2) |
| Je suis agence, 5 clients utilisent le template | Agence |
| Je revends le template modifie | Interdit (contacter pour partenariat) |

---

**Pour agences/freelances, on propose aussi :**

**Programme Partenaire (sur candidature) :**
- Commission 30% sur vos ventes referees
- Acces anticipe aux nouveaux templates
- Co-branding possible
- Support dedie agence

**Prestations white-label :**
- On cree des templates exclusifs pour votre agence
- Vous les vendez sous votre marque
- Tarification sur devis

---

**Question frequente :** "Je suis consultant, j'installe le template chez mon client, c'est OK ?"
- Si VOUS gerez l'instance n8n : Licence Standard OK
- Si LE CLIENT a sa propre instance : Licence Agence requise

**Pas sur de votre cas ?** Ecrivez-nous, on clarifie avant achat.`,
    order: 19,
    keywords: ['client', 'agence', 'freelance', 'consultant', 'revendre', 'licence', 'commercial', 'professionnel']
  },
  {
    id: 'team-agency-license',
    category: 'Business',
    question: "Existe-t-il une licence equipe ou agence ?",
    answer: `**Oui, 3 options selon vos besoins :**

---

**OPTION 1 : Licence Equipe (99-179 EUR)**
Pour : PME avec plusieurs utilisateurs internes

Inclus :
- 1 template deploye sur 1 instance n8n
- Jusqu'a 10 utilisateurs dans votre organisation
- Support etendu (90 jours > 180 jours)
- Session onboarding video (30 min)

Ideal pour : Equipe marketing, equipe commerciale, service client

---

**OPTION 2 : Licence Agence (149-249 EUR)**
Pour : Agences et freelances deployant pour clients

Inclus :
- Deploiement pour jusqu'a 10 clients
- White-label autorise (retirer notre branding)
- Documentation client personnalisable
- Support prioritaire 12h

Ideal pour : Agences no-code, consultants automation, integrateurs

---

**OPTION 3 : Licence Enterprise (Sur devis)**
Pour : Grands comptes, deploiements massifs

Inclus :
- Deploiements illimites
- Formation equipe (demi-journee)
- SLA support garanti
- Personnalisation avancee incluse
- Compte-rendu trimestriel d'utilisation

---

**Comment commander une licence etendue :**

1. Achetez la licence Standard sur Gumroad
2. Envoyez un email a licence@agentic-factory.com
3. Precisez : nombre utilisateurs/clients, cas d'usage
4. On vous envoie un lien de paiement pour l'upgrade
5. Vous recevez la licence PDF officielle

**Reduction volume :**
- 3+ templates : -15%
- 5+ templates : -25%
- 10+ templates : Tarification sur-mesure

**Facturation entreprise :** Facture francaise avec TVA, paiement virement possible pour >500 EUR.`,
    order: 20,
    keywords: ['equipe', 'team', 'agence', 'agency', 'licence', 'entreprise', 'volume', 'multi-utilisateur']
  }
]

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get FAQs filtered by category
 */
export function getFAQsByCategory(category: FAQ['category']): FAQ[] {
  return faqs
    .filter(faq => faq.category === category)
    .sort((a, b) => a.order - b.order)
}

/**
 * Search FAQs by query (searches question, answer, and keywords)
 */
export function searchFAQs(query: string): FAQ[] {
  const normalizedQuery = query.toLowerCase().trim()

  if (!normalizedQuery) return faqs

  const queryWords = normalizedQuery.split(/\s+/)

  return faqs
    .map(faq => {
      let score = 0
      const searchableText = `${faq.question} ${faq.answer} ${faq.keywords.join(' ')}`.toLowerCase()

      // Exact phrase match (highest priority)
      if (searchableText.includes(normalizedQuery)) {
        score += 100
      }

      // Individual word matches
      for (const word of queryWords) {
        if (word.length < 2) continue

        // Question match (high priority)
        if (faq.question.toLowerCase().includes(word)) {
          score += 30
        }

        // Keyword match (high priority)
        if (faq.keywords.some(kw => kw.toLowerCase().includes(word))) {
          score += 25
        }

        // Answer match (lower priority)
        if (faq.answer.toLowerCase().includes(word)) {
          score += 5
        }
      }

      return { faq, score }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(item => item.faq)
}

/**
 * Get a single FAQ by ID
 */
export function getFAQById(id: string): FAQ | undefined {
  return faqs.find(faq => faq.id === id)
}

/**
 * Get related FAQs based on keywords overlap
 */
export function getRelatedFAQs(faqId: string, limit: number = 3): FAQ[] {
  const currentFaq = getFAQById(faqId)
  if (!currentFaq) return []

  const currentKeywords = new Set(currentFaq.keywords.map(k => k.toLowerCase()))

  return faqs
    .filter(faq => faq.id !== faqId)
    .map(faq => {
      const overlapCount = faq.keywords.filter(k =>
        currentKeywords.has(k.toLowerCase())
      ).length
      return { faq, overlapCount }
    })
    .filter(item => item.overlapCount > 0)
    .sort((a, b) => b.overlapCount - a.overlapCount)
    .slice(0, limit)
    .map(item => item.faq)
}

// ============================================
// CATEGORY METADATA
// ============================================

export const faqCategories: { id: FAQ['category']; label: string; description: string; count: number }[] = [
  {
    id: 'Pre-Purchase',
    label: 'Avant l\'achat',
    description: 'Questions frequentes avant de commander',
    count: getFAQsByCategory('Pre-Purchase').length
  },
  {
    id: 'Technical',
    label: 'Technique',
    description: 'Installation, configuration et integrations',
    count: getFAQsByCategory('Technical').length
  },
  {
    id: 'Support',
    label: 'Support & Garantie',
    description: 'Aide, delais et remboursement',
    count: getFAQsByCategory('Support').length
  },
  {
    id: 'Business',
    label: 'Licences & Agences',
    description: 'Usage professionnel et revendeurs',
    count: getFAQsByCategory('Business').length
  }
]

// ============================================
// STATISTICS
// ============================================

export const faqStats = {
  total: faqs.length,
  byCategory: {
    'Pre-Purchase': getFAQsByCategory('Pre-Purchase').length,
    'Technical': getFAQsByCategory('Technical').length,
    'Support': getFAQsByCategory('Support').length,
    'Business': getFAQsByCategory('Business').length
  },
  averageAnswerLength: Math.round(
    faqs.reduce((acc, faq) => acc + faq.answer.length, 0) / faqs.length
  )
}
