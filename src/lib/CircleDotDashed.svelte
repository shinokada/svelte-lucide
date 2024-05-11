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
    ariaLabel =  "circle dot dashed" , 
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
         <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />   <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />   <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />   <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />   <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />   <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />   <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />   <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />   <circle cx="12" cy="12" r="1" />  
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
         <path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />   <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />   <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />   <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />   <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />   <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />   <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />   <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />   <circle cx="12" cy="12" r="1" />  
  </svg>
{/if}
