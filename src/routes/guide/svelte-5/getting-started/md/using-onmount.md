<script>
  import { Album } from 'svelte-lucide';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Album({ target: document.body, props });
  });
</script>
