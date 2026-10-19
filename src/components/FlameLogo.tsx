import { Flame } from 'lucide-react'

interface FlameLogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function FlameLogo({ size = 'md', className = '' }: FlameLogoProps) {
  const iconSize = size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-8 h-8' : 'w-6 h-6'
  const textClass =
    size === 'sm'
      ? 'text-lg font-bold'
      : size === 'lg'
        ? 'text-2xl sm:text-3xl font-extrabold tracking-tight'
        : 'text-xl sm:text-2xl font-extrabold tracking-tight'

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="relative flex items-center justify-center p-2 rounded-xl bg-gradient-to-br from-brasa-500 via-brasa-600 to-amber-500 shadow-md shadow-brasa-500/30">
        <Flame className={`${iconSize} text-white animate-flame fill-white`} />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-300"></span>
        </span>
      </div>
      <div className="flex flex-col">
        <span className={`${textClass} font-display text-white leading-tight`}>
          Tudo na{' '}
          <span className="text-brasa-400 underline decoration-amber-500/60 decoration-wavy decoration-1 underline-offset-4">
            Brasa
          </span>
        </span>
        <span className="text-[10px] tracking-wider uppercase text-amber-400/90 font-medium -mt-0.5">
          Churrascaria & Hamburgueria
        </span>
      </div>
    </div>
  )
}
