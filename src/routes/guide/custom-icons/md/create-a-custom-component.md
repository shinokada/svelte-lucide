<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: "20",
    color: '#FF5733'
  };
  import { Icon } from 'svelte-lucide';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />