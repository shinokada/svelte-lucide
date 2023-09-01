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
  <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
  <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
  <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
  <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
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
