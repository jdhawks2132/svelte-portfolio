import bassoonGuru from '$lib/assets/projects/bassoon-guru.jpg';
import thunderKitties from '$lib/assets/projects/thunder-kitties.jpg';
import escapade from '$lib/assets/projects/escapade.jpg';
import vendorManagement from '$lib/assets/projects/vendor-management.jpg';
import txBassoon from '$lib/assets/projects/tx-bassoon.jpg';
import weatherAll from '$lib/assets/projects/weather-all.jpg';

export const socials = [
	{ label: 'GitHub', href: 'https://github.com/jdhawks2132' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshuahawks1/' }
];

export const experience = [
	{
		dates: '2024 — Now',
		title: 'Senior Full-Stack Developer',
		org: 'Texas School Safety Center',
		points: [
			'Building a communications app as the sole developer, end to end.',
			"Build and maintain the Center's internal and public web apps.",
			'Moving older apps over to Rails and React.',
			'Manage the production and QA servers and deployments.'
		]
	},
	{
		dates: '2022 — 2024',
		title: 'Full-Stack Developer',
		org: 'Texas School Safety Center',
		points: [
			'Worked on the Emergency Operations Plan review app (Rails, React, Sidekiq, Redis), launched in 2023.',
			'Built a Rails API used for event registration, site search, and two state registries.',
			'Set up QA environments for our apps, automated with Ansible.'
		]
	},
	{
		dates: '2022 — 2023',
		title: 'Teaching Assistant',
		org: 'Washington University Coding Bootcamp',
		points: ['Helped students through a 25-week MERN bootcamp: projects, Git, and planning.']
	}
];

export const projects = [
	{
		title: 'Bassoon Guru',
		image: bassoonGuru,
		tags: ['React', 'Ruby on Rails', 'PostgreSQL'],
		description:
			'A practice companion for bassoonists to work on fundamentals and keep track of repertoire.',
		github: 'https://github.com/jdhawks2132/bassoonguru',
		demo: null
	},
	{
		title: 'Thunder Kitties Website',
		image: thunderKitties,
		tags: ['Next.js', 'Tailwind CSS'],
		description: 'A simple site for a Dallas softball club, with team info and league details.',
		github: 'https://github.com/jdhawks2132/tk-web',
		demo: 'https://www.thunderkitties.com/'
	},
	{
		title: 'Escapade',
		image: escapade,
		tags: ['React', 'Node', 'Express', 'MongoDB'],
		description: 'A MERN travel app for planning South American trips and saving itineraries.',
		github: 'https://github.com/jdhawks2132/escapade-mern',
		demo: null
	},
	{
		title: 'Vendor Management System',
		image: vendorManagement,
		tags: ['React', 'Ruby on Rails', 'PostgreSQL', 'Tailwind CSS'],
		description:
			'An internal tool for an arts organization to manage vendors, onboarding, and reporting.',
		github: 'https://github.com/jdhawks2132/mqvc',
		demo: null
	},
	{
		title: 'Texas Bassoon Center',
		image: txBassoon,
		tags: ['Svelte', 'SvelteKit', 'Tailwind CSS'],
		description: 'A landing page for a boutique bassoon shop in Texas, built with SvelteKit.',
		github: 'https://github.com/jdhawks2132/tx-bassoon',
		demo: 'https://tx-bassoon-center.vercel.app/'
	},
	{
		title: 'Weather-All',
		image: weatherAll,
		tags: ['HTML', 'Bootstrap', 'JavaScript'],
		description:
			'A small weather app using OpenWeather to show current conditions for U.S. cities.',
		github: 'https://github.com/jdhawks2132/weatherman',
		demo: 'https://jdhawks2132.github.io/weatherman/'
	}
];
