<script>
	let showMenu = false;
	import Logo from '../assets/svgs/Logo.svg';

	function toggleNavbar() {
		showMenu = !showMenu;
	}

	function closeMenu() {
		showMenu = false;
	}
</script>

<nav class="sticky top-0 z-50 bg-white shadow-lg">
	<div class="container p-4 mx-auto md:flex md:justify-between md:items-center">
		<div class="flex items-center justify-between">
			<img src={Logo} alt="hawks logo" class="w-28" />
			<a
				class="text-xl font-bold text-gray-800 md:text-2xl hover:text-red-800 invisible lg:visible"
				href="/"
				>Joshua Hawks
			</a>
			<!-- Mobile menu button -->
			<div on:click={toggleNavbar} class="flex md:hidden" on:keyup={toggleNavbar}>
				<button
					type="button"
					class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</div>

		<div
			class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 items-end {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<a on:click={closeMenu} class="text-gray-800 hover:text-red-800 scroll" href="#about">About</a
			>
			<a on:click={closeMenu} class="text-gray-800 hover:text-red-800 scroll" href="#projects"
				>Projects</a
			>
			<a on:click={closeMenu} class="text-gray-800 hover:text-red-800 scroll" href="#skills"
				>Skills</a
			>
			<a on:click={closeMenu} class="text-gray-800 hover:text-red-800 scroll" href="#connect"
				>Connect</a
			>
			<a
				class="text-gray-800 hover:text-red-800"
				href="https://medium.com/@jdhawks"
				target="_blank"
				rel="noopener noreferrer"
				on:click={closeMenu}>Blog</a
			>
			<a
				class="px-4 py-2 ml-4 text-sm text-white bg-red-800 rounded-lg hover:bg-red-700"
				href="https://drive.google.com/file/d/10OFKv_3F9LljCaa07hSS66DRZbxY52Et/view?usp=sharing"
				target="_blank"
				rel="noopener noreferrer"
				on:click={closeMenu}>Resume</a
			>
		</div>
	</div>
</nav>

<style>
	a {
		transition: all 0.3s ease-in-out;
	}

	a:hover {
		transform: translateY(-2px);
	}
</style>
