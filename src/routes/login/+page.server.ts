import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { UserNotFoundException } from '../../exceptions/auth';
import { getUserId } from '../../utils/auth';
import * as authService from '$lib/server/services/authService';

export const load = ({ locals }) => {
	const userId = getUserId(locals.user);
	if (userId) {
		throw redirect(302, '/dashboard');
	}

	return {};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		try {
			await authService.loginUser(data);
		} catch (error) {
			if (error instanceof UserNotFoundException) {
				return fail(400, { error: error.message });
			}

			return fail(400, { error: 'Invalid credentials. Please check email and password.' });
		}

		throw redirect(302, '/dashboard');
	}
} satisfies Actions;
