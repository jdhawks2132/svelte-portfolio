<script>
	export let label;
	export let title;
	export let className = '';
</script>

<div class={`flex items-center justify-between gap-4 mb-10 ${className}`}>
	<div>
		<p class="text-xs uppercase tracking-[0.3em] text-cyan-200/80">{label}</p>
		<h2 class="text-3xl md:text-4xl font-semibold text-white">{title}</h2>
	</div>
	<div class="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
</div>
