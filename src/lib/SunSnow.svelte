<script>
  export let size = '24';
  export let color = 'currentColor';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class={$$props.class}
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
  <path d="M10 9a3 3 0 1 0 0 6" />
  <path d="M2 12h1" />
  <path d="M14 21V3" />
  <path d="M10 4V3" />
  <path d="M10 21v-1" />
  <path d="m3.64 18.36.7-.7" />
  <path d="m4.34 6.34-.7-.7" />
  <path d="M14 12h8" />
  <path d="m17 4-3 3" />
  <path d="m14 17 3 3" />
  <path d="m21 15-3-3 3-3" />
</svg>

<!--
@component
[Go to Document](https://svelte-lucide.codewithshin.com/)
## Props
@prop size = '24';
@prop color = 'currentColor';
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
