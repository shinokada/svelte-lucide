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
    ariaLabel =  "slack" , 
    onclick, 
    onkeydown, 
    onkeyup,
    ...restProps 
  }: Props = $props();

  let ariaDescribedby = `${title.id || ''} ${desc.id || ''}`;
  let hasDescription = $state(false);

  function updateHasDescription() {
    hasDescription = !!(title.id || desc.id); 
  }
  updateHasDescription();

  $effect(() => {
    updateHasDescription();
  })
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
         <rect width="3" height="8" x="13" y="2" rx="1.5" />   <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />   <rect width="3" height="8" x="8" y="14" rx="1.5" />   <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />   <rect width="8" height="3" x="14" y="13" rx="1.5" />   <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />   <rect width="8" height="3" x="2" y="8" rx="1.5" />   <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />  
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
         <rect width="3" height="8" x="13" y="2" rx="1.5" />   <path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />   <rect width="3" height="8" x="8" y="14" rx="1.5" />   <path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />   <rect width="8" height="3" x="14" y="13" rx="1.5" />   <path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />   <rect width="8" height="3" x="2" y="8" rx="1.5" />   <path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />  
  </svg>
{/if}
