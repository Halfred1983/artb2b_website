export const APP_URL = "https://app.artb2b.art";
export const APP_REGISTER_URL = "https://app.artb2b.art/login#/login";
export const APP_STORE_URL = "https://apps.apple.com/gb/app/artb2b/id6471003159";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.extendus.artb2b";
export const INSTAGRAM_URL = "https://www.instagram.com/artb2b.art/";

export interface SubscriptionPlan {
  id: string;
  name: string;
  nameEs: string;
  spaces: number;
  price: string;
  unitPrice: string;
  unitPriceEs: string;
  badge?: string;
  badgeEs?: string;
  popular?: boolean;
  priceId: string;
  features: string[];
  featuresEs: string[];
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: "one-space",
    name: "One Space",
    nameEs: "Un Espacio",
    spaces: 1,
    price: "£100",
    unitPrice: "1 × 1 m exhibition space",
    unitPriceEs: "Espacio de exposición de 1 × 1 m",
    priceId: "price_1UKLFjD5G9VeTgB8uWkLaJbS",
    features: [
      "1 ARTB2B Space (1 × 1 m exhibition area)",
      "Variable artworks based on dimensions",
      "Curatorial coordination & venue selection",
      "Single delivery to ARTB2B Hoxton hub",
      "Transport from storage to participating venues",
      "Installation and monthly artwork rotation",
      "No hidden costs",
    ],
    featuresEs: [
      "1 Espacio ARTB2B (área de exposición de 1 × 1 m)",
      "Número variable de obras según dimensiones",
      "Coordinación curatorial y selección de espacios",
      "Entrega única en nuestro centro operativo de Hoxton",
      "Transporte del almacén a los espacios participantes",
      "Instalación y rotación mensual de obras",
      "Sin costes ocultos",
    ],
  },
  {
    id: "two-spaces",
    name: "Two Spaces",
    nameEs: "Dos Espacios",
    spaces: 2,
    price: "£150",
    unitPrice: "£75 per space",
    unitPriceEs: "£75 por espacio",
    badge: "Save 25%",
    badgeEs: "Ahorra 25%",
    priceId: "price_1UKLGyD5G9VeTgB8EpFEIF4T",
    features: [
      "2 ARTB2B Spaces (1 × 1 m exhibition area each)",
      "Variable artworks based on dimensions",
      "Curatorial coordination & venue selection",
      "Single delivery to ARTB2B Hoxton hub",
      "Transport from storage to participating venues",
      "Installation and monthly artwork rotation",
      "No hidden costs",
    ],
    featuresEs: [
      "2 Espacios ARTB2B (área de exposición de 1 × 1 m cada uno)",
      "Número variable de obras según dimensiones",
      "Coordinación curatorial y selección de espacios",
      "Entrega única en nuestro centro operativo de Hoxton",
      "Transporte del almacén a los espacios participantes",
      "Instalación y rotación mensual de obras",
      "Sin costes ocultos",
    ],
  },
  {
    id: "three-spaces",
    name: "Three Spaces",
    nameEs: "Tres Espacios",
    spaces: 3,
    price: "£200",
    unitPrice: "£66.67 per space",
    unitPriceEs: "£66.67 por espacio",
    badge: "Save 33%",
    badgeEs: "Ahorra 33%",
    priceId: "price_1UKLI5D5G9VeTgB8IJze74LW",
    features: [
      "3 ARTB2B Spaces (1 × 1 m exhibition area each)",
      "Variable artworks based on dimensions",
      "Curatorial coordination & venue selection",
      "Single delivery to ARTB2B Hoxton hub",
      "Transport from storage to participating venues",
      "Installation and monthly artwork rotation",
      "No hidden costs",
    ],
    featuresEs: [
      "3 Espacios ARTB2B (área de exposición de 1 × 1 m cada uno)",
      "Número variable de obras según dimensiones",
      "Coordinación curatorial y selección de espacios",
      "Entrega única en nuestro centro operativo de Hoxton",
      "Transporte del almacén a los espacios participantes",
      "Instalación y rotación mensual de obras",
      "Sin costes ocultos",
    ],
  },
  {
    id: "four-spaces",
    name: "Four Spaces",
    nameEs: "Cuatro Espacios",
    spaces: 4,
    price: "£250",
    unitPrice: "£62.50 per space",
    unitPriceEs: "£62.50 por espacio",
    badge: "Best Value · Save 37.5%",
    badgeEs: "Mejor Valor · Ahorra 37.5%",
    popular: true,
    priceId: "price_1UKLJ2D5G9VeTgB86BNSff12",
    features: [
      "4 ARTB2B Spaces (1 × 1 m exhibition area each)",
      "Variable artworks based on dimensions",
      "Curatorial coordination & venue selection",
      "Single delivery to ARTB2B Hoxton hub",
      "Transport from storage to participating venues",
      "Installation and monthly artwork rotation",
      "No hidden costs",
    ],
    featuresEs: [
      "4 Espacios ARTB2B (área de exposición de 1 × 1 m cada uno)",
      "Número variable de obras según dimensiones",
      "Coordinación curatorial y selección de espacios",
      "Entrega única en nuestro centro operativo de Hoxton",
      "Transporte del almacén a los espacios participantes",
      "Instalación y rotación mensual de obras",
      "Sin costes ocultos",
    ],
  },
];

