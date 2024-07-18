<script lang='ts'>
  import { getContext } from 'svelte';
  import type { CtxType, Props } from './types'

  const ctx: CtxType = getContext('iconCtx') ?? {};

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor', 
    strokeWidth = ctx.strokeWidth || '2',
    title, 
    desc, 
    ariaLabel =  "circle dot dashed" , 
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
    <title id="{title.id}">{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id="{desc.id}">{desc.desc}</desc>
  {/if}
       <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />   <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />   <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />   <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />   <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />   <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />   <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />   <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />   <circle cx="12" cy="12" r="1" />  
</svg>
