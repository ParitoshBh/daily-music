import { supabase } from '$lib/server/database/connection';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	const { data: { session } } = await supabase.auth.getSession();
	if (session?.user) {
		event.locals.user = session.user;
	} 

	const response = await resolve(event);
	return response;
}) satisfies Handle;
