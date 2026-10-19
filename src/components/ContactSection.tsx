import { useState } from 'react'
import { MapPin, Phone, Clock, Send, Navigation, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RESTAURANT_INFO } from '@/data/restaurantData'
import { useToast } from '@/hooks/use-toast'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Por favor, informe seu nome completo.'
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'O nome deve ter pelo menos 3 caracteres.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Por favor, informe seu e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Informe um endereço de e-mail válido.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Por favor, digite sua mensagem ou dúvida.'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      toast({
        title: 'Verifique os campos',
        description: 'Por favor, preencha todos os campos do formulário corretamente.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)

    // Simulate instant local submit & show feedback
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Mensagem enviada com sucesso! 🔥',
        description: `Obrigado pelo contato, ${formData.name.split(' ')[0]}! Nossa equipe de BH responderá em breve.`,
      })
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    }, 600)
  }

  return (
    <section
      id="contato"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-carvao-950 relative border-t-2 border-brasa-500/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 rounded-full ribbon-banner text-[11px] sm:text-xs font-bold mb-3 shadow-md border border-bege-100/50">
            <MapPin className="w-3.5 h-3.5 text-brasa-600 shrink-0" />
            <span className="text-bege-950 font-sans tracking-wide uppercase">
              Belo Horizonte • Castelo
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-2 sm:mb-3">
            Onde Estamos &{' '}
            <span className="font-script font-normal text-brasa-400 inline-block drop-shadow-[0_2px_10px_rgba(232,64,42,0.4)]">
              Contato
            </span>
          </h2>
          {/* Sublinhado faixa */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-gradient-to-r from-transparent to-bege-300" />
            <span className="font-script text-bege-300 text-base">
              Portas abertas para receber você
            </span>
            <span className="h-0.5 w-8 bg-gradient-to-l from-transparent to-bege-300" />
          </div>
          <p className="text-bege-100/90 text-base sm:text-lg">
            Venha conhecer nossa churrascaria ou entre em contato para dúvidas, reservas e pedidos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column (5 cols): Contact Info & Form com bordas de anel duplo */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Cards */}
            <div className="p-5 rounded-3xl bg-carvao-900 border-2 border-bege-300/30 space-y-4 shadow-xl double-ring-card">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-full bg-brasa-500 text-white flex items-center justify-center shrink-0 mt-0.5 retro-seal">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Endereço</h4>
                  <p className="text-xs text-bege-200/90 mt-0.5 leading-relaxed">
                    {RESTAURANT_INFO.address.full}
                  </p>
                  <a
                    href={RESTAURANT_INFO.googleMapsRoute}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-bege-300 hover:text-white underline underline-offset-2"
                  >
                    <Navigation className="w-3.5 h-3.5 text-brasa-400" />
                    <span>Traçar Rota no Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-3 border-t border-bege-300/20">
                <div className="w-11 h-11 rounded-full bg-bege-500 text-bege-950 flex items-center justify-center shrink-0 retro-seal-bege">
                  <Phone className="w-5 h-5 text-bege-950" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Telefone & WhatsApp</h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneClean}`}
                    className="text-xs text-bege-200 hover:text-white font-medium"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 pt-3 border-t border-bege-300/20">
                <div className="w-11 h-11 rounded-full bg-brasa-600 text-white flex items-center justify-center shrink-0 retro-seal">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Horário de Funcionamento</h4>
                  <p className="text-xs text-bege-200">{RESTAURANT_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Contact Form com anel duplo */}
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-3xl bg-carvao-900 border-2 border-bege-300/30 space-y-4 shadow-2xl double-ring-card"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Envie uma Mensagem</span>
                </h4>
                <span className="font-script text-bege-300 text-sm">Tudo na Brasa</span>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-semibold text-bege-200">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`bg-carvao-950 border-bege-300/30 text-white placeholder:text-gray-400 text-sm focus-visible:ring-brasa-500 ${
                    errors.name ? 'border-brasa-500' : ''
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-brasa-400 flex items-center gap-1 mt-1 font-semibold">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-semibold text-bege-200">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`bg-carvao-950 border-bege-300/30 text-white placeholder:text-gray-400 text-sm focus-visible:ring-brasa-500 ${
                    errors.email ? 'border-brasa-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-brasa-400 flex items-center gap-1 mt-1 font-semibold">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-semibold text-bege-200">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  rows={3}
                  placeholder="Como podemos te ajudar?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`bg-carvao-950 border-bege-300/30 text-white placeholder:text-gray-400 text-sm resize-none focus-visible:ring-brasa-500 ${
                    errors.message ? 'border-brasa-500' : ''
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-brasa-400 flex items-center gap-1 mt-1 font-semibold">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brasa-500 hover:bg-brasa-600 text-white font-bold py-3 rounded-xl glow-brasa border border-bege-300/30 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {isSubmitting ? (
                  <span>Enviando...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Right Column (7 cols): Google Maps Embed & Route com anel duplo */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-carvao-900 border-2 border-bege-300/30 overflow-hidden shadow-2xl p-2.5 sm:p-3.5 double-ring-card">
            <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden bg-carvao-950 border border-white/10">
              <iframe
                title="Localização do restaurante Tudo na Brasa em Belo Horizonte"
                src={RESTAURANT_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-125 brightness-90 rounded-2xl"
              />
              {/* Mini-selo de endereço flutuante */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-carvao-950/95 backdrop-blur-md px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-bege-300/40 text-[10px] sm:text-xs text-bege-100 font-semibold flex items-center gap-1.5 sm:gap-2 shadow-xl">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
                <span>Castelo • Belo Horizonte/MG</span>
              </div>
            </div>

            <div className="pt-3.5 px-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-gray-300 text-center sm:text-left">
                Fácil estacionamento no local e acesso rápido pelo anel rodoviário e Av. Tancredo
                Neves.
              </p>
              <Button
                asChild
                className="w-full sm:w-auto ribbon-banner hover:brightness-105 text-bege-950 font-bold text-xs px-4 py-2.5 rounded-xl shrink-0 gap-1.5 shadow-md border border-white/40 flex items-center justify-center"
              >
                <a href={RESTAURANT_INFO.googleMapsRoute} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-3.5 h-3.5 text-brasa-700 shrink-0" />
                  <span>Traçar Rota no Waze / Maps</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
