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
  <path d="M5 13a10 10 0 0 1 14 0" />
  <path d="M8.5 16.5a5 5 0 0 1 7 0" />
  <path d="M2 8.82a15 15 0 0 1 20 0" />
  <line x1="12" x2="12.01" y1="20" y2="20" />
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
