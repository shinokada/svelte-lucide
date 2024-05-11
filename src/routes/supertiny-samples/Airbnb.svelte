<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    size?: string;
    role?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'Airbnb',
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
  aria-label="Airbnb"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#ff5a5f" /><path
    fill="none"
    stroke="#fff"
    stroke-width="23"
    d="m211 115q-50 95-96 197-24 52 12 83c59 46 112-20 129-38s48-64 48-95-22-49-48-49-48 18-48 49 31 77 48 95 70 84 129 38q36-31 12-83-46-102-96-197c-21-39-69-39-90 0z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Airbnb';
@props:class?: string;
-->
