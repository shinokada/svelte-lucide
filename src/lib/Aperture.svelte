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
  <circle cx="12" cy="12" r="10" />
  <line x1="14.31" x2="20.05" y1="8" y2="17.94" />
  <line x1="9.69" x2="21.17" y1="8" y2="8" />
  <line x1="7.38" x2="13.12" y1="12" y2="2.06" />
  <line x1="9.69" x2="3.95" y1="16" y2="6.06" />
  <line x1="14.31" x2="2.83" y1="16" y2="16" />
  <line x1="16.62" x2="10.88" y1="12" y2="21.94" />
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
