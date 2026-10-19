import { MessageCircle } from 'lucide-react'
import { RESTAURANT_INFO } from '@/data/restaurantData'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function WhatsAppFAB() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild>
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Peça pelo WhatsApp do Tudo na Brasa"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[#25D366]/40 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 group-hover:opacity-40"></span>
            <MessageCircle className="w-7 h-7 fill-white relative z-10 transition-transform group-hover:rotate-12" />
          </a>
        </TooltipTrigger>
        <TooltipContent
          side="left"
          className="bg-carvao-800 text-white border-white/10 px-3 py-1.5 text-xs font-medium shadow-xl"
        >
          <p className="flex items-center gap-1.5">
            <span>💬</span>
            <span>Peça pelo WhatsApp (31) 3471-0222</span>
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
