import { supabase } from '$lib/server/database/connection';
import * as authService from '$lib/server/services/authService';
import type { Handle, HandleServerError } from '@sveltejs/kit';
import { UserNotAllowedException } from './exceptions/auth';

export const handle = (async ({ event, resolve }) => {
	// authenticate api request
	if (event.url.pathname.startsWith('/api')) {
		const authorizationHeader = event.request.headers.get('authorization');
		const base64Credentials = authorizationHeader?.split(' ')[1] ?? '';
		const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
		const [email, password] = credentials.split(':');

		const formData = new FormData();
		formData.set('email', email);
		formData.set('password', password);
		const user = await authService.loginUser(formData);
		if (!user.user_metadata?.is_admin) {
			throw new UserNotAllowedException('User does not have admin privilage');
		}
	}

	const { data: { session } } = await supabase.auth.getSession();
	if (session?.user) {
		event.locals.user = session.user;
	} 

	const response = await resolve(event);
	return response;
}) satisfies Handle;

export const handleError: HandleServerError = async ({ error }) => {
	console.log(error);
	let message = 'Whoops! Something went wrong.';
	if (error instanceof Error) {
		message = error.message;
	}
	return { message };
};