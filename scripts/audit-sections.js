const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../public/templates');
const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.json') && f !== 'index.json');

const issues = [];
const complete = [];

files.forEach(file => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(templatesDir, file), 'utf8'));
    const sections = data.metadata?.sections;
    const slug = data.metadata?.slug || file.replace('.json', '');

    if (!sections) {
      issues.push({ file: slug, issue: 'No sections object' });
      return;
    }

    const required = ['why', 'description', 'installation', 'usage', 'tips', 'learning'];
    const missing = required.filter(s => !sections[s] || sections[s].trim() === '');

    if (missing.length > 0) {
      issues.push({ file: slug, missing });
    } else {
      complete.push(slug);
    }
  } catch (e) {
    issues.push({ file, issue: 'Parse error: ' + e.message });
  }
});

console.log('\n📊 AUDIT REPORT\n');
console.log(`Total workflows: ${files.length}`);
console.log(`Complete: ${complete.length}`);
console.log(`With issues: ${issues.length}\n`);

if (issues.length > 0) {
  console.log('❌ WORKFLOWS WITH ISSUES:\n');
  issues.forEach(item => {
    console.log(`\n${item.file}:`);
    if (item.missing) {
      console.log(`  Missing sections: ${item.missing.join(', ')}`);
    } else {
      console.log(`  ${item.issue}`);
    }
  });
}

if (complete.length > 0) {
  console.log('\n\n✅ COMPLETE WORKFLOWS:');
  complete.forEach(slug => console.log(`  - ${slug}`));
}
