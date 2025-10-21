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
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 24 24"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path d="M13.77 3.043a34 34 0 0 0-3.54 0" /> <path d="M13.771 20.956a33 33 0 0 1-3.541.001" />
  <path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" />
  <path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" />
  <path d="M20.957 10.23a33 33 0 0 1 0 3.54" /> <path d="M3.043 10.23a34 34 0 0 0 .001 3.541" />
  <path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" />
  <path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" />
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
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
