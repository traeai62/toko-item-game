<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  const slides = [
    { title: 'Item Populer', cta: 'Mulai Belanja', image: 'https://picsum.photos/seed/hero1/1200/400' },
    { title: 'Promo Minggu Ini', cta: 'Mulai Belanja', image: 'https://picsum.photos/seed/hero2/1200/400' },
    { title: 'Top Up Gold', cta: 'Mulai Belanja', image: 'https://picsum.photos/seed/hero3/1200/400' }
  ];
  let i = 0;
  let timer: any;
  function next() { i = (i + 1) % slides.length; }
  function prev() { i = (i - 1 + slides.length) % slides.length; }
  onMount(() => { timer = setInterval(next, 2000); });
  onDestroy(() => { clearInterval(timer); });
</script>

<div class="bg-white w-full h-64 relative overflow-hidden">
  <div class="absolute inset-0 h-full w-full">
    <div class="flex h-full transition-transform duration-500" style={`transform: translateX(-${i * 100}%)`}>
      {#each slides as s}
        <div class="relative w-full shrink-0 grow-0">
          <img src={s.image} alt={s.title} class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-blue to-green opacity-20"></div>
          <div class="relative z-10 h-64 flex items-center justify-center">
            <div class="text-center">
              <h2 class="text-2xl font-semibold text-white drop-shadow">{s.title}</h2>
              <a href="/marketplace" class="mt-3 inline-block bg-blue text-white px-4 py-2 rounded">{s.cta}</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <div class="absolute inset-y-0 left-0 flex items-center z-20">
    <button class="m-2 bg-white/70 text-blue px-2 py-1 rounded" on:click={prev}>‹</button>
  </div>
  <div class="absolute inset-y-0 right-0 flex items-center z-20">
    <button class="m-2 bg-white/70 text-blue px-2 py-1 rounded" on:click={next}>›</button>
  </div>
</div>
