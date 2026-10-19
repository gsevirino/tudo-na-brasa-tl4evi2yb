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

  // Travar o scroll do body quando o drawer estiver aberto no mobile
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [mobileMenuOpen])

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-carvao-950/95 backdrop-blur-md border-b-2 border-brasa-500/40 shadow-xl py-3'
            : 'bg-gradient-to-b from-carvao-950 via-carvao-950/90 to-transparent py-4 sm:py-5'
        }`}
      >
        {/* Linha decorativa de topo inspirada no anel do selo */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-bege-300/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo oficial circular */}
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
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-bege-200 hover:bg-white/5 transition-all relative group/nav"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-brasa-500 scale-x-0 group-hover/nav:scale-x-100 transition-transform origin-center" />
              </a>
            ))}
          </nav>

          {/* Right CTA & Mini-Selo "Belo Horizonte • MG" */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Mini-selo circular retrô com anel duplo */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-carvao-900 border border-bege-300/30 text-xs font-medium text-bege-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brasa-500 ring-2 ring-white/60 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-brasa-400" />
              <span className="font-semibold tracking-wide">Belo Horizonte • MG</span>
            </div>

            <Button
              onClick={onOpenOrderModal}
              className="bg-brasa-500 hover:bg-brasa-600 text-white font-bold px-4 sm:px-5 py-2 text-sm rounded-xl glow-brasa border border-bege-300/30 transition-all transform hover:scale-105 active:scale-95 gap-2 shadow-lg"
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
              className="bg-brasa-500 hover:bg-brasa-600 text-white text-xs px-3.5 py-1.5 font-bold glow-brasa rounded-lg border border-bege-300/30"
            >
              Pedir
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer & Backdrop (z-50, tela inteira opaca e sem vazamento de fundo) */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-between">
          {/* Backdrop escuro com transição */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm -z-10 animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Painel do Drawer Mobile 100% Sólido e Opaco */}
          <div className="relative w-full max-h-[100dvh] bg-[#070707] border-b-2 border-brasa-500/50 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-y-auto flex flex-col animate-in slide-in-from-top duration-300">
            {/* Linha decorativa de topo */}
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-bege-300/60 to-transparent" />

            {/* Cabeçalho do Drawer: Logo + Botão Fechar (única aparição do logo, header coberto) */}
            <div className="px-5 py-3.5 bg-[#0d0d0d] border-b border-white/10 flex items-center justify-between gap-3">
              <FlameLogo size="sm" />

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenOrderModal()
                  }}
                  className="bg-brasa-500 hover:bg-brasa-600 text-white text-xs px-3.5 py-1.5 font-bold glow-brasa rounded-lg border border-bege-300/30"
                >
                  Pedir
                </Button>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
                  aria-label="Fechar menu de navegação"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Conteúdo do Drawer */}
            <div className="p-5 flex flex-col gap-4 bg-[#070707]">
              {/* Mini-selo de localização */}
              <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#121212] border border-bege-300/20">
                <div className="flex items-center gap-2 text-xs text-bege-200 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-brasa-400 shrink-0" />
                  <span>Castelo, Belo Horizonte • MG</span>
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                  Aberto hoje
                </span>
              </div>

              {/* Links de navegação com espaçamento e fundo sutil ao toque */}
              <nav className="flex flex-col gap-1.5 py-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavLinkClick(e, link.href)}
                    className="px-4 py-3 rounded-xl text-base font-semibold text-gray-100 hover:text-bege-200 hover:bg-[#161616] active:bg-[#1a1a1a] transition-all flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <span className="text-brasa-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </a>
                ))}
              </nav>

              {/* Ações e Contato */}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenOrderModal()
                  }}
                  className="w-full bg-brasa-500 hover:bg-brasa-600 text-white font-bold py-3.5 rounded-xl glow-brasa border border-bege-300/30 flex items-center justify-center gap-2 shadow-lg text-sm"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  <span>Pedir no Menu Oficial</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>

                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-center text-xs text-bege-200 hover:text-white font-medium bg-[#121212] hover:bg-[#181818] rounded-xl border border-white/5 transition-colors"
                >
                  Ou ligue para {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
