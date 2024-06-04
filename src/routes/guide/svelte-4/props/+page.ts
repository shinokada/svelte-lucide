import type { MetaProps } from 'runes-meta-tags';
const title = 'Props - Svelte Lucide v1'
const description = 'How to use Svelte Lucide v1 props'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-lucide'

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
