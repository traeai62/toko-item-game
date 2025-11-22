<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  let open = false;
  let q = '';
  function goSearch() {
    const s = q.trim();
    if (s) location.href = `/marketplace?q=${encodeURIComponent(s)}`;
  }
</script>

<header class="w-full bg-blue text-white relative z-50 shadow-md">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
    <button class="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10 transition-colors" aria-label="Menu" on:click={() => (open = true)}>
      <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
    </button>
    <a href="/" class="font-semibold text-lg tracking-tight hover:text-white/90 transition-colors">Toko Item Game</a>
    <div class="flex-1 flex items-center gap-2">
      <input class="w-full px-4 py-2 rounded-full bg-white text-blue placeholder:text-blue/60 focus:outline-none focus:ring-2 focus:ring-blue/50 shadow-sm" placeholder="Cari item..." bind:value={q} on:keydown={(e) => e.key==='Enter' && goSearch()} />
      <button class="px-4 py-2 rounded-full bg-white text-blue font-medium hover:bg-gray-100 transition-colors shadow-sm" on:click={goSearch}>Cari</button>
    </div>
    <div class="flex items-center gap-3">
      <a href="/login" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all backdrop-blur-sm border border-white/20">Login</a>
      <a href="/dashboard/pembeli/pembelian" class="inline-flex items-center gap-2 bg-white text-blue px-4 py-2 rounded-full hover:bg-gray-100 transition-colors shadow-sm font-medium">Cart</a>
    </div>
  </div>
  {#if open}
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" transition:fade={{ duration: 200 }} on:click={() => (open = false)}></div>
    
    <!-- Drawer -->
    <div class="fixed top-0 left-0 w-72 h-full bg-white text-blue shadow-2xl z-50 flex flex-col" transition:fly={{ x: -300, duration: 300, opacity: 1 }}>
      <div class="p-4 flex items-center justify-between border-b border-gray-100">
        <span class="font-bold text-lg text-blue-800">Menu</span>
        <button class="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors" aria-label="Close" on:click={() => (open = false)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <nav class="flex-1 overflow-y-auto py-4">
        <div class="space-y-1 px-2">
          <a href="/" class="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
          <a href="/marketplace" class="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition-colors">Marketplace</a>
          <a href="/faq" class="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition-colors">FAQ</a>
          <a href="/syarat-ketentuan" class="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition-colors">Syarat & Ketentuan</a>
        </div>
        <div class="mt-6 pt-6 border-t border-gray-100 px-2 space-y-1">
          <p class="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">User Area</p>
          <a href="/dashboard/pembeli" class="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition-colors">Dashboard Pembeli</a>
          <a href="/dashboard/penjual" class="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition-colors">Dashboard Penjual</a>
          <a href="/admin" class="block px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition-colors">Admin</a>
        </div>
      </nav>
      <div class="p-4 border-t border-gray-100 bg-gray-50">
        <p class="text-xs text-center text-gray-400">© 2024 Toko Item Game</p>
      </div>
    </div>
  {/if}
</header>
