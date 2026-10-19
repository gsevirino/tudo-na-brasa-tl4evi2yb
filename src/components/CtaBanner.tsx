import { ExternalLink, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import officialLogoImg from '@/assets/image-524a6.png'

interface CtaBannerProps {
  onOpenOrderModal: () => void
}

export function CtaBanner({ onOpenOrderModal }: CtaBannerProps) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brasa-600 via-brasa-500 to-amber-600" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2)_0%,_transparent_60%)]" />

      {/* Floating particles background effect */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/20 backdrop-blur-md border border-white/30 p-1 flex items-center justify-center mb-6 shadow-2xl transition-transform hover:scale-105">
          <img
            src={officialLogoImg}
            alt="Logo oficial Tudo na Brasa"
            className="w-full h-full object-contain rounded-full drop-shadow-md"
          />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Pronto para sentir o sabor do fogo de chão?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed font-medium">
          Hambúrguer artesanal, combos mineiros, carnes na brasa e pizzas crocantes esperando por
          você. Peça agora mesmo pelo cardápio oficial!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto bg-white hover:bg-amber-50 text-carvao-900 font-extrabold text-base sm:text-lg px-8 py-6 rounded-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all gap-2"
          >
            <span>Fazer Meu Pedido Agora</span>
            <ArrowRight className="w-5 h-5 text-brasa-500" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto bg-black/20 hover:bg-black/30 text-white border-white/30 font-semibold text-base px-6 py-6 rounded-2xl backdrop-blur-sm transition-all"
          >
            <a
              href="https://www.tudonabrasa.com.br/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <span>Acessar Menu Digital</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <p className="text-xs text-white/80 mt-6 font-medium">
          ⏰ Entrega rápida para toda a região de BH • Atendimento das 18h às 23h
        </p>
      </div>
    </section>
  )
}
