import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const imageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const destinations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/destinations' }),
  schema: z.object({
    title: z.string(),
    route: z.string(),
    parent: z.string().optional(),
    order: z.number(),
    eyebrow: z.string().default('Destinace'),
    summary: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    cardImage: z.string().optional(),
    gallery: z.array(imageSchema).default([]),
    featured: z.boolean().default(false),
  }),
});

const itineraries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/itineraries' }),
  schema: z.object({
    title: z.string(),
    destination: z.string(),
    duration: z.string(),
    order: z.number(),
    intro: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
  }),
});

const settings = defineCollection({
  loader: file('./src/content/settings/site.json'),
  schema: z.object({
    brandName: z.string(),
    descriptor: z.string(),
    phone: z.string(),
    email: z.email(),
    address: z.string(),
    companyName: z.string(),
    companyId: z.string(),
    vatId: z.string(),
    register: z.string(),
    bank: z.string(),
    bankAccount: z.string(),
  }),
});

export const collections = { destinations, itineraries, pages, settings };
