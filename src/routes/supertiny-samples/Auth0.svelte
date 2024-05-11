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
    ariaLabel = 'Auth0',
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
  aria-label="Auth0"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="m358.1 378.8-38.5-118.8 100.9-73.1h-124.8l-38.6-118.7h124.8l38.6 118.7c22.4 68.8-0.7 147-62.4 192zm-201.9 0 100.9 73.4 101-73.4-100.9-73.3zm-62.4-192c-23.6 72.6 3.8 149.5 62.4 192l38.6-118.6-100.9-73.3h124.7l38.5-118.7h0.1-124.8z"
    fill="#eb5424"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Auth0';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
