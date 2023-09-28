// See https://kit.svelte.dev/docs/types#app

import type { AuthUser } from '@supabase/supabase-js';
import type { FlashMessage } from './types/session';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: AuthUser;
			flashMessage?: FlashMessage;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
