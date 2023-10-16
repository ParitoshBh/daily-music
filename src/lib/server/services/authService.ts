import { UserNotFoundException } from "../../../exceptions/auth";
import { loginFormSchema } from '../schemas/authSchema';
import { supabase } from '../database/connection';

export async function loginUser(credentials: FormData) {
	const validatedData = loginFormSchema.parse({
		email: credentials.get('email'),
		password: credentials.get('password')
	});
	const { data, error } = await supabase.auth.signInWithPassword({
		email: validatedData.email,
		password: validatedData.password,
	});
	
	if (error) {
		throw new UserNotFoundException(error.message);
	}

	return data.session.user;
}