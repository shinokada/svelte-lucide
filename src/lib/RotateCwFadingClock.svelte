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
    focusable = (ctx.focusable as Props['focusable']) || 'false',
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
  <path d="M12 3a9.75 9.75 0 0 1 6.74 2.74" /> <path d="M18.74 5.74 21 8" /> <path d="M21 8V3" />
  <path d="M7.5 19.794c-6-3.464-6-12.124 0-15.588" /> <path d="M7.5 4.206A9 9 0 0 1 12 3" />
  <path d="M12 7v5l4 2" /> <path d="M14 20.775A9 9 0 0 1 12 21" />
  <path d="M19 17.656a9 9 0 0 1-1.5 1.456" /> <path d="M21 12a9 9 0 0 1-.228 2" />
  <path d="M21 8h-5" />
</svg>

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop strokeWidth = ctx.strokeWidth || '2'
@prop focusable = (ctx.focusable as Props['focusable']) || 'false',
@prop ariaLabel
@prop ...restProps
-->
