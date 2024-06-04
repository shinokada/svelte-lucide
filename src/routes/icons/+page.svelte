<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterStringKeys } from 'runes-webkit';
  import * as icons from '$lib';
  const keyIcons = filterStringKeys(icons);

</script>

<IconPage
  icons={keyIcons as Component}
  title="Icons - Svelte Lucide"
  i_p_tabitem_div_1="lg:grid-cols-3"
/>
