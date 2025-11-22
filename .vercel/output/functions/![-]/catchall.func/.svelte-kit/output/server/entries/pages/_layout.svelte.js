import { v as slot } from "../../chunks/index.js";
import { a as attr } from "../../chunks/attributes.js";
import "clsx";
function Header($$renderer) {
  let q = "";
  $$renderer.push(`<header class="w-full bg-blue text-white relative z-50"><div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3"><button class="inline-flex items-center justify-center" aria-label="Menu"><svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <a href="/" class="font-semibold text-lg">Toko Item Game</a> <div class="flex-1 flex items-center gap-2"><input class="w-full px-3 py-2 rounded bg-white text-blue placeholder:text-blue/70" placeholder="Cari item..."${attr("value", q)}/> <button class="px-3 py-2 rounded bg-white text-blue">Cari</button></div> <div class="flex items-center gap-2"><a href="/login" class="inline-flex items-center gap-2 bg-white text-blue px-3 py-2 rounded">Login</a> <a href="/dashboard/pembeli/pembelian" class="inline-flex items-center gap-2 bg-white text-blue px-3 py-2 rounded">Cart</a></div></div> `);
  {
    $$renderer.push("<!--[!-->");
  }
  $$renderer.push(`<!--]--></header>`);
}
function Footer($$renderer) {
  $$renderer.push(`<footer class="bg-blue mt-12 text-white"><div class="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6"><div><div class="font-semibold">Toko Item Game</div> <p class="mt-2 text-white/90">Marketplace item game dan voucher digital. Cepat, aman, harga kompetitif.</p></div> <div><div class="font-semibold">Tautan</div> <ul class="mt-2 space-y-2"><li><a href="/" class="text-white/90 hover:text-white hover:underline">Home</a></li> <li><a href="/marketplace" class="text-white/90 hover:text-white hover:underline">Marketplace</a></li> <li><a href="/faq" class="text-white/90 hover:text-white hover:underline">FAQ</a></li> <li><a href="/syarat-ketentuan" class="text-white/90 hover:text-white hover:underline">Syarat &amp; Ketentuan</a></li></ul></div> <div><div class="font-semibold">Kontak</div> <ul class="mt-2 space-y-2"><li>Telepon: <a class="text-white hover:underline" href="tel:+62081234567890">+62 0812-3456-7890</a></li> <li>Email: <a class="text-white hover:underline" href="mailto:support@tokoitemgame.example">support@tokoitemgame.example</a></li> <li>Alamat: <span class="text-white/90">Jl. Contoh Raya No.123, Jakarta</span></li></ul></div></div> <div class="bg-blue border-t border-white/20"><div class="max-w-7xl mx-auto px-4 py-4 text-sm text-white/90">© 2025 Toko Item Game. Semua hak cipta.</div></div></footer>`);
}
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="min-h-screen bg-white text-gray-900 flex flex-col">`);
  Header($$renderer);
  $$renderer.push(`<!----> <main class="flex-1"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></main> `);
  Footer($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  _layout as default
};
