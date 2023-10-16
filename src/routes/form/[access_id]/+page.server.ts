import { supabase } from '$lib/server/database/connection.js';
import * as formService from '$lib/server/services/formService';
import { fail, type Actions } from '@sveltejs/kit';
import { ZodError } from 'zod';

export const load = async ({ params }) => {
    await formService.validateAccessId(params.access_id);
};

export const actions = {
	default: async ({ request, params }) => {
		const data = await request.formData();
        const form = await formService.validateAccessId(params.access_id);

		try {
			const validatedFormData = formService.validateForm(data);
			await supabase.from('suggestions')
				.insert({
                    form_id: form.id,
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