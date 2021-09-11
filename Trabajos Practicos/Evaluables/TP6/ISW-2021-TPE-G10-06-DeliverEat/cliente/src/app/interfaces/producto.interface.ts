export interface Producto {
  nombre: string;
  dimension: number;
  categoria: string;
  image: string;
  precio: number;
  _id: string;
  cantidad: number;
  subTotal: number;
}

export interface Carrito {
  _id: string;
  productos: Producto[];
  dimensionMochila: number;
  __v: number;
}
