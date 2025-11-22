<script lang="ts">
  import { login } from '$lib/api/auth';
  let email = '';
  let password = '';
  function submit() {
    const r = login(email, password);
    if (r.ok) location.href = '/dashboard/pembeli';
  }
</script>

<section class="max-w-md mx-auto px-4 py-10">
  <h1 class="text-2xl font-semibold">Login</h1>
  <div class="mt-4 space-y-3">
    <input class="border border-gray-300 rounded px-3 py-2 w-full" placeholder="Email" bind:value={email} />
    <input class="border border-gray-300 rounded px-3 py-2 w-full" placeholder="Password" type="password" bind:value={password} />
    <button class="bg-blue text-white px-4 py-2 rounded w-full" on:click={submit}>Masuk</button>
  </div>
</section>

