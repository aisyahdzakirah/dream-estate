export type Property = {
  id: number
  title: string
  location: string
  city: string
  type: "House" | "Villa" | "Apartment"
  price: number
  priceLabel: string
  bedrooms: number
  bathrooms: number
  area: number
  image: string
  featured?: boolean
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Minimalist House",
    location: "South Jakarta",
    city: "Jakarta",
    type: "House",
    price: 2400000000,
    priceLabel: "Rp 2.4 M",
    bedrooms: 4,
    bathrooms: 3,
    area: 180,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: 2,
    title: "The Oakwood Villa",
    location: "Dago",
    city: "Bandung",
    type: "Villa",
    price: 3800000000,
    priceLabel: "Rp 3.8 M",
    bedrooms: 5,
    bathrooms: 4,
    area: 320,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    featured: true,
  },
  {
    id: 3,
    title: "Urban Residence",
    location: "Kuningan",
    city: "Jakarta",
    type: "Apartment",
    price: 1900000000,
    priceLabel: "Rp 1.9 M",
    bedrooms: 2,
    bathrooms: 2,
    area: 95,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 4,
    title: "Serene Family House",
    location: "Cibubur",
    city: "Jakarta",
    type: "House",
    price: 1750000000,
    priceLabel: "Rp 1.75 M",
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 5,
    title: "Azure Hills Villa",
    location: "Lembang",
    city: "Bandung",
    type: "Villa",
    price: 4500000000,
    priceLabel: "Rp 4.5 M",
    bedrooms: 5,
    bathrooms: 5,
    area: 420,
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 6,
    title: "Skyline Apartment",
    location: "SCBD",
    city: "Jakarta",
    type: "Apartment",
    price: 3200000000,
    priceLabel: "Rp 3.2 M",
    bedrooms: 3,
    bathrooms: 2,
    area: 125,
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 7,
    title: "Cedar Garden House",
    location: "Bintaro",
    city: "Jakarta",
    type: "House",
    price: 2800000000,
    priceLabel: "Rp 2.8 M",
    bedrooms: 4,
    bathrooms: 3,
    area: 210,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: 8,
    title: "Montana Private Villa",
    location: "Ubud",
    city: "Bali",
    type: "Villa",
    price: 5200000000,
    priceLabel: "Rp 5.2 M",
    bedrooms: 4,
    bathrooms: 4,
    area: 380,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
]