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
    ariaLabel = 'user round cog',
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
  <path d="M2 21a8 8 0 0 1 10.434-7.62" /> <circle cx="10" cy="8" r="5" />
  <circle cx="18" cy="18" r="3" /> <path d="m19.5 14.3-.4.9" /> <path d="m16.9 20.8-.4.9" />
  <path d="m21.7 19.5-.9-.4" /> <path d="m15.2 16.9-.9-.4" /> <path d="m21.7 16.5-.9.4" />
  <path d="m15.2 19.1-.9.4" /> <path d="m19.5 21.7-.4-.9" /> <path d="m16.9 15.2-.4-.9" />
</svg>
