import { products } from '../mock/data';

export function listProducts() {
  return products;
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

