import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Svelte Lucide',
    description: 'How to create a custom icons with Svelte Lucide',
    og: {
      title: 'Custom icons example - Svelte Lucide',
      description: 'How to create a custom icons with Svelte Lucide'
    },
    twitter: {
      title: 'Custom icons example - Svelte Lucide',
      description: 'How to create a custom icons with Svelte Lucide'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
