[![npm version](https://badgen.net/npm/v/svelte-lucide)](https://www.npmjs.com/package/svelte-lucide)
[![license](https://badgen.net/npm/license/svelte-lucide)](https://github.com/shinokada/svelte-lucide/blob/main/LICENSE)


# Svelte-Lucide

[Lucide-icons](https://github.com/lucide-icons/lucide) for Svelte

## Installation

```sh
npm i -D svelte-lucide
```

In your file:

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility />
<Activity />
<Airplay />
```

## Size

Use the `size` prop to change the size of icons.

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility size="30" />
<Activity size="40" />
<Airplay size="50" />
```

## Color

Use the `color` prop to change colors.

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility color="#c61515" />
<Activity color="#3759e5" />
<Airplay color="#3fe537" />
```

## Tailwind CSS suport

Use the `class` prop to change colors:


```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility class="text-blue-700" />
<Activity class="text-red-700" />
<Airplay class="text-green-500" />
```

## Dark mode with Tailwind CSS

If you use the dark mode on your website with Tailwind CSS, add it to the `class` prop.

As an example the dark mode class is `dark`.

```html
<script>
  import { Accessibility, Activity, Airplay } from "svlete-lucide";
</script>

<Accessibility class="text-blue-700 dark:text-red-500" />
<Activity class="text-red-700 dark:text-green-500" />
<Airplay class="text-green-500 dark:text-blue-500" />
```