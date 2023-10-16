import * as formService from '$lib/server/services/formService';
import { json } from '@sveltejs/kit';
import { requireUserId } from '../../../../utils/auth.js';

export async function POST({ request, locals }) {
    const { name } = await request.json();
    const userId = requireUserId(false, locals.user);

    const newForm = await formService.create(name, userId);
	return json(newForm);
}