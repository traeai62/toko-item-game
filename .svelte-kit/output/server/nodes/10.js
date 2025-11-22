

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/sellers/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.CmiNbStJ.js","_app/immutable/chunks/BgXJfJmC.js","_app/immutable/chunks/M6ojzfsv.js","_app/immutable/chunks/CNcrnJlI.js"];
export const stylesheets = [];
export const fonts = [];
