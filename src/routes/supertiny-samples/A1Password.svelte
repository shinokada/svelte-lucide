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
    ariaLabel = 'A1Password',
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
  aria-label="1Password"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    fill="#19285f"
    d="m255 64a192 192 0 102 0m-37 92c0-8 6-14 14-14h44c8 0 14 6 14 14v106q0 3-2 5l-15 13c-2 2-1 4 0 5l15 12q2 2 2 5v54c0 8-6 14-14 14h-44c-8 0-14-6-14-14V250q0-3 2-5l15-13c2-2 1-4 0-5l-15-12q-2-2-2-5"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'A1Password';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
