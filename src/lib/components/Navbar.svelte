<script>
	let showMenu = false;
	import Logo from '$lib/assets/svgs/Logo.svg';

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	function closeMenu() {
		showMenu = false;
	}
</script>

<nav class="sticky top-0 z-50 bg-[#0b1120]/90 backdrop-blur-md border-b border-white/5">
	<div class="max-w-6xl p-4 mx-auto md:flex md:justify-between md:items-center">
		<div class="flex items-center justify-between">
			<img src={Logo} alt="hawks logo" class="w-28" />
			<a
				class="text-xl font-semibold text-slate-100 md:text-2xl tracking-tight invisible lg:visible"
				href="/"
				>Joshua Hawks
			</a>
			<!-- Mobile menu button -->
			<button
				type="button"
				class="flex md:hidden text-slate-200 hover:text-cyan-300 focus:outline-none focus:text-cyan-300"
				on:click={toggleNavbar}
				aria-expanded={showMenu}
				aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
			>
				{#if showMenu}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>

		<div
			class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 items-end"
			class:flex={showMenu}
			class:hidden={!showMenu}
		>
			<a on:click={closeMenu} class="text-slate-200 hover:text-cyan-300 scroll" href="#about">About</a
			>
			<a on:click={closeMenu} class="text-slate-200 hover:text-cyan-300 scroll" href="#projects"
				>Projects</a
			>
			<a on:click={closeMenu} class="text-slate-200 hover:text-cyan-300 scroll" href="#skills"
				>Skills</a
			>
			<a on:click={closeMenu} class="text-slate-200 hover:text-cyan-300 scroll" href="#connect"
				>Connect</a
			>
			<a
				class="text-slate-200 hover:text-cyan-300"
				href="https://medium.com/@jdhawks"
				target="_blank"
				rel="noopener noreferrer"
				on:click={closeMenu}>Blog</a
			>
			<a
				class="px-4 py-2 ml-4 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-400 rounded-full shadow-lg shadow-cyan-500/20 hover:from-cyan-200 hover:to-emerald-200"
				href="https://drive.google.com/file/d/1msmkGZ-lVzvyzMs0KOKo18N22L9iGYHq/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
				on:click={closeMenu}>Resume</a
			>
		</div>
	</div>
</nav>

<style>
	a {
		transition: all 0.25s ease-in-out;
	}

	a:hover {
		transform: translateY(-1px);
	}
</style>
