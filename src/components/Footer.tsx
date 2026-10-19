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
    <footer className="bg-carvao-950 border-t border-white/10 text-gray-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand info */}
          <div className="space-y-4">
            <FlameLogo size="lg" />
            <p className="text-sm text-gray-400 leading-relaxed">
              O verdadeiro sabor do churrasco na brasa e hambúrgueres artesanais de picanha em Belo
              Horizonte. Ingredientes selecionados, carnes nobres e tradição mineira que conquista
              no primeiro pedaço.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] hover:text-white text-gray-300 flex items-center justify-center transition-all border border-white/10"
                aria-label="WhatsApp do Tudo na Brasa"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-500 hover:text-white text-gray-300 flex items-center justify-center transition-all border border-white/10"
                aria-label="Instagram do Tudo na Brasa"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600 hover:text-white text-gray-300 flex items-center justify-center transition-all border border-white/10"
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
              Navegação Rápida
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => scrollToAnchor(e, '#inicio')}
                  className="hover:text-brasa-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs">›</span> Início
                </a>
              </li>
              <li>
                <a
                  href="#cardapio"
                  onClick={(e) => scrollToAnchor(e, '#cardapio')}
                  className="hover:text-brasa-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs">›</span> Nossos Destaques
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => scrollToAnchor(e, '#sobre')}
                  className="hover:text-brasa-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs">›</span> Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  onClick={(e) => scrollToAnchor(e, '#depoimentos')}
                  className="hover:text-brasa-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs">›</span> Avaliações de Clientes
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => scrollToAnchor(e, '#contato')}
                  className="hover:text-brasa-400 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-brasa-500 text-xs">›</span> Contato & Localização
                </a>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.officialMenuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Menu Oficial Completo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact and address */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brasa-500" />
              Onde Estamos
            </h3>
            <div className="space-y-3 text-sm text-gray-400">
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
                  className="hover:text-white transition-colors"
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
                  className="hover:underline"
                >
                  (31) 3471-0222 (WhatsApp)
                </a>
              </p>
            </div>
          </div>

          {/* Opening hours & Trust */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base tracking-wide flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              Horário de Atendimento
            </h3>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <p className="text-sm font-semibold text-white">{RESTAURANT_INFO.hoursShort}</p>
              <p className="text-xs text-gray-400">
                Salão, retirada no balcão e delivery para toda a região de Belo Horizonte.
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-amber-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Fogo aceso Terça a Domingo</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Garantia de carne fresca e brasa autêntica</span>
            </div>
          </div>
        </div>

        {/* Legal & CNPJ footer */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="text-center md:text-left space-y-1">
            <p className="font-medium text-gray-300">
              {RESTAURANT_INFO.legalName} • CNPJ: {RESTAURANT_INFO.cnpj}
            </p>
            <p>© {currentYear} Tudo na Brasa. Todos os direitos reservados. Belo Horizonte - MG.</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={RESTAURANT_INFO.officialMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
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
