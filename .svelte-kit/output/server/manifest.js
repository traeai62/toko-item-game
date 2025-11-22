export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.t2XPPwWZ.js",app:"_app/immutable/entry/app.Bye7E0yI.js",imports:["_app/immutable/entry/start.t2XPPwWZ.js","_app/immutable/chunks/BYcYRnU4.js","_app/immutable/chunks/M6ojzfsv.js","_app/immutable/chunks/eotP8nan.js","_app/immutable/entry/app.Bye7E0yI.js","_app/immutable/chunks/M6ojzfsv.js","_app/immutable/chunks/CWB5zIsb.js","_app/immutable/chunks/-dHt5wj3.js","_app/immutable/chunks/BgXJfJmC.js","_app/immutable/chunks/eotP8nan.js","_app/immutable/chunks/id1hk0Wp.js","_app/immutable/chunks/Qjx5YZkI.js","_app/immutable/chunks/_UAJhn3h.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js')),
			__memo(() => import('./nodes/27.js')),
			__memo(() => import('./nodes/28.js')),
			__memo(() => import('./nodes/29.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin/disbursement",
				pattern: /^\/admin\/disbursement\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/admin/sellers",
				pattern: /^\/admin\/sellers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/admin/settings",
				pattern: /^\/admin\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/admin/transactions",
				pattern: /^\/admin\/transactions\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/admin/users",
				pattern: /^\/admin\/users\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/dashboard/pembeli",
				pattern: /^\/dashboard\/pembeli\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/dashboard/pembeli/pembelian",
				pattern: /^\/dashboard\/pembeli\/pembelian\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/dashboard/pembeli/profil",
				pattern: /^\/dashboard\/pembeli\/profil\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/dashboard/pembeli/wallet",
				pattern: /^\/dashboard\/pembeli\/wallet\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/dashboard/penjual",
				pattern: /^\/dashboard\/penjual\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/dashboard/penjual/pesanan",
				pattern: /^\/dashboard\/penjual\/pesanan\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/dashboard/penjual/produk",
				pattern: /^\/dashboard\/penjual\/produk\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/dashboard/penjual/profil-toko",
				pattern: /^\/dashboard\/penjual\/profil-toko\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/dashboard/penjual/saldo",
				pattern: /^\/dashboard\/penjual\/saldo\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/dashboard/penjual/tambah-produk",
				pattern: /^\/dashboard\/penjual\/tambah-produk\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/faq",
				pattern: /^\/faq\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/marketplace",
				pattern: /^\/marketplace\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/marketplace/[id]",
				pattern: /^\/marketplace\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/syarat-ketentuan",
				pattern: /^\/syarat-ketentuan\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
