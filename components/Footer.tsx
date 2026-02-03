import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-factory-surface-dark text-gray-300 py-12 border-t border-factory-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-2xl font-bold font-heading text-white mb-2">
              Agentic Factory
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Templates n8n testes 50+ fois. 15 min deploiement vs 6-8h debugging.
              <br />
              ROI 300-600% prouve. Garantie 30 jours.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/agenticfactory" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-factory-orange transition-colors">
                X (Twitter)
              </a>
              <a href="#" className="text-gray-400 hover:text-factory-orange transition-colors">
                Discord
              </a>
            </div>
          </div>

          {/* Templates */}
          <nav aria-label="Navigation des templates">
            <h4 className="font-semibold text-white mb-3">Templates</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/templates?category=ecommerce" className="text-gray-400 hover:text-factory-orange transition-colors">E-commerce</Link></li>
              <li><Link href="/templates?category=services" className="text-gray-400 hover:text-factory-orange transition-colors">Services</Link></li>
              <li><Link href="/templates?category=b2b" className="text-gray-400 hover:text-factory-orange transition-colors">B2B / SaaS</Link></li>
              <li><Link href="/templates" className="text-gray-400 hover:text-factory-orange transition-colors">Tous les Templates</Link></li>
            </ul>
          </nav>

          {/* Company */}
          <div>
            <div className="font-semibold text-white mb-3">Pages</div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/pricing" className="text-gray-400 hover:text-factory-orange transition-colors">Pricing</Link></li>
              <li><Link href="/#features" className="text-gray-400 hover:text-factory-orange transition-colors">Pourquoi Nous?</Link></li>
              <li><a href="mailto:digitalaine@gmail.com" className="text-gray-400 hover:text-factory-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-factory-orange transition-colors">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-factory-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            © 2026 Agentic Factory by DigitalAine SAS. Tous droits reserves.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-factory-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-factory-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-factory-orange transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
