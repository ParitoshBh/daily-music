import { z } from 'zod';

export const loginFormSchema = z.object({
	email: z.string().trim().email('Must be a valid email address'),
	password: z.string().trim().min(8, 'Must be of at-least 8 characters')
});