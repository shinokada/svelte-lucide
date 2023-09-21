<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'Grape';
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
  <path d="M22 5V2l-5.89 5.89" />
  <circle cx="16.6" cy="15.89" r="3" />
  <circle cx="8.11" cy="7.4" r="3" />
  <circle cx="12.35" cy="11.65" r="3" />
  <circle cx="13.91" cy="5.85" r="3" />
  <circle cx="18.15" cy="10.09" r="3" />
  <circle cx="6.56" cy="13.2" r="3" />
  <circle cx="10.8" cy="17.44" r="3" />
  <circle cx="5" cy="19" r="3" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'Grape';
-->
