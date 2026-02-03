const fs = require('fs');
const path = require('path');

// Mapping between markdown filenames and workflow slugs
const SLUG_MAPPING = {
  'apprenez-les-bases-de-n8n.md': 'apprenez-les-bases-de-n8n-en-3-tapes-faciles-',
  'chatbot-google-sheets-gpt5.md': 'parlez-vos-feuilles-google-laide-de-chatgpt-5',
  'generation-leads-cold-email.md': 'gnration-automatise-de-leads-et-envoi-de-mails-froid-avec-apify-ai-et-gmail',
  'gestionnaire-vie-telegram.md': 'gestionnaire-de-vie-personnelle-avec-telegram-services-google-et-ia-vocale',
  'jarvis-assistant-productivite.md': 'jarvis-agent-dia-de-productivit-pour-les-tches-le-calendrier-les-e-mails-et-les-dpenses-laide-de-mcp',
  'scanner-cv-ia-recrutement.md': 'automatisez-la-slection-des-candidats-avec-mistral-ocr-et-gemini-ai-cv-analysis',
  'tracker-nutrition-telegram.md': 'suivi-nutritionnel-et-enregistreur-de-repas-avec-telegram-gemini-ai-et-google-sheets',
  'videos-nanobanana-pro-veo31.md': 'crez-des-vidos-virales-ia-laide-de-nanobanana-2-pro-et-veo31-et-publiez-les-via-blotato',
  'videos-nanobanana-veo3-blotato.md': 'gnrez-des-vidos-virales-ia-avec-nanobanana-et-veo3-partages-sur-les-rseaux-sociaux-via-blotato',
  'videos-tiktok-avatars-ai.md': 'crez-automatiquement-des-vidos-tiktok-avec-les-avatars-veedio-ai-elevenlabs-et-gpt-4',
  'videos-tiktok-sora-2.md': 'gnrez-des-vidos-ia-amusantes-avec-sora-2-et-publiez-automatiquement-sur-tiktok',
  'videos-virales-veo3-tiktok.md': 'gnrez-des-vidos-virales-ia-avec-veo-3-et-tlchargez-les-sur-tiktok'
};

// Parse markdown to extract sections
function parseMarkdown(content) {
  const sections = {};

  // Extract title (first H1)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  sections.title = titleMatch ? titleMatch[1] : '';

  // Extract "Pourquoi" section
  const whyMatch = content.match(/##\s+🎯\s+Pourquoi.*?\n\n([\s\S]*?)(?=\n##|$)/);
  sections.why = whyMatch ? whyMatch[1].trim() : '';

  // Extract "Description" section
  const descMatch = content.match(/##\s+📋\s+Description.*?\n\n([\s\S]*?)(?=\n##|$)/);
  sections.description = descMatch ? descMatch[1].trim() : '';

  // Extract "Installation" section
  const installMatch = content.match(/##\s+🛠️\s+Tuto d'installation.*?\n\n([\s\S]*?)(?=\n##|$)/);
  sections.installation = installMatch ? installMatch[1].trim() : '';

  // Extract "Utilisation" section
  const usageMatch = content.match(/##\s+🚀\s+Tuto d'utilisation.*?\n\n([\s\S]*?)(?=\n##|$)/);
  sections.usage = usageMatch ? usageMatch[1].trim() : '';

  // Extract "Conseils de pro" section
  const tipsMatch = content.match(/##\s+💡\s+Conseils de pro.*?\n\n([\s\S]*?)(?=\n##|$)/);
  sections.tips = tipsMatch ? tipsMatch[1].trim() : '';

  // Extract "Ce que tu vas apprendre" section
  const learningMatch = content.match(/##\s+🎓\s+Ce que tu vas apprendre.*?\n\n([\s\S]*?)(?=\n##|$)/);
  sections.learning = learningMatch ? learningMatch[1].trim() : '';

  return sections;
}

// Main function
function syncProductSheets() {
  const inputDir = '/Users/digitalaine/Desktop/Claude_Workspace/inputs/fiches_produits';
  const templatesDir = path.join(__dirname, '../public/templates');

  console.log('🔄 Synchronisation des fiches produits...\n');

  let updated = 0;
  let skipped = 0;

  // Read all markdown files
  const mdFiles = fs.readdirSync(inputDir).filter(f => f.endsWith('.md'));

  for (const mdFile of mdFiles) {
    const slug = SLUG_MAPPING[mdFile];

    if (!slug) {
      console.log(`⚠️  Pas de mapping pour ${mdFile}`);
      skipped++;
      continue;
    }

    const jsonPath = path.join(templatesDir, `${slug}.json`);

    if (!fs.existsSync(jsonPath)) {
      console.log(`⚠️  JSON introuvable pour ${mdFile} -> ${slug}.json`);
      skipped++;
      continue;
    }

    // Read markdown
    const mdContent = fs.readFileSync(path.join(inputDir, mdFile), 'utf8');
    const sections = parseMarkdown(mdContent);

    // Read JSON
    const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

    // Update metadata with structured content
    jsonData.metadata.sections = {
      why: sections.why,
      description: sections.description,
      installation: sections.installation,
      usage: sections.usage,
      tips: sections.tips,
      learning: sections.learning
    };

    // Keep old fields for compatibility
    jsonData.metadata.description_full_fr = sections.description;

    // Write back JSON
    fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');

    console.log(`✅ ${mdFile} -> ${slug}.json`);
    updated++;
  }

  console.log(`\n📊 Résultat: ${updated} mis à jour, ${skipped} ignorés`);

  // Update index.json as well
  const indexPath = path.join(templatesDir, 'index.json');
  if (fs.existsSync(indexPath)) {
    console.log('\n🔄 Mise à jour de index.json...');
    const indexData = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

    // Add a timestamp
    indexData.last_updated = new Date().toISOString();

    fs.writeFileSync(indexPath, JSON.stringify(indexData, null, 2), 'utf8');
    console.log('✅ index.json mis à jour');
  }
}

// Run
try {
  syncProductSheets();
  console.log('\n✨ Synchronisation terminée avec succès!');
} catch (error) {
  console.error('\n❌ Erreur:', error.message);
  process.exit(1);
}
