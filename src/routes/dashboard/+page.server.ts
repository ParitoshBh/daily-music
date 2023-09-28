import { supabase } from '$lib/server/database/connection';
import { validateForm } from '$lib/server/services/formService';
import { fail, type Actions } from '@sveltejs/kit';
import { ZodError } from 'zod';
import { requireUserId } from '../../utils/auth';

export const actions = {
	default: async ({ request, locals }) => {
		const data = await request.formData();
		const userId = requireUserId(false, locals.user);

		try {
			const validatedFormData = validateForm(data);
			await supabase.from('suggestions')
				.insert({
					user_id: userId,
					name: validatedFormData.name,
					band: validatedFormData.band,
					title: validatedFormData.title,
					url: validatedFormData.url,
				})
				.throwOnError();
		} catch (error) {
			if (error instanceof ZodError) {
				return fail(400, {
					flashMessage: undefined,
					fieldErrors: error.flatten().fieldErrors
				});
			}

			console.log(error);
			return fail(400, {
				flashMessage: {
					type: 'error',
					message: 'There was an error submitting your suggestion.'
				},
				fieldErrors: undefined
			});
		}

		return {
			flashMessage: {
				type: 'success',
				message: 'Your music suggestion has been submitted. Thank you!'
			}
		};
	}
} satisfies Actions;