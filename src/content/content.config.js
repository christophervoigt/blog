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

const skill = z.object({
	base_value: z.number(),
	proficiency: z.boolean().optional(),
	expertise: z.boolean().optional(),
	disadvantage: z.boolean().optional(),
})

const dnd = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/dnd' }),
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
			strength: skill,
			dexterity: skill,
			constitution: skill,
			intelligence: skill,
			wisdom: skill,
			charisma: skill,
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

		skills: z.object({
			acrobatics: skill,
			animal_handling: skill,
			arcana: skill,
			athletics: skill,
			deception: skill,
			history: skill,
			insight: skill,
			intimidation: skill,
			investigation: skill,
			medicine: skill,
			nature: skill,
			perception: skill,
			performance: skill,
			persuasion: skill,
			religion: skill,
			sleight_of_hand: skill,
			stealth: skill,
			survival: skill,
		}),

		background: z
			.object({
				title: z.string(),
				feature: z.string(),
				description: z.string(),
			})
			.optional(),

		characteristics: z
			.object({
				alignment: z.string().optional(),
				gender: z.string().optional(),
				eyes: z.string().optional(),
				size: z.string().optional(),
				race: z.string().optional(),
				hair: z.string().optional(),
				height: z.string().optional(),
				weight: z.string().optional(),
				personality_traits: z.string().optional(),
				ideals: z.string().optional(),
				bonds: z.string().optional(),
				flaws: z.string().optional(),
			})
			.optional(),
	}),
})

export const collections = { blog, dnd }
