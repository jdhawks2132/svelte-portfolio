<script>
	import ExternalLink from './ExternalLink.svelte';

	let { project } = $props();
</script>

<article class="group">
	<div
		class="mb-3.5 aspect-16/10 overflow-hidden rounded-lg border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900"
	>
		<img
			src={project.image}
			alt="{project.title} screenshot"
			loading="lazy"
			class="h-full w-full object-cover object-top transition-opacity group-hover:opacity-85"
		/>
	</div>
	<h3 class="mb-1 font-semibold">{project.title}</h3>
	<p class="text-[15px] text-stone-600 dark:text-stone-300">{project.description}</p>
	<p class="mt-2 text-[13px] text-stone-500 dark:text-stone-400">{project.tags.join(' · ')}</p>
	<div class="mt-2.5 flex gap-4 text-sm font-medium text-teal-700 dark:text-teal-300">
		{#if project.demo}
			<ExternalLink class="hover:underline" href={project.demo} label="for {project.title}"
				>Live site</ExternalLink
			>
		{/if}
		<ExternalLink class="hover:underline" href={project.github} label="for {project.title}"
			>Code</ExternalLink
		>
	</div>
</article>
