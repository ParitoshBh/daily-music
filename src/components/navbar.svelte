<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import {
		Avatar,
		Dropdown,
		DropdownItem,
	} from 'flowbite-svelte';

	const email = $page.data.user.email;
</script>

<nav
	class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50"
>
	<div class="flex flex-wrap justify-between items-center">
		<div class="flex justify-start items-center">
			<a href="/dashboard" class="flex items-center justify-between mr-4">
				<span class="self-center text-xl whitespace-nowrap dark:text-white">
					Daily Music
				</span>
			</a>
		</div>
		<div class="flex items-center lg:order-2">
			<button
				type="button"
				class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
				id="user-menu-button"
				aria-expanded="false"
				data-dropdown-toggle="dropdown"
			>
				<span class="sr-only">Open user menu</span>
				<Avatar class="acs">
					<svg class="w-[21px] h-[21px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
						<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
					</svg>	
				</Avatar>
			</button>
			<!-- Dropdown menu -->
			<Dropdown triggeredBy=".acs">
				<div slot="header" class="px-4 py-2">
					<span class="block truncate text-sm font-medium">{ email }</span>
				</div>
				<DropdownItem>
					<form method="post" action="/logout" use:enhance>
						<button>Logout</button>
					</form>					
				</DropdownItem>
			</Dropdown>
		</div>
	</div>
</nav>
