<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'Radar';
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
  <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
  <path d="M4 6h.01" />
  <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
  <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
  <path d="M12 18h.01" />
  <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
  <circle cx="12" cy="12" r="2" />
  <path d="m13.41 10.59 5.66-5.66" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'Radar';
-->
