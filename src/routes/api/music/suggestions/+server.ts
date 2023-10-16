import * as formService from '$lib/server/services/formService.js';
import * as suggestionService from '$lib/server/services/suggestionService';
import { json } from '@sveltejs/kit';

export async function GET({ url }) {
	const formId = url.searchParams.get('form-id') ?? '';
	const form = await formService.validateAccessId(formId);
	const suggestions = await suggestionService.getSuggestionsByForm(form.id);
	return json(suggestions);
}