import { w as bind_props } from "./index.js";
import { a as attr } from "./attributes.js";
import { e as escape_html } from "./escaping.js";
function ProductCard($$renderer, $$props) {
  let id = $$props["id"];
  let title = $$props["title"];
  let priceGold = $$props["priceGold"];
  let seller = $$props["seller"];
  let image = $$props["image"];
  $$renderer.push(`<div class="bg-white border border-gray-200 rounded-lg p-3 transition-all duration-200 hover:border-red hover:-translate-y-1 hover:shadow-xl"><a${attr("href", `/marketplace/${id}`)}><img${attr("src", image)}${attr("alt", title)} class="w-full h-40 object-cover rounded"/> <h3 class="mt-3 font-semibold">${escape_html(title)}</h3></a> <p class="text-green font-semibold mt-1">${escape_html(priceGold)} gold</p> <p class="text-sm text-gray-600">${escape_html(seller)}</p> <div class="mt-3 flex gap-2"><a${attr("href", `/marketplace/${id}`)} class="bg-blue text-white px-3 py-2 rounded">Beli Sekarang</a> <button class="border border-blue text-blue px-3 py-2 rounded">Hubungi Penjual</button></div> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { id, title, priceGold, seller, image });
}
export {
  ProductCard as P
};
