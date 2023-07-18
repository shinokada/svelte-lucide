

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.3cc85b5e.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.8487da62.js","_app/immutable/chunks/stores.00d3664a.js","_app/immutable/chunks/singletons.f094ebec.js","_app/immutable/chunks/index.97201a03.js","_app/immutable/chunks/tw-merge.72da6274.js"];
export const stylesheets = ["_app/immutable/assets/0.9ff2ae21.css"];
export const fonts = [];
