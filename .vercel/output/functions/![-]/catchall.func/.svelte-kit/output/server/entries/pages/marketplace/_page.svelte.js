import { y as ensure_array_like, w as bind_props } from "../../../chunks/index.js";
import { P as ProductCard } from "../../../chunks/ProductCard.js";
import { p as products } from "../../../chunks/data.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filtered;
    let data = $$props["data"];
    let q = data.q ?? "";
    filtered = products.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));
    $$renderer2.push(`<section class="max-w-7xl mx-auto px-4 py-6"><h1 class="text-2xl font-semibold">Marketplace</h1> <div class="mt-4 flex gap-3"><input class="border border-gray-300 rounded px-3 py-2 w-full" placeholder="Cari"${attr("value", q)}/> <select class="border border-gray-300 rounded px-3 py-2">`);
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Semua`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Termurah`);
    });
    $$renderer2.option({}, ($$renderer3) => {
      $$renderer3.push(`Termahal`);
    });
    $$renderer2.push(`</select></div> <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
    const each_array = ensure_array_like(filtered);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let p = each_array[$$index];
      ProductCard($$renderer2, {
        id: p.id,
        title: p.title,
        priceGold: p.priceGold,
        seller: "Penjual",
        image: p.images[0]
      });
    }
    $$renderer2.push(`<!--]--></div></section>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
