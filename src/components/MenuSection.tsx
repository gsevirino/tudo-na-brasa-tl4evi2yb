import { Flame, ShoppingCart, Sparkles, Tag, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MENU_HIGHLIGHTS, type MenuItem } from '@/data/restaurantData'

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void
  onOpenOrderModal: () => void
}

export function MenuSection({ onSelectItem, onOpenOrderModal }: MenuSectionProps) {
  return (
    <section id="cardapio" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-carvao-900 relative">
      {/* Luz ambiente de brasa no fundo */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brasa-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header com faixa/ribbon de estilo oficial */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          {/* Faixa bege curvada estilo "Carnes e Pizzas" */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 rounded-full ribbon-banner text-[11px] sm:text-xs font-bold mb-3 sm:mb-4 shadow-md border border-bege-100/50">
            <Flame className="w-3.5 h-3.5 text-brasa-600 fill-brasa-600 animate-flame shrink-0" />
            <span className="font-sans tracking-wide uppercase text-bege-950">
              Cardápio Oficial • Belo Horizonte
            </span>
          </div>

          <h2 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-2 sm:mb-3">
            Nossos{' '}
            <span className="font-script font-normal text-brasa-400 inline-block drop-shadow-[0_2px_10px_rgba(232,64,42,0.4)]">
              Destaques
            </span>
          </h2>

          {/* Sublinhado estilizado de faixa */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-gradient-to-r from-transparent to-bege-300" />
            <span className="font-script text-bege-300 text-base sm:text-lg">
              Receitas feitas na brasa viva
            </span>
            <span className="h-0.5 w-8 bg-gradient-to-l from-transparent to-bege-300" />
          </div>

          <p className="text-bege-100/90 text-base sm:text-lg leading-relaxed">
            Os pratos e combos mais pedidos do Tudo na Brasa em BH. Hambúrgueres artesanais com
            blend 100% de picanha, carnes nobres grelhadas na brasa e pizzas crocantes com sabor
            inconfundível.
          </p>
        </div>

        {/* 6 Responsive Dishes Grid com Cards em tom Creme/Bege Claro & Detalhes do Selo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {MENU_HIGHLIGHTS.map((item) => (
            <Card
              key={item.id}
              className="group bg-bege-50 border-2 border-bege-200/80 hover:border-brasa-500 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brasa-500/20 flex flex-col justify-between text-carvao-900"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-carvao-950">
                <img
                  src={item.imageUrl}
                  alt={`${item.name} - Tudo na Brasa BH`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                {/* Selos / Badges em Formato de Selo Circular Retrô & Faixa Bege */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                  {item.badge && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full ribbon-banner text-bege-950 font-bold text-xs shadow-md border border-bege-100/60">
                      <Sparkles className="w-3 h-3 text-brasa-600" />
                      <span>{item.badge}</span>
                    </div>
                  )}
                  {item.isPromo && (
                    <div
                      className="w-8 h-8 rounded-full bg-brasa-500 text-white flex items-center justify-center font-bold text-[10px] retro-seal shadow-lg"
                      title="Promoção"
                    >
                      <Tag className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>

                {/* Category indicator em faixa sutil */}
                <div className="absolute bottom-3 right-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-carvao-950/80 text-bege-200 backdrop-blur-sm border border-bege-300/30">
                    {item.category === 'burger'
                      ? 'Burger na Brasa'
                      : item.category === 'combo'
                        ? 'Combo Mineiro'
                        : 'Pizza Especial'}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col justify-between bg-bege-50">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-carvao-950 mb-2 group-hover:text-brasa-600 transition-colors flex items-center gap-1.5">
                    <span>{item.name}</span>
                  </h3>
                  <p className="text-sm text-bege-950/80 leading-relaxed mb-5 line-clamp-3 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-bege-200 mt-auto">
                  {/* Bloco de Preço com Faixa e Selo */}
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="flex items-baseline gap-2">
                      <div className="inline-flex items-center px-3 py-1 rounded-xl bg-brasa-500 text-white font-extrabold text-xl sm:text-2xl shadow-md border border-white/30">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </div>
                      {item.originalPrice && (
                        <span className="text-xs sm:text-sm text-gray-500 line-through font-semibold">
                          R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    {item.originalPrice && (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                        Economize R${' '}
                        {(item.originalPrice - item.price).toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>

                  <Button
                    onClick={() => onSelectItem(item)}
                    className="w-full bg-brasa-500 hover:bg-brasa-600 text-white font-bold rounded-xl py-3 glow-brasa border border-bege-300/40 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg transform active:scale-95 text-sm"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Adicionar ao Pedido</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner com borda anel duplo e faixa bege */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-3xl bg-carvao-800/90 border-2 border-bege-300/30 text-center flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 backdrop-blur-md shadow-2xl double-ring-card">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 font-script text-bege-300 text-base sm:text-xl mb-1">
              <span>Cardápio Completo Tudo na Brasa</span>
            </div>
            <h4 className="text-base sm:text-xl font-bold text-white mb-1">
              Deseja ver mais porções, bebidas, caldos e sobremesas?
            </h4>
            <p className="text-xs sm:text-sm text-gray-300">
              Nosso cardápio oficial conta com pudim de leite, brownie, massas gratinadas, chopp
              gelado e muito mais.
            </p>
          </div>
          <Button
            size="lg"
            onClick={onOpenOrderModal}
            className="w-full sm:w-auto ribbon-banner hover:brightness-105 text-bege-950 font-bold px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl transition-all transform hover:scale-105 shrink-0 gap-2 shadow-xl border border-white/50 text-sm sm:text-base flex items-center justify-center"
          >
            <span>Ver Cardápio Completo</span>
            <ArrowRight className="w-4 h-4 text-brasa-600 shrink-0" />
          </Button>
        </div>
      </div>
    </section>
  )
}
