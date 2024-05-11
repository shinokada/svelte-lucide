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
    ariaLabel =  "fingerprint" , 
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
         <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />   <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />   <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />   <path d="M2 12a10 10 0 0 1 18-6" />   <path d="M2 16h.01" />   <path d="M21.8 16c.2-2 .131-5.354 0-6" />   <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />   <path d="M8.65 22c.21-.66.45-1.32.57-2" />   <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />  
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
         <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />   <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />   <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />   <path d="M2 12a10 10 0 0 1 18-6" />   <path d="M2 16h.01" />   <path d="M21.8 16c.2-2 .131-5.354 0-6" />   <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />   <path d="M8.65 22c.21-.66.45-1.32.57-2" />   <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />  
  </svg>
{/if}
