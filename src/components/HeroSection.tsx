import {
  Flame,
  ChevronDown,
  UtensilsCrossed,
  ShieldCheck,
  Bike,
  Users,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  onOpenOrderModal: () => void
}

export function HeroSection({ onOpenOrderModal }: HeroSectionProps) {
  const scrollToMenu = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()
    const targetElement = document.querySelector('#cardapio')
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
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-carvao-950"
    >
      {/* Background Image with optimized dark embers overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=brazilian+barbecue+flame+grill&color=black"
          alt="Churrasco na brasa e fogo de chão no Tudo na Brasa Belo Horizonte"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-1000"
          style={{ animationDuration: '8s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carvao-950 via-carvao-950/80 to-carvao-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-carvao-950/90 via-carvao-950/70 to-transparent" />
        {/* Subtle radial embers glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(231,76,60,0.18)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brasa-500/20 via-amber-500/20 to-brasa-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-black/50 backdrop-blur-md animate-fade-in-down">
          <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-flame" />
          <span>🔥 O melhor churrasco e hambúrguer de Belo Horizonte</span>
        </div>

        {/* H1 Title with SEO keywords */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
          Tudo na{' '}
          <span className="bg-gradient-to-r from-brasa-400 via-amber-400 to-brasa-500 bg-clip-text text-transparent">
            Brasa
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-amber-200/90 mb-4 max-w-3xl">
          O verdadeiro sabor do fogo de chão em BH
        </p>

        {/* SEO Descriptive Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
          Churrasco artesanal com carnes nobres selecionadas, hambúrgueres com blend 100% picanha e
          pizzas assadas na perfeição. Preparados na brasa de verdade com o carinho da culinária
          mineira em Belo Horizonte, MG.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <Button
            size="lg"
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto bg-brasa-500 hover:bg-brasa-600 text-white font-bold text-base px-8 py-6 rounded-xl glow-brasa transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center justify-center gap-2"
          >
            <Flame className="w-5 h-5 fill-white" />
            <span>Fazer Pedido Agora</span>
            <ExternalLink className="w-4 h-4 opacity-90" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToMenu}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold text-base px-8 py-6 rounded-xl backdrop-blur-sm transition-all hover:border-amber-400/50 flex items-center justify-center gap-2"
          >
            <UtensilsCrossed className="w-5 h-5 text-amber-400" />
            <span>Ver Cardápio & Preços</span>
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-3xl pt-6 border-t border-white/10">
          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="w-9 h-9 rounded-lg bg-brasa-500/20 flex items-center justify-center text-brasa-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white">Carnes Selecionadas</h4>
              <p className="text-[11px] text-gray-400">Blend 100% picanha e cortes nobres</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Bike className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white">Entrega Rápida em BH</h4>
              <p className="text-[11px] text-gray-400">Embalagem térmica que mantém o calor</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white">Ambiente Familiar</h4>
              <p className="text-[11px] text-gray-400">Castelo, Belo Horizonte - MG</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center">
          <a
            href="#cardapio"
            onClick={scrollToMenu}
            aria-label="Rolar para os destaques do cardápio"
            className="text-gray-400 hover:text-amber-400 transition-colors flex flex-col items-center gap-1 group"
          >
            <span className="text-xs tracking-wider uppercase font-medium text-gray-400 group-hover:text-amber-300">
              Conheça as delícias
            </span>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center animate-bounce group-hover:border-amber-400">
              <ChevronDown className="w-4 h-4 text-amber-400" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
