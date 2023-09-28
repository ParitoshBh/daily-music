import { redirect } from '@sveltejs/kit';
import type { AuthUser } from '@supabase/supabase-js';

export function requireUserId(redirectIfLoggedIn: boolean, user?: AuthUser): string {
	if (!user) {
		throw redirect(302, '/login');
	}

	if (user && redirectIfLoggedIn) {
		throw redirect(302, '/dashboard');
	}

	return user.id.toString();
}

export function getUserId(user?: AuthUser): string | undefined {
	return user?.id.toString();
}