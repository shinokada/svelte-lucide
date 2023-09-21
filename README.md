# Svelte Lucide

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor"></a>
<a href="https://www.npmjs.com/package/svelte-lucide" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-lucide" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-lucide" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-lucide" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-lucide.svg" alt="npm"></a>
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

## Creating a Default Global Icon Setting in Svelte

You can create a config file, `/src/lib/icon.config.json`.

The `Icon` component serves as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

### Configuration File

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

```json
{
  "config1": {
    "size": 40,
    "color": "#FF5733"
  },
  "config2": {
    "size": 50,
    "color": "#445533"
  }
}
```

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

### Implementation

In your Svelte page file, make use of the configurations from the JSON file:

```html
<script lang="ts">
  type IconConfig = {
    config1: {
      size: number;
      color: string;
    };
    config2: {
      size: number;
      color: string;
    };
  };
  import config from '$lib/icon.config.json';
  import { Icon, Accessibility, AlignRight } from 'svelte-lucide';

  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<Icon {...config1} icon="{Accessibility}" />
<Icon {...config2} icon="{AlignRight}" />
```

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes `{...config1}` and `{...config2}` to apply the respective configurations to each icon.

### Custom Default Icon

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { Icon } from 'svelte-lucide';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { Accessibility } from 'svelte-lucide';
</script>

<MyIcon icon="{Accessibility}" />
```

Here, we import the `MyIcon` component and the `Accessibility` icon. By passing the `Accessibility` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

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
