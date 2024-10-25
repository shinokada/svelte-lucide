<script>
  import { setContext } from 'svelte';
  import { AlarmClock } from 'svelte-lucide';
  const iconCtx = {
    size: '20'
  };
  setContext('iconCtx', iconCtx);
</script>

<AlarmClock color="#ff4488" />