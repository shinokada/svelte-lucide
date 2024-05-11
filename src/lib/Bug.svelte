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
    ariaLabel =  "bug" , 
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
         <path d="m8 2 1.88 1.88" />   <path d="M14.12 3.88 16 2" />   <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />   <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />   <path d="M12 20v-9" />   <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />   <path d="M6 13H2" />   <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />   <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />   <path d="M22 13h-4" />   <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />  
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
         <path d="m8 2 1.88 1.88" />   <path d="M14.12 3.88 16 2" />   <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />   <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />   <path d="M12 20v-9" />   <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />   <path d="M6 13H2" />   <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />   <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />   <path d="M22 13h-4" />   <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />  
  </svg>
{/if}
