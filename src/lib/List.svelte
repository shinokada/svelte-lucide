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
  <line x1="8" x2="21" y1="6" y2="6" />
  <line x1="8" x2="21" y1="12" y2="12" />
  <line x1="8" x2="21" y1="18" y2="18" />
  <line x1="3" x2="3.01" y1="6" y2="6" />
  <line x1="3" x2="3.01" y1="12" y2="12" />
  <line x1="3" x2="3.01" y1="18" y2="18" />
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
