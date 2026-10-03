<script>
	import { fade } from 'svelte/transition';

	let { url, children } = $props();
</script>

{#key url}
	<div in:fade>
		{@render children()}
	</div>
{/key}
