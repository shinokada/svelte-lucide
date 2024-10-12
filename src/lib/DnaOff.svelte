<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    strokeWidth = ctx.strokeWidth || '2',
    title,
    desc,
    ariaLabel = 'dna off',
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
  <path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" /> <path d="m17 6-2.891-2.891" />
  <path d="M2 15c3.333-3 6.667-3 10-3" /> <path d="m2 2 20 20" /> <path d="m20 9 .891.891" />
  <path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" /> <path d="M3.109 14.109 4 15" />
  <path d="m6.5 12.5 1 1" /> <path d="m7 18 2.891 2.891" />
  <path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
</svg>
