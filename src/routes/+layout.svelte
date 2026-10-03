<script>
	import '../app.css';
	import interLatin from '@fontsource-variable/inter/files/inter-latin-opsz-normal.woff2?url';
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import Transition from '$lib/components/Transition.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preload" href={interLatin} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<a
	href="#content"
	class="sr-only z-[60] rounded-md bg-stone-900 px-3 py-2 text-sm text-stone-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3 dark:bg-stone-100 dark:text-stone-900"
	>Skip to content</a
>

<Navbar />

<main id="content" class="mx-auto max-w-3xl px-5">
	<Transition url={page.url.pathname}>
		{@render children()}
	</Transition>
</main>

<footer class="mx-auto max-w-3xl px-5">
	<p
		class="border-t border-stone-200 py-10 text-[13px] text-stone-500 dark:border-stone-800 dark:text-stone-400"
	>
		© {new Date().getFullYear()} Joshua Hawks
	</p>
</footer>
