export interface MenuItem {
  id: string
  name: string
  category: 'burger' | 'combo' | 'pizza'
  description: string
  price: number
  originalPrice?: number
  badge?: string
  imageUrl: string
  isPromo?: boolean
}

export interface Testimonial {
  id: string
  name: string
  neighborhood: string
  stars: number
  comment: string
  avatarUrl: string
  date: string
}

export const RESTAURANT_INFO = {
  name: 'Tudo na Brasa',
  legalName: 'Tudo na Brasa Churrascaria LTDA',
  cnpj: '08.665.931/0001-10',
  address: {
    street: 'Avenida dos Engenheiros, 1104',
    neighborhood: 'Castelo',
    city: 'Belo Horizonte',
    state: 'MG',
    cep: '30840-300',
    full: 'Avenida dos Engenheiros, 1104 - Castelo - Belo Horizonte/MG - CEP 30840-300',
  },
  phone: '(31) 3471-0222',
  phoneClean: '3134710222',
  whatsappPhone: '553134710222',
  whatsappUrl:
    'https://wa.me/553134710222?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20no%20Tudo%20na%20Brasa!',
  officialMenuUrl: 'https://www.tudonabrasa.com.br/menu',
  hours: 'Terça a Domingo — 18h às 23h',
  hoursShort: 'Ter a Dom — 18h às 23h',
  geo: {
    latitude: -19.9197,
    longitude: -43.9881,
  },
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.4886616037746!2d-43.9906806!3d-19.8617833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690c5005952d7%3A0xe5a363ee5fbe4ad4!2sAv.%20dos%20Engenheiros%2C%201104%20-%20Castelo%2C%20Belo%20Horizonte%20-%20MG%2C%2030840-300!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  googleMapsRoute:
    'https://www.google.com/maps/dir/?api=1&destination=Avenida+dos+Engenheiros+1104+Castelo+Belo+Horizonte+MG',
}

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: 'hamburguer-cabuloso',
    name: 'Hambúrguer Cabuloso',
    category: 'burger',
    description:
      'Blend suculento de picanha na brasa 180g, queijo cheddar cremoso derretido, fatias crocantes de bacon artesanal e molho barbecue especial no pão brioche tostado.',
    price: 29.9,
    originalPrice: 42.9,
    badge: 'Mais Pedido',
    isPromo: true,
    imageUrl: 'https://img.usecurling.com/p/800/600?q=gourmet+bacon+cheeseburger&color=red',
  },
  {
    id: 'hamburguer-galo-doido',
    name: 'Hambúrguer Galo Doido',
    category: 'burger',
    description:
      'Suculento blend de picanha grelhado na brasa de carvão, cebola caramelizada, queijo prato artesanal, picles da casa e maionese verde defumada.',
    price: 29.9,
    originalPrice: 38.9,
    badge: 'Super Oferta',
    isPromo: true,
    imageUrl: 'https://img.usecurling.com/p/800/600?q=cheeseburger+bbq+grill&color=orange',
  },
  {
    id: 'combo-ouro-preto',
    name: 'Combo Ouro Preto',
    category: 'combo',
    description:
      'Hambúrguer artesanal de picanha na brasa com queijo canastra derretido + batata rústica dourada temperada com alecrim e páprica + refrigerante gelado à sua escolha.',
    price: 42.1,
    badge: 'Combo Mineiro',
    isPromo: false,
    imageUrl: 'https://img.usecurling.com/p/800/600?q=burger+french+fries+soda&color=yellow',
  },
  {
    id: 'combo-serra-da-canastra',
    name: 'Combo Serra da Canastra',
    category: 'combo',
    description:
      'Hambúrguer duplo de picanha na brasa, autêntico queijo da Serra da Canastra, crocante de bacon + porção de anéis de cebola empanados crocantes + bebida.',
    price: 42.1,
    badge: 'Sabor de Minas',
    isPromo: false,
    imageUrl: 'https://img.usecurling.com/p/800/600?q=double+burger+onion+rings&color=red',
  },
  {
    id: 'combo-tudo-na-brasa',
    name: 'Combo Tudo na Brasa',
    category: 'combo',
    description:
      'O combo supremo: burger de picanha 200g, fatias de picanha fatiada ao ponto da casa, queijo derretido, farofa crocante mineira, batata rústica e molho de alho.',
    price: 52.1,
    badge: 'Especial da Casa',
    isPromo: false,
    imageUrl: 'https://img.usecurling.com/p/800/600?q=barbecue+steak+burger+plate&color=orange',
  },
  {
    id: 'pizza-grande-calabresa',
    name: 'Pizza Grande Calabresa',
    category: 'pizza',
    description:
      'Massa artesanal assada em alta temperatura com borda crocante, molho de tomate pelati fresco, calabresa fatiada selecionada, cebola roxa fininha e orégano fresco.',
    price: 59.9,
    originalPrice: 79.9,
    badge: 'Super Promoção',
    isPromo: true,
    imageUrl: 'https://img.usecurling.com/p/800/600?q=calabresa+pizza+melted+cheese&color=red',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rodrigo Guimarães',
    neighborhood: 'Castelo - Belo Horizonte',
    stars: 5,
    comment:
      'Melhor churrasco e hambúrguer na brasa da região da Pampulha! O blend de picanha do Hambúrguer Cabuloso é suculento de verdade, com aquele defumado marcante de brasa viva. Chegou quentinho e super rápido!',
    avatarUrl: 'https://img.usecurling.com/ppl/medium?gender=male&seed=42',
    date: 'Ontem',
  },
  {
    id: '2',
    name: 'Mariana Drummond',
    neighborhood: 'Ouro Preto - Belo Horizonte',
    stars: 5,
    comment:
      'O Combo Serra da Canastra é uma explosão de sabor mineiro! O queijo canastra derretido com o burger na grelha é sensacional. O atendimento e a qualidade nunca decepcionam.',
    avatarUrl: 'https://img.usecurling.com/ppl/medium?gender=female&seed=18',
    date: 'Há 3 dias',
  },
  {
    id: '3',
    name: 'Carlos Eduardo Silveira',
    neighborhood: 'Alípio de Melo - Belo Horizonte',
    stars: 5,
    comment:
      'Ambiente aconchegante demais no restaurante e a entrega pelo site é impecável. A pizza de calabresa e o Combo Tudo na Brasa alimentam a família com preço justo e qualidade de primeira!',
    avatarUrl: 'https://img.usecurling.com/ppl/medium?gender=male&seed=77',
    date: 'Há 1 semana',
  },
]

export const HIGHLIGHT_STATS = [
  { label: 'Carnes Nobres', desc: 'Cortes selecionados e blend 100% picanha' },
  { label: 'Brasa de Verdade', desc: 'Fogo vivo e carvão para sabor defumado autêntico' },
  { label: 'Entrega Rápida em BH', desc: 'Embalagem térmica que mantém a crocância' },
  { label: 'Tradição Mineira', desc: 'Combos batizados em homenagem a Minas Gerais' },
]
