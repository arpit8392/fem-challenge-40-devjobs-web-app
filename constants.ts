import * as z from 'zod'

export const formSchema = z.object({
	term: z.string().optional(),
	location: z.string().optional(),
	role: z.boolean().default(false),
})
