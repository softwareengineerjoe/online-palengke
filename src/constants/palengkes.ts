export type Store = {
  id: number
  name: string
  category?: string
  contactNumber?: string
  doesDelivery?: boolean
  openFrom?: string
  openUntil?: string
  owner?: string
}

export type Market = {
  id: number
  name: string
  location: string  
  stores: Store[]
}


export const palengkesByCity: Record<string, Market[]> = {
  MANILA: [
    {
      id: 1,
      name: 'Manila Public Market',
      location: 'Manila',
      stores: [
        {
          id: 1,
          name: 'Fruit Stall',
          category: 'Fruits',
          contactNumber: "123-456-789",
          doesDelivery: true,
          openFrom: "8am",
          openUntil: "8pm",
          owner: "John Doe"
        },
        {
          id: 2,
          name: 'Vegetable Corner',
          category: 'Lowland Vegetables',
          contactNumber: "234-567-890",
          doesDelivery: false,
          openFrom: "7am",
          openUntil: "6pm",
          owner: "Maria Santos"
        },
        {
          id: 3,
          name: 'Rice and Grains',
          category: 'Grains',
          contactNumber: "345-678-901",
          doesDelivery: true,
          openFrom: "9am",
          openUntil: "7pm",
          owner: "Carlos Reyes"
        },
        {
          id: 4,
          name: 'Spices and Herbs',
          category: 'Spices & Herbs',
          contactNumber: "456-789-012",
          doesDelivery: false,
          openFrom: "8am",
          openUntil: "5pm",
          owner: "Liza Cruz"
        },
      ],
    },
    {
      id: 4,
      name: 'Intramuros Public Market',
      location: 'Manila',
      stores: [
        {
          id: 5,
          name: 'Benjie Store',
          category: 'Mixed Goods',
          contactNumber: "567-890-123",
          doesDelivery: true,
          openFrom: "7am",
          openUntil: "7pm",
          owner: "Benjie Santos"
        },
        {
          id: 6,
          name: 'Nena Corner',
          category: 'Mixed Goods',
          contactNumber: "678-901-234",
          doesDelivery: false,
          openFrom: "8am",
          openUntil: "6pm",
          owner: "Nena Dela Cruz"
        },
        {
          id: 7,
          name: 'Fresh Meats',
          category: 'Meat Products',
          contactNumber: "789-012-345",
          doesDelivery: true,
          openFrom: "6am",
          openUntil: "6pm",
          owner: "Josefa Mercado"
        },
        {
          id: 8,
          name: 'Bakery Delights',
          category: 'Bakery',
          contactNumber: "890-123-456",
          doesDelivery: false,
          openFrom: "7am",
          openUntil: "7pm",
          owner: "Maria Garcia"
        },
      ],
    },
    {
      id: 5,
      name: 'Quiapo Market',
      location: 'Manila',
      stores: [
        {
          id: 9,
          name: 'Flower Stall',
          category: 'Flowers',
          contactNumber: "901-234-567",
          doesDelivery: false,
          openFrom: "6am",
          openUntil: "6pm",
          owner: "Sofia Reyes"
        },
        {
          id: 10,
          name: 'Street Food Vendors',
          category: 'Prepared Foods',
          contactNumber: "012-345-678",
          doesDelivery: false,
          openFrom: "10am",
          openUntil: "10pm",
          owner: "Miguel Cruz"
        },
      ],
    },
  ],

  CEBU: [
    {
      id: 2,
      name: 'Seafood Plaza',
      location: 'Cebu',
      stores: [
        {
          id: 3,
          name: 'Fishmonger A',
          category: 'Fish Products',
          contactNumber: "111-222-333",
          doesDelivery: true,
          openFrom: "6am",
          openUntil: "6pm",
          owner: "Antonio Velasco"
        },
        {
          id: 4,
          name: 'Shrimp Shop',
          category: 'Fish Products',
          contactNumber: "222-333-444",
          doesDelivery: false,
          openFrom: "7am",
          openUntil: "5pm",
          owner: "Isabel Tan"
        },
        {
          id: 11,
          name: 'Crab Corner',
          category: 'Fish Products',
          contactNumber: "333-444-555",
          doesDelivery: true,
          openFrom: "6am",
          openUntil: "7pm",
          owner: "Ramon Lopez"
        },
        {
          id: 12,
          name: 'Shellfish Stand',
          category: 'Fish Products',
          contactNumber: "444-555-666",
          doesDelivery: false,
          openFrom: "7am",
          openUntil: "6pm",
          owner: "Ana Flores"
        },
      ],
    },
    {
      id: 6,
      name: 'Carbon Market',
      location: 'Cebu',
      stores: [
        {
          id: 13,
          name: 'Fruit Vendors',
          category: 'Fruits',
          contactNumber: "555-666-777",
          doesDelivery: true,
          openFrom: "8am",
          openUntil: "8pm",
          owner: "Pedro Ramos"
        },
        {
          id: 14,
          name: 'Vegetable Vendors',
          category: 'Lowland Vegetables',
          contactNumber: "666-777-888",
          doesDelivery: false,
          openFrom: "7am",
          openUntil: "7pm",
          owner: "Lourdes Santos"
        },
        {
          id: 15,
          name: 'Meat Vendors',
          category: 'Meat Products',
          contactNumber: "777-888-999",
          doesDelivery: true,
          openFrom: "6am",
          openUntil: "6pm",
          owner: "Carlos Navarro"
        },
      ],
    },
  ],

  DAVAO: [
    {
      id: 3,
      name: 'Veggie World',
      location: 'Davao',
      stores: [
        {
          id: 5,
          name: 'Organic Greens',
          category: 'Organic Vegetables',
          contactNumber: "888-999-000",
          doesDelivery: true,
          openFrom: "7am",
          openUntil: "7pm",
          owner: "Melanie Diaz"
        },
        {
          id: 6,
          name: 'Root Veggies',
          category: 'Root Vegetables',
          contactNumber: "999-000-111",
          doesDelivery: false,
          openFrom: "8am",
          openUntil: "6pm",
          owner: "Julian Cruz"
        },
        {
          id: 16,
          name: 'Exotic Fruits',
          category: 'Fruits',
          contactNumber: "000-111-222",
          doesDelivery: true,
          openFrom: "9am",
          openUntil: "5pm",
          owner: "Gloria Mendoza"
        },
      ],
    },
    {
      id: 7,
      name: 'Aldevinco Shopping Center',
      location: 'Davao',
      stores: [
        {
          id: 17,
          name: 'Handicrafts',
          category: 'Handicrafts',
          contactNumber: "111-222-333",
          doesDelivery: false,
          openFrom: "9am",
          openUntil: "6pm",
          owner: "Ramon Garcia"
        },
        {
          id: 18,
          name: 'Local Souvenirs',
          category: 'Souvenirs',
          contactNumber: "222-333-444",
          doesDelivery: false,
          openFrom: "9am",
          openUntil: "6pm",
          owner: "Luz Santos"
        },
        {
          id: 19,
          name: 'Dried Fish',
          category: 'Fish Products',
          contactNumber: "333-444-555",
          doesDelivery: true,
          openFrom: "6am",
          openUntil: "6pm",
          owner: "Emilio Dela Cruz"
        },
      ],
    },
  ],
}


// FLAT ARRAY FOR ALL PALENGKES
export const palengkes: Market[] = Object.values(palengkesByCity).flat()
