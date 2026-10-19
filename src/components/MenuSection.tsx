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
    <section id="cardapio" className="py-20 px-4 sm:px-6 lg:px-8 bg-carvao-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brasa-500/15 border border-brasa-500/30 text-brasa-400 text-xs font-semibold mb-3">
            <Flame className="w-3.5 h-3.5 fill-brasa-400 animate-flame" />
            <span>CARDÁPIO OFICIAL • BELO HORIZONTE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Nossos <span className="text-brasa-400">Destaques</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Os pratos e combos mais pedidos do Tudo na Brasa em BH. Hambúrgueres artesanais de
            picanha, carnes nobres grelhadas na brasa e pizzas com sabor inconfundível.
          </p>
        </div>

        {/* 6 Responsive Dishes Grid (3 Desktop, 2 Tablet, 1 Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MENU_HIGHLIGHTS.map((item) => (
            <Card
              key={item.id}
              className="group bg-carvao-800/90 border-white/10 hover:border-brasa-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brasa-500/20 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-black/40">
                <img
                  src={item.imageUrl}
                  alt={`${item.name} - Tudo na Brasa BH`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carvao-800 via-transparent to-black/30" />

                {/* Badge top tags */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  {item.badge && (
                    <Badge className="bg-amber-500 text-black font-bold text-xs px-2.5 py-0.5 border-none shadow-md">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {item.badge}
                    </Badge>
                  )}
                  {item.isPromo && (
                    <Badge className="bg-brasa-500 text-white font-bold text-xs px-2.5 py-0.5 border-none shadow-md">
                      <Tag className="w-3 h-3 mr-1" />
                      Promoção
                    </Badge>
                  )}
                </div>

                {/* Category indicator */}
                <div className="absolute bottom-3 right-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/60 text-gray-300 backdrop-blur-sm border border-white/10">
                    {item.category === 'burger'
                      ? 'Burger na Brasa'
                      : item.category === 'combo'
                        ? 'Combo Mineiro'
                        : 'Pizza Especial'}
                  </span>
                </div>
              </div>

              <CardContent className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                      )}
                    </div>
                    {item.originalPrice && (
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        Economize R${' '}
                        {(item.originalPrice - item.price).toFixed(2).replace('.', ',')}
                      </span>
                    )}
                  </div>

                  <Button
                    onClick={() => onSelectItem(item)}
                    className="w-full bg-brasa-500 hover:bg-brasa-600 text-white font-semibold rounded-xl py-2.5 glow-brasa transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Adicionar ao Pedido</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Banner linking to full menu */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/15 text-center flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Deseja ver mais porções, bebidas, caldos e sobremesas?
            </h4>
            <p className="text-sm text-gray-300">
              Nosso cardápio completo conta com pudim de leite, brownie, massas gratinadas, chopp
              gelado e muito mais.
            </p>
          </div>
          <Button
            size="lg"
            onClick={onOpenOrderModal}
            className="bg-white hover:bg-gray-100 text-carvao-900 font-bold px-6 py-3 rounded-xl transition-all transform hover:scale-105 shrink-0 gap-2 shadow-lg"
          >
            <span>Ver Cardápio Completo</span>
            <ArrowRight className="w-4 h-4 text-brasa-500" />
          </Button>
        </div>
      </div>
    </section>
  )
}
