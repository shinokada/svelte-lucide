<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let strokeWidth = ctx.strokeWidth || '2';
  export let ariaLabel = 'NotepadTextDashed';
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
  <path d="M8 2v4" />
  <path d="M12 2v4" />
  <path d="M16 2v4" />
  <path d="M16 4h2a2 2 0 0 1 2 2v2" />
  <path d="M20 12v2" />
  <path d="M20 18v2a2 2 0 0 1-2 2h-1" />
  <path d="M13 22h-2" />
  <path d="M7 22H6a2 2 0 0 1-2-2v-2" />
  <path d="M4 14v-2" />
  <path d="M4 8V6a2 2 0 0 1 2-2h2" />
  <path d="M8 10h6" />
  <path d="M8 14h8" />
  <path d="M8 18h5" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let strokeWidth = ctx.strokeWidth || '2';
@prop export let ariaLabel = 'NotepadTextDashed';
-->
