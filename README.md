# Svelte Lucide

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-lucide" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-lucide" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-lucide" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-lucide" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-lucide.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

590+ [Lucide-icons](https://github.com/lucide-icons/lucide) for Svelte. 

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.


## Repo

[GitHub Repo](https://github.com/shinokada/svelte-lucide)

## Original source

[lucide-icons/lucide](https://github.com/lucide-icons/lucide)

## License

[Svelte-Lucide License](https://github.com/shinokada/svelte-lucide/blob/main/LICENSE)

[lucide-icons/lucide LICENSE](https://github.com/lucide-icons/lucide/blob/main/LICENSE)


## Installation

```sh
pnpm i -D svelte-lucide
```

## Usage

In a svelte file:

```html
<script>
  import { Accessibility, Activity, Airplay } from 'svlete-lucide';
</script>

<Accessibility />
<Activity />
<Airplay />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import Accessibility from 'svelte-lucide/Accessibility.svelte';
</script>

<Accessibility />
```

If you are a TypeScript user, install **typescript version 5.0.0 or above**.

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size = '24';
- role = 'img';
- color = 'currentColor';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, features, props, events, and an example.

## Size

Use the `size` prop to change the size of icons.

```html
<script>
  import { Accessibility, Activity, Airplay } from 'svlete-lucide';
</script>

<Accessibility size="30" />
<Activity size="42" />
<Airplay size="51" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<Accessibility class="shrink-0 h-20 w-20" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<script>
  import { Accessibility, Activity, Airplay } from 'svlete-lucide';
</script>

<Accessibility color="#c61515" />
<Activity color="#3759e5" />
<Airplay color="#3fe537" />
```

## CSS frameworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind example:

```html
<script>
  import { Accessibility, Activity, Airplay } from 'svlete-lucide';
</script>

<Accessibility class="text-blue-700 mr-4" />
<Activity class="text-red-700" />
<Airplay class="text-green-500" />
```

Bootstrap example:

```html
<Accessibility class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<script>
  import { Accessibility, Activity, Airplay } from 'svlete-lucide';
</script>

<Accessibility class="text-blue-700 dark:text-red-500" />
<Activity class="text-red-700 dark:text-green-500" />
<Airplay class="text-green-500 dark:text-blue-500" />
```

## aria-label

TODO

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Airplay tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

You can pass other attibutes as well.

```html
<Airplay tabindex="0" />
```

## Using svelte:component

```html
<script>
  import { Airplay } from 'svelte-lucide';
</script>

<svelte:component this="{Airplay}" />
```

## Using onMount

```html
<script>
  import { Airplay } from 'svelte-lucide';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Airplay({ target: document.body, props });
  });
</script>
```


## Import all

Use `import * as Icon from 'svelte-lucide`.

```html
<script>
  import * as Icon from 'svelte-lucide';
</script>

<h1>Size</h1>
<Icon.Activity size="30" />
<Icon.Activity size="40" />
<Icon.Activity size="50" />

<h1>CSS HEX color</h1>
<Icon.Bike color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.Users class="text-blue-500" />
<Icon.Users class="text-pink-700" />
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
