<script lang="ts">
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types';

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    strokeWidth = ctx.strokeWidth || '2',
    title,
    desc,
    ariaLabel = 'slack',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill="none"
  stroke={color}
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-label={ariaLabel}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <rect width="3" height="8" x="13" y="2" rx="1.5" />
  <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
  <rect width="3" height="8" x="8" y="14" rx="1.5" />
  <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
  <rect width="8" height="3" x="14" y="13" rx="1.5" />
  <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
  <rect width="8" height="3" x="2" y="8" rx="1.5" /> <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop strokeWidth = ctx.strokeWidth || '2'
@prop title
@prop desc
@prop ariaLabel = 'slack'
@prop ...restProps
-->
