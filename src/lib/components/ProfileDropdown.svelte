<script lang="ts">
  import { onMount } from 'svelte';
  let open = false;
  let name = '';
  onMount(() => {
    const token = localStorage.getItem('token');
    name = token ? 'Pengguna' : '';
  });
</script>

<div class="relative">
  <button class="bg-white text-blue px-3 py-1 rounded" on:click={() => (open = !open)}>{name || 'Guest'}</button>
  {#if open}
    <div class="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg p-2">
      <a href="/login" class="block px-2 py-1">Login</a>
      <a href="/register" class="block px-2 py-1">Register</a>
      <a href="/dashboard/pembeli" class="block px-2 py-1">Dashboard</a>
      <button class="block w-full text-left px-2 py-1" on:click={() => localStorage.removeItem('token')}>Logout</button>
    </div>
  {/if}
</div>