export const SUBSCRIPTION_INCLUDED_ITEMS: string[] = [
  "1 ARTB2B Space = 1 × 1 m exhibition area (variable number of artworks based on dimensions)",
  "Active ARTB2B city network (London operational hub in Hoxton)",
  "Single delivery: deliver your approved artworks to the ARTB2B operational hub in Hoxton",
  "Curatorial coordination: ARTB2B selects suitable participating venues matched to your artwork",
  "Participating hospitality and creative venues: cafés, restaurants, bars, hotels and design spaces",
  "Transport from ARTB2B storage to participating venues included within the same city",
  "Installation and regular artwork rotation managed by ARTB2B across participating venues",
  "No hidden costs: the monthly plan price is the price you pay",
];

export const SUBSCRIPTION_INCLUDED_ITEMS_ES: string[] = [
  "1 Espacio ARTB2B = área de exposición de 1 × 1 m (número variable de obras según dimensiones)",
  "Red activa de ciudades ARTB2B (centro operativo de Londres en Hoxton)",
  "Entrega única: entrega tus obras aprobadas en el centro operativo de ARTB2B en Hoxton",
  "Coordinación curatorial: ARTB2B selecciona los espacios participantes adecuados para tu obra",
  "Espacios creativos y de hostelería participantes: cafeterías, restaurantes, bares, hoteles y espacios de diseño",
  "Transporte desde el almacén de ARTB2B hasta los espacios participantes incluido dentro de la misma ciudad",
  "Instalación y rotación periódica de obras gestionadas por ARTB2B en los espacios participantes",
  "Sin costes ocultos: el precio mensual del plan es el precio final que pagas",
];

export const SUBSCRIPTION_NOT_INCLUDED_ITEMS: string[] = [
  "Initial artwork delivery from your studio to the ARTB2B operational hub in Hoxton",
  "Artwork insurance (separate, at real cost)",
  "Transport between different cities (separate, at real cost, only if requested)",
];

export const SUBSCRIPTION_NOT_INCLUDED_ITEMS_ES: string[] = [
  "Entrega inicial de la obra desde tu estudio hasta el centro operativo de ARTB2B en Hoxton",
  "Seguro de la obra de arte (por separado, a coste real)",
  "Transporte entre diferentes ciudades (por separado, a coste real, solo bajo solicitud)",
];

export const SUBSCRIPTION_TERMS: string[] = [
  "1 ARTB2B Space = 1 × 1 m exhibition area",
  "Minimum commitment: 3 months",
  "You can change your package anytime from your profile in the app",
  "Your plan renews automatically every month",
  "If your artwork sells: ARTB2B retains 30% as commission and you keep 70%. You always set the sale price.",
];

