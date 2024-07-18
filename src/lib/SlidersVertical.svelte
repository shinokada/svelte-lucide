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
    ariaLabel =  "sliders vertical" , 
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
       <line x1="4" x2="4" y1="21" y2="14" />   <line x1="4" x2="4" y1="10" y2="3" />   <line x1="12" x2="12" y1="21" y2="12" />   <line x1="12" x2="12" y1="8" y2="3" />   <line x1="20" x2="20" y1="21" y2="16" />   <line x1="20" x2="20" y1="12" y2="3" />   <line x1="2" x2="6" y1="14" y2="14" />   <line x1="10" x2="14" y1="8" y2="8" />   <line x1="18" x2="22" y1="16" y2="16" />  
</svg>
