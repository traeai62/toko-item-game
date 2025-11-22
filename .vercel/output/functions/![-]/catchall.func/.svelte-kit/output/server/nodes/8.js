

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/disbursement/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.C9rAY0Ic.js","_app/immutable/chunks/BgXJfJmC.js","_app/immutable/chunks/M6ojzfsv.js","_app/immutable/chunks/CNcrnJlI.js"];
export const stylesheets = [];
export const fonts = [];
