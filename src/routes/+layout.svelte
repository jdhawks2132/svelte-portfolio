<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/navbar.svelte';
	import Transition from '$lib/transition.svelte';
</script>

<!-- make the navbar sticky -->
<Navbar />

<main class="bg-gray-100 px-4 lg:px-10">
	<Transition url={$page.url}>
		<slot />
	</Transition>
</main>
