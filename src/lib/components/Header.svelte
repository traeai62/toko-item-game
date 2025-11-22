<script lang="ts">
  let open = false;
  let q = '';
  function goSearch() {
    const s = q.trim();
    if (s) location.href = `/marketplace?q=${encodeURIComponent(s)}`;
  }
</script>

<header class="w-full bg-blue text-white relative z-50">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
    <button class="inline-flex items-center justify-center" aria-label="Menu" on:click={() => (open = true)}>
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
    <a href="/" class="font-semibold text-lg">Toko Item Game</a>
    <div class="flex-1 flex items-center gap-2">
      <input class="w-full px-3 py-2 rounded bg-white text-blue placeholder:text-blue/70" placeholder="Cari item..." bind:value={q} on:keydown={(e) => e.key==='Enter' && goSearch()} />
      <button class="px-3 py-2 rounded bg-white text-blue" on:click={goSearch}>Cari</button>
    </div>
    <div class="flex items-center gap-2">
      <a href="/login" class="inline-flex items-center gap-2 bg-white text-blue px-3 py-2 rounded">Login</a>
      <a href="/dashboard/pembeli/pembelian" class="inline-flex items-center gap-2 bg-white text-blue px-3 py-2 rounded">Cart</a>
    </div>
  </div>
  {#if open}
    <div class="fixed inset-0 bg-black/40 z-40" on:click={() => (open = false)}></div>
    <div class="fixed top-0 left-0 w-64 h-full bg-white text-blue shadow-xl p-4 z-50">
      <div class="flex items-center justify-between">
        <span class="font-semibold">Menu</span>
        <button class="text-blue" aria-label="Close" on:click={() => (open = false)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="mt-4 space-y-2">
        <a href="/" class="block">Home</a>
        <a href="/marketplace" class="block">Marketplace</a>
        <a href="/faq" class="block">FAQ</a>
        <a href="/syarat-ketentuan" class="block">Syarat & Ketentuan</a>
        <a href="/dashboard/pembeli" class="block">Dashboard Pembeli</a>
        <a href="/dashboard/penjual" class="block">Dashboard Penjual</a>
        <a href="/admin" class="block">Admin</a>
      </nav>
    </div>
  {/if}
</header>
