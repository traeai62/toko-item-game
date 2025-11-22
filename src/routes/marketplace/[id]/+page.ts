import { getProductById } from '$lib/api/products';

export function load({ params }) {
  const product = getProductById(params.id);
  return { product };
}

