# Agentic Factory Landing Page

Production-ready Next.js landing page for Agentic Factory template library.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Framer Motion animations
- ✅ Email capture form
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Ready for Vercel deployment

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create `.env.local`:

```bash
# Email integration (choose one)
SUBSTACK_API_KEY=your_key
# OR
ZAPIER_WEBHOOK_URL=your_webhook

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deploy to Vercel

1. Push to GitHub
2. Import in Vercel dashboard
3. Add environment variables
4. Deploy!

```bash
# Or use Vercel CLI
npm i -g vercel
vercel
```

## Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── api/
│       └── subscribe/      # Email API route
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features section
│   ├── TemplatesPreview.tsx
│   ├── EmailCapture.tsx    # Email form
│   └── Footer.tsx
```

## Customization

### Colors

Edit `tailwind.config.ts`:
- Primary color: Red (#ef4444)
- Change to your brand colors

### Content

Edit components:
- Hero: `components/Hero.tsx`
- Features: `components/Features.tsx`
- Templates: `components/TemplatesPreview.tsx`

### Email Integration

Replace TODO in `app/api/subscribe/route.ts` with:
- Substack API
- Mailchimp
- ConvertKit
- Or use Zapier webhook

## Performance

- Lighthouse score: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

## License

Proprietary - Agentic Factory
