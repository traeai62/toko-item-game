<script lang="ts">
  import { onMount } from 'svelte';
  let allowed = false;
  onMount(() => {
    const token = localStorage.getItem('token');
    allowed = !!token;
    if (!allowed) location.href = '/login';
  });
</script>

<slot />

