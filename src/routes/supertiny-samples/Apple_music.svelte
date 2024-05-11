<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    fill?: string;
    size?: string;
    role?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
    fill?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'Apple_music',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label="Apple Music"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="url(#g)" /><linearGradient id="g" x1="0" y1=".99" x2="0" y2=".02"
    ><stop offset="0" stop-color="#FA233B" /><stop
      offset="1"
      stop-color="#FB5C74"
    /></linearGradient
  ><path
    {fill}
    d="m347 160q11-2 12 10v122q0 15-45 20c-57 9-48 105 30 79 30-11 35-40 35-69V88s0-20-17-15l-170 35s-13 2-13 18v203q0 15-45 20c-57 9-48 105 30 79 30-11 35-40 35-69V199q0-9 10-11"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Apple_music';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
