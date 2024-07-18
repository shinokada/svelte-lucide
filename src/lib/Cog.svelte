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
    ariaLabel =  "cog" , 
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
       <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />   <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />   <path d="M12 2v2" />   <path d="M12 22v-2" />   <path d="m17 20.66-1-1.73" />   <path d="M11 10.27 7 3.34" />   <path d="m20.66 17-1.73-1" />   <path d="m3.34 7 1.73 1" />   <path d="M14 12h8" />   <path d="M2 12h2" />   <path d="m20.66 7-1.73 1" />   <path d="m3.34 17 1.73-1" />   <path d="m17 3.34-1 1.73" />   <path d="m11 13.73-4 6.93" />  
</svg>
