import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const aboutCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/about' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    avatarAlt: z.string().optional(),
  }),
});

const experienceCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    jobs: z.array(
      z.object({
        company: z.string(),
        role: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        description: z.string(),
      })
    ),
    skills: z.array(z.string()),
  }),
});

const siteCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    email: z.string().email(),
    github: z.string().url(),
    linkedin: z.string().url().optional(),
  }),
});

export const collections = {
  about: aboutCollection,
  experience: experienceCollection,
  site: siteCollection,
};