export const SUBSCRIPTION_TERMS_ES: string[] = [
  "1 Espacio ARTB2B = área de exposición de 1 × 1 m",
  "Compromiso mínimo: 3 meses",
  "Puedes cambiar tu plan en cualquier momento desde tu perfil en la aplicación",
  "Tu plan se renueva automáticamente cada mes",
  "Si tu obra se vende: ARTB2B retiene el 30% de comisión y tú recibes el 70%. Tú siempre fijas el precio de venta.",
];

export interface VerifiedVenue {
  id: string;
  name: string;
  neighborhood: string;
  address: string;
  category: string;
  categoryEs: string;
  description: string;
  descriptionEs: string;
  photoUrl: string;
  dailyVisitors?: string;
}

export const VERIFIED_VENUES: VerifiedVenue[] = [
  {
    id: "c337d118-bd3f-4246-83ad-3d7aab636880",
    name: "Mercato Mayfair",
    neighborhood: "Mayfair, London",
    address: "St. Mark's Church, North Audley St, London W1K 6ZA",
    category: "Cultural Food Hall",
    categoryEs: "Mercado Gastronómico y Cultural",
    description:
      "Set within a beautifully restored deconsecrated church in the heart of Mayfair, welcoming thousands of visitors every day in a landmark cultural setting.",
    descriptionEs:
      "Ubicado en una iglesia desacralizada restaurada en el corazón de Mayfair, recibe a miles de visitantes cada día en un entorno cultural único.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/h4NRRreljtfvSy6MGmK35upmlAF3%2Fc337d118-bd3f-4246-83ad-3d7aab636880%2Fphotos%2Fimage_picker_67FC1F65-D328-41A5-AC9A-3E298D18D32A-10524-00001289B28C88BC.jpg?alt=media&token=3332f105-9d07-4376-8f9e-9ed3fde3f8e2",
    dailyVisitors: "1,000+ daily guests",
  },
  {
    id: "96580aba-a831-48fe-a4e5-227695e7447f",
    name: "Giannino Mayfair",
    neighborhood: "Mayfair, London",
    address: "10 Blenheim St, London W1S 1LH",
    category: "Fine Dining Restaurant",
    categoryEs: "Restaurante de Alta Cocina",
    description:
      "Where timeless Italian elegance meets the energy of Mayfair, combining refined interiors and contemporary design.",
    descriptionEs:
      "Donde la elegancia italiana se une a la energía de Mayfair, combinando interiores refinados y diseño contemporáneo.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/h4NRRreljtfvSy6MGmK35upmlAF3%2F96580aba-a831-48fe-a4e5-227695e7447f%2Fphotos%2Fimage_picker_57A76CF4-CC79-4947-8313-5808BD13D5D3-10524-0000129413B3B478.jpg?alt=media&token=761e15f2-dea5-4217-96c8-b3f83d686bd5",
    dailyVisitors: "210+ daily guests",
  },
  {
    id: "1533227a-582d-4343-81b7-62dc143b2a46",
    name: "Bantof Soho",
    neighborhood: "Soho, London",
    address: "31 Great Windmill St, London W1D 7LG",
    category: "Restaurant & Cocktail Lounge",
    categoryEs: "Restaurante y Cocktail Lounge",
    description:
      "A distinctive three floor venue in the heart of Soho designed for guests who appreciate food, creativity and contemporary art.",
    descriptionEs:
      "Un espacio de tres plantas en el corazón del Soho diseñado para quienes aprecian la gastronomía, la creatividad y el arte contemporáneo.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/MZc6hNRRqKMtXyJT2MFnb7TlnVt2%2F1533227a-582d-4343-81b7-62dc143b2a46%2Fphotos%2Fimage_picker_071FBC80-5501-4EB8-A4C7-3D6F3F6BA62F-7983-00001D5AA2DD1BB2.jpg?alt=media&token=b697c863-4edc-4256-9b64-db3163b52050",
    dailyVisitors: "130+ daily guests",
  },
  {
    id: "857bbc50-af88-446a-9e26-40f9dc1f5bd8",
    name: "GARUM",
    neighborhood: "Bayswater, London",
    address: "68 Queensway, London W2 3RL",
    category: "Italian Restaurant",
    categoryEs: "Restaurante Italiano",
    description:
      "Nestled in a warm and elegant setting on Queensway, Garum pairs Roman culinary tradition with rotating contemporary artwork.",
    descriptionEs:
      "En un ambiente cálido y elegante en Queensway, Garum combina la tradición culinaria romana con exposiciones rotativas de arte contemporáneo.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/h4NRRreljtfvSy6MGmK35upmlAF3%2F857bbc50-af88-446a-9e26-40f9dc1f5bd8%2Fphotos%2Fimage_picker_1E13EBFC-661F-4E8F-A3F4-DC422EBBFF79-65048-0000683E56119096.jpg?alt=media&token=58add195-e308-44a0-927f-de57fa94947c",
    dailyVisitors: "90+ daily guests",
  },
  {
    id: "cd009d7b-08f6-44dc-b77d-622ed646788e",
    name: "Mercato Metropolitano Wood Wharf",
    neighborhood: "Canary Wharf, London",
    address: "6 George St, Wood Wharf, London E14 9QG",
    category: "Community & Cultural Hub",
    categoryEs: "Espacio Cultural y Gastronómico",
    description:
      "Located in London's vibrant Wood Wharf district, bringing community, artisanal dining, culture and visual art together.",
    descriptionEs:
      "Situado en el vibrante distrito de Wood Wharf en Londres, une comunidad, gastronomía artesanal, cultura y artes visuales.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/h4NRRreljtfvSy6MGmK35upmlAF3%2Fcd009d7b-08f6-44dc-b77d-622ed646788e%2Fphotos%2Fimage_picker_49075875-216D-493E-910D-602169EC7B59-65066-0000684314D9B655.jpg?alt=media&token=ba0c8852-3eb1-4c62-a2ce-ee9cea9f2bab",
    dailyVisitors: "160+ daily guests",
  },
  {
    id: "8a90c988-c34a-4a7a-8b0c-4419d836384b",
    name: "Luxxdesign Design + Art Space",
    neighborhood: "Chelsea, London",
    address: "Fulham Rd, London SW10 9UH",
    category: "Design & Art Boutique",
    categoryEs: "Boutique de Diseño y Arte",
    description:
      "A design and art destination in the heart of Chelsea showcasing curated Italian design objects alongside artwork from independent artists.",
    descriptionEs:
      "Un destino de diseño y arte en el corazón de Chelsea que exhibe piezas de diseño italiano junto a obras de artistas independientes.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/7xsVGM3xQRdV8jPTtHV0Xy16rlK2%2F8a90c988-c34a-4a7a-8b0c-4419d836384b%2Fphotos%2Fimage_picker_22FA3286-75CB-4250-AB03-D6A78D38AF59-22829-0000038262F0E2EA.jpg?alt=media&token=20156316-dbe3-4ba9-bfdd-62bd67c0347a",
  },
  {
    id: "a4ddd2a1-af78-4c29-a188-3bc71a912bf6",
    name: "ANNEX GALLERY",
    neighborhood: "Shoreditch, London",
    address: "349 Old St, London EC1V",
    category: "Creative Space",
    categoryEs: "Espacio Creativo",
    description:
      "A refined and distinctive exhibition space located in the heart of Shoreditch just off Old Street.",
    descriptionEs:
      "Un espacio expositivo refinado y distintivo ubicado en el corazón de Shoreditch, junto a Old Street.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/OBdAFOlyzWdRglBNKywAls7Zh6Y2%2Fa4ddd2a1-af78-4c29-a188-3bc71a912bf6%2Fphotos%2Fimage_picker_46E860C5-33D5-4B6F-A513-F33_1776438406663516.jpg?alt=media&token=a096fd82-c70f-455c-85fd-7f8ec347d98b",
  },
  {
    id: "da792876-e9dd-4b84-9707-2df059711200",
    name: "eARTh Space",
    neighborhood: "Hoxton, London",
    address: "253 Hoxton St, London N1 5LG",
    category: "Creative Hub",
    categoryEs: "Centro Creativo",
    description:
      "A dynamic and welcoming creative space on Hoxton Street offering a platform for emerging and independent contemporary artists.",
    descriptionEs:
      "Un espacio creativo dinámico y acogedor en Hoxton Street que ofrece una plataforma para artistas contemporáneos emergentes e independientes.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/h4NRRreljtfvSy6MGmK35upmlAF3%2Fda792876-e9dd-4b84-9707-2df059711200%2Fphotos%2Fimage_picker_8C76CB7B-1613-4718-A246-AAD7EAB2DB92-1493-0000114CF3037D03.jpg?alt=media&token=4180c6e2-63ee-49f5-9e09-e0f885957736",
  },
  {
    id: "0fa11ab9-2900-4952-9e3a-6c7df1961d6e",
    name: "Prosecco Caffe Soho",
    neighborhood: "Soho, London",
    address: "Frith St, London W1D 5LD",
    category: "Café & Wine Bar",
    categoryEs: "Cafetería y Wine Bar",
    description:
      "Italian café and bar in the middle of Soho on Frith Street with Venetian style decor, authentic coffee and rotating art displays.",
    descriptionEs:
      "Cafetería y bar italiano en pleno Soho en Frith Street con decoración veneciana, café auténtico y exposiciones de arte en rotación.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/I20eEUbd8aSDDpwadrxtN1H4CxA2%2F0fa11ab9-2900-4952-9e3a-6c7df1961d6e%2Fphotos%2Fimage_picker_12A5B183-D053-420C-8C64-8F7_1791756919175148.png?alt=media&token=52ee4ee1-076a-43cc-90cc-84edfcb8d9ca",
  },
  {
    id: "ebadd96e-f996-48ff-8222-5ae081445314",
    name: "SATYRIO",
    neighborhood: "Aldgate, London",
    address: "Aldgate High St, London EC3N 1AL",
    category: "Wine Bar & Restaurant",
    categoryEs: "Wine Bar y Restaurante",
    description:
      "An immersive wine and dining destination in the City offering Italian cuisine, fine wines and curated wall exhibitions.",
    descriptionEs:
      "Un destino gastronómico y enológico en la City de Londres con cocina italiana, vinos selectos y exposiciones de arte.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/AaSJG8IogJTkJ1NcgScj2Gv6LPK2%2Febadd96e-f996-48ff-8222-5ae081445314%2Fphotos%2Fimage_picker_202C0C5E-E032-440B-A0E6-40D_1781169582902485.jpg?alt=media&token=fc958c82-8f0b-49e9-9800-917d827721c1",
  },
  {
    id: "087d7d83-c0e0-4dd0-9180-4eaf36e08005",
    name: "CARBOBAR",
    neighborhood: "Hackney, London",
    address: "130 Cadogan Terrace, London E9 5HP",
    category: "Bar & Community Space",
    categoryEs: "Bar y Espacio Comunitario",
    description:
      "Located in the heart of Hackney just a short walk from Victoria Park, bringing art and local community together.",
    descriptionEs:
      "Ubicado en el corazón de Hackney, a pocos pasos de Victoria Park, uniendo el arte y la comunidad local.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/UEz71BE0y9VIVdZVObMddaCqF9I3%2F087d7d83-c0e0-4dd0-9180-4eaf36e08005%2Fphotos%2Fimage_picker_6A136AC1-B278-4AB7-992C-B81293FD45B7-43468-00001332928DE903.jpg?alt=media&token=4397da01-554a-4f69-a65f-be43b5c26353",
  },
  {
    id: "d1e5dedd-28d7-41cb-8c54-a3cf50f08565",
    name: "Vaffancoffee Hackney Wick",
    neighborhood: "Hackney Wick, London",
    address: "80 Wallis Rd, London E9 5LN",
    category: "Creative Café & Bar",
    categoryEs: "Cafetería y Bar Creativo",
    description:
      "A vibrant art focused space in Hackney Wick where contemporary artwork, bold ideas and East London creative culture meet.",
    descriptionEs:
      "Un vibrante espacio artístico en Hackney Wick donde confluyen el arte contemporáneo, las ideas audaces y la cultura creativa del este de Londres.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/yX2iAq1813OxxdOjO4f9U5Husdo1%2Fd1e5dedd-28d7-41cb-8c54-a3cf50f08565%2Fphotos%2Fimage_picker_21E34F48-BD59-4D89-9D8A-84A3DA63ABE9-9136-000002EA8D6918CA.jpg?alt=media&token=e1e11021-76ca-41d4-b218-764e195e3029",
  },
  {
    id: "fb854f08-5d86-466b-9df2-6b175197204a",
    name: "Pasta Nostra London",
    neighborhood: "Old Street, London",
    address: "122 Old St, London EC1V 9BD",
    category: "Restaurant",
    categoryEs: "Restaurante",
    description:
      "Located at 122 Old Street, serving Mediterranean classics alongside live music and original contemporary artwork.",
    descriptionEs:
      "Situado en 122 Old Street, ofrece clásicos mediterráneos junto con música en vivo y obras originales de arte contemporáneo.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/iFd9ONNYaEaC5ST1pPFuNs9MI6B2%2Ffb854f08-5d86-466b-9df2-6b175197204a%2Fphotos%2Fimage_picker_D1DEF24F-5C44-47A7-89E1-627_1778083655194168.jpg?alt=media&token=13899dac-b699-4c84-b793-c5ef6276f4d0",
  },
  {
    id: "23c9c269-7acd-43a8-a49b-648dbc2f9099",
    name: "Bobo & Wild",
    neighborhood: "Shoreditch, London",
    address: "Shoreditch, London",
    category: "Contemporary Café & Dining",
    categoryEs: "Cafetería y Restaurante Contemporáneo",
    description:
      "A contemporary casual dining environment in Shoreditch balancing warmth with clean lines, natural light and curated wall art.",
    descriptionEs:
      "Un espacio gastronómico contemporáneo en Shoreditch que combina calidez, líneas limpias, luz natural y arte en sus paredes.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/g4vIJfqI7tUYNhyud7NcJ9eGC2u1%2F23c9c269-7acd-43a8-a49b-648dbc2f9099%2Fphotos%2Fscaled_17899.jpg?alt=media&token=a54bf6aa-0d39-4b37-966c-480c61a08117",
  },
  {
    id: "96454594-2ecb-4ee9-a44d-bdcf12b06a24",
    name: "Baccaro London",
    neighborhood: "Teddington, London",
    address: "114 High St, Teddington TW11 9BB",
    category: "Cicchetti & Wine Bar",
    categoryEs: "Cicchetti y Wine Bar",
    description:
      "Inspired by Venetian cicchetti culture with a contemporary British edge, showcasing rotating original artwork on Teddington High Street.",
    descriptionEs:
      "Inspirado en la tradición veneciana de cicchetti con un toque británico contemporáneo, exhibiendo obras originales en Teddington High Street.",
    photoUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/ZXVSoZEyseT8s9jpuzWjejPRg7Z2%2F96454594-2ecb-4ee9-a44d-bdcf12b06a24%2Fphotos%2Fimage_picker_5C1F2AF8-544D-4710-8A20-370_1787054684863713.jpg?alt=media&token=8f6e03b4-3de0-46e5-b411-b8ff28eddeae",
  },
];

