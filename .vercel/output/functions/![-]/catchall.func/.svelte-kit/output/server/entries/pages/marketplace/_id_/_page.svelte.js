import { w as bind_props } from "../../../../chunks/index.js";
import { a as attr } from "../../../../chunks/attributes.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const p = data.product;
    $$renderer2.push(`<section class="max-w-5xl mx-auto px-4 py-6"><div class="grid md:grid-cols-2 gap-6"><img${attr("src", p.images[0])}${attr("alt", p.title)} class="w-full h-80 object-cover rounded"/> <div><h1 class="text-2xl font-semibold">${escape_html(p.title)}</h1> <p class="text-green font-semibold mt-2">${escape_html(p.priceGold)} gold</p> <p class="mt-3">${escape_html(p.description)}</p> <div class="mt-6 flex gap-3"><button class="bg-blue text-white px-4 py-2 rounded">Beli Sekarang</button> <a href="/dashboard/penjual/profil-toko" class="border border-blue text-blue px-4 py-2 rounded">Hubungi Penjual</a></div></div></div></section>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
