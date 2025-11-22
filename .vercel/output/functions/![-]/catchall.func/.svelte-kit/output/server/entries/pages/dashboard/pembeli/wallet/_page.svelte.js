import { a as attr } from "../../../../../chunks/attributes.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let amount = 0;
    $$renderer2.push(`<section><h1 class="text-2xl font-semibold">Wallet</h1> <div class="mt-4 flex gap-3"><input class="border border-gray-300 rounded px-3 py-2" type="number"${attr("value", amount)}/> <button class="bg-blue text-white px-4 py-2 rounded">Top Up</button></div></section>`);
  });
}
export {
  _page as default
};
