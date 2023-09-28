export const load = ({ locals }) => {
	return {
		user: locals.user,
		flashMessage: locals.flashMessage
	};
};
