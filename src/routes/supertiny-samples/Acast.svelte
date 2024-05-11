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
    ariaLabel = 'Acast',
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
  aria-label="Acast"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="m446.5 232A192 192 0 10295 444m-11-101c-12 19-40 33-68 33-48 0-79-23-79-58 0-64 106-68 145-68v-42c0-8 0-24-19-24-17 0-18 11-18 14l2 14c0 14-18 24-45 24-29 0-47-15-47-39 0-30 39-59 109-59 76 0 113 37 113 71m-96 65c-30 0-45 15-45 33 0 13 8 20 21 20s23-10 23-22"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Acast';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
