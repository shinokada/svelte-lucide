import type { Component } from 'svelte';
import { type ListType, ExpandOutline, sidebarList } from 'runes-webkit';

const extra: ListType[] = [
  {
    name: 'Icons',
    Icon: ExpandOutline as Component,
    href: '/icons'
  }
];

export const newSidebarList: ListType[] = [
  ...(Array.isArray(sidebarList) ? sidebarList : []),
  ...extra
];
