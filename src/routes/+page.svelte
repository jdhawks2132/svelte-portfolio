<script>
	import Headshot from '$lib/assets/Josh.jpeg';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import { experience, projects, socials } from '$lib/data/content.js';
</script>

<svelte:head>
	<title>Joshua Hawks</title>
	<meta
		name="description"
		content="Joshua Hawks, senior full-stack developer at the Texas School Safety Center in Dallas."
	/>
</svelte:head>

<header class="pb-16 pt-16 sm:pt-24">
	<img src={Headshot} alt="" class="mb-7 size-18 rounded-full object-cover" />
	<h1 class="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">Joshua Hawks</h1>
	<p class="max-w-[60ch] text-lg text-stone-600 dark:text-stone-300">
		Senior full-stack developer at the Texas School Safety Center, based in Dallas. I mostly work in
		Ruby on Rails and React, with some Svelte and Node on the side.
	</p>
	<div class="mt-7 flex gap-6 text-[15px] font-medium">
		{#each socials as social (social.href)}
			<ExternalLink
				href={social.href}
				arrow={false}
				class="border-b border-stone-300 pb-0.5 transition-colors hover:border-teal-600 dark:border-stone-700 dark:hover:border-teal-300"
				>{social.label}</ExternalLink
			>
		{/each}
	</div>
</header>

<section id="experience" class="border-t border-stone-200 py-14 dark:border-stone-800">
	<SectionHeader title="Experience" />
	<div class="space-y-10">
		{#each experience as job (job.title)}
			<div class="grid gap-x-6 gap-y-1 sm:grid-cols-[140px_1fr]">
				<p class="pt-0.5 text-sm tabular-nums text-stone-500 dark:text-stone-400">{job.dates}</p>
				<div>
					<h3 class="font-semibold">{job.title}</h3>
					<p class="text-stone-600 dark:text-stone-300">{job.org}</p>
					<ul
						class="mt-3 list-disc space-y-1.5 pl-[18px] text-stone-600 marker:text-stone-400 dark:text-stone-300 dark:marker:text-stone-600"
					>
						{#each job.points as point (point)}
							<li>{point}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>

<section id="work" class="border-t border-stone-200 py-14 dark:border-stone-800">
	<SectionHeader title="Side projects" />
	<div class="grid gap-x-7 gap-y-10 sm:grid-cols-2">
		{#each projects as project (project.title)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<section id="about" class="border-t border-stone-200 py-14 dark:border-stone-800">
	<SectionHeader title="About" />
	<div class="max-w-[62ch] space-y-4 text-stone-600 dark:text-stone-300">
		<p>I was a band director before I moved into software in 2022.</p>
		<p>
			I still play oboe and bassoon as a freelance musician, do a little design, and get outdoors
			when I can.
		</p>
	</div>
	<dl class="mt-8 grid gap-x-6 gap-y-1 text-[15px] sm:grid-cols-[140px_1fr] sm:gap-y-2.5">
		<dt class="text-stone-500 dark:text-stone-400">Usually with</dt>
		<dd class="mb-3 text-stone-600 dark:text-stone-300 sm:mb-0">
			Ruby on Rails, React, SvelteKit, Next.js, Node, PostgreSQL / MySQL, Tailwind
		</dd>
		<dt class="text-stone-500 dark:text-stone-400">Also</dt>
		<dd class="mb-3 text-stone-600 dark:text-stone-300 sm:mb-0">
			Sidekiq &amp; Redis, Ansible, NGINX, RHEL, Git, Adobe CC
		</dd>
		<dt class="text-stone-500 dark:text-stone-400">Education</dt>
		<dd class="text-stone-600 dark:text-stone-300">B.S., Texas A&amp;M University–Commerce</dd>
	</dl>
</section>
