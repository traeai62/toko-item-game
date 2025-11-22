export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29')
];

export const server_loads = [];

export const dictionary = {
		"/": [6],
		"/admin": [7,[2]],
		"/admin/disbursement": [8,[2]],
		"/admin/products": [9,[2]],
		"/admin/sellers": [10,[2]],
		"/admin/settings": [11,[2]],
		"/admin/transactions": [12,[2]],
		"/admin/users": [13,[2]],
		"/dashboard/pembeli": [14,[3,4]],
		"/dashboard/pembeli/pembelian": [15,[3,4]],
		"/dashboard/pembeli/profil": [16,[3,4]],
		"/dashboard/pembeli/wallet": [17,[3,4]],
		"/dashboard/penjual": [18,[3,5]],
		"/dashboard/penjual/pesanan": [19,[3,5]],
		"/dashboard/penjual/produk": [20,[3,5]],
		"/dashboard/penjual/profil-toko": [21,[3,5]],
		"/dashboard/penjual/saldo": [22,[3,5]],
		"/dashboard/penjual/tambah-produk": [23,[3,5]],
		"/faq": [24],
		"/login": [25],
		"/marketplace": [26],
		"/marketplace/[id]": [27],
		"/register": [28],
		"/syarat-ketentuan": [29]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';