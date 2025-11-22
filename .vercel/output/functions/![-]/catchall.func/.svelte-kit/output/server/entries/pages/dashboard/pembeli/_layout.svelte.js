import { v as slot } from "../../../../chunks/index.js";
import { S as Sidebar } from "../../../../chunks/Sidebar.js";
function _layout($$renderer, $$props) {
  $$renderer.push(`<div class="flex">`);
  Sidebar($$renderer, { role: "buyer" });
  $$renderer.push(`<!----> <div class="flex-1 p-6"><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div></div>`);
}
export {
  _layout as default
};
