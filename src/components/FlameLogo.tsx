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
      ? 'text-base sm:text-lg'
      : size === 'lg'
        ? 'text-2xl sm:text-3xl'
        : 'text-lg sm:text-xl'

  const subtitleClass = size === 'sm' ? 'text-[9px]' : size === 'lg' ? 'text-[11px]' : 'text-[10px]'

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* Selo circular oficial com anel duplo e glow retrô */}
      <div className="relative shrink-0 flex items-center justify-center rounded-full p-1 transition-transform duration-300 group-hover:scale-105">
        {/* Glow atmosférico do selo */}
        <div className="absolute inset-0 rounded-full bg-brasa-500/30 blur-md -z-10 pointer-events-none" />
        {/* Anel externo decorativo estilo selo */}
        <div className="absolute inset-0 rounded-full border border-bege-300/40 pointer-events-none" />

        <img
          src={officialLogoImg}
          alt="Logo Oficial Restaurante Tudo na Brasa - Carnes e Pizzas"
          className={`${logoDimensions} object-contain rounded-full shadow-lg shadow-black/60`}
          loading="eager"
        />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5 leading-none">
            <span className={`${titleClass} font-bold text-white tracking-tight`}>Tudo na</span>
            <span
              className={`${titleClass} font-script text-brasa-400 drop-shadow-[0_2px_8px_rgba(232,64,42,0.4)]`}
            >
              Brasa
            </span>
          </div>

          {/* Faixa estilisada bege com o texto oficial "Carnes e Pizzas" */}
          <div className="mt-1 inline-flex items-center gap-1.5 self-start">
            <span className="h-px w-2 bg-bege-400/60 hidden sm:inline-block" />
            <span
              className={`${subtitleClass} font-script text-bege-300 tracking-wide font-normal`}
            >
              Carnes e Pizzas
            </span>
            <span className="text-[9px] uppercase tracking-wider text-bege-400/80 font-sans font-semibold">
              • Desde 2003
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
