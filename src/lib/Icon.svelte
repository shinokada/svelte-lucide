<script lang="ts">
  import type { Component } from 'svelte';
  import type { CtxType, Props } from './types'

  let {icon, size = '24', role = 'img', ariaLabel = 'Icon', ...restProps}: Props = $props()
</script>

<svelte:component 
  {...restProps} 
  {role}
  this={icon} 
  {size} 
  aria-label={ariaLabel}
/>