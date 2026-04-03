import type { CollectionEntry } from 'astro:content';

/** Extract plain-text excerpt from markdown body */
export function getExcerpt(body: string | undefined, length = 170): string {
  if (!body) return '';
  return body
    .replace(/^#{1,6}\s+.*$/gm, '')
    .replace(/!\[.*?\]\(.*?\)/g, '')
    .replace(/\[([^\]]*)\]\(.*?\)/g, '$1')
    .replace(/[*_~`>]/g, '')
    .replace(/\n+/g, ' ')
    .trim()
    .slice(0, length) + '…';
}

/** Collect tag counts from all posts */
export function getTagCounts(posts: CollectionEntry<'posts'>[]): Record<string, number> {
  const counts: Record<string, number> = {};
  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return counts;
}
