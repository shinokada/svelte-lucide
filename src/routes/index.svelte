<script>
  import { Accessibility, Activity, Airplay } from "$lib/index";
  export let size = "50";
  export let color = "currentColor";
</script>

<Accessibility size="30" class="text-red-700" />
<Activity size="40" class="text-purple-500" />
<Airplay size="50" color="#c61515" />
<Airplay color="text-blue-500" />
<h1 class="text-blue-500 text-2xl">Testing</h1>
<p class="text-red-500">Testing</p>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  viewBox="0 0 24 24"
  fill="none"
  stroke={color}
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="text-green-700"
>
  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
</svg>
