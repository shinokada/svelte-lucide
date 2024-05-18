import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Icons - Svelte Lucide',
    description: 'Svelte Lucide Icons',
    og: {
      title: 'Icons - Svelte Lucide',
      description: 'Svelte Lucide Icons'
    },
    twitter: {
      title: 'Icons - Svelte Lucide',
      description: 'Svelte Lucide Icons'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
