# Agentic Factory Design System

**Version:** 1.0
**Date:** 2026-02-03
**Agent:** ui-ux-designer (Opus)

---

## Design Direction

**Concept:** Industrial precision meets digital efficiency. Think factory floor signage + modern dashboard aesthetics. Bold, confident, no-nonsense - appeals to business owners who want results, not fluff.

---

## 1. Color Palette

### Primary Colors

| Role | Color | Hex | Tailwind | Usage |
|------|-------|-----|----------|-------|
| **Primary** | Deep Charcoal | `#1C1C1E` | `zinc-900` | Backgrounds, headers |
| **Secondary** | Warm Stone | `#E8E4DF` | Custom | Light backgrounds, cards |
| **Accent** | Signal Orange | `#FF6B35` | Custom | CTAs, highlights, prices |
| **Success** | Factory Green | `#2D936C` | Custom | Checkmarks, active states |

### Neutrals

| Role | Hex | Usage |
|------|-----|-------|
| Surface Light | `#F7F5F2` | Page background |
| Surface Dark | `#2A2A2C` | Dark sections |
| Text Primary | `#1C1C1E` | Headings |
| Text Secondary | `#5C5C5E` | Body text |
| Text Muted | `#8E8E93` | Captions |
| Border | `#D1CCC5` | Dividers, card borders |

### CSS Variables

```css
:root {
  --color-primary: #1C1C1E;
  --color-secondary: #E8E4DF;
  --color-accent: #FF6B35;
  --color-success: #2D936C;
  --color-surface: #F7F5F2;
  --color-text: #1C1C1E;
  --color-text-muted: #5C5C5E;
  --color-border: #D1CCC5;
}
```

### Tailwind Config Extension

```js
// tailwind.config.js
colors: {
  factory: {
    dark: '#1C1C1E',
    stone: '#E8E4DF',
    orange: '#FF6B35',
    green: '#2D936C',
    surface: '#F7F5F2',
  }
}
```

---

## 2. Typography

### Font Pairing

| Role | Font | Weight | Google Fonts Link |
|------|------|--------|-------------------|
| **Headings** | Space Grotesk | 500, 700 | `family=Space+Grotesk:wght@500;700` |
| **Body** | Source Sans 3 | 400, 600 | `family=Source+Sans+3:wght@400;600` |
| **Mono/Badges** | JetBrains Mono | 500 | `family=JetBrains+Mono:wght@500` |

**Why this pairing:** Space Grotesk has geometric precision (factory/automation feel) without being cold. Source Sans 3 is highly readable for body text. JetBrains Mono signals technical competence for pricing/code elements.

### Font Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&family=Source+Sans+3:wght@400;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Size | Line Height | Weight | Tailwind Classes |
|---------|------|-------------|--------|------------------|
| H1 | 56px / 3.5rem | 1.1 | 700 | `text-5xl md:text-6xl font-bold leading-tight` |
| H2 | 40px / 2.5rem | 1.2 | 700 | `text-3xl md:text-4xl font-bold leading-snug` |
| H3 | 24px / 1.5rem | 1.3 | 500 | `text-xl md:text-2xl font-medium` |
| Body | 18px / 1.125rem | 1.6 | 400 | `text-lg leading-relaxed` |
| Small | 14px / 0.875rem | 1.5 | 400 | `text-sm` |
| Badge | 13px / 0.8125rem | 1 | 500 | `text-xs font-mono font-medium` |

### CSS

```css
body {
  font-family: 'Source Sans 3', system-ui, sans-serif;
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--color-text);
}

h1, h2, h3, h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.font-mono, .badge, .price {
  font-family: 'JetBrains Mono', monospace;
}
```

---

## 3. Key Components

### Hero Section

**Background Treatment:** Subtle diagonal grid pattern on light surface

