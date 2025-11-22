<script lang="ts">
  import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="flex">
  <Sidebar role="buyer" />
  <div class="flex-1 p-6">
    <slot />
  </div>
</div>

