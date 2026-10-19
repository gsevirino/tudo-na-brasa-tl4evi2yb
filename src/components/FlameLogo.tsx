import officialLogoImg from '@/assets/image-524a6.png'

interface FlameLogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showText?: boolean
}

/**
 * Componente oficial de exibição da marca Tudo na Brasa.
 * Mantido com o nome FlameLogo para retrocompatibilidade de imports,
 * mas renderiza a marca/selo oficial do cliente (circular vermelho, borda dupla branca,
 * script Tudo na Brasa e ribbon bege inferior).
 */
export function FlameLogo({ size = 'md', className = '', showText = true }: FlameLogoProps) {
  const logoDimensions =
    size === 'sm'
      ? 'w-10 h-10 sm:w-11 sm:h-11'
      : size === 'lg'
        ? 'w-16 h-16 sm:w-20 sm:h-20'
        : 'w-12 h-12 sm:w-14 sm:h-14'

  const titleClass =
    size === 'sm'
      ? 'text-base sm:text-lg font-bold'
      : size === 'lg'
        ? 'text-2xl sm:text-3xl font-extrabold tracking-tight'
        : 'text-lg sm:text-xl font-extrabold tracking-tight'

  const subtitleClass =
    size === 'sm'
      ? 'text-[9px] tracking-wider'
      : size === 'lg'
        ? 'text-xs tracking-widest'
        : 'text-[10px] sm:text-xs tracking-wider'

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Selo circular oficial do cliente com glow sutil e alto contraste */}
      <div className="relative shrink-0 flex items-center justify-center rounded-full p-0.5 transition-transform duration-200 group-hover:scale-105">
        {/* Glow atmosférico suave da brasa */}
        <div className="absolute inset-0 rounded-full bg-brasa-500/20 blur-sm -z-10 pointer-events-none" />

        <img
          src={officialLogoImg}
          alt="Logo Oficial Restaurante Tudo na Brasa - Carnes e Pizzas"
          className={`${logoDimensions} object-contain rounded-full drop-shadow-[0_4px_12px_rgba(232,64,42,0.35)]`}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`${titleClass} font-display text-white leading-tight`}>
            Tudo na{' '}
            <span className="text-brasa-400 underline decoration-amber-500/60 decoration-wavy decoration-1 underline-offset-4">
              Brasa
            </span>
          </span>
          <span className={`${subtitleClass} uppercase text-amber-300/90 font-medium -mt-0.5`}>
            Carnes & Pizzas na Brasa
          </span>
        </div>
      )}
    </div>
  )
}
