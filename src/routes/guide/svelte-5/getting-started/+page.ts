import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Getting Started: Svelte Lucide v2 ',
    description: 'Getting Started with Svelte Lucide v2',
    og: {
      title: 'Getting Started: Svelte Lucide v2',
      description: 'Getting Started with Svelte Lucide v2'
    },
    twitter: {
      title: 'Getting Started: Svelte Lucide v2',
      description: 'Getting Started with Svelte Lucide v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
