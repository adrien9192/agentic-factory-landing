export default function Footer() {
  return (
    <footer className="bg-factory-surface-dark text-white/70 py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-white mb-2">
              Agentic Factory
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Templates d'automatisation clé-en-main pour n8n & Make.com.
              <br />
              Conçus par des experts. Pas d'abonnement.
            </p>
            <nav aria-label="Réseaux sociaux">
              <div className="flex gap-4">
                <a href="https://x.com/agenticfactory" className="text-white/60 hover:text-factory-orange transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur X (Twitter)">
                  X (Twitter)
                </a>
                <a href="#" className="text-white/60 hover:text-factory-orange transition-colors" aria-label="Rejoignez notre Discord">
                  Discord
                </a>
              </div>
            </nav>
          </div>

          {/* Templates */}
          <nav aria-label="Navigation des templates">
            <h4 className="font-semibold text-white mb-3">Templates</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#templates" className="text-white/60 hover:text-factory-orange transition-colors">E-commerce</a></li>
              <li><a href="#templates" className="text-white/60 hover:text-factory-orange transition-colors">Services</a></li>
              <li><a href="#templates" className="text-white/60 hover:text-factory-orange transition-colors">B2B / SaaS</a></li>
              <li><a href="#templates" className="text-white/60 hover:text-factory-orange transition-colors">Tous les Templates</a></li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Navigation de l'entreprise">
            <h4 className="font-semibold text-white mb-3">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#email-signup" className="text-white/60 hover:text-factory-orange transition-colors">À Propos</a></li>
              <li><a href="#email-signup" className="text-white/60 hover:text-factory-orange transition-colors">Blog</a></li>
              <li><a href="mailto:contact@agenticfactory.com" className="text-white/60 hover:text-factory-orange transition-colors">Contact</a></li>
              <li><a href="#email-signup" className="text-white/60 hover:text-factory-orange transition-colors">Affiliation</a></li>
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <div>© 2026 Agentic Factory. Tous droits réservés.</div>
          <nav aria-label="Navigation légale">
            <div className="flex gap-6">
              <a href="#email-signup" className="hover:text-factory-orange transition-colors">Confidentialité</a>
              <a href="#email-signup" className="hover:text-factory-orange transition-colors">CGV</a>
              <a href="#email-signup" className="hover:text-factory-orange transition-colors">Remboursement 30j</a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  )
}
