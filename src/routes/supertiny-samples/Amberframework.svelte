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
    ariaLabel = 'Amberframework',
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
  aria-label="Amber Framework"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#e67e25"
    d="M256 446 87 351l44-79L256 66l169 95v190"
  /><path fill="#f3c095" d="m87 161 169-95-125 206" /><path
    fill="#eb994f"
    d="m256 66-125 206 240-69m54 148-109 7-60 88"
  /><path fill="#e88b3d" d="M87 351V161l44 111 185 86 55-155 54 148-109 7-60 88-125-174" /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Amberframework';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
