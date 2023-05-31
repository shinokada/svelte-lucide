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
  <path d="M2,16V4c0-1.1,0.9-2,2-2h11" />
  <path d="M5,14H4c-1.1,0-2,0.9-2,2s0.9,2,2,2h1" />
  <path d="M22,18H11c-1.1,0-2,0.9-2,2l0,0" />
  <path d="M11,6h11v16H11c-1.1,0-2-0.9-2-2V8C9,6.9,9.9,6,11,6z" />
</svg>

<!--
@component
[Go to Document](https://svelte-flags.codewithshin.com/)
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
