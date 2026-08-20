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
  <path d="M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z" />
  <path d="M20 8v12a2 2 0 0 1-2 2h-4.182" /> <path d="m3.305 19.53.923-.382" />
  <path d="M4 10.592V4a2 2 0 0 1 2-2h8" /> <path d="m4.228 16.852-.924-.383" />
  <path d="m5.852 15.228-.383-.923" /> <path d="m5.852 20.772-.383.924" />
  <path d="m8.148 15.228.383-.923" /> <path d="m8.53 21.696-.382-.924" />
  <path d="m9.773 16.852.922-.383" /> <path d="m9.773 19.148.922.383" />
  <circle cx="7" cy="18" r="3" />
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
