import { a as attr } from "../../../chunks/attributes.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let name = "";
    let email = "";
    let password = "";
    $$renderer2.push(`<section class="max-w-md mx-auto px-4 py-10"><h1 class="text-2xl font-semibold">Register</h1> <div class="mt-4 space-y-3"><input class="border border-gray-300 rounded px-3 py-2 w-full" placeholder="Nama"${attr("value", name)}/> <input class="border border-gray-300 rounded px-3 py-2 w-full" placeholder="Email"${attr("value", email)}/> <input class="border border-gray-300 rounded px-3 py-2 w-full" placeholder="Password" type="password"${attr("value", password)}/> <button class="bg-blue text-white px-4 py-2 rounded w-full">Daftar</button></div></section>`);
  });
}
export {
  _page as default
};
