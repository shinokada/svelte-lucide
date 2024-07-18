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
    ariaLabel =  "circle dashed" , 
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
       <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />   <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />   <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" />   <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />   <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" />   <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />   <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />   <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" />  
</svg>
