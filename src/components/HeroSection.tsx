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
      className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-carvao-950"
    >
      {/* Background Image with warm red/charcoal atmospheric overlay derived from official seal */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=brazilian+barbecue+flame+grill&color=black"
          alt="Churrasco na brasa e fogo de chão no Tudo na Brasa Belo Horizonte"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Overlay em tons de vermelho escuro/carvão do selo */}
        <div className="absolute inset-0 bg-gradient-to-t from-carvao-950 via-carvao-950/85 to-carvao-950/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-carvao-950 via-brasa-950/40 to-carvao-950" />
        {/* Embers glow vermelho do selo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,64,42,0.25)_0%,_transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge do topo em formato de faixa bege curvada com texto marrom escuro */}
        <div className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full ribbon-banner font-script text-[11px] sm:text-sm font-normal mb-6 sm:mb-8 shadow-2xl transition-transform hover:scale-105 animate-fade-in-down border border-bege-100/50 max-w-full">
          <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brasa-600 fill-brasa-600 animate-flame shrink-0" />
          <span className="font-semibold text-bege-950 font-sans tracking-wide truncate sm:whitespace-normal">
            Desde 2003 • O Autêntico Sabor do Fogo de Chão em BH
          </span>
          <span className="hidden sm:inline font-script text-brasa-700 text-sm ml-1">
            Carnes e Pizzas
          </span>
        </div>

        {/* H1 Title with mixed Script + Bold Display (igual à marca do selo oficial) */}
        <div className="mb-3 w-full">
          <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-md">
            Tudo na{' '}
            <span className="font-script font-normal text-brasa-400 inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300 drop-shadow-[0_4px_20px_rgba(232,64,42,0.6)]">
              Brasa
            </span>
          </h1>
          {/* Faixa decorativa horizontal com curvatura sutil sob o título */}
          <div className="flex items-center justify-center gap-2 mt-2">
            <span className="h-0.5 w-6 sm:w-20 bg-gradient-to-r from-transparent to-bege-300" />
            <span className="font-script text-bege-200 text-base sm:text-2xl tracking-wide">
              Carnes & Pizzas na Brasa
            </span>
            <span className="h-0.5 w-6 sm:w-20 bg-gradient-to-l from-transparent to-bege-300" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-2xl md:text-3xl font-semibold text-bege-100/90 mb-3 sm:mb-4 max-w-3xl leading-snug">
          Churrascaria & Pizzaria Artesanal no Bairro Castelo
        </p>

        {/* SEO Descriptive Paragraph */}
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed mb-8">
          Carnes nobres rigorosamente selecionadas, hambúrgueres artesanais de picanha e pizzas com
          massa crocante assadas na brasa viva. O aconchego e hospitalidade da culinária mineira em
          BH.
        </p>

        {/* Dual CTAs no estilo do selo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10 sm:mb-14">
          <Button
            size="lg"
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto bg-brasa-500 hover:bg-brasa-600 text-white font-bold text-base px-6 sm:px-8 py-5 sm:py-6 rounded-2xl glow-brasa border-2 border-white/20 transition-all transform hover:scale-105 active:scale-95 shadow-2xl flex items-center justify-center gap-2.5"
          >
            <Flame className="w-5 h-5 fill-white shrink-0" />
            <span>Fazer Pedido Agora</span>
            <ExternalLink className="w-4 h-4 opacity-90 shrink-0" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={scrollToMenu}
            className="w-full sm:w-auto bg-carvao-900/80 hover:bg-carvao-800 text-bege-100 border-2 border-bege-300/50 hover:border-bege-300 font-bold text-base px-6 sm:px-8 py-5 sm:py-6 rounded-2xl backdrop-blur-sm transition-all flex items-center justify-center gap-2.5 shadow-lg"
          >
            <UtensilsCrossed className="w-5 h-5 text-bege-300 shrink-0" />
            <span>Ver Cardápio & Preços</span>
          </Button>
        </div>

        {/* Selos Circulares Retrô de Confiança (anel duplo estilo do selo oficial) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl pt-8 border-t border-bege-300/20">
          {/* Selo 1: Carnes Selecionadas */}
          <div className="flex items-center justify-center sm:justify-start gap-3.5 p-3.5 rounded-2xl bg-carvao-900/80 border border-white/10 shadow-lg group hover:border-brasa-500/40 transition-colors">
            {/* Selo circular retrô com anel duplo */}
            <div className="relative w-12 h-12 rounded-full bg-brasa-500 text-white flex items-center justify-center shrink-0 retro-seal transition-transform group-hover:scale-105">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Carnes Selecionadas
              </h4>
              <p className="text-[11px] text-bege-200/80">Blend 100% picanha e cortes nobres</p>
            </div>
          </div>

          {/* Selo 2: Entrega Rápida em BH */}
          <div className="flex items-center justify-center sm:justify-start gap-3.5 p-3.5 rounded-2xl bg-carvao-900/80 border border-white/10 shadow-lg group hover:border-bege-400/40 transition-colors">
            <div className="relative w-12 h-12 rounded-full bg-bege-500 text-bege-950 flex items-center justify-center shrink-0 retro-seal-bege transition-transform group-hover:scale-105">
              <Bike className="w-6 h-6 text-bege-950" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Entrega Rápida em BH
              </h4>
              <p className="text-[11px] text-bege-200/80">Embalagem térmica que mantém o calor</p>
            </div>
          </div>

          {/* Selo 3: Ambiente Familiar */}
          <div className="flex items-center justify-center sm:justify-start gap-3.5 p-3.5 rounded-2xl bg-carvao-900/80 border border-white/10 shadow-lg group hover:border-emerald-500/40 transition-colors">
            <div className="relative w-12 h-12 rounded-full bg-brasa-600 text-white flex items-center justify-center shrink-0 retro-seal transition-transform group-hover:scale-105">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">
                Ambiente Familiar
              </h4>
              <p className="text-[11px] text-bege-200/80">Castelo, Belo Horizonte - MG</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center">
          <a
            href="#cardapio"
            onClick={scrollToMenu}
            aria-label="Rolar para os destaques do cardápio"
            className="text-gray-400 hover:text-bege-300 transition-colors flex flex-col items-center gap-1.5 group"
          >
            <span className="text-xs tracking-wider uppercase font-semibold text-bege-200/80 group-hover:text-bege-200">
              Conheça as Delícias na Brasa
            </span>
            <div className="w-8 h-8 rounded-full border border-bege-300/30 flex items-center justify-center animate-bounce group-hover:border-bege-300">
              <ChevronDown className="w-4 h-4 text-bege-300" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
