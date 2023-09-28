<script lang="ts">
	import type { PageData, ActionData } from './$types';
	import { enhance } from '$app/forms';
	import { Card, Button, Label, Input, A, Heading, Alert } from 'flowbite-svelte';

	export let data: PageData;
	export let form: ActionData;
</script>

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
	<div class="items-center justify-center mb-4">
		<Heading tag="h4">Login</Heading>
	</div>

	<!-- Success alert -->
	{#if data.flashMessage}
		<Alert border color="green" class="mb-4">
			{data.flashMessage.message}
		</Alert>
	{/if}

	<!-- Error alert -->
	{#if form?.error}
		<Alert border color="red" class="mb-4">
			{form.error}
		</Alert>
	{/if}

	<Card class="w-full">
		<form method="post" class="flex flex-col space-y-6" autocomplete="off" use:enhance>
			<Label class="space-y-2">
				<span>Email</span>
				<Input type="email" name="email" required />
			</Label>
			<Label class="space-y-2">
				<span>Password</span>
				<Input type="password" name="password" required />
			</Label>
			<Button type="submit" class="w-full">Login</Button>
		</form>
	</Card>
</div>
