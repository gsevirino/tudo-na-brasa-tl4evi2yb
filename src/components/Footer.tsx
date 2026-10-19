import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Flame,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react'
import { RESTAURANT_INFO } from '@/data/restaurantData'
import { FlameLogo } from '@/components/FlameLogo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      const headerOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-carvao-950 border-t-2 border-brasa-500/30 text-gray-300 pt-12 sm:pt-16 pb-24 sm:pb-12 relative overflow-hidden">
      {/* Faixa decorativa no topo inspirada no ribbon bege do logo */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brasa-600 via-bege-300 to-brasa-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-12">
          {/* Brand info com o selo oficial em destaque */}
          <div className="space-y-4">
            <FlameLogo size="lg" />
            <p className="text-sm text-gray-300 leading-relaxed">
              O verdadeiro sabor do churrasco na brasa e hambúrgueres artesanais de picanha em Belo
              Horizonte. Tradição mineira de fogo de chão desde 2003 no bairro Castelo.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-carvao-900 hover:bg-[#25D366] hover:text-white text-gray-300 flex items-center justify-center transition-all border border-bege-300/30 shadow-md"
                aria-label="WhatsApp do Tudo na Brasa"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-carvao-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-500 hover:text-white text-gray-300 flex items-center justify-center transition-all border border-bege-300/30 shadow-md"
                aria-label="Instagram do Tudo na Brasa"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-carvao-900 hover:bg-blue-600 hover:text-white text-gray-300 flex items-center justify-center transition-all border border-bege-300/30 shadow-md"
                aria-label="Facebook do Tudo na Brasa"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Flame className="w-4 h-4 text-brasa-500" />
              <span>Navegação Rápida</span>
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => scrollToAnchor(e, '#inicio')}
                  className="hover:text-bege-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs font-bold">›</span> Início
                </a>
              </li>
              <li>
                <a
                  href="#cardapio"
                  onClick={(e) => scrollToAnchor(e, '#cardapio')}
                  className="hover:text-bege-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs font-bold">›</span> Nossos Destaques
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => scrollToAnchor(e, '#sobre')}
                  className="hover:text-bege-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs font-bold">›</span> Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  onClick={(e) => scrollToAnchor(e, '#depoimentos')}
                  className="hover:text-bege-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs font-bold">›</span> Avaliações de Clientes
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => scrollToAnchor(e, '#contato')}
                  className="hover:text-bege-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs font-bold">›</span> Contato & Localização
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.officialMenuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bege-300 hover:text-white font-semibold flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-brasa-500" /> Menu Oficial Completo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and address */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brasa-500" />
              <span>Onde Estamos</span>
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brasa-500 shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_INFO.address.street}
                  <br />
                  Bairro {RESTAURANT_INFO.address.neighborhood} - {RESTAURANT_INFO.address.city}/
                  {RESTAURANT_INFO.address.state}
                  <br />
                  CEP: {RESTAURANT_INFO.address.cep}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brasa-500 shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phoneClean}`}
                  className="hover:text-bege-200 transition-colors font-medium"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-emerald-400">
                <MessageCircle className="w-4 h-4 shrink-0" />
                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-medium"
                >
                  (31) 3471-0222 (WhatsApp)
                </a>
              </p>
            </div>
          </div>

          {/* Opening hours & Trust */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-bege-300" />
              <span>Horário de Atendimento</span>
            </h3>
            <div className="p-4 rounded-2xl bg-carvao-900 border border-bege-300/20 space-y-2 double-ring-card">
              <p className="text-sm font-bold text-white">{RESTAURANT_INFO.hoursShort}</p>
              <p className="text-xs text-gray-400">
                Salão climatizado, retirada no balcão e delivery rápido para BH.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-bege-300 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Fogo aceso Terça a Domingo</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-bege-200/90 pt-1 font-medium">
              <ShieldCheck className="w-4 h-4 text-brasa-400" />
              <span>Garantia de carne nobre e brasa autêntica</span>
            </div>
          </div>
        </div>

        {/* Legal & CNPJ footer */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="text-center md:text-left space-y-1">
            <p className="font-semibold text-bege-200">
              {RESTAURANT_INFO.legalName} • CNPJ: {RESTAURANT_INFO.cnpj}
            </p>
            <p>© {currentYear} Tudo na Brasa. Tradição mineira desde 2003. Belo Horizonte - MG.</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={RESTAURANT_INFO.officialMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-bege-300 transition-colors font-medium"
            >
              Cardápio Digital
            </a>
            <span className="text-gray-700">•</span>
            <span className="text-gray-400">Política de Privacidade</span>
            <span className="text-gray-700">•</span>
            <span className="text-gray-400">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
