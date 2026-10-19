import { MessageCircle } from 'lucide-react'
import { RESTAURANT_INFO } from '@/data/restaurantData'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function WhatsAppFAB() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild>
          <a
            href={RESTAURANT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Peça pelo WhatsApp do Tudo na Brasa"
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[#25D366]/50 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 border-2 border-white/80 ring-2 ring-bege-300/40"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-35"></span>
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white relative z-10 transition-transform group-hover:rotate-12 drop-shadow-sm" />
          </a>
        </TooltipTrigger>
        <TooltipContent
          side="left"
          className="hidden sm:block bg-carvao-950 text-white border-2 border-bege-300/30 px-3.5 py-2 text-xs font-semibold shadow-2xl rounded-xl double-ring-card"
        >
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-script text-bege-300 text-sm">Tudo na Brasa:</span>
            <span>(31) 3471-0222</span>
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
