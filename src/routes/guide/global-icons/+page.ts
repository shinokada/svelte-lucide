import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Setting Global Icon - Svelte Lucide',
    description: 'Setting Global Icon using setContext with Svelte Lucide',
    og: {
      title: 'Setting Global Icon - Svelte Lucide',
      description: 'Setting Global Icon using setContext with Svelte Lucide'
    },
    twitter: {
      title: 'Setting Global Icon - Svelte Lucide',
      description: 'Setting Global Icon using setContext with Svelte Lucide'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
