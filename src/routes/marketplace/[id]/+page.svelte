<script lang="ts">
  export let data;
  const p = data.product;
</script>

<section class="max-w-5xl mx-auto px-4 py-6">
  <div class="grid md:grid-cols-2 gap-6">
    <img src={p.images[0]} alt={p.title} class="w-full h-80 object-cover rounded" />
    <div>
      <h1 class="text-2xl font-semibold">{p.title}</h1>
      <p class="text-green font-semibold mt-2">{p.priceGold} gold</p>
      <p class="mt-3">{p.description}</p>
      <div class="mt-6 flex gap-3">
        <button class="bg-blue text-white px-4 py-2 rounded">Beli Sekarang</button>
        <a href="/dashboard/penjual/profil-toko" class="border border-blue text-blue px-4 py-2 rounded">Hubungi Penjual</a>
      </div>
    </div>
  </div>
</section>

