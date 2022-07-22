export interface Product {
  id: number;
  name: string;
  price: number;
  link: string;
  tag?: string[];
  address: { city: string; number: number; country: string; street: string };
}

export interface ProductColumns {
  label: string;
  key: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: 'Azucar',
    price: 500,
    link: 'https://www.google.cl',
    tag: ['Congelados', 'Panaderia 1', 'Colaciones', 'Hogar'],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'los manzanos',
    },
  },
  {
    id: 2,
    name: 'Arroz',
    price: 200,
    link: 'https://www.google.cl',
    tag: [
      'Carnes y Pescados',
      'Congelados',
      'Panaderia',
      'Colaciones',
      'Hogar',
    ],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'los manzanos',
    },
  },
  {
    id: 3,
    name: 'Coca Cola',
    price: 1200,
    link: 'https://www.google.cl',
    tag: ['Carnes y Pescados', 'Panaderia', 'Colaciones', 'Hogar'],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'los manzanos',
    },
  },

  {
    id: 4,
    name: 'Sal',
    price: 2500,
    link: 'https://www.google.cl',
    tag: ['Carnes y Pescados', 'Congelados', 'Panaderia 5', 'Colaciones'],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'los manzanos',
    },
  },
  {
    id: 5,
    name: 'Salsa',
    price: 3450,
    link: 'https://www.google.cl',
    tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones'],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'los manzanos',
    },
  },
  {
    id: 6,
    name: 'Caracoles',
    price: 777,
    link: 'https://www.google.cl',
    tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones'],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'los manzanos',
    },
  },
  {
    id: 7,
    name: 'Salsa',
    price: 3450,
    link: 'https://www.google.cl',
    tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones'],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'los manzanos',
    },
  },
  {
    id: 8,
    name: 'Mantequilla',
    price: 3450,
    link: 'https://www.google.cl',
    tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones'],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'los manzanos',
    },
  },
  {
    id: 9,
    name: 'Hielo',
    price: 777,
    link: 'https://www.google.cl',
    tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones'],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'los manzanos',
    },
  },
];

export const productColumns: ProductColumns[] = [
  { label: 'Id', key: 'id' },
  { label: 'Nombre', key: 'name' },
  { label: 'Precio', key: 'price' },
  { label: 'Comprar', key: 'link' },
  { label: 'Etiquetas', key: 'tag' },
];

export const onEdit = (product: Product): void => {
  console.log(product);
};
