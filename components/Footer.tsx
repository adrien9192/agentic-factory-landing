export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="text-2xl font-bold font-display text-white mb-2">
              Agentic Factory
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Production-ready automation templates for n8n & Make.com.
              <br />
              Built by automation experts. Tested with real integrations.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/agenticfactory" className="text-gray-400 hover:text-white transition-colors">
                X (Twitter)
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Discord
              </a>
            </div>
          </div>

          {/* Templates */}
          <div>
            <div className="font-semibold text-white mb-3">Templates</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">B2B / SaaS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">All Templates</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold text-white mb-3">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Affiliates</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            © 2026 Agentic Factory. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
