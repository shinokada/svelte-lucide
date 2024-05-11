<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from 'runes-webkit';
  import { List, Li, A, Tabs, TabItem, Checkbox } from 'svelte-5-ui-lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Quick Start</h1>

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<H2>Update the followings: </H2>

<List tag='ul' list="none" ctxclass='my-1 text-lg'>
  <Checkbox><Li><Code>.changeset/config.json</Code></Li></Checkbox>
  <Checkbox><Li>package.json</Li></Checkbox>
  <Checkbox><Li>change <Code>.git</Code> directory and check if it is <Code>svelte-5-runes</Code> branch</Li></Checkbox>
  <Checkbox><Li><Code>.dark_bg_theme</Code> in <Code>app.pcss</Code></Li></Checkbox>
  <Checkbox><Li><Code>primary</Code> in <Code>tailwind.config.cjs</Code></Li></Checkbox>
  <Checkbox><Li><Code>CHANGELOG</Code></Li></Checkbox>
  <Checkbox><Li>tests in the tests directory</Li></Checkbox>
  <Checkbox><Li>Use global search to replace svelte-lucide with your package name</Li></Checkbox>
  <Checkbox><Li>Remove or change the name of three-tabs, three-tabs-sizedbytailwind, and no-tabs directories</Li></Checkbox>
  <Checkbox><Li>the default theme in utils/DynamicCodeBlockStyle.svelte</Li></Checkbox>
  <Checkbox><Li>.env.development to .env</Li></Checkbox>
  <Checkbox><Li>README file</Li></Checkbox>
  <Checkbox><Li>Remove unnecessary directories, awesome-samples, flowbite-samples, guide2, how-to-use, quick-start, supertiny-samples.</Li></Checkbox>
  <Checkbox><Li>+layout.svelte</Li></Checkbox>
  <Checkbox><Li>+layout.server.ts</Li></Checkbox>
  <Checkbox><Li>utils/Nav.svelte</Li></Checkbox>
</List>
