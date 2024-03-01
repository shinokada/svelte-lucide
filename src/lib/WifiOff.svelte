<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'WifiOff';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  <line x1="2" x2="22" y1="2" y2="22" />
  <path d="M8.5 16.5a5 5 0 0 1 7 0" />
  <path d="M2 8.82a15 15 0 0 1 4.17-2.65" />
  <path d="M10.66 5c4.01-.36 8.14.9 11.34 3.76" />
  <path d="M16.85 11.25a10 10 0 0 1 2.22 1.68" />
  <path d="M5 13a10 10 0 0 1 5.24-2.76" />
  <line x1="12" x2="12.01" y1="20" y2="20" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'WifiOff';
-->
