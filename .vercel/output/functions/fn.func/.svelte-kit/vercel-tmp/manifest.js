export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","css/vue.css","favicon-16x16.png","favicon-32x32.png","favicon.ico","images/lucide-650-1050-optimized.png","images/lucide-650-1050.png","images/lucide-optimized.png","images/lucide.png","images/lucide1.webp","images/lucide2.webp","images/lucide3.webp","images/lucide4.webp","maskable_icon_x192.png","styles/docs.css"]),
	mimeTypes: {".png":"image/png",".css":"text/css",".ico":"image/vnd.microsoft.icon",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.000ac199.js","app":"_app/immutable/entry/app.e7d78e32.js","imports":["_app/immutable/entry/start.000ac199.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/singletons.f094ebec.js","_app/immutable/chunks/index.97201a03.js","_app/immutable/entry/app.e7d78e32.js","_app/immutable/chunks/scheduler.b0e64abc.js","_app/immutable/chunks/index.8487da62.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/icons",
				pattern: /^\/icons\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
