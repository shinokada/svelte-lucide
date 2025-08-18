<script lang="ts">
  import type { Component } from 'svelte';
  const config = {
    size: "20",
    color: '#FF5733'
  };
  import { Icon } from 'svelte-lucide';
  export let icon: Component;
</script>

<Icon {...config} {icon} />
