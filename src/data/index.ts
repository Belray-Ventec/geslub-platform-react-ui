export interface Product {
    id: number;
    name: string;
    price: number;
    link: string;
    tag?: string[];
}

export interface ProductColumns {
    label: string;
    key: string;
}

export const productData: Product[] = [{id: 1, name: 'Azucar', price: 500, link: 'https://www.google.cl', tag: ['Congelados', 'Panaderia 1', 'Colaciones', 'Hogar']}, {id: 2, name: 'Arroz', price: 200, link: 'https://www.google.cl', tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones', 'Hogar']}, {id: 3, name: 'Coca Cola', price: 1200, link: 'https://www.google.cl', tag: ['Carnes y Pescados', 'Panaderia', 'Colaciones', 'Hogar']}, {id: 4, name: 'Sal', price: 2500, link: 'https://www.google.cl', tag: ['Carnes y Pescados', 'Congelados', 'Panaderia 5', 'Colaciones']}, {id: 5, name: 'Salsa', price: 3450, link: 'https://www.google.cl', tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones']}, {id: 6, name: 'Caracoles', price: 777, link: 'https://www.google.cl', tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones']}, {id: 7, name: 'Salsa', price: 3450, link: 'https://www.google.cl', tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones']}, {id: 8, name: 'Mantequilla', price: 3450, link: 'https://www.google.cl', tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones']}, {id: 9, name: 'Hielo', price: 777, link: 'https://www.google.cl', tag: ['Carnes y Pescados', 'Congelados', 'Panaderia', 'Colaciones']}]

export const productColumns: ProductColumns[] = [
    { label: "Id", key: "id" },
    { label: "Nombre", key: "name" },
    { label: "Precio", key: "price" },
    { label: "Comprar", key: "link" },
    { label: "Etiquetas", key: "tag"}
  ]
