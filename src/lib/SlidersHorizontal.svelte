<script>
  export let size = '24';
  export let role = 'img';
  export let color = 'currentColor';
  export let strokeWidth = '2';
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
  <line x1="21" x2="14" y1="4" y2="4" />
  <line x1="10" x2="3" y1="4" y2="4" />
  <line x1="21" x2="12" y1="12" y2="12" />
  <line x1="8" x2="3" y1="12" y2="12" />
  <line x1="21" x2="16" y1="20" y2="20" />
  <line x1="12" x2="3" y1="20" y2="20" />
  <line x1="14" x2="14" y1="2" y2="6" />
  <line x1="8" x2="8" y1="10" y2="14" />
  <line x1="16" x2="16" y1="18" y2="22" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.vercel.app)
## Props
@prop export let size = '24';
@prop export let role = 'img';
@prop export let color = 'currentColor';
@prop export let strokeWidth = '2';
-->
