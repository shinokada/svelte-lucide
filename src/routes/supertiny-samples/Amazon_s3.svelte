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
    ariaLabel = 'Amazon_s3',
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
  aria-label="Amazon Simple Storage Service"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><g fill="#e05243"
    ><path d="m123 131v250l137-33V163" /><path
      fill="#8c3123"
      d="m97 144V368l26 13V131m75-38v82h58v33l-58 7v82l58 7v33h-58v82l58 29 4-98 129 31V131l-129 31-4-98"
    /><path d="m256 448V64l58 29v82h-58v33l58 7v82l-58 7v33h58v82m75-38V131l26 12v225" /></g
  ><path fill="#5e1f18" d="m314 175-58 11-58-11 58-14" /><path
    fill="#f2b0a9"
    d="m314 337-58-11-58 11 58 14"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Amazon_s3';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
