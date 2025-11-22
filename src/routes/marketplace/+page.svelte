<script lang="ts">
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { products } from '$lib/mock/data';
  export let data;
  let q = data.q ?? '';
  $: filtered = products.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()));
</script>

<section class="max-w-7xl mx-auto px-4 py-6">
  <h1 class="text-2xl font-semibold">Marketplace</h1>
  <div class="mt-4 flex gap-3">
    <input class="border border-gray-300 rounded px-3 py-2 w-full" placeholder="Cari" bind:value={q} />
    <select class="border border-gray-300 rounded px-3 py-2"><option>Semua</option><option>Termurah</option><option>Termahal</option></select>
  </div>
  <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each filtered as p}
      <ProductCard id={p.id} title={p.title} priceGold={p.priceGold} seller={'Penjual'} image={p.images[0]} />
    {/each}
  </div>
</section>
