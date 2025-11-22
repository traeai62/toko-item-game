import { p as products } from "../../../../chunks/data.js";
function getProductById(id) {
  return products.find((p) => p.id === id);
}
function load({ params }) {
  const product = getProductById(params.id);
  return { product };
}
export {
  load
};
