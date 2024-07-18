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
    ariaLabel = 'replace all',
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
  <path d="M14 4c0-1.1.9-2 2-2" /> <path d="M20 2c1.1 0 2 .9 2 2" />
  <path d="M22 8c0 1.1-.9 2-2 2" /> <path d="M16 10c-1.1 0-2-.9-2-2" /> <path d="m3 7 3 3 3-3" />
  <path d="M6 10V5c0-1.7 1.3-3 3-3h1" /> <rect width="8" height="8" x="2" y="14" rx="2" />
  <path d="M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
  <path d="M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
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
@prop ariaLabel = 'replace all'
@prop ...restProps
-->