```css
.hero {
  background-color: #F7F5F2;
  background-image:
    linear-gradient(135deg, transparent 24%, #D1CCC5 25%, #D1CCC5 26%, transparent 27%),
    linear-gradient(225deg, transparent 24%, #D1CCC5 25%, #D1CCC5 26%, transparent 27%);
  background-size: 30px 30px;
}
```

**Hero Heading Style:**
```html
<h1 class="text-5xl md:text-6xl font-bold text-factory-dark leading-tight">
  Automation Templates<br>
  <span class="text-factory-orange">That Actually Work</span>
</h1>
```

**Hero Layout:** Left-aligned text (respects F-pattern), asymmetric 60/40 split

```html
<section class="hero py-24 md:py-32">
  <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-center">
    <div class="md:col-span-3">
      <!-- Heading + CTA -->
    </div>
    <div class="md:col-span-2">
      <!-- Visual/illustration -->
    </div>
  </div>
</section>
```

---

### Feature Cards

**Style:** Bordered cards with left accent stripe (industrial feel)

```html
<div class="bg-white border border-factory-border rounded-lg p-6
            relative overflow-hidden group hover:border-factory-orange
            transition-colors duration-200">
  <!-- Orange left accent -->
  <div class="absolute left-0 top-0 bottom-0 w-1 bg-factory-orange
              opacity-0 group-hover:opacity-100 transition-opacity"></div>

  <!-- Icon -->
  <div class="w-12 h-12 rounded-md bg-factory-dark flex items-center
              justify-center mb-4">
    <svg class="w-6 h-6 text-factory-orange">...</svg>
  </div>

  <!-- Content -->
  <h3 class="text-xl font-medium text-factory-dark mb-2">Feature Title</h3>
  <p class="text-factory-muted leading-relaxed">Description text here.</p>
</div>
```

**Icon Treatment:** Dark square container + orange icon (high contrast, distinctive)

---

### Template Preview Cards

**Style:** Product card with prominent pricing badge

```html
<div class="bg-white rounded-xl border border-factory-border overflow-hidden
            group hover:shadow-lg hover:-translate-y-1
            transition-all duration-300">

  <!-- Preview Image Area -->
  <div class="aspect-video bg-factory-stone relative overflow-hidden">
    <img src="..." class="object-cover group-hover:scale-105
                          transition-transform duration-500" />

    <!-- Price Badge (top-right) -->
    <div class="absolute top-3 right-3 bg-factory-dark text-white
                px-3 py-1.5 rounded-md font-mono text-sm font-medium">
      €49
    </div>
  </div>

  <!-- Card Content -->
  <div class="p-5">
    <h3 class="text-lg font-medium text-factory-dark mb-1">
      Template Name
    </h3>
    <p class="text-sm text-factory-muted mb-4">
      Short description of what it does.
    </p>

    <!-- Tags -->
    <div class="flex gap-2">
      <span class="text-xs font-mono bg-factory-stone px-2 py-1 rounded">
        n8n
      </span>
      <span class="text-xs font-mono bg-factory-stone px-2 py-1 rounded">
        email
      </span>
    </div>
  </div>
</div>
```

**Hover Effect:** Lift + shadow + subtle image zoom

---

### CTA Buttons

**Primary Button (Orange)**

```html
<button class="bg-factory-orange text-white font-semibold
               px-8 py-4 rounded-lg text-lg
               hover:bg-[#E55A2B] active:bg-[#CC4F26]
               transition-colors duration-150
               shadow-sm hover:shadow-md">
  Get This Template
</button>
```

**CSS:**
```css
.btn-primary {
  background-color: #FF6B35;
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  transition: all 150ms ease;
}

.btn-primary:hover {
  background-color: #E55A2B;
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}
```

**Secondary Button (Outlined)**

```html
<button class="border-2 border-factory-dark text-factory-dark font-semibold
               px-8 py-4 rounded-lg text-lg
               hover:bg-factory-dark hover:text-white
               transition-all duration-150">
  View All Templates
</button>
```

