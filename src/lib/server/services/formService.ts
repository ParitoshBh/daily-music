import { formSchema } from "../schemas/formSchema";

type ValidatedFormData = {
    name: string;
    band: string;
    title: string;
    url: string;
};

export function validateForm(data: FormData): ValidatedFormData {
	return formSchema.parse({
		name: data.get('name'),
		band: data.get('band'),
		title: data.get('title'),
		url: data.get('url')
	});
}