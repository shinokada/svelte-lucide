<h1 align="center">Svelte Lucide</h1>

<p align="center">
<a href="https://svelte-lucide.codewithshin.com/">Svelte-Lucide</a>
</p>

<p align="center">
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield"></a>
<a href="https://www.npmjs.com/package/svelte-lucide" rel="nofollow"><img src="https://img.shields.io/npm/v/svelte-lucide" alt="npm"></a>
<a href="https://twitter.com/shinokada" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow"><img src="https://img.shields.io/github/license/shinokada/svelte-lucide" alt="License"></a>
<a href="https://www.npmjs.com/package/svelte-lucide" rel="nofollow"><img src="https://img.shields.io/npm/dw/svelte-lucide.svg" alt="npm"></a>
</p>

[Lucide-icons](https://github.com/lucide-icons/lucide) for Svelte. Support all major CSS frameworks using the `class` prop.

<p align="center">
<img src="/static/images/lucide-650-1050-optimized.png" width="650" />
</p>

## Installation

```sh
npm i -D svelte-lucide
```

## Icon list

[Icon list](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)

## Usage

In a svelte file:

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility />
<Activity />
<Airplay />
```

## REPL

[Demo 1](https://svelte.dev/repl/89542341632d4827ab30491ef95df6eb)


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

[REPL](https://svelte.dev/repl/6b2057d58c3841fc9f37b67960f02e27)

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

## Experience lightning-fast browsing and offline access with Our PWA

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".