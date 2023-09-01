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
  <path d="M4 6 2 7" />
  <path d="M10 6h4" />
  <path d="m22 7-2-1" />
  <rect width="16" height="16" x="4" y="3" rx="2" />
  <path d="M4 11h16" />
  <path d="M8 15h.01" />
  <path d="M16 15h.01" />
  <path d="M6 19v2" />
  <path d="M18 21v-2" />
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
