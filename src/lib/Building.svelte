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
  <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
  <path d="M9 22v-4h6v4" />
  <path d="M8 6h.01" />
  <path d="M16 6h.01" />
  <path d="M12 6h.01" />
  <path d="M12 10h.01" />
  <path d="M12 14h.01" />
  <path d="M16 10h.01" />
  <path d="M16 14h.01" />
  <path d="M8 10h.01" />
  <path d="M8 14h.01" />
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
