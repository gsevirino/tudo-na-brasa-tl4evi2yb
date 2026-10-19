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
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPINIÃO DE QUEM JÁ PROVOU</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Clientes Apaixonados pelo <span className="text-brasa-400">Tudo na Brasa</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Mais de centenas de clientes satisfeitos em Belo Horizonte comprovam o carinho e o sabor
            inconfundível do nosso churrasco e hambúrguer na brasa.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Card className="bg-carvao-800/90 border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-6 right-6 text-white/10 pointer-events-none">
              <Quote className="w-20 h-20" />
            </div>

            <CardContent className="p-8 sm:p-12 relative z-10 min-h-[300px] flex flex-col justify-between">
              {/* Active Slide */}
              <div className="space-y-6 animate-in fade-in duration-500" key={currentIndex}>
                {/* Stars */}
                <div className="flex items-center gap-1.5">
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
                  <span className="ml-2 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    Avaliação 5.0
                  </span>
                </div>

                {/* Comment */}
                <blockquote className="text-lg sm:text-xl text-gray-200 font-medium leading-relaxed italic">
                  "{TESTIMONIALS[currentIndex].comment}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={TESTIMONIALS[currentIndex].avatarUrl}
                    alt={TESTIMONIALS[currentIndex].name}
                    className="w-13 h-13 rounded-full object-cover border-2 border-brasa-500"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {TESTIMONIALS[currentIndex].name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {TESTIMONIALS[currentIndex].neighborhood}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-white/10">
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
                          : 'w-2.5 bg-white/20 hover:bg-white/40'
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
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors border border-white/10"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors border border-white/10"
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
