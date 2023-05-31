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
  <rect x="4" y="4" width="16" height="16" rx="2" />
  <rect x="9" y="9" width="6" height="6" />
  <path d="M15 2v2" />
  <path d="M15 20v2" />
  <path d="M2 15h2" />
  <path d="M2 9h2" />
  <path d="M20 15h2" />
  <path d="M20 9h2" />
  <path d="M9 2v2" />
  <path d="M9 20v2" />
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
