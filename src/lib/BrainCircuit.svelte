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
    ariaLabel =  "brain circuit" , 
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
         <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />   <path d="M9 13a4.5 4.5 0 0 0 3-4" />   <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />   <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />   <path d="M6 18a4 4 0 0 1-1.967-.516" />   <path d="M12 13h4" />   <path d="M12 18h6a2 2 0 0 1 2 2v1" />   <path d="M12 8h8" />   <path d="M16 8V5a2 2 0 0 1 2-2" />   <circle cx="16" cy="13" r=".5" />   <circle cx="18" cy="3" r=".5" />   <circle cx="20" cy="21" r=".5" />   <circle cx="20" cy="8" r=".5" />  
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
         <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />   <path d="M9 13a4.5 4.5 0 0 0 3-4" />   <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />   <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />   <path d="M6 18a4 4 0 0 1-1.967-.516" />   <path d="M12 13h4" />   <path d="M12 18h6a2 2 0 0 1 2 2v1" />   <path d="M12 8h8" />   <path d="M16 8V5a2 2 0 0 1 2-2" />   <circle cx="16" cy="13" r=".5" />   <circle cx="18" cy="3" r=".5" />   <circle cx="20" cy="21" r=".5" />   <circle cx="20" cy="8" r=".5" />  
  </svg>
{/if}