export interface VerifiedPlacement {
  id: string;
  artworkTitle: string;
  artistName: string;
  collectionName: string;
  venueName: string;
  venueLocation: string;
  artworkUrl: string;
}

export const VERIFIED_PLACEMENTS: VerifiedPlacement[] = [
  {
    id: "01DG3NxrQFdJQFlb8ZkI",
    artworkTitle: "Nothing Wrong With Landscapes Vol. 5",
    artistName: "Brevevita Letters",
    collectionName: "Nothing Wrong With Landscapes",
    venueName: "Luxxdesign Design + Art Space",
    venueLocation: "Chelsea, London",
    artworkUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/xkepWDQtwtSOnGgxe9U8Yx1dput1%2Fartworks%2Fscaled_IMG-20250623-WA0026.jpg?alt=media&token=7e8bc5fb-f0b8-45a5-81ae-c674b3029f3a",
  },
  {
    id: "2PyVCWepGAVYCTJB5f3s",
    artworkTitle: "Scorpio, Zodiac Sign",
    artistName: "vart",
    collectionName: "Zodiac Sign Carnaval Collection",
    venueName: "Prosecco Caffe Soho",
    venueLocation: "Soho, London",
    artworkUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/DWr5Ovmpv4NkvPwUHTjWY4WK4RJ2%2Fartworks%2F67bf1a40-b461-4c86-ba17-77658d3b0756_1779102447298000.jpg?alt=media&token=9cea9987-e9dd-4be6-a1be-06042271d15c",
  },
  {
    id: "2c1PnEanjqx25CPwLRwu",
    artworkTitle: "Pandora",
    artistName: "Noxa",
    collectionName: "CyberMyth",
    venueName: "eARTh Space",
    venueLocation: "Hoxton, London",
    artworkUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/dw6vyJOUeXZVjVh4HmdR0VoY47U2%2Fartworks%2Fimage_picker_5B27A03A-5702-492D-B88C-FBC_1782466962908696.jpg?alt=media&token=8780a7d1-cc13-4b1a-95b9-a1cfabfc9f9f",
  },
  {
    id: "33cj6qlXMJRmAamW9aUa",
    artworkTitle: "Penelope",
    artistName: "Francesco Filippelli",
    collectionName: "CyberMyth",
    venueName: "Vaffancoffee Hackney Wick",
    venueLocation: "Hackney Wick, London",
    artworkUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/0DR1V7Ips4gyyx1dL5lF9rVKhHg2%2Fartworks%2Fscaled_Penelope_1781205043738383.jpg?alt=media&token=75af6e98-3ff7-45eb-95b7-b9f93cffbcbf",
  },
  {
    id: "3XIXQZYNO0ZTd35nIzHM",
    artworkTitle: "Full Moon",
    artistName: "Piero Gianfranceschi",
    collectionName: "Print on Canvas",
    venueName: "Pasta Nostra London",
    venueLocation: "Old Street, London",
    artworkUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/UENmCW31cmZaTkrMwtnInx5Rt9H2%2Fartworks%2Fscaled_1000164700.jpg?alt=media&token=67088e56-da48-46de-96d9-f8074557252e",
  },
  {
    id: "3h0qExEshLiiPXlzM48w",
    artworkTitle: "Summer in Silla",
    artistName: "Piero Gianfranceschi",
    collectionName: "Prints on Canvas",
    venueName: "Baccaro London",
    venueLocation: "Teddington, London",
    artworkUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/UENmCW31cmZaTkrMwtnInx5Rt9H2%2Fartworks%2Fscaled_1000164711.jpg?alt=media&token=d7b67e90-859b-4c04-8307-f633e72e5122",
  },
  {
    id: "2XzckLLGXuiwFHzMXojd",
    artworkTitle: "Sigarette Sui Tavoli Del Bar Vol. 1",
    artistName: "Brevevita Letters",
    collectionName: "Sigarette Sui Tavoli Del Bar",
    venueName: "CARBOBAR",
    venueLocation: "Hackney, London",
    artworkUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/xkepWDQtwtSOnGgxe9U8Yx1dput1%2Fartworks%2Fscaled_IMG-20250714-WA0039.jpg?alt=media&token=3c898ac7-cb0a-4ea0-8a08-c81fb9078172",
  },
  {
    id: "0KNqn26tfAWU0qZl9mtO",
    artworkTitle: "Violet Fog 002",
    artistName: "KIRKANART",
    collectionName: "KIRKAN ART",
    venueName: "Vaffancoffee Hackney Wick",
    venueLocation: "Hackney Wick, London",
    artworkUrl:
      "https://firebasestorage.googleapis.com/v0/b/artb2b-34af2.appspot.com/o/t6imgY2EddQy00hZK874aoDg6XR2%2Fartworks%2Fimage_picker_49BA077A-568E-4E83-902F-FC12204B2840-85628-0000269AC7A51FD9.jpg?alt=media&token=62587975-e7b6-4487-84a4-c2a2a0543fa0",
  },
];
