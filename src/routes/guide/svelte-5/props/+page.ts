import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Props - Svelte Lucide v2',
    description: 'How to use props with Svelte Lucide v2',
    og: {
      title: 'Props - Svelte Lucide v2',
      description: 'How to use props with Svelte Lucide v2'
    },
    twitter: {
      title: 'Props - Svelte Lucide v2',
      description: 'How to use props with Svelte Lucide v2'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
