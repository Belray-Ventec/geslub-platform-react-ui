import React from 'react';
export interface Product {
  id: number;
  name: string;
  price: number;
  link: string;
  tag?: {id: number; name: string}[];
  email: string;
  address: { city: string; number: number; country: string; street: string };
}

export interface ProductColumns {
  label: string;
  getValue: (item: Product) => React.ReactNode;
}

export const productData: Product[] = [
  {
    id: 1,
    name: 'Azucar',
    price: 500,
    link: 'https://www.google.cl',
    tag: [{id: 1, name: 'Congelados'}, {id: 2, name: 'Panaderia 1'}, {id: 3, name: 'Juegos'}, {id: 4, name: 'Hogar'}],
    email: 'brianc.contacto@gmail.com',
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
    email: 'jose@gmail.com',
    tag: [{id: 1, name: 'Congelados'}, {id: 2, name: 'Panaderia 1'}, {id: 3, name: 'Juegos'}, {id: 4, name: 'Hogar'}],
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'Ayala',
    },
  },
  {
    id: 3,
    name: 'Coca Cola',
    price: 1200,
    link: 'https://www.google.cl',
    tag: [{id: 1, name: 'Congelados'}, {id: 2, name: 'Panaderia 1'}, {id: 3, name: 'Juegos'}, {id: 4, name: 'Hogar'}],
    email: 'matias@gmail.com',
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
    tag: [{id: 1, name: 'Congelados'}, {id: 2, name: 'Panaderia 1'}, {id: 3, name: 'Juegos'}, {id: 4, name: 'Hogar'}],
    email: 'nicolas@gmail.com',
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'Camino Viejo de Leganés',
    },
  },
  {
    id: 5,
    name: 'Salsa',
    price: 3450,
    link: 'https://www.google.cl',
    tag: [{id: 1, name: 'Congelados'}, {id: 2, name: 'Panaderia 1'}, {id: 3, name: 'Juegos'}, {id: 4, name: 'Hogar'}],
    email: 'jorge@gmail.com',
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'volcan',
    },
  },
  {
    id: 6,
    name: 'Caracoles',
    price: 777,
    link: 'https://www.google.cl',
    tag: [{id: 1, name: 'Congelados'}, {id: 2, name: 'Panaderia 1'}, {id: 3, name: 'Juegos'}, {id: 4, name: 'Hogar'}],
    email: 'brianc.contacto@gmail.com',
    address: {
      city: 'santiago',
      number: 2145,
      country: 'bolivia',
      street: '10 de julio',
    },
  },
  {
    id: 7,
    name: 'Salsa',
    price: 3450,
    link: 'https://www.google.cl',
    tag: [{id: 1, name: 'Congelados'}, {id: 2, name: 'Panaderia 1'}, {id: 3, name: 'Juegos'}, {id: 4, name: 'Hogar'}],
    email: 'matiasc.contacto@gmail.com',
    address: {
      city: 'santiago',
      number: 2145,
      country: 'chile',
      street: 'santa marta',
    },
  },
  {
    id: 8,
    name: 'Mantequilla',
    price: 3450,
    link: 'https://www.google.cl',
    tag: [{id: 1, name: 'Congelados'}, {id: 2, name: 'Panaderia 1'}, {id: 3, name: 'Juegos'}, {id: 4, name: 'Hogar'}],
    email: 'jorgec.contacto@gmail.com',
    address: {
      city: 'santiago',
      number: 2145,
      country: 'argentina',
      street: 'los manzanos',
    },
  },
  {
    id: 9,
    name: 'Hielo',
    price: 777,
    link: 'https://www.google.cl',
    tag: [{id: 1, name: 'Congelados'}, {id: 2, name: 'Panaderia 1'}, {id: 3, name: 'Juegos'}, {id: 4, name: 'Hogar'}],
    email: 'carlos.contacto@gmail.com',
    address: {
      city: 'santiago',
      number: 2145,
      country: 'peru',
      street: 'los alamos',
    },
  },
];

export const productColumns: ProductColumns[] = [
  { label: 'Id', getValue: (item) => item.id },
  { label: 'Nombre', getValue: (item) => item.name },
  { label: 'Precio', getValue: (item) => item.price },
  { label: 'Street', getValue: (item) => item.address.street },
];

export const onEdit = (product: Product): void => {
  console.log(product);
};


export const tagListData = [
  { id: 1, name: 'Tag 1' },
  { id: 2, name: 'Tag 2' },
  { id: 3, name: 'Tag 3' },
  { id: 4, name: 'Tag 4' },
  { id: 5, name: 'Tag 5' },
  { id: 6, name: 'Tag 6' },
  { id: 7, name: 'Tag 7' },
  { id: 8, name: 'Tag 8' },
  { id: 9, name: 'Tag 9' },
  { id: 10, name: 'Tag 10' },
  { id: 11, name: 'Tag 11' },
  { id: 12, name: 'Tag 12' },
  { id: 13, name: 'Tag 13' },
  { id: 14, name: 'Tag 14' },
  { id: 15, name: 'Tag 15' },
  { id: 16, name: 'Tag 16' },
  { id: 17, name: 'Tag 17' },
  { id: 18, name: 'Tag 18' },
  { id: 19, name: 'Tag 19' },
  { id: 20, name: 'Tag 20' },
  { id: 21, name: 'Tag 21' },
  { id: 22, name: 'Tag 22' },
  { id: 23, name: 'Tag 23' },
  { id: 24, name: 'Tag 24' },
  { id: 25, name: 'Tag 25' },
  { id: 26, name: 'Tag 26' },
  { id: 27, name: 'Tag 27' },
  { id: 28, name: 'Tag 28'}]