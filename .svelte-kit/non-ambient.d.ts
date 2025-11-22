
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/admin" | "/admin/disbursement" | "/admin/products" | "/admin/sellers" | "/admin/settings" | "/admin/transactions" | "/admin/users" | "/dashboard" | "/dashboard/pembeli" | "/dashboard/pembeli/pembelian" | "/dashboard/pembeli/profil" | "/dashboard/pembeli/wallet" | "/dashboard/penjual" | "/dashboard/penjual/pesanan" | "/dashboard/penjual/produk" | "/dashboard/penjual/profil-toko" | "/dashboard/penjual/saldo" | "/dashboard/penjual/tambah-produk" | "/faq" | "/login" | "/marketplace" | "/marketplace/[id]" | "/register" | "/syarat-ketentuan";
		RouteParams(): {
			"/marketplace/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { id?: string };
			"/admin": Record<string, never>;
			"/admin/disbursement": Record<string, never>;
			"/admin/products": Record<string, never>;
			"/admin/sellers": Record<string, never>;
			"/admin/settings": Record<string, never>;
			"/admin/transactions": Record<string, never>;
			"/admin/users": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/dashboard/pembeli": Record<string, never>;
			"/dashboard/pembeli/pembelian": Record<string, never>;
			"/dashboard/pembeli/profil": Record<string, never>;
			"/dashboard/pembeli/wallet": Record<string, never>;
			"/dashboard/penjual": Record<string, never>;
			"/dashboard/penjual/pesanan": Record<string, never>;
			"/dashboard/penjual/produk": Record<string, never>;
			"/dashboard/penjual/profil-toko": Record<string, never>;
			"/dashboard/penjual/saldo": Record<string, never>;
			"/dashboard/penjual/tambah-produk": Record<string, never>;
			"/faq": Record<string, never>;
			"/login": Record<string, never>;
			"/marketplace": { id?: string };
			"/marketplace/[id]": { id: string };
			"/register": Record<string, never>;
			"/syarat-ketentuan": Record<string, never>
		};
		Pathname(): "/" | "/admin" | "/admin/" | "/admin/disbursement" | "/admin/disbursement/" | "/admin/products" | "/admin/products/" | "/admin/sellers" | "/admin/sellers/" | "/admin/settings" | "/admin/settings/" | "/admin/transactions" | "/admin/transactions/" | "/admin/users" | "/admin/users/" | "/dashboard" | "/dashboard/" | "/dashboard/pembeli" | "/dashboard/pembeli/" | "/dashboard/pembeli/pembelian" | "/dashboard/pembeli/pembelian/" | "/dashboard/pembeli/profil" | "/dashboard/pembeli/profil/" | "/dashboard/pembeli/wallet" | "/dashboard/pembeli/wallet/" | "/dashboard/penjual" | "/dashboard/penjual/" | "/dashboard/penjual/pesanan" | "/dashboard/penjual/pesanan/" | "/dashboard/penjual/produk" | "/dashboard/penjual/produk/" | "/dashboard/penjual/profil-toko" | "/dashboard/penjual/profil-toko/" | "/dashboard/penjual/saldo" | "/dashboard/penjual/saldo/" | "/dashboard/penjual/tambah-produk" | "/dashboard/penjual/tambah-produk/" | "/faq" | "/faq/" | "/login" | "/login/" | "/marketplace" | "/marketplace/" | `/marketplace/${string}` & {} | `/marketplace/${string}/` & {} | "/register" | "/register/" | "/syarat-ketentuan" | "/syarat-ketentuan/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | string & {};
	}
}