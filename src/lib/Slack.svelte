<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'Slack';
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
  <rect width="3" height="8" x="13" y="2" rx="1.5" />
  <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
  <rect width="3" height="8" x="8" y="14" rx="1.5" />
  <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
  <rect width="8" height="3" x="14" y="13" rx="1.5" />
  <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
  <rect width="8" height="3" x="2" y="8" rx="1.5" />
  <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'Slack';
-->
