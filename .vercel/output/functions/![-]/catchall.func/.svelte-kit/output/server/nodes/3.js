import * as universal from '../entries/pages/dashboard/_layout.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dashboard/+layout.ts";
export const imports = ["_app/immutable/nodes/3.9k2uRPJL.js","_app/immutable/chunks/BgXJfJmC.js","_app/immutable/chunks/M6ojzfsv.js","_app/immutable/chunks/Qjx5YZkI.js"];
export const stylesheets = [];
export const fonts = [];
