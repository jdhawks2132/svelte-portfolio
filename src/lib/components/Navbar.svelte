<script>
	import ExternalLink from './ExternalLink.svelte';
</script>

<nav class="sticky top-0 z-50 bg-stone-50/85 backdrop-blur-sm dark:bg-stone-950/85">
	<div class="mx-auto flex h-16 max-w-3xl items-center justify-between gap-4 px-5">
		<a href="/" class="font-semibold tracking-tight">Joshua Hawks</a>
		<div class="flex gap-5 text-sm text-stone-500 dark:text-stone-300">
			<a class="hover:text-stone-900 dark:hover:text-stone-100" href="#experience">Experience</a>
			<a class="hover:text-stone-900 dark:hover:text-stone-100" href="#work">Work</a>
			<a class="hidden hover:text-stone-900 sm:inline dark:hover:text-stone-100" href="#about"
				>About</a
			>
			<ExternalLink
				class="hover:text-stone-900 dark:hover:text-stone-100"
				href="https://medium.com/@jdhawks">Blog</ExternalLink
			>
		</div>
	</div>
</nav>
