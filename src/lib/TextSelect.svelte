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
    ariaLabel =  "text select" , 
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
       <path d="M5 3a2 2 0 0 0-2 2" />   <path d="M19 3a2 2 0 0 1 2 2" />   <path d="M21 19a2 2 0 0 1-2 2" />   <path d="M5 21a2 2 0 0 1-2-2" />   <path d="M9 3h1" />   <path d="M9 21h1" />   <path d="M14 3h1" />   <path d="M14 21h1" />   <path d="M3 9v1" />   <path d="M21 9v1" />   <path d="M3 14v1" />   <path d="M21 14v1" />   <line x1="7" x2="15" y1="8" y2="8" />   <line x1="7" x2="17" y1="12" y2="12" />   <line x1="7" x2="13" y1="16" y2="16" />  
</svg>
