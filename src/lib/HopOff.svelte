<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'HopOff';
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
  <path d="M17.5 5.5C19 7 20.5 9 21 11c-1.323.265-2.646.39-4.118.226" />
  <path d="M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5" />
  <path d="M17.5 17.5c-2.5 0-4 0-6-1" />
  <path d="M20 11.5c1 1.5 2 3.5 2 4.5" />
  <path d="M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5" />
  <path d="M22 22c-2 0-3.5-.5-5.5-1.5" />
  <path
    d="M4.783 4.782C1.073 8.492 1 14.5 5 18c1-1 2-4.5 1.5-6.5 1.5 1 4 1 5.5.5M8.227 2.57C11.578 1.335 15.453 2.089 18 5c-.88.88-3.7 1.761-5.726 1.618"
  />
  <line x1="2" x2="22" y1="2" y2="22" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'HopOff';
-->
