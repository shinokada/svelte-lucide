<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'Loader';
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
  <line x1="12" x2="12" y1="2" y2="6" />
  <line x1="12" x2="12" y1="18" y2="22" />
  <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
  <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
  <line x1="2" x2="6" y1="12" y2="12" />
  <line x1="18" x2="22" y1="12" y2="12" />
  <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
  <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'Loader';
-->
