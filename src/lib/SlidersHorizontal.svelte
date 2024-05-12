<script lang='ts'>
  import { getContext } from 'svelte';
  type TitleType = {
    id?: string;
    title?: string;
  };
  type DescType = {
    id?: string;
    desc?: string;
  };
  interface BaseProps {
    size?: string;
    role?: string;
    color?: string;
    strokeWidth?: string;
    withEvents?: boolean;
    onclick?: (event: MouseEvent) => void;
    onkeydown?: (event: KeyboardEvent) => void;
    onkeyup?: (event: KeyboardEvent) => void;
    class?: string;
  }
  interface CtxType extends BaseProps {}
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props extends BaseProps{
    title?: TitleType;
    desc?: DescType;
    ariaLabel?: string;
  }

  let { 
    size = ctx.size || '24', 
    role = ctx.role || 'img', 
    color = ctx.color || 'currentColor', 
    strokeWidth = ctx.strokeWidth || '2',
    withEvents = ctx.withEvents || false, 
    title = {}, 
    desc = {}, 
    class: classname, 
    ariaLabel =  "sliders horizontal" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  const hasDescription = $derived(!!(title.id || desc.id));

</script>

{#if withEvents}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill="none"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 24 24"
    onclick={onclick}
    onkeydown={onkeydown}
    onkeyup={onkeyup}
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
         <line x1="21" x2="14" y1="4" y2="4" />   <line x1="10" x2="3" y1="4" y2="4" />   <line x1="21" x2="12" y1="12" y2="12" />   <line x1="8" x2="3" y1="12" y2="12" />   <line x1="21" x2="16" y1="20" y2="20" />   <line x1="12" x2="3" y1="20" y2="20" />   <line x1="14" x2="14" y1="2" y2="6" />   <line x1="8" x2="8" y1="10" y2="14" />   <line x1="16" x2="16" y1="18" y2="22" />  
  </svg>
{:else}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
    {role}
    width={size}
    height={size}
    class={classname}
    fill="none"
    stroke={color}
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-label={ariaLabel}
    aria-describedby={hasDescription ? ariaDescribedby : undefined}
    viewBox="0 0 24 24"
  >
    {#if title.id && title.title}
      <title id="{title.id}">{title.title}</title>
    {/if}
    {#if desc.id && desc.desc}
      <desc id="{desc.id}">{desc.desc}</desc>
    {/if}
         <line x1="21" x2="14" y1="4" y2="4" />   <line x1="10" x2="3" y1="4" y2="4" />   <line x1="21" x2="12" y1="12" y2="12" />   <line x1="8" x2="3" y1="12" y2="12" />   <line x1="21" x2="16" y1="20" y2="20" />   <line x1="12" x2="3" y1="20" y2="20" />   <line x1="14" x2="14" y1="2" y2="6" />   <line x1="8" x2="8" y1="10" y2="14" />   <line x1="16" x2="16" y1="18" y2="22" />  
  </svg>
{/if}

<!--
@component
[Go to docs](https://svelte-lucide.codewithshin.com/)
## Props
@props: 
-->
