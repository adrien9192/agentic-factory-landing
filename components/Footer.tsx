export default function Footer() {
  return (
    <footer className="bg-factory-surface-dark text-white/70 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-2xl font-bold text-white mb-2">
              Agentic Factory
            </div>
            <p className="text-sm text-white/60 mb-4">
              Plug-and-play automation templates for n8n & Make.com.
              <br />
              Built by automation experts. No subscriptions.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/agenticfactory" className="text-white/60 hover:text-factory-orange transition-colors">
                X (Twitter)
              </a>
              <a href="#" className="text-white/60 hover:text-factory-orange transition-colors">
                Discord
              </a>
            </div>
          </div>

          {/* Templates */}
          <div>
            <div className="font-semibold text-white mb-3">Templates</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/60 hover:text-factory-orange transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-white/60 hover:text-factory-orange transition-colors">Services</a></li>
              <li><a href="#" className="text-white/60 hover:text-factory-orange transition-colors">B2B / SaaS</a></li>
              <li><a href="#templates" className="text-white/60 hover:text-factory-orange transition-colors">All Templates</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold text-white mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/60 hover:text-factory-orange transition-colors">About</a></li>
              <li><a href="#" className="text-white/60 hover:text-factory-orange transition-colors">Blog</a></li>
              <li><a href="mailto:contact@agenticfactory.com" className="text-white/60 hover:text-factory-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/60 hover:text-factory-orange transition-colors">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div>
            © 2026 Agentic Factory. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-factory-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-factory-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-factory-orange transition-colors">30-Day Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
