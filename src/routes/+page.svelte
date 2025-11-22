<script lang="ts">
  import HeroSlider from '$lib/components/HeroSlider.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { products } from '$lib/mock/data';
</script>

<section class="max-w-7xl mx-auto px-4 py-6">
  <HeroSlider />
  <div class="mt-8">
    <h2 class="text-xl font-semibold">Rekomendasi</h2>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each products.slice(0,3) as p}
        <ProductCard id={p.id} title={p.title} priceGold={p.priceGold} seller={'Penjual'} image={p.images[0]} />
      {/each}
    </div>
  </div>
  <div class="mt-12 grid md:grid-cols-2 gap-6">
    <div class="p-6 bg-white border border-gray-200 rounded-lg">
      <h2 class="text-xl font-semibold text-blue">Tentang Toko</h2>
      <p class="mt-3 text-gray-700">Platform marketplace untuk pembelian item game, top up gold, dan voucher digital dengan proses cepat, aman, dan harga kompetitif. Fokus pada pengalaman belanja sederhana dengan tema putih–biru–hijau.</p>
      <ul class="mt-4 space-y-2 text-gray-700">
        <li>Transaksi gold sesuai sistem 1 gold = 1 rupiah</li>
        <li>Produk dari penjual terpercaya</li>
        <li>Dukungan pembeli dan penjual melalui dashboard</li>
      </ul>
    </div>
    <div class="p-6 bg-white border border-gray-200 rounded-lg">
      <h2 class="text-xl font-semibold text-blue">Kontak & Alamat</h2>
      <div class="mt-3 space-y-2 text-gray-700">
        <div>Telepon: <a class="text-blue" href="tel:+62081234567890">+62 0812-3456-7890</a></div>
        <div>Email: <a class="text-blue" href="mailto:support@tokoitemgame.example">support@tokoitemgame.example</a></div>
        <div>Alamat: Jl. Contoh Raya No. 123, Jakarta, Indonesia</div>
        <div>Jam Operasional: Senin–Jumat, 09:00–18:00 WIB</div>
      </div>
    </div>
  </div>
</section>
