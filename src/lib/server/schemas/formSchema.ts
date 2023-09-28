import { z } from 'zod';

export const formSchema = z.object({
	name: z.string().trim().min(3, 'Must be of at-least 3 characters'),
	band: z.string().trim().min(3, 'Must be of at-least 3 characters'),
	title: z.string().trim().min(3, 'Must be of at-least 3 characters'),
	url: z.string().trim().url('Must be a valid url'),
});