<script>
	export let skill;
</script>

<div
	class="relative flex flex-col items-start justify-center w-full py-8 px-6 rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl shadow-cyan-500/10 backdrop-blur"
>
	<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
	<h2 class="text-2xl font-semibold text-white mb-4">{skill.title}</h2>
	<div class="flex flex-col items-start justify-center w-full h-full">
		<ul class="flex flex-wrap items-center gap-2">
			{#each skill.skills as skill}
				<li class="px-3 py-2 rounded-full text-sm text-slate-100 bg-white/5 border border-white/10">
					{skill}
				</li>
			{/each}
		</ul>
	</div>
</div>
