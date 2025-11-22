<script lang="ts">
  import { topup } from '$lib/api/wallet';
  let amount = 0;
  function submit() {
    topup(amount);
  }
</script>

<section>
  <h1 class="text-2xl font-semibold">Wallet</h1>
  <div class="mt-4 flex gap-3">
    <input class="border border-gray-300 rounded px-3 py-2" type="number" bind:value={amount} />
    <button class="bg-blue text-white px-4 py-2 rounded" on:click={submit}>Top Up</button>
  </div>
</section>

