import type { MetaProps } from 'runes-meta-tags';
const title = 'Custom icons - Svelte Lucide';
const description = 'How to create a custom icons with Svelte Lucide';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-lucide';
export const load = () => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};
