import { x as attr_style, y as ensure_array_like } from "../../chunks/index.js";
import { a as ssr_context } from "../../chunks/context.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { P as ProductCard } from "../../chunks/ProductCard.js";
import { p as products } from "../../chunks/data.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
function HeroSlider($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const slides = [
      {
        title: "Item Populer",
        cta: "Mulai Belanja",
        image: "https://picsum.photos/seed/hero1/1200/400"
      },
      {
        title: "Promo Minggu Ini",
        cta: "Mulai Belanja",
        image: "https://picsum.photos/seed/hero2/1200/400"
      },
      {
        title: "Top Up Gold",
        cta: "Mulai Belanja",
        image: "https://picsum.photos/seed/hero3/1200/400"
      }
    ];
    let i = 0;
    let timer;
    onDestroy(() => {
      clearInterval(timer);
    });
    $$renderer2.push(`<div class="bg-white w-full h-64 relative overflow-hidden"><div class="absolute inset-0 h-full w-full"><div class="flex h-full transition-transform duration-500"${attr_style(`transform: translateX(-${i * 100}%)`)}><!--[-->`);
    const each_array = ensure_array_like(slides);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let s = each_array[$$index];
      $$renderer2.push(`<div class="relative w-full shrink-0 grow-0"><img${attr("src", s.image)}${attr("alt", s.title)} class="absolute inset-0 w-full h-full object-cover"/> <div class="absolute inset-0 bg-gradient-to-r from-blue to-green opacity-20"></div> <div class="relative z-10 h-64 flex items-center justify-center"><div class="text-center"><h2 class="text-2xl font-semibold text-white drop-shadow">${escape_html(s.title)}</h2> <a href="/marketplace" class="mt-3 inline-block bg-blue text-white px-4 py-2 rounded">${escape_html(s.cta)}</a></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="absolute inset-y-0 left-0 flex items-center z-20"><button class="m-2 bg-white/70 text-blue px-2 py-1 rounded">‹</button></div> <div class="absolute inset-y-0 right-0 flex items-center z-20"><button class="m-2 bg-white/70 text-blue px-2 py-1 rounded">›</button></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="max-w-7xl mx-auto px-4 py-6">`);
    HeroSlider($$renderer2);
    $$renderer2.push(`<!----> <div class="mt-8"><h2 class="text-xl font-semibold">Rekomendasi</h2> <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"><!--[-->`);
    const each_array = ensure_array_like(products.slice(0, 3));
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
    $$renderer2.push(`<!--]--></div></div> <div class="mt-12 grid md:grid-cols-2 gap-6"><div class="p-6 bg-white border border-gray-200 rounded-lg"><h2 class="text-xl font-semibold text-blue">Tentang Toko</h2> <p class="mt-3 text-gray-700">Platform marketplace untuk pembelian item game, top up gold, dan voucher digital dengan proses cepat, aman, dan harga kompetitif. Fokus pada pengalaman belanja sederhana dengan tema putih–biru–hijau.</p> <ul class="mt-4 space-y-2 text-gray-700"><li>Transaksi gold sesuai sistem 1 gold = 1 rupiah</li> <li>Produk dari penjual terpercaya</li> <li>Dukungan pembeli dan penjual melalui dashboard</li></ul></div> <div class="p-6 bg-white border border-gray-200 rounded-lg"><h2 class="text-xl font-semibold text-blue">Kontak &amp; Alamat</h2> <div class="mt-3 space-y-2 text-gray-700"><div>Telepon: <a class="text-blue" href="tel:+62081234567890">+62 0812-3456-7890</a></div> <div>Email: <a class="text-blue" href="mailto:support@tokoitemgame.example">support@tokoitemgame.example</a></div> <div>Alamat: Jl. Contoh Raya No. 123, Jakarta, Indonesia</div> <div>Jam Operasional: Senin–Jumat, 09:00–18:00 WIB</div></div></div></div></section>`);
  });
}
export {
  _page as default
};
