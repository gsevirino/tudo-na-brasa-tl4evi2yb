import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'
import { RESTAURANT_INFO, type MenuItem } from '@/data/restaurantData'
import officialLogoImg from '@/assets/image-524a6.png'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  item?: MenuItem | null
}

export function OrderModal({ isOpen, onClose, item }: OrderModalProps) {
  const handleProceed = () => {
    window.open(RESTAURANT_INFO.officialMenuUrl, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[92vw] max-w-md max-h-[90dvh] overflow-y-auto bg-carvao-950 border-2 border-bege-300/40 text-white shadow-2xl animate-in zoom-in-95 duration-200 rounded-3xl double-ring-card p-5 sm:p-6">
        <DialogHeader className="space-y-2.5 sm:space-y-3">
          <div className="mx-auto w-14 h-14 sm:w-18 sm:h-18 rounded-full p-1 retro-seal flex items-center justify-center shadow-2xl">
            <img
              src={officialLogoImg}
              alt="Logo Oficial Tudo na Brasa"
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-full"
            />
          </div>

          {/* Faixa bege informativa */}
          <div className="mx-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full ribbon-banner text-[10px] sm:text-[11px] font-bold text-bege-950 border border-white/50">
            <span>Sistema Oficial • Belo Horizonte/MG</span>
          </div>

          <DialogTitle className="text-lg sm:text-2xl font-black text-center text-white leading-snug">
            Redirecionando para o{' '}
            <span className="font-script font-normal text-brasa-400">Cardápio Oficial</span>
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-bege-100/90 text-center leading-relaxed">
            {item ? (
              <span>
                Você selecionou <strong className="text-white font-bold">{item.name}</strong> por{' '}
                <strong className="text-bege-300 font-extrabold">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </strong>
                . Você será levado ao nosso sistema oficial de pedidos em{' '}
                <strong className="text-white underline">tudonabrasa.com.br</strong> para montar
                seus complementos, escolher bebidas e finalizar a entrega ou retirada!
              </span>
            ) : (
              <span>
                Você será redirecionado para o cardápio e sistema de pedidos oficial do{' '}
                <strong className="text-white">Tudo na Brasa</strong> para escolher seus pratos e
                fazer seu pedido com rapidez e segurança.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        {item && (
          <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-bege-50 text-carvao-900 border border-bege-200 my-2 shadow-md">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-16 h-16 rounded-xl object-cover border border-bege-300/60"
              loading="lazy"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-bold text-carvao-950 truncate">{item.name}</h4>
              <p className="text-xs text-bege-950/70 line-clamp-1">{item.description}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-black text-brasa-600 bg-brasa-50 px-2 py-0.5 rounded-md border border-brasa-200">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </span>
                {item.originalPrice && (
                  <span className="text-[11px] text-gray-500 line-through">
                    R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="text-[11px] text-bege-200 text-center bg-carvao-900 py-2.5 px-3 rounded-xl border border-bege-300/20 font-medium">
          🔒 Pedido seguro e direto com a equipe do Tudo na Brasa no bairro Castelo - BH
        </div>

        <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2.5 mt-4 sm:justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            className="text-bege-200 hover:text-white hover:bg-white/10 border border-white/10 sm:w-auto w-full rounded-xl"
          >
            Voltar
          </Button>
          <Button
            type="button"
            onClick={handleProceed}
            className="bg-brasa-500 hover:bg-brasa-600 text-white font-bold glow-brasa border border-bege-300/30 transition-all sm:w-auto w-full gap-2 rounded-xl shadow-lg"
          >
            <span>Ir para o Menu Oficial</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
