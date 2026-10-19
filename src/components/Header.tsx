import { useState, useEffect } from 'react'
import { Menu, X, MapPin, ExternalLink, Flame } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FlameLogo } from '@/components/FlameLogo'
import { RESTAURANT_INFO } from '@/data/restaurantData'

interface HeaderProps {
  onOpenOrderModal: () => void
}

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

export function Header({ onOpenOrderModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-carvao-900/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
          : 'bg-gradient-to-b from-carvao-950/90 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#inicio" onClick={(e) => handleNavLinkClick(e, '#inicio')} className="group">
          <FlameLogo size="md" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA & Location Badge */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-brasa-500" />
            <span>Belo Horizonte • MG</span>
          </div>

          <Button
            onClick={onOpenOrderModal}
            className="bg-brasa-500 hover:bg-brasa-600 text-white font-semibold px-4 sm:px-5 py-2 text-sm rounded-lg glow-brasa transition-all transform hover:scale-105 active:scale-95 gap-2"
          >
            <Flame className="w-4 h-4 fill-white" />
            <span>Pedir Agora</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            size="sm"
            onClick={onOpenOrderModal}
            className="bg-brasa-500 hover:bg-brasa-600 text-white text-xs px-3 py-1.5 font-semibold glow-brasa"
          >
            Pedir
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-carvao-900/98 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-amber-400 font-medium w-fit mb-2">
              <MapPin className="w-3.5 h-3.5 text-brasa-500" />
              <span>Castelo, Belo Horizonte • MG</span>
            </div>

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className="px-4 py-3 rounded-lg text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <Button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenOrderModal()
                }}
                className="w-full bg-brasa-500 hover:bg-brasa-600 text-white font-semibold py-3 rounded-lg glow-brasa flex items-center justify-center gap-2"
              >
                <Flame className="w-4 h-4 fill-white" />
                <span>Pedir no Menu Oficial</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Ou ligue para {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
