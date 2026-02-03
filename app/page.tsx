import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TemplatesPreview from '@/components/TemplatesPreview'
import ReviewsSection from '@/components/ReviewsSection'
import EmailCapture from '@/components/EmailCapture'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <TemplatesPreview />
      <ReviewsSection />
      <EmailCapture />
      <Footer />
    </main>
  )
}
