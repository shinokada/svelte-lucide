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
    ariaLabel = 'Android',
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
  aria-label="Android"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="m434.5 342a176 176 0 00-91-140.4l29.7-51.5a6 6 0 10-10.7-6.2L332.4 196a187 187 0 00-152.8 0l-30.1-52.1a6 6 0 10-10.7 6.2l29.7 51.5A176 176 0 0077.5 342m96.3-50.9a14.9 14.9 0 11.1 0m164.3 0a14.9 14.9 0 11.1 0"
    fill="#3ddc84"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Android';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
