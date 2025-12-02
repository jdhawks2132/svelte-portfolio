<script>
	import Headshot from '../assets/Josh.jpeg';
	import ProjectCard from '$lib/projectCard.svelte';
	import SkillCard from '$lib/skillCard.svelte';
	import GitHub from '../assets/svgs/github.svg';
	import LinkedIn from '../assets/svgs/linkedin.svg';
	import Email from '../assets/svgs/email.svg';

	const heroStack = [
		'Ruby on Rails',
		'React',
		'Next.js',
		'SvelteKit',
		'Node',
		'PostgreSQL',
		'Tailwind'
	];

	const projects = [
		{
			title: 'Bassoon Guru',
			image: 'https://github.com/jdhawks2132/bassoonguru/blob/main/bassoonGuru.jpg?raw=true',
			tags: ['React', 'Ruby on Rails', 'PostgreSQL'],
			description:
				'A practice companion for bassoonists to work on fundamentals and keep track of repertoire.',
			github: 'https://github.com/jdhawks2132/bassoonguru',
			demo: null
		},
		{
			title: 'Thunder Kitties Website',
			image:
				'https://github.com/jdhawks2132/tk-web/blob/main/static/images/tk_screenshot.png?raw=true',
			tags: ['Next.js', 'Tailwind CSS'],
			description:
				'A simple site for a Dallas softball club, with team info and league details.',
			github: 'https://github.com/jdhawks2132/tk-web',
			demo: 'https://www.thunderkitties.com/'
		},
		{
			title: 'Escapade',
			image:
				'https://github.com/jdhawks2132/escapade-mern/blob/main/frontend/src/assets/images/Escapade-Screenshot.jpg?raw=true',
			tags: ['React', 'Node', 'Express', 'MongoDB'],
			description:
				'A MERN travel app for planning South American trips and saving itineraries.',
			github: 'https://github.com/jdhawks2132/escapade-mern',
			demo: null
		},
		{
			title: 'Vendor Management System',
			image:
				'https://github.com/jdhawks2132/mqvc/raw/main/client/src/assets/images/screenshots/dashboard.png?raw=true',
			tags: ['React', 'Ruby on Rails', 'PostgreSQL', 'Tailwind CSS'],
			description:
				'An internal tool for an arts organization to manage vendors, onboarding, and reporting.',
			github: 'https://github.com/jdhawks2132/mqvc',
			demo: null
		},
		{
			title: 'Texas Bassoon Center',
			image:
				'https://github.com/jdhawks2132/tx-bassoon/blob/main/src/lib/assets/images/landing_page.png?raw=true',
			tags: ['Svelte', 'SvelteKit', 'Tailwind CSS'],
			description:
				'A landing page for a boutique bassoon shop in Texas, built with SvelteKit.',
			github: 'https://github.com/jdhawks2132/tx-bassoon',
			demo: 'https://tx-bassoon-center.vercel.app/'
		},
		{
			title: 'Weather-All',
			image: 'https://github.com/jdhawks2132/weatherman/blob/main/assets/weatherall.png?raw=true',
			tags: ['HTML', 'Bootstrap', 'JavaScript'],
			description:
				'A small weather app using OpenWeather to show current conditions for U.S. cities.',
			github: 'https://github.com/jdhawks2132/weatherman',
			demo: 'https://jdhawks2132.github.io/weatherman/'
		}
	];

	const skillGroups = [
		{
			title: 'Front-End',
			skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Svelte', 'Tailwind CSS']
		},
		{
			title: 'Back-End',
			skills: ['Ruby on Rails', 'Node.js', 'Express', 'MySQL / PostgreSQL', 'MongoDB', 'Firebase']
		},
		{
			title: 'Ops & Craft',
			skills: ['Git', 'NGINX', 'Heroku / Vercel / Netlify', 'Linux', 'Adobe CC']
		}
	];

	const socials = [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshuahawks1/', icon: LinkedIn },
		{ label: 'GitHub', href: 'https://github.com/jdhawks2132', icon: GitHub },
		{ label: 'Email', href: 'mailto:jdhawks@gmail.com', icon: Email }
	];
