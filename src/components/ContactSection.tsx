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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-carvao-950 relative border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brasa-500/10 border border-brasa-500/30 text-brasa-400 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>BELO HORIZONTE • CASTELO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Onde Estamos & <span className="text-brasa-400">Contato</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Venha conhecer nossa churrascaria ou entre em contato para dúvidas, reservas e eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column (5 cols): Contact Info & Form */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Cards */}
            <div className="p-5 rounded-2xl bg-carvao-900 border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brasa-500/20 flex items-center justify-center text-brasa-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Endereço</h4>
                  <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    {RESTAURANT_INFO.address.full}
                  </p>
                  <a
                    href={RESTAURANT_INFO.googleMapsRoute}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Traçar Rota no Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Telefone & WhatsApp</h4>
                  <a
                    href={`tel:${RESTAURANT_INFO.phoneClean}`}
                    className="text-xs text-gray-300 hover:text-white"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Horário de Funcionamento</h4>
                  <p className="text-xs text-gray-300">{RESTAURANT_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl bg-carvao-900 border border-white/10 space-y-4 shadow-xl"
            >
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Envie uma Mensagem</span>
              </h4>

              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs font-medium text-gray-300">
                  Nome Completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`bg-carvao-950 border-white/10 text-white placeholder:text-gray-400 text-sm ${
                    errors.name ? 'border-brasa-500 focus-visible:ring-brasa-500' : ''
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-brasa-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs font-medium text-gray-300">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`bg-carvao-950 border-white/10 text-white placeholder:text-gray-400 text-sm ${
                    errors.email ? 'border-brasa-500 focus-visible:ring-brasa-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-brasa-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-medium text-gray-300">
                  Mensagem
                </Label>
                <Textarea
                  id="message"
                  rows={3}
                  placeholder="Como podemos te ajudar?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`bg-carvao-950 border-white/10 text-white placeholder:text-gray-400 text-sm resize-none ${
                    errors.message ? 'border-brasa-500 focus-visible:ring-brasa-500' : ''
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-brasa-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brasa-500 hover:bg-brasa-600 text-white font-semibold py-2.5 rounded-xl glow-brasa transition-all flex items-center justify-center gap-2"
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

          {/* Right Column (7 cols): Google Maps Embed & Route */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl bg-carvao-900 border border-white/10 overflow-hidden shadow-2xl p-2 sm:p-3">
            <div className="relative w-full h-[400px] lg:h-[520px] rounded-xl overflow-hidden bg-carvao-950">
              <iframe
                title="Localização do restaurante Tudo na Brasa em Belo Horizonte"
                src={RESTAURANT_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter invert-[90%] hue-rotate-180 contrast-125 brightness-90 rounded-xl"
              />
              <div className="absolute top-3 left-3 bg-carvao-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white font-medium flex items-center gap-2 shadow-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Castelo • Belo Horizonte/MG</span>
              </div>
            </div>

            <div className="pt-3 px-2 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-gray-400 text-center sm:text-left">
                Fácil estacionamento no local e acesso rápido pelo anel rodoviário e Av. Tancredo
                Neves.
              </p>
              <Button
                asChild
                className="bg-amber-500 hover:bg-amber-600 text-carvao-900 font-bold text-xs px-4 py-2 rounded-lg shrink-0 gap-1.5 shadow-md"
              >
                <a href={RESTAURANT_INFO.googleMapsRoute} target="_blank" rel="noopener noreferrer">
                  <Navigation className="w-3.5 h-3.5" />
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
