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
    ariaLabel = 'Apereo',
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
  aria-label="Apereo Foundation"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="m231,96c-97,0-171,97-150,203 30,104 162,142 258,80-15-32 0-66-21-99-36,68-112,93-165,19-32-57 6-112 36-125 82-42 120,13 205-10 10-4 23-30 32-46-72,13-116-15-179-22z"
    fill="#344"
  /><path
    d="m313 191c27 4 57 4 80-4 10 95-21 122 40 226-19-10-42-15-48-15-6 4-17 11-23 17-65-74-36-175-51-224z"
    fill="#6bc"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Apereo';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
