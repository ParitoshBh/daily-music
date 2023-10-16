<script lang="ts">
	import { enhance } from '$app/forms';
	import {
		Card,
		Button,
		Label,
		Input,
		Alert,
		Helper
	} from 'flowbite-svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<!-- Success alert -->
{#if form?.flashMessage}
	<Alert border color={form.flashMessage.type === "error" ? "red" : "green"} class="py-4 px-4 mx-auto max-w-2xl mt-4">
		{form.flashMessage.message}
	</Alert>
{/if}

<Card class="py-8 px-4 mx-auto max-w-2xl mt-4">
	<form method="post" use:enhance>
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			<div class="sm:col-span-2">
				<Label for="name" class="mb-2">Your Name</Label>
				<Input
					color={form?.fieldErrors?.name ? 'red' : undefined}
					type="text"
					name="name"
					required
				/>
				{#if form?.fieldErrors?.name}
					<Helper color="red">{form?.fieldErrors?.name}</Helper>
				{/if}
			</div>
			<div class="sm:col-span-2">
				<Label for="band" class="mb-2">Band</Label>
				<Input
					color={form?.fieldErrors?.band ? 'red' : undefined}				
					type="text"
					name="band"
					required
				/>
				{#if form?.fieldErrors?.band}
					<Helper color="red">{form?.fieldErrors?.band}</Helper>
				{/if}
			</div>
			<div class="sm:col-span-2">
				<Label for="title" class="mb-2">Title</Label>
				<Input
					color={form?.fieldErrors?.title ? 'red' : undefined}
					type="text"
					name="title"
				/>
				{#if form?.fieldErrors?.title}
					<Helper color="red">{form?.fieldErrors?.title}</Helper>
				{/if}
			</div>
			<div class="sm:col-span-2">
				<Label for="url" class="mb-2">URL</Label>
				<Input
					color={form?.fieldErrors?.url ? 'red' : undefined}
					type="text"
					name="url"
				/>
				{#if form?.fieldErrors?.url}
					<Helper color="red">{form?.fieldErrors?.url}</Helper>
				{/if}
			</div>
		</div>
		<Button type="submit" class="w-full mt-6">Submit</Button>
	</form>
</Card>