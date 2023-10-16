import { InvalidFormException } from "../../../exceptions/form";
import { FormCreationFailedException } from "../../../exceptions/form";
import { supabase } from "../database/connection";
import { formSchema } from "../schemas/formSchema";

type ValidatedFormData = {
    name: string;
    band: string;
    title: string;
    url: string;
};

type NewForm = {
	id: string;
	url: string;
}

export function validateForm(data: FormData): ValidatedFormData {
	return formSchema.parse({
		name: data.get('name'),
		band: data.get('band'),
		title: data.get('title'),
		url: data.get('url')
	});
}

export async function create(name: string, userId: string): Promise<NewForm> {
	const { data } = await supabase.from('forms')
		.insert({
			name: name,
			user_id: userId,
		})
		.select()
		.throwOnError();
	const formId = data?.pop()?.access_id;
	if (!formId) {
		throw new FormCreationFailedException('Failed to retrieve access_id');
	}
	
	return {
		id: formId,
		url: `https://daily-music.vercel.app/form/${formId}`
	};
}

export async function validateAccessId(accessId?: string) {
	if (accessId) {
		const { data, error } = await supabase.from('forms')
        	.select()
        	.eq('access_id', accessId);
		if (data?.length === 0 || error) {
			throw new InvalidFormException('Invalid form');
		}
		return data[0];		
	}
	throw new InvalidFormException('Form access id is invalid');
}