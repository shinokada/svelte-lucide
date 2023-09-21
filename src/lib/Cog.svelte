<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'Cog';
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
  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  <path d="M12 2v2" />
  <path d="M12 22v-2" />
  <path d="m17 20.66-1-1.73" />
  <path d="M11 10.27 7 3.34" />
  <path d="m20.66 17-1.73-1" />
  <path d="m3.34 7 1.73 1" />
  <path d="M14 12h8" />
  <path d="M2 12h2" />
  <path d="m20.66 7-1.73 1" />
  <path d="m3.34 17 1.73-1" />
  <path d="m17 3.34-1 1.73" />
  <path d="m11 13.73-4 6.93" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'Cog';
-->
