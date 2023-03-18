import { image, defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z
      .string()
      .or(
        image().refine((img) => img?.width >= 600, {
          message: 'Hero image must be at least 600 pixels wide!',
        })
      )
      .optional(),
    heroImageAlt: z.string().optional(),
  }),
})

export const collections = { blog }
