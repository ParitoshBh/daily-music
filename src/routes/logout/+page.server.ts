import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/server/database/connection';

export const actions = {
	default: async () => {
		try {
			await supabase.auth.signOut();
		} catch (error) {
			throw redirect(302, '/dashboard');
		}

		throw redirect(302, '/login');
	}
} satisfies Actions;
