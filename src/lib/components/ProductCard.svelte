<script lang="ts">
  export let id: string;
  export let title: string;
  export let priceGold: number;
  export let seller: string;
  export let image: string;
  let showContact = false;
</script>

<div class="bg-white border border-gray-200 rounded-lg p-3 transition-all duration-200 hover:border-red hover:-translate-y-1 hover:shadow-xl">
  <a href={`/marketplace/${id}`}>
    <img src={image} alt={title} class="w-full h-40 object-cover rounded" />
    <h3 class="mt-3 font-semibold">{title}</h3>
  </a>
  <p class="text-green font-semibold mt-1">{priceGold} gold</p>
  <p class="text-sm text-gray-600">{seller}</p>
  <div class="mt-3 flex gap-2">
    <a href={`/marketplace/${id}`} class="bg-blue text-white px-3 py-2 rounded">Beli Sekarang</a>
    <button class="border border-blue text-blue px-3 py-2 rounded" on:click={() => (showContact = true)}>Hubungi Penjual</button>
  </div>
  {#if showContact}
    <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div class="bg-white rounded-lg p-4 w-80">
        <h4 class="font-semibold">Hubungi Penjual</h4>
        <p class="text-sm mt-2">Kirim pesan ke {seller}</p>
        <div class="mt-3 flex gap-2">
          <a href={`/dashboard/penjual/profil-toko`} class="bg-blue text-white px-3 py-2 rounded">Profil Penjual</a>
          <button class="border border-blue text-blue px-3 py-2 rounded" on:click={() => (showContact = false)}>Tutup</button>
        </div>
      </div>
    </div>
  {/if}
</div>

