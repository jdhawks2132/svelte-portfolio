<script>
	import '../app.css';
	import Navbar from '$lib/navbar.svelte';
</script>

<Navbar />

<main class="bg-gray-100 px-10">
	<slot />
</main>
