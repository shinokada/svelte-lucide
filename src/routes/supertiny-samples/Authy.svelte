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
    ariaLabel = 'Authy',
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
  aria-label="Authy"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" fill="#ec1c24" /><path
    fill="none"
    stroke="#fff"
    stroke-width="46"
    stroke-linecap="round"
    d="M333 131l65 65c35 36 35 96 0 134-34 34-99 36-132 4l-68-69m-19 116l-65-65a97 97 0 0 1 0-134c34-35 98-36 131-4l69 69"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Authy';
@props:class?: string;
-->
