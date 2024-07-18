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
    ariaLabel =  "vault" , 
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
       <rect width="18" height="18" x="3" y="3" rx="2" />   <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />   <path d="m7.9 7.9 2.7 2.7" />   <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />   <path d="m13.4 10.6 2.7-2.7" />   <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />   <path d="m7.9 16.1 2.7-2.7" />   <circle cx="16.5" cy="16.5" r=".5" fill="currentColor" />   <path d="m13.4 13.4 2.7 2.7" />   <circle cx="12" cy="12" r="2" />  
</svg>
