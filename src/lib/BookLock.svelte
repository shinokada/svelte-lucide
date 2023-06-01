<script>
  export let size = '24';
  export let role = 'img';
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
  <path d="M4,19.5C4,18.1,5.1,17,6.5,17H20" />
  <path d="M18,6V4c0-1.1-0.9-2-2-2s-2,0.9-2,2v2" />
  <path d="M20,15v7H6.5C5.1,22,4,20.9,4,19.5v-15C4,3.1,5.1,2,6.5,2H10" />
  <path d="M13,6h6c0.6,0,1,0.4,1,1v3c0,0.6-0.4,1-1,1h-6c-0.6,0-1-0.4-1-1V7C12,6.4,12.4,6,13,6z" />
</svg>

<!--
@component
[Go to Document](https://svelte-lucide.codewithshin.com/)
## Props
@prop size = '24';
@prop role = 'img';
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