**Button Sizes:**
| Size | Padding | Font Size | Tailwind |
|------|---------|-----------|----------|
| Small | 8px 16px | 14px | `px-4 py-2 text-sm` |
| Medium | 12px 24px | 16px | `px-6 py-3 text-base` |
| Large | 16px 32px | 18px | `px-8 py-4 text-lg` |

---

## 4. Spacing System

**Base Unit:** 4px

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| `space-1` | 4px | `p-1` | Tight spacing |
| `space-2` | 8px | `p-2` | Icon gaps |
| `space-3` | 12px | `p-3` | Inline elements |
| `space-4` | 16px | `p-4` | Card padding (small) |
| `space-5` | 20px | `p-5` | Card padding |
| `space-6` | 24px | `p-6` | Card padding (large) |
| `space-8` | 32px | `p-8` | Section gaps |
| `space-12` | 48px | `p-12` | Section padding |
| `space-16` | 64px | `p-16` | Large sections |
| `space-24` | 96px | `p-24` | Hero/major sections |

### Layout Spacing

```css
/* Section padding */
.section {
  padding: 96px 24px; /* py-24 px-6 */
}

@media (min-width: 768px) {
  .section {
    padding: 128px 48px; /* md:py-32 md:px-12 */
  }
}

/* Component gaps */
.card-grid {
  gap: 24px; /* gap-6 */
}

/* Content max-width */
.container {
  max-width: 1280px; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 24px;
}
```

---

## 5. Quick Reference

### Color Classes (Tailwind Custom)

```html
<!-- Backgrounds -->
<div class="bg-factory-dark">...</div>
<div class="bg-factory-stone">...</div>
<div class="bg-factory-surface">...</div>
<div class="bg-factory-orange">...</div>

<!-- Text -->
<p class="text-factory-dark">...</p>
<p class="text-factory-muted">...</p>
<span class="text-factory-orange">...</span>

<!-- Borders -->
<div class="border border-factory-border">...</div>
```

### Typography Classes

```html
<h1 class="font-heading text-5xl md:text-6xl font-bold">...</h1>
<h2 class="font-heading text-3xl md:text-4xl font-bold">...</h2>
<h3 class="font-heading text-xl md:text-2xl font-medium">...</h3>
<p class="font-body text-lg leading-relaxed">...</p>
<span class="font-mono text-sm">€49</span>
```

### Component Patterns

```html
<!-- Card with hover -->
class="bg-white border border-factory-border rounded-lg p-6
       hover:border-factory-orange hover:shadow-md
       transition-all duration-200"

<!-- Orange accent stripe (add to any element) -->
class="relative overflow-hidden"
  <div class="absolute left-0 top-0 bottom-0 w-1 bg-factory-orange"></div>

<!-- Price badge -->
class="bg-factory-dark text-white font-mono text-sm px-3 py-1.5 rounded-md"

<!-- Tag/chip -->
class="text-xs font-mono bg-factory-stone text-factory-dark px-2 py-1 rounded"
```

---

## Design Rationale Summary

| Decision | Why |
|----------|-----|
| **Deep charcoal + orange** | Industrial/factory vibe, NOT generic SaaS blue/purple. Orange signals action/urgency for purchases. |
| **Space Grotesk headings** | Geometric precision = automation/efficiency. Distinctive but readable. |
| **Left-aligned hero** | Respects F-pattern reading (NN Group). Business owners scan, don't linger. |
| **Bordered cards with accent stripe** | Industrial aesthetic. More distinctive than drop shadows. |
| **Monospace for prices** | Signals technical competence. Makes pricing feel precise/calculated. |
| **€49 price point styling** | Dark badge with mono font = premium but accessible, not discount-bin energy. |

---

**Created by:** ui-ux-designer agent (Opus)
**Date:** 2026-02-03
**Ready for:** frontend-developer implementation
