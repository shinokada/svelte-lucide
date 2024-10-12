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
    ariaLabel = 'user cog',
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
  <circle cx="18" cy="15" r="3" /> <circle cx="9" cy="7" r="4" />
  <path d="M10 15H6a4 4 0 0 0-4 4v2" /> <path d="m21.7 16.4-.9-.3" /> <path d="m15.2 13.9-.9-.3" />
  <path d="m16.6 18.7.3-.9" /> <path d="m19.1 12.2.3-.9" /> <path d="m19.6 18.7-.4-1" />
  <path d="m16.8 12.3-.4-1" /> <path d="m14.3 16.6 1-.4" /> <path d="m20.7 13.8 1-.4" />
</svg>
