import { useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { TESTIMONIALS } from '@/data/restaurantData'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-carvao-900 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header com faixa de destaque */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full ribbon-banner text-xs font-bold mb-3 shadow-md border border-bege-100/50">
            <Sparkles className="w-3.5 h-3.5 text-brasa-600" />
            <span className="text-bege-950 font-sans tracking-wide uppercase">
              Opinião de Quem Já Provou
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            Clientes Apaixonados pelo{' '}
            <span className="font-script font-normal text-brasa-400 inline-block drop-shadow-[0_2px_10px_rgba(232,64,42,0.4)]">
              Tudo na Brasa
            </span>
          </h2>
          {/* Faixa decorativa */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-gradient-to-r from-transparent to-bege-300" />
            <span className="font-script text-bege-300 text-base">
              Aroma e sabor que marcam época
            </span>
            <span className="h-0.5 w-8 bg-gradient-to-l from-transparent to-bege-300" />
          </div>
          <p className="text-bege-100/90 text-base sm:text-lg">
            Centenas de clientes satisfeitos em Belo Horizonte comprovam o carinho e o sabor
            inconfundível do nosso churrasco e hambúrguer na brasa.
          </p>
        </div>

        {/* Carousel Container com anel duplo */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card className="bg-carvao-800/95 border-2 border-bege-300/30 rounded-3xl overflow-hidden shadow-2xl relative double-ring-card">
            <div className="absolute top-6 right-6 text-bege-300/10 pointer-events-none">
              <Quote className="w-20 h-20" />
            </div>

            <CardContent className="p-8 sm:p-12 relative z-10 min-h-[300px] flex flex-col justify-between">
              {/* Active Slide */}
              <div className="space-y-6 animate-in fade-in duration-500" key={currentIndex}>
                {/* Stars com mini selo de nota */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className={`w-5 h-5 ${
                          idx < TESTIMONIALS[currentIndex].stars
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-bege-300/20 text-bege-200 border border-bege-300/40 text-xs font-bold tracking-wider uppercase">
                    Avaliação 5.0 ★
                  </span>
                </div>

                {/* Comment */}
                <blockquote className="text-lg sm:text-xl text-bege-50 font-medium leading-relaxed italic">
                  "{TESTIMONIALS[currentIndex].comment}"
                </blockquote>

                {/* Author Info com anel duplo no avatar */}
                <div className="flex items-center gap-4 pt-4 border-t border-bege-300/20">
                  <div className="relative">
                    <img
                      src={TESTIMONIALS[currentIndex].avatarUrl}
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white ring-2 ring-brasa-500 shadow-md"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {TESTIMONIALS[currentIndex].name}
                    </h3>
                    <p className="text-xs text-bege-200/80">
                      {TESTIMONIALS[currentIndex].neighborhood} • Belo Horizonte
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-bege-300/20">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? 'w-8 bg-brasa-500'
                          : 'w-2.5 bg-white/20 hover:bg-bege-300/50'
                      }`}
                      aria-label={`Ir para depoimento ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-carvao-900 hover:bg-brasa-500 hover:text-white text-bege-200 flex items-center justify-center transition-all border border-bege-300/30"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-carvao-900 hover:bg-brasa-500 hover:text-white text-bege-200 flex items-center justify-center transition-all border border-bege-300/30"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
