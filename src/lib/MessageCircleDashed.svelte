<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'MessageCircleDashed';
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
  <path d="M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" />
  <path d="M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" />
  <path d="M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" />
  <path d="M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" />
  <path d="M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" />
  <path d="M3.5 17.5 2 22l4.5-1.5" />
  <path d="M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" />
  <path d="M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'MessageCircleDashed';
-->
