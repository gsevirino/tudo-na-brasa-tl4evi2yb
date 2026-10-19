import { Flame, Beef, HeartHandshake, Sparkles, MapPin } from 'lucide-react'
import { RESTAURANT_INFO } from '@/data/restaurantData'
import officialLogoImg from '@/assets/image-524a6.png'

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-carvao-950 relative overflow-hidden border-t border-b border-white/5"
    >
      {/* Background glow subtle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brasa-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Mosaic */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
              <img
                src="https://img.usecurling.com/p/800/700?q=steakhouse+restaurant+interior&color=orange"
                alt="Ambiente acolhedor e familiar do Tudo na Brasa em Belo Horizonte"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carvao-950 via-carvao-950/20 to-transparent" />
              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-carvao-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-brasa-500/20 border border-brasa-500/40 p-1 flex items-center justify-center shrink-0 shadow-lg">
                    <img
                      src={officialLogoImg}
                      alt="Selo oficial Tudo na Brasa"
                      className="w-full h-full object-contain rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">
                      Tradição & Brasa Viva
                    </h4>
                    <p className="text-xs text-gray-300">Ponto nobre no Castelo, Belo Horizonte</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-amber-400 font-extrabold text-lg sm:text-xl block">
                    Desde 2003
                  </span>
                  <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                    Autêntico
                  </span>
                </div>
              </div>{' '}
            </div>

            {/* Decorative element */}
            <div className="hidden sm:block absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-brasa-500/20 rounded-2xl -z-10 blur-xl" />
          </div>

          {/* Right Column: Institutional Story & Values */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>NOSSA HISTÓRIA E ESSÊNCIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              O autêntico sabor da brasa com hospitalidade mineira
            </h2>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Nascido no coração do bairro Castelo em Belo Horizonte, o{' '}
                <strong className="text-white">Tudo na Brasa</strong> foi concebido para quem não
                abre mão do aroma inconfundível do carvão incandescente e da carne grelhada no ponto
                exato.
              </p>
              <p>
                Trabalhamos com carnes nobres de procedência rigorosa, blends artesanais com 100% de
                picanha, queijos legítimos de Minas Gerais e temperos frescos. Aqui, cada hambúrguer
                e cada corte recebe o calor da brasa viva — sem atalhos, sem artifícios.
              </p>
              <p>
                Seja para reunir a família e os amigos em nosso salão aconchegante na{' '}
                <strong className="text-white">{RESTAURANT_INFO.address.street}</strong> ou para
                receber um combo fumegante no conforto da sua casa, nós levamos a melhor experiência
                gastronômica até você.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-brasa-500/20 flex items-center justify-center text-brasa-400 shrink-0">
                  <Beef className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Carnes Nobres</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Cortes selecionados e blend puro de picanha.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Flame className="w-5 h-5 animate-flame" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Brasa de Verdade</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Defumado autêntico com carvão e fogo vivo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Atendimento Familiar</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Calor humano e o acolhimento típico de Minas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Ambiente Aconchegante</h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Espaço perfeito para jantar com quem você ama.
                  </p>
                </div>
              </div>
            </div>

            {/* Local SEO badge */}
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400">
              <MapPin className="w-4 h-4 text-brasa-500 shrink-0" />
              <span>Orgulho de servir Belo Horizonte • Bairro Castelo • Pampulha e região</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
