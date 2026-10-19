import { ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import officialLogoImg from '@/assets/image-524a6.png'

interface CtaBannerProps {
  onOpenOrderModal: () => void
}

export function CtaBanner({ onOpenOrderModal }: CtaBannerProps) {
  return (
    <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic gradient background derivado do vermelho oficial e areia do logo */}
      <div className="absolute inset-0 bg-gradient-to-r from-brasa-700 via-brasa-500 to-brasa-600" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(223,192,145,0.35)_0%,_transparent_65%)]" />

      {/* Faixas decorativas de anel concêntrico de fundo */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full border-4 border-white/10 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-4 border-white/10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Selo circular retrô no banner com anel duplo */}
        <div className="w-18 h-18 sm:w-28 sm:h-28 rounded-full p-1 sm:p-1.5 retro-seal flex items-center justify-center mb-5 sm:mb-6 shadow-2xl transition-transform hover:scale-105">
          <img
            src={officialLogoImg}
            alt="Logo oficial Tudo na Brasa"
            className="w-full h-full object-contain rounded-full shadow-inner"
          />
        </div>

        {/* Faixa bege curvada estilo "Carnes e Pizzas" */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 rounded-full ribbon-banner text-[11px] sm:text-xs font-bold mb-3 sm:mb-4 shadow-xl border border-bege-100/50">
          <span className="font-sans text-bege-950 font-bold tracking-wide uppercase">
            Desde 2003 • Pedido Online Direto
          </span>
        </div>

        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-3 sm:mb-4 drop-shadow-md">
          Pronto para sentir o verdadeiro sabor da{' '}
          <span className="font-script font-normal text-bege-200 inline-block drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            Brasa Viva?
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-bege-100/95 max-w-2xl mb-8 leading-relaxed font-medium">
          Hambúrguer artesanal de picanha, combos mineiros, carnes nobres e pizzas crocantes
          esperando por você. Peça agora mesmo pelo cardápio oficial!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto ribbon-banner hover:brightness-105 text-bege-950 font-black text-base sm:text-lg px-8 py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all gap-2 border border-white/60"
          >
            <span>Fazer Meu Pedido Agora</span>
            <ArrowRight className="w-5 h-5 text-brasa-700" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto bg-carvao-950/70 hover:bg-carvao-950 text-white border-2 border-white/40 font-bold text-base px-6 py-6 rounded-2xl backdrop-blur-sm transition-all shadow-xl"
          >
            <a
              href="https://www.tudonabrasa.com.br/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Acessar Menu Digital</span>
              <ExternalLink className="w-4 h-4 text-bege-300" />
            </a>
          </Button>
        </div>

        <p className="text-xs text-bege-100/80 mt-6 font-semibold tracking-wide">
          ⏰ Entrega rápida para toda a região de BH • Atendimento das 18h às 23h
        </p>
      </div>
    </section>
  )
}
