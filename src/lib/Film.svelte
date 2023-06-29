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
  <rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18" />
  <line x1="7" x2="7" y1="2" y2="22" />
  <line x1="17" x2="17" y1="2" y2="22" />
  <line x1="2" x2="22" y1="12" y2="12" />
  <line x1="2" x2="7" y1="7" y2="7" />
  <line x1="2" x2="7" y1="17" y2="17" />
  <line x1="17" x2="22" y1="17" y2="17" />
  <line x1="17" x2="22" y1="7" y2="7" />
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
