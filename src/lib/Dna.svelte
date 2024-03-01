<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'Dna';
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
  <path d="M2 15c6.667-6 13.333 0 20-6" />
  <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
  <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
  <path d="m17 6-2.5-2.5" />
  <path d="m14 8-1-1" />
  <path d="m7 18 2.5 2.5" />
  <path d="m3.5 14.5.5.5" />
  <path d="m20 9 .5.5" />
  <path d="m6.5 12.5 1 1" />
  <path d="m16.5 10.5 1 1" />
  <path d="m10 16 1.5 1.5" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'Dna';
-->
