import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    author: z.string().default('Sajo'),
    headerImg: z.string().optional(),
    catalog: z.boolean().default(false),
    headerMask: z.number().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
