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
    focusable = ctx.focusable || 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived([title?.id, desc?.id].filter(Boolean).join(' ') || undefined);
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
  {focusable}
  aria-label={ariaLabel || undefined}
  aria-labelledby={title?.id || undefined}
  aria-describedby={ariaDescribedby}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <line x1="5" y1="3" x2="19" y2="3" /> <line x1="3" y1="5" x2="3" y2="19" />
  <line x1="21" y1="5" x2="21" y2="19" /> <line x1="9" y1="21" x2="10" y2="21" />
  <line x1="14" y1="21" x2="15" y2="21" /> <path d="M 3 5 A2 2 0 0 1 5 3" />
  <path d="M 19 3 A2 2 0 0 1 21 5" /> <path d="M 5 21 A2 2 0 0 1 3 19" />
  <path d="M 21 19 A2 2 0 0 1 19 21" /> <circle cx="8.5" cy="8.5" r="1.5" />
  <line x1="9.56066" y1="9.56066" x2="12" y2="12" /> <line x1="17" y1="17" x2="14.82" y2="14.82" />
  <circle cx="8.5" cy="15.5" r="1.5" /> <line x1="9.56066" y1="14.43934" x2="17" y2="7" />
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
@prop focusable = ctx.focusable || 'false'
@prop ariaLabel
@prop ...restProps
-->