</script>

<svelte:head>
	<title>Joshua Hawks | Full-Stack Engineer</title>
</svelte:head>

<section id="home" class="relative overflow-hidden pt-16 lg:pt-24 pb-12">
	<div
		class="pointer-events-none absolute z-0 hidden lg:block -left-10 top-10 h-72 w-72 bg-cyan-500/25 blur-3xl"
	/>
	<div
		class="pointer-events-none absolute z-0 hidden lg:block right-0 bottom-0 h-72 w-72 bg-emerald-500/15 blur-3xl"
	/>

	<div class="relative max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
		<div class="space-y-8">
			<div
				class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-cyan-200/80"
			>
				<span class="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
				Senior Full-Stack Engineer
			</div>
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-slate-50">
				I build clear, reliable software for the web.
			</h1>
			<p class="text-lg text-slate-300 max-w-2xl">
				I’m a full-stack developer based in Dallas. I like taking products from a rough idea to
				something people actually use. Most days that means Rails, React, Svelte/Next.js, and Node.
				I care about interfaces that make sense, code that’s easy to change, and systems that don’t
				surprise you at 2 a.m.
			</p>
			<div class="flex flex-wrap gap-3">
				{#each heroStack as tech}
					<span
						class="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100"
					>
						{tech}
					</span>
				{/each}
			</div>
			<div class="flex flex-wrap gap-4">
				<a
					href="#projects"
					class="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-400 px-6 py-3 text-slate-950 font-semibold shadow-lg shadow-cyan-500/30 hover:from-cyan-200 hover:to-emerald-200"
				>
					View Projects
				</a>
				<a
					href="#connect"
					class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-slate-100 hover:border-cyan-300/60 hover:text-cyan-100"
				>
					Say Hello
				</a>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
				<div class="rounded-xl border border-white/10 bg-white/5 p-4">
					<p class="text-xs uppercase tracking-[0.2em] text-slate-400">Mission</p>
					<p class="mt-1 text-base text-slate-100">
						Build software that feels steady and dependable.
					</p>
				</div>
				<div class="rounded-xl border border-white/10 bg-white/5 p-4">
					<p class="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</p>
					<p class="mt-1 text-base text-slate-100">
						React and Svelte front-ends backed by Rails and Node.
					</p>
				</div>
				<div class="rounded-xl border border-white/10 bg-white/5 p-4">
					<p class="text-xs uppercase tracking-[0.2em] text-slate-400">Location</p>
					<p class="mt-1 text-base text-slate-100">Dallas, Texas</p>
				</div>
			</div>
		</div>

		<div class="relative">
			<div
				class="absolute -inset-6 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-emerald-500/10 blur-3xl"
			/>
			<div
				class="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-cyan-500/10 backdrop-blur"
			>
				<div class="p-6">
					<div
						class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800"
					>
						<img src={Headshot} alt="Josh Hawks headshot" class="w-full h-full object-cover" />
						<div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
						<div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
							<div>
								<p class="text-xs uppercase tracking-[0.2em] text-slate-300">
									Full-Stack Developer
								</p>
								<p class="text-lg font-semibold text-white">Joshua Hawks</p>
							</div>
							<div class="flex -space-x-2">
								<span
									class="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_12px_3px] shadow-emerald-400/40"
								/>
								<span
									class="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_3px] shadow-cyan-400/40"
								/>
							</div>
						</div>
					</div>
					<div
						class="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
					>
						<p>
							Senior developer at the Texas School Safety Center, working on internal tools and
							public-facing apps that support school safety across Texas.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="about" class="relative max-w-6xl mx-auto py-16 lg:py-20">
	<div class="flex items-center justify-between gap-4 mb-10">
		<div>
			<p class="text-xs uppercase tracking-[0.3em] text-cyan-200/80">About</p>
			<h2 class="text-3xl md:text-4xl font-semibold text-white">
				Collaborative, design-minded engineering
			</h2>
		</div>
		<div class="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
	</div>

	<div class="grid md:grid-cols-[1.1fr_0.9fr] gap-8">
		<div
			class="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8 shadow-xl shadow-cyan-500/10"
		>
			<p class="text-lg text-slate-200 leading-relaxed">
				I work across the stack: planning features with stakeholders, sketching out UI, and building
				the APIs and data models underneath. My background in music and design shapes how I think
				about rhythm and structure, and how small details change the way a product feels to use.
			</p>
			<div class="mt-6 grid sm:grid-cols-2 gap-4">
				<div class="rounded-xl border border-white/10 bg-slate-900/60 p-4">
					<p class="text-xs uppercase tracking-[0.2em] text-slate-400">Toolbox</p>
					<p class="mt-2 text-slate-100">React, SvelteKit, Rails, Node, Postgres, Tailwind.</p>
				</div>
				<div class="rounded-xl border border-white/10 bg-slate-900/60 p-4">
					<p class="text-xs uppercase tracking-[0.2em] text-slate-400">How I work</p>
					<p class="mt-2 text-slate-100">
						Pair often, stay curious, build in small slices, and keep accessibility in view.
					</p>
				</div>
			</div>
		</div>

		<div class="grid gap-4">
			<div
				class="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6"
			>
				<p class="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Currently</p>
				<p class="text-xl font-semibold text-white">
					Senior Full-Stack Developer @ Texas School Safety Center
				</p>
				<p class="mt-3 text-slate-200">
					Building secure, maintainable apps for statewide safety programs, alongside side projects
					that give me room to experiment with new tools and ideas.
				</p>
			</div>
			<div class="rounded-2xl border border-white/10 bg-white/5 p-6">
				<p class="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">Beyond code</p>
				<p class="text-slate-200">
					I’m also a freelance classical musician (oboe &amp; bassoon), occasional designer, and
					outdoors enthusiast. That mix of structure and creativity shows up in how I write code and
					how I collaborate.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="projects" class="relative max-w-6xl mx-auto py-16 lg:py-20">
	<div class="flex items-center justify-between gap-4 mb-10">
		<div>
			<p class="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Projects</p>
			<h2 class="text-3xl md:text-4xl font-semibold text-white">Selected work and side projects</h2>
		</div>
		<div class="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<section id="skills" class="relative max-w-6xl mx-auto py-16 lg:py-20">
	<div class="flex items-center justify-between gap-4 mb-10">
		<div>
			<p class="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Skills</p>
			<h2 class="text-3xl md:text-4xl font-semibold text-white">Skills &amp; tools</h2>
		</div>
		<div class="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
	</div>

	<div class="grid gap-6 md:grid-cols-3">
		{#each skillGroups as skill}
			<SkillCard {skill} />
		{/each}
	</div>
</section>

<section id="connect" class="relative max-w-6xl mx-auto py-16 lg:py-20">
	<div
		class="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-800 p-8 lg:p-12 shadow-2xl shadow-cyan-500/10 overflow-hidden"
	>
		<div class="absolute -right-10 top-10 h-48 w-48 bg-cyan-500/15 blur-3xl" />
		<div class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
			<div class="max-w-xl space-y-3">
				<p class="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Connect</p>
				<h3 class="text-3xl font-semibold text-white">Let’s talk about what you’re building.</h3>
				<p class="text-slate-200">
					If you’re working on something you care about—whether it’s a new UI, an internal tool, or a
					full product—I’d be glad to hear about it. Feel free to reach out with a note about your
					team or project.
				</p>
			</div>

			<div class="flex flex-wrap gap-4">
				{#each socials as social}
					<a
						href={social.href}
						target="_blank"
						rel="noreferrer"
						class="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-slate-100 hover:border-cyan-300/60 hover:text-cyan-100"
					>
						<img
							src={social.icon}
							alt={social.label}
							class="h-6 w-6 invert brightness-200 contrast-200 drop-shadow"
						/>
						<span class="font-semibold">{social.label}</span>
						<span class="text-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity">→</span
						>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>
