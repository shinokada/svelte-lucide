[![npm version](https://badgen.net/npm/v/svelte-lucide)](https://www.npmjs.com/package/svelte-lucide)
[![license](https://badgen.net/npm/license/svelte-lucide)](https://github.com/shinokada/svelte-lucide/blob/main/LICENSE)

# Svelte-Lucide

- [Lucide-icons](https://github.com/lucide-icons/lucide) for Svelte.
- Support all major CSS frameworks using the `class` prop.

## Icon list

[Icon list](https://github.com/shinokada/svelte-lucide/blob/main/icon-list.md)

## Installation

```sh
npm i -D svelte-lucide
```

In a svelte file:

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility />
<Activity />
<Airplay />
```

### REPL

[Demo 1](https://svelte.dev/repl/89542341632d4827ab30491ef95df6eb?version=3.47.0)


## Size

Use the `size` prop to change the size of icons.

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility size="30" />
<Activity size="42" />
<Airplay size="51" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility color="#c61515" />
<Activity color="#3759e5" />
<Airplay color="#3fe537" />
```

## CSS frameworks suport

Use the `class` prop to change colors and add additional css.

Tailwind example:

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility class="text-blue-700 mr-4" />
<Activity class="text-red-700" />
<Airplay class="text-green-500" />
```

Bootstrap example:

```html
<Accessibility class="position-absolute top-0 px-1" />
```

## Dark mode with Tailwind CSS

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility class="text-blue-700 dark:text-red-500" />
<Activity class="text-red-700 dark:text-green-500" />
<Airplay class="text-green-500 dark:text-blue-500" />
```

## Import all

[REPL](https://svelte.dev/repl/6b2057d58c3841fc9f37b67960f02e27?version=3.47.0)

Use `import * as Icon from 'svelte-lucide`.

```html
<script>
	import * as Icon from 'svelte-lucide'
</script>

<h1>Size</h1>
<Icon.Activity size="30"/>
<Icon.Activity size="40"/>
<Icon.Activity size="50"/>

<h1>CSS HEX color</h1>
<Icon.Bike color="#c61515" size="40"/>

<h1>Tailwind CSS</h1>
<Icon.Users class="text-blue-500" />
<Icon.Users class="text-pink-700" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
- [Svelte-Ionicons](https://www.npmjs.com/package/svelte-ionicons)
- [Svelte-Awesome-Icons](https://www.npmjs.com/package/svelte-awesome-icons)
- [Svelte-heros](https://github.com/shinokada/svelte-heros)
- [Svelte-lucide](https://github.com/shinokada/svelte-lucide)
- [Svelte-flags](https://www.npmjs.com/package/svelte-flags)
- [Svlete-simples](https://github.com/shinokada/svelte-simples)
- [Svelte-feathers](https://github.com/shinokada/svelte-feathers)