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
  <path d="M14 4c0-1.1.9-2 2-2" />
  <path d="M20 2c1.1 0 2 .9 2 2" />
  <path d="M22 8c0 1.1-.9 2-2 2" />
  <path d="M16 10c-1.1 0-2-.9-2-2" />
  <path d="m3 7 3 3 3-3" />
  <path d="M6 10V5c0-1.7 1.3-3 3-3h1" />
  <rect width="8" height="8" x="2" y="14" rx="2" />
</svg>

<!--
@component
[Go to Document](https://svelte-lucide.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
@prop color = 'currentColor';
@prop strokeWidth = '2';
## Event
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
-->
