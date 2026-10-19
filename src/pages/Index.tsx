import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { OrderModal } from '@/components/OrderModal'
import { WhatsAppFAB } from '@/components/WhatsAppFAB'
import { HeroSection } from '@/components/HeroSection'
import { MenuSection } from '@/components/MenuSection'
import { AboutSection } from '@/components/AboutSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ContactSection } from '@/components/ContactSection'
import { CtaBanner } from '@/components/CtaBanner'
import { RESTAURANT_INFO, type MenuItem } from '@/data/restaurantData'

export default function Index() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const handleOpenGeneralOrderModal = () => {
    setSelectedItem(null)
    setIsOrderModalOpen(true)
  }

  const handleSelectItem = (item: MenuItem) => {
    setSelectedItem(item)
    setIsOrderModalOpen(true)
  }

  // Schema.org Restaurant JSON-LD for maximum local SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Restaurant', 'FastFoodRestaurant', 'BarOrPub'],
    '@id': 'https://www.tudonabrasa.com.br/#restaurant',
    name: 'Tudo na Brasa',
    legalName: RESTAURANT_INFO.legalName,
    logo: 'https://www.tudonabrasa.com.br/logo-tudo-na-brasa.svg',
    image: [
      'https://www.tudonabrasa.com.br/logo-tudo-na-brasa.svg',
      'https://img.usecurling.com/p/1200/630?q=brazilian+barbecue+picanha&color=red',
      'https://img.usecurling.com/p/800/600?q=gourmet+bacon+cheeseburger&color=red',
    ],
    url: 'https://www.tudonabrasa.com.br/',
    telephone: '+553134710222',
    menu: RESTAURANT_INFO.officialMenuUrl,
    servesCuisine: [
      'Churrasco',
      'Barbecue',
      'Hamburgueria',
      'Brasileira',
      'Pizza',
      'Comida Mineira',
    ],
    priceRange: 'R$ 20 - R$ 80',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'Cash, Credit Card, Debit Card, Pix',
    address: {
      '@type': 'PostalAddress',
      streetAddress: RESTAURANT_INFO.address.street,
      addressLocality: RESTAURANT_INFO.address.city,
      addressRegion: RESTAURANT_INFO.address.state,
      postalCode: RESTAURANT_INFO.address.cep,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: RESTAURANT_INFO.geo.latitude,
      longitude: RESTAURANT_INFO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '18:00',
        closes: '23:00',
      },
    ],
    hasMenu: {
      '@type': 'Menu',
      name: 'Cardápio Tudo na Brasa',
      url: RESTAURANT_INFO.officialMenuUrl,
    },
    potentialAction: {
      '@type': 'OrderAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: RESTAURANT_INFO.officialMenuUrl,
        inLanguage: 'pt-BR',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'FoodEstablishmentReservation',
        name: 'Pedido de Comida Online',
      },
    },
  }

  return (
    <>
      {/* Local SEO JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-screen bg-carvao-950 text-white selection:bg-brasa-500 selection:text-white flex flex-col">
        {/* Fixed Header */}
        <Header onOpenOrderModal={handleOpenGeneralOrderModal} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection onOpenOrderModal={handleOpenGeneralOrderModal} />
          <MenuSection
            onSelectItem={handleSelectItem}
            onOpenOrderModal={handleOpenGeneralOrderModal}
          />
          <AboutSection />
          <TestimonialsSection />
          <ContactSection />
          <CtaBanner onOpenOrderModal={handleOpenGeneralOrderModal} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Floating Action Button for WhatsApp */}
        <WhatsAppFAB />

        {/* Global Order Confirmation & Redirect Modal */}
        <OrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          item={selectedItem}
        />
      </div>
    </>
  )
}
