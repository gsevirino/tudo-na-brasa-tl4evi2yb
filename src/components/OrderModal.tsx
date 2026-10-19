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
      <DialogContent className="sm:max-w-md bg-carvao-900 border border-white/10 text-white shadow-2xl animate-in zoom-in-95 duration-200">
        <DialogHeader className="space-y-3">
          <div className="mx-auto w-16 h-16 rounded-full bg-brasa-500/20 border border-brasa-500/40 p-1 flex items-center justify-center shadow-lg">
            <img
              src={officialLogoImg}
              alt="Logo Oficial Tudo na Brasa"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-white">
            Redirecionando para o Menu Oficial
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-300 text-center">
            {item ? (
              <span>
                Você selecionou{' '}
                <strong className="text-amber-400 font-semibold">{item.name}</strong> por{' '}
                <strong className="text-white">R$ {item.price.toFixed(2).replace('.', ',')}</strong>
                . Você será levado ao nosso sistema oficial de pedidos em{' '}
                <strong>tudonabrasa.com.br</strong> para montar seus complementos, escolher bebidas
                e finalizar a entrega ou retirada!
              </span>
            ) : (
              <span>
                Você será redirecionado para o cardápio e sistema de pedidos oficial do{' '}
                <strong>Tudo na Brasa</strong> para escolher seus pratos e fazer seu pedido com
                rapidez e segurança.
              </span>
            )}
          </DialogDescription>
        </DialogHeader>

        {item && (
          <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 my-2">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-16 h-16 rounded-md object-cover border border-white/10"
              loading="lazy"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-white truncate">{item.name}</h4>
              <p className="text-xs text-gray-400 line-clamp-1">{item.description}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-bold text-amber-400">
                  R$ {item.price.toFixed(2).replace('.', ',')}
                </span>
                {item.originalPrice && (
                  <span className="text-[11px] text-gray-400 line-through">
                    R$ {item.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="text-[11px] text-gray-400 text-center bg-black/40 py-2 px-3 rounded-md border border-white/5">
          🔒 Pedido seguro e direto com a equipe do Tudo na Brasa em Belo Horizonte - MG
        </div>

        <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 mt-4 sm:justify-end">
          <Button
            type="button"
            variant="ghost"
            onClick={onClose}
            className="text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 sm:w-auto w-full"
          >
            Voltar
          </Button>
          <Button
            type="button"
            onClick={handleProceed}
            className="bg-brasa-500 hover:bg-brasa-600 text-white font-semibold glow-brasa transition-all sm:w-auto w-full gap-2"
          >
            <span>Ir para o Menu Oficial</span>
            <ExternalLink className="w-4 h-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
