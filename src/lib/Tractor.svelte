<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'Tractor';
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
  <path d="M3 4h9l1 7" />
  <path d="M4 11V4" />
  <path d="M8 10V4" />
  <path d="M18 5c-.6 0-1 .4-1 1v5.6" />
  <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
  <circle cx="7" cy="15" r=".5" />
  <circle cx="7" cy="15" r="5" />
  <path d="M16 18h-5" />
  <circle cx="18" cy="18" r="2" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'Tractor';
-->
