<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'UserCog';
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
  <circle cx="18" cy="15" r="3" />
  <circle cx="9" cy="7" r="4" />
  <path d="M10 15H6a4 4 0 0 0-4 4v2" />
  <path d="m21.7 16.4-.9-.3" />
  <path d="m15.2 13.9-.9-.3" />
  <path d="m16.6 18.7.3-.9" />
  <path d="m19.1 12.2.3-.9" />
  <path d="m19.6 18.7-.4-1" />
  <path d="m16.8 12.3-.4-1" />
  <path d="m14.3 16.6 1-.4" />
  <path d="m20.7 13.8 1-.4" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'UserCog';
-->
