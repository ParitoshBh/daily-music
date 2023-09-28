// See https://kit.svelte.dev/docs/types#app

import type { AuthUser } from '@supabase/supabase-js';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: AuthUser;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
