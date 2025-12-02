<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import Transition from '$lib/components/Transition.svelte';
</script>

<Navbar />

<main class="min-h-screen bg-[#0b1120] text-slate-100 px-4 lg:px-10 overflow-x-hidden">
	<Transition url={$page.url}>
		<slot />
	</Transition>
</main>
