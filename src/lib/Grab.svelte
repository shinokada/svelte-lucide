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
  <path d="M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" />
  <path d="M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
  <path d="M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
  <path d="M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
  <path d="M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
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
