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
    ariaLabel =  "cog" , 
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
         <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />   <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />   <path d="M12 2v2" />   <path d="M12 22v-2" />   <path d="m17 20.66-1-1.73" />   <path d="M11 10.27 7 3.34" />   <path d="m20.66 17-1.73-1" />   <path d="m3.34 7 1.73 1" />   <path d="M14 12h8" />   <path d="M2 12h2" />   <path d="m20.66 7-1.73 1" />   <path d="m3.34 17 1.73-1" />   <path d="m17 3.34-1 1.73" />   <path d="m11 13.73-4 6.93" />  
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
         <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />   <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />   <path d="M12 2v2" />   <path d="M12 22v-2" />   <path d="m17 20.66-1-1.73" />   <path d="M11 10.27 7 3.34" />   <path d="m20.66 17-1.73-1" />   <path d="m3.34 7 1.73 1" />   <path d="M14 12h8" />   <path d="M2 12h2" />   <path d="m20.66 7-1.73 1" />   <path d="m3.34 17 1.73-1" />   <path d="m17 3.34-1 1.73" />   <path d="m11 13.73-4 6.93" />  
  </svg>
{/if}
