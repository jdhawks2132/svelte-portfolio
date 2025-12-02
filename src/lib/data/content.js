import GitHub from '$lib/assets/svgs/github.svg';
import LinkedIn from '$lib/assets/svgs/linkedin.svg';
import Email from '$lib/assets/svgs/email.svg';

export const heroStack = [
	'Ruby on Rails',
	'React',
	'Next.js',
	'SvelteKit',
	'Node',
	'PostgreSQL',
	'Tailwind'
];

export const projects = [
	{
		title: 'Bassoon Guru',
		image: 'https://github.com/jdhawks2132/bassoonguru/blob/main/bassoonGuru.jpg?raw=true',
		tags: ['React', 'Ruby on Rails', 'PostgreSQL'],
		description: 'A practice companion for bassoonists to work on fundamentals and keep track of repertoire.',
		github: 'https://github.com/jdhawks2132/bassoonguru',
		demo: null
	},
	{
		title: 'Thunder Kitties Website',
		image: 'https://github.com/jdhawks2132/tk-web/blob/main/static/images/tk_screenshot.png?raw=true',
		tags: ['Next.js', 'Tailwind CSS'],
		description: 'A simple site for a Dallas softball club, with team info and league details.',
		github: 'https://github.com/jdhawks2132/tk-web',
		demo: 'https://www.thunderkitties.com/'
	},
	{
		title: 'Escapade',
		image:
			'https://github.com/jdhawks2132/escapade-mern/blob/main/frontend/src/assets/images/Escapade-Screenshot.jpg?raw=true',
		tags: ['React', 'Node', 'Express', 'MongoDB'],
		description: 'A MERN travel app for planning South American trips and saving itineraries.',
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
		description: 'A landing page for a boutique bassoon shop in Texas, built with SvelteKit.',
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

export const skillGroups = [
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

export const socials = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshuahawks1/', icon: LinkedIn },
	{ label: 'GitHub', href: 'https://github.com/jdhawks2132', icon: GitHub },
	{ label: 'Email', href: 'mailto:jdhawks@gmail.com', icon: Email }
];
