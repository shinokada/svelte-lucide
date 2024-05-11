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
    ariaLabel =  "square dashed kanban" , 
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
         <path d="M8 7v7" />   <path d="M12 7v4" />   <path d="M16 7v9" />   <path d="M5 3a2 2 0 0 0-2 2" />   <path d="M9 3h1" />   <path d="M14 3h1" />   <path d="M19 3a2 2 0 0 1 2 2" />   <path d="M21 9v1" />   <path d="M21 14v1" />   <path d="M21 19a2 2 0 0 1-2 2" />   <path d="M14 21h1" />   <path d="M9 21h1" />   <path d="M5 21a2 2 0 0 1-2-2" />   <path d="M3 14v1" />   <path d="M3 9v1" />  
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
         <path d="M8 7v7" />   <path d="M12 7v4" />   <path d="M16 7v9" />   <path d="M5 3a2 2 0 0 0-2 2" />   <path d="M9 3h1" />   <path d="M14 3h1" />   <path d="M19 3a2 2 0 0 1 2 2" />   <path d="M21 9v1" />   <path d="M21 14v1" />   <path d="M21 19a2 2 0 0 1-2 2" />   <path d="M14 21h1" />   <path d="M9 21h1" />   <path d="M5 21a2 2 0 0 1-2-2" />   <path d="M3 14v1" />   <path d="M3 9v1" />  
  </svg>
{/if}
