# 📄 Système de Pages Workflow - Documentation

## 🎯 Architecture

Le système utilise **une seule source de vérité** : les fiches produits en markdown dans `/Users/digitalaine/Desktop/Claude_Workspace/inputs/fiches_produits/`.

### Flux de données

```
Fiches produits (markdown)
    ↓
    ↓ npm run sync
    ↓
JSON templates (public/templates/*.json)
    ↓
    ↓ Next.js build
    ↓
Pages web (/templates/[slug])
```

## 🛠️ Modifier le contenu des pages

### Option 1 : Modifier les fiches produits (recommandé)

1. **Éditez le markdown** dans `/Users/digitalaine/Desktop/Claude_Workspace/inputs/fiches_produits/`
   - Exemple : `tracker-nutrition-telegram.md`

2. **Lancez la synchronisation** :
   ```bash
   npm run sync
   ```

3. **Vérifiez et déployez** :
   ```bash
   npm run build
   git add -A
   git commit -m "update: Mise à jour des fiches produits"
   git push origin master
   ```

### Option 2 : Modifier directement les JSON (déconseillé)

Modifiez `public/templates/<slug>.json` → section `metadata.sections`

## 📋 Structure des sections

Chaque workflow peut avoir jusqu'à 6 sections :

### 1. **Why** (Pourquoi) 🎯
- **Apparence** : Fond orange dégradé, bordure orange
- **Contenu** : Problème résolu, bénéfices immédiats
- **Markdown** : Section `## 🎯 Pourquoi...`

### 2. **Description** (Comment ça marche) 📋
- **Apparence** : Fond gris clair, bordure standard
- **Contenu** : Explication du fonctionnement, blocs logiques
- **Markdown** : Section `## 📋 Description...`

### 3. **Installation** 🛠️
- **Apparence** : Fond gris clair, liste numérotée stylée
- **Contenu** : Étapes d'installation, prérequis
- **Markdown** : Section `## 🛠️ Tuto d'installation...`

### 4. **Usage** (Cas d'utilisation) 🚀
- **Apparence** : Fond blanc, bordure standard
- **Contenu** : Scénarios concrets, exemples d'usage
- **Markdown** : Section `## 🚀 Tuto d'utilisation...`

### 5. **Tips** (Conseils de pro) 💡
- **Apparence** : Fond noir, texte blanc
- **Contenu** : Astuces avancées, optimisations
- **Markdown** : Section `## 💡 Conseils de pro...`

### 6. **Learning** (Ce que tu vas apprendre) 🎓
- **Apparence** : Fond orange dégradé léger, bordure standard
- **Contenu** : Compétences acquises, liste des apprentissages
- **Markdown** : Section `## 🎓 Ce que tu vas apprendre...`

## 🔄 Ajouter un nouveau workflow

### 1. Créer la fiche produit

Créez un fichier markdown dans `/inputs/fiches_produits/` :

```markdown
# 🔥 Titre du Workflow

## 🎯 Pourquoi ce workflow va te sauver la vie

[Contenu problème/solution...]

## 📋 Description : comment ça marche

[Contenu technique...]

## 🛠️ Tuto d'installation (5 minutes max)

### Prérequis
- [ ] Checklist item 1
- [ ] Checklist item 2

### Étapes
[Instructions...]

## 🚀 Tuto d'utilisation : cas concrets

### Scénario 1 : ...
[Exemple...]

## 💡 Conseils de pro

[Astuces...]

## 🎓 Ce que tu vas apprendre

✅ Compétence 1
✅ Compétence 2
```

### 2. Créer le fichier JSON

Placez le workflow JSON dans `public/templates/<slug>.json` :

```json
{
  "metadata": {
    "id": "013",
    "slug": "mon-nouveau-workflow",
    "title_fr": "Mon Nouveau Workflow",
    "description_short_fr": "Description courte pour la carte",
    "category": "AI",
    "complexity": "Beginner",
    "nodes_count": 10,
    "tags_fr": ["tag1", "tag2"]
  },
  "workflow_json": { ... }
}
```

### 3. Mettre à jour le mapping

Éditez `scripts/sync-product-sheets.js` et ajoutez :

```javascript
const SLUG_MAPPING = {
  // ... autres mappings
  'mon-nouveau-workflow.md': 'mon-nouveau-workflow',
};
```

### 4. Synchroniser et déployer

```bash
npm run sync
npm run build
git add -A
git commit -m "feat: Ajout du workflow Mon Nouveau Workflow"
git push origin master
```

## 🎨 Personnaliser le design

### Modifier les styles des sections

Éditez `app/templates/[slug]/page.tsx` :

```tsx
{/* Exemple : modifier la section Why */}
<section className="py-12">
  <div className="max-w-5xl mx-auto px-6">
    <div className="bg-gradient-to-br from-factory-orange/5 to-factory-orange/10 rounded-lg border border-factory-orange/20 p-8">
      {/* Contenu */}
    </div>
  </div>
</section>
```

### Classes Tailwind utilisées

- **Backgrounds** : `bg-white`, `bg-factory-surface`, `bg-factory-dark`
- **Gradients** : `bg-gradient-to-br from-factory-orange/5 to-factory-orange/10`
- **Borders** : `border border-factory-border`, `border-factory-orange/20`
- **Text** : `text-factory-text-secondary`, `prose`, `prose-invert`

## 🚀 Commandes disponibles

```bash
npm run dev           # Développement local (localhost:3000)
npm run build         # Build de production
npm run sync          # Synchronise markdown → JSON
npm run lint          # Linting du code
```

## 🔍 Debugging

### Les sections n'apparaissent pas ?

1. Vérifiez que le markdown est bien parsé :
   ```bash
   npm run sync
   ```

2. Vérifiez le JSON généré :
   ```bash
   cat public/templates/<slug>.json | jq '.metadata.sections'
   ```

3. Vérifiez que le build fonctionne :
   ```bash
   npm run build
   ```

### Le style ne s'applique pas ?

- Vérifiez les classes Tailwind dans `app/templates/[slug]/page.tsx`
- Lancez `npm run dev` pour voir les erreurs en temps réel

## 📦 Structure des fichiers

```
landing-page/
├── app/templates/[slug]/page.tsx    # Template de page (modifie ici pour design)
├── public/templates/                # JSON des workflows (généré par sync)
│   ├── index.json
│   └── *.json
├── scripts/
│   └── sync-product-sheets.js       # Script de synchronisation
└── package.json                     # Commandes npm
```

## 💡 Bonnes pratiques

1. **Toujours modifier le markdown d'abord**, jamais le JSON directement
2. **Lancer `npm run sync`** après chaque modification de markdown
3. **Tester localement** avec `npm run dev` avant de déployer
4. **Commit atomiques** : un workflow = un commit
5. **Messages de commit clairs** : `feat: Ajout workflow X`, `fix: Correction section Y`

## 🎓 Pour aller plus loin

### Ajouter une nouvelle section

1. Modifier le parser dans `scripts/sync-product-sheets.js`
2. Ajouter la section dans l'interface TypeScript (`app/templates/[slug]/page.tsx`)
3. Ajouter le rendu dans le template JSX

### Changer l'ordre des sections

Réorganiser les blocs JSX dans `app/templates/[slug]/page.tsx`

### Ajouter des images dans les sections

Placer les images dans `public/images/workflows/` et les référencer dans le markdown :

```markdown
![Description](../../images/workflows/mon-image.png)
```

---

✨ **Système créé le 2026-02-03** par Claude Sonnet 4.5
