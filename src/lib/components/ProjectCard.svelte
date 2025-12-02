<script>
	export let project;
</script>

<div
	class="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-cyan-500/10 backdrop-blur"
>
	<div class="aspect-video overflow-hidden bg-slate-800">
		<img
			src={project.image}
			alt={project.title}
			class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
		/>
	</div>
	<div class="flex flex-col w-full flex-1 p-6 space-y-3">
		<div class="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-cyan-200/80">
			<span class="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
			Featured build
		</div>
		<h2 class="text-2xl font-semibold text-white">{project.title}</h2>
		<p class="text-slate-300">{project.description}</p>
		<div class="flex flex-row flex-wrap items-center gap-2 w-full mt-2">
			{#each project.tags as tag}
				<span class="px-3 py-1 text-sm text-slate-100 bg-white/5 border border-white/10 rounded-full">
					{tag}
				</span>
			{/each}
		</div>
		<div class="flex flex-row items-center gap-3 w-full pt-3 mt-auto">
			<a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-gray-700 bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-400 rounded-full shadow-lg shadow-cyan-500/20 hover:from-cyan-200 hover:to-emerald-200"
				>GitHub</a
			>
			{#if project.demo}
				<a
					href={project.demo}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-cyan-100 border border-white/15 bg-white/5 rounded-full hover:border-cyan-300/60"
					>Live Site</a
				>
			{/if}
		</div>
	</div>
</div>
