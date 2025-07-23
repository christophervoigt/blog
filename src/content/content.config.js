import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		hasCode: z.boolean().optional(),
		status: z.string().optional(),
	}),
})

const characters = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/dungeons-and-dragons' }),
	schema: z.object({
		name: z.string(),
		class: z.string(),
		subclass: z.string().optional(),
		level: z.number(),
		hit_points: z.number(),
		armor_class: z.number(),
		speed: z.string(),
		proficiency_bonus: z.number(),
		initiative: z.number(),

		abilities: z.object({
			strength: z.number(),
			dexterity: z.number(),
			constitution: z.number(),
			intelligence: z.number(),
			wisdom: z.number(),
			charisma: z.number(),
		}),

		saving_throws: z.object({
			strength: z.boolean(),
			dexterity: z.boolean(),
			constitution: z.boolean(),
			intelligence: z.boolean(),
			wisdom: z.boolean(),
			charisma: z.boolean(),
		}),

		senses: z.object({
			darkvision: z.string().optional(),
			blindsight: z.string().optional(),
			passive_perception: z.number().optional(),
		}),

		training: z.object({
			armor: z.array(z.string()),
			weapons: z.array(z.string()),
			languages: z.array(z.string()),
			tools: z.array(z.string()),
		}),
	}),
})

export const collections = { blog, characters }
