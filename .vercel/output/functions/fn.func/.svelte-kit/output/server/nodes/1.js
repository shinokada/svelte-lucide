

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cb8fe193.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.8487da62.js","_app/immutable/chunks/stores.00d3664a.js","_app/immutable/chunks/singletons.f094ebec.js","_app/immutable/chunks/index.97201a03.js"];
export const stylesheets = [];
export const fonts = [];
