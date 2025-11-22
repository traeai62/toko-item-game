<script lang="ts">
  export let role: 'buyer' | 'seller' | 'admin' = 'buyer';
</script>

<aside class="w-64 bg-white border-r border-gray-200 h-screen p-4">
  {#if role === 'buyer'}
    <nav class="space-y-2">
      <a href="/dashboard/pembeli" class="block">Overview</a>
      <a href="/dashboard/pembeli/wallet" class="block">Wallet</a>
      <a href="/dashboard/pembeli/pembelian" class="block">Pembelian</a>
      <a href="/dashboard/pembeli/profil" class="block">Profil</a>
    </nav>
  {:else if role === 'seller'}
    <nav class="space-y-2">
      <a href="/dashboard/penjual" class="block">Statistik</a>
      <a href="/dashboard/penjual/produk" class="block">Produk</a>
      <a href="/dashboard/penjual/tambah-produk" class="block">Tambah Produk</a>
      <a href="/dashboard/penjual/pesanan" class="block">Pesanan</a>
      <a href="/dashboard/penjual/saldo" class="block">Saldo</a>
      <a href="/dashboard/penjual/profil-toko" class="block">Profil Toko</a>
    </nav>
  {:else}
    <nav class="space-y-2">
      <a href="/admin" class="block">Dashboard</a>
      <a href="/admin/users" class="block">Users</a>
      <a href="/admin/sellers" class="block">Sellers</a>
      <a href="/admin/products" class="block">Products</a>
      <a href="/admin/transactions" class="block">Transactions</a>
      <a href="/admin/disbursement" class="block">Disbursement</a>
      <a href="/admin/settings" class="block">Settings</a>
    </nav>
  {/if}
</aside>

