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
    ariaLabel = 'Ansible',
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
  aria-label="Ansible"
  {role}
  viewBox="0 0 512 512"
  {fill}
  ><path d="m0 0H512V512H0" /><circle cx="256" cy="256" r="192" fill="#1a1918" /><path
    d="m256 184 49.7 122.9-75.2-59.3m37.3-96.8a13 13 0 00-24.1 0l-84 202.3h28.7l33.3-83.5 101 81.7a14 13.5 0 0021.8-16"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Ansible';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
