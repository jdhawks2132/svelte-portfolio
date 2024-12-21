<script>
	import Laptop from '../assets/svgs/laptop.svg';
	import About from '../assets/svgs/about.svg';
	import Headshot from '../assets/Josh.jpeg';
	import Chevron from '../assets/svgs/chevron.svg';
	import Projects from '../assets/svgs/projects.svg';
	import ProjectCard from '$lib/projectCard.svelte';
	import Skills from '../assets/svgs/skills.svg';
	import SkillCard from '$lib/skillCard.svelte';
	import Connect from '../assets/svgs/connect.svg';
	import GitHub from '../assets/svgs/github.svg';
	import LinkedIn from '../assets/svgs/linkedin.svg';
	import Email from '../assets/svgs/email.svg';
</script>

<title> Joshua Hawks </title>

<section
	id="home"
	class="container mx-auto py-5 lg:py-10 flex flex-col justify-center items-center"
>
	<img
		src={Laptop}
		alt="laptop computer screen reading hi, my name is joshua hawks full-stack developer"
		class="md:w-1/2 w-3/4 lg:mt-10"
	/>

	<h1
		class="flex flex-wrap sm:my-11 my-6 md:text-md lg:text-xl lg:my-11 text-center px-4 text-gray-800"
	>
		Javascript | React | Svelte | Node | Express | Ruby | Rails
	</h1>
	<img src={Chevron} alt="downward chevron" class="mb-10 w-14 lg:w-24 lg:my-10" />
</section>

<section id="about" class="my-10">
	<div class="container mx-auto flex flex-col justify-center items-start ">
		<img src={About} alt="about me" class="w-28 md:w-40 ml-4 " />
	</div>
	<div
		class="mx-auto flex flex-col lg:flex-row bg-white shadow-md rounded-md justify-center items-center my-4 divide-y-4 lg:divide-y-0 lg:divide-x-4 divide-gray-100"
	>
		<div class="flex justify-center items-center w-max lg:w-1/4 ">
			<img src={Headshot} alt="josh hawks headshot" class="w-52 h-52 m-4 shadow-lg rounded-lg" />
		</div>

		<div class="p-1 text-sm sm:text-md md:p-4 xl:text-lg lg:p-6 text-gray-700 text-center w-11/12">
			<p class="mt-4 sm:mt-0 mb-4 ">
				Full-Stack Software Engineer at the <span class="text-red-800 font-semibold"
					>Texas School Safety Center</span
				>, part of Texas State University in San Marcos, TX. With expertise in
				<span class="text-red-800 font-semibold">React</span>
				and <span class="text-red-800 font-semibold">Ruby on Rails</span>, I develop and maintain
				the organization's websites, databases, and applications, ensuring high-quality and
				efficient solutions. My background in
				<span class="text-red-800 font-semibold">music education</span>
				and <span class="text-red-800 font-semibold">graphic design</span> has given me a unique perspective,
				allowing me to approach problem-solving with creativity and precision.
			</p>

			<p class="mb-4">
				In addition to my technical pursuits, I am a freelance classical musician, playing both the
				<span class="text-red-800 font-semibold">oboe</span> and
				<span class="text-red-800 font-semibold">bassoon</span>, as well as a graphic designer.
				Outside of work, I find joy in <span class="text-red-800 font-semibold">hiking</span>,
				<span class="text-red-800 font-semibold">biking</span>, and playing
				<span class="text-red-800 font-semibold">softball</span>, always seeking new ways to
				challenge myself and embrace a balanced lifestyle.
			</p>
		</div>
	</div>
</section>

<section id="projects" class="my-10">
	<div class="container mx-auto flex flex-col justify-center items-end">
		<img src={Projects} alt="projects" class="w-28 md:w-40 mr-4 mb-10" />
	</div>
	<div class="flex flex-col lg:flex-row ">
		<ProjectCard
			project={{
				title: 'Bassoon Guru',
				image: 'https://github.com/jdhawks2132/bassoonguru/blob/main/bassoonGuru.jpg?raw=true',
				tags: ['React', 'Ruby on Rails', 'PostgreSQL'],
				description: 'A web application for bassoonists to practice and improve their skills.',
				github: 'https://github.com/jdhawks2132/bassoonguru',
				demo: null
			}}
		/>
		<ProjectCard
			project={{
				title: 'Thunder Kitties Website',
				image:
					'https://github.com/jdhawks2132/tk-web/blob/main/static/images/tk_screenshot.png?raw=true',
				tags: ['Svelte', 'SvelteKit', 'Tailwind CSS'],
				description: 'Website for the Thunder Kitties, a softball team in Dallas, TX.',
				github: 'https://github.com/jdhawks2132/tk-web',
				demo: 'https://www.thunderkitties.com/'
			}}
		/>
		<ProjectCard
			project={{
				title: 'Escapade',
				image:
					'https://github.com/jdhawks2132/escapade-mern/blob/main/frontend/src/assets/images/Escapade-Screenshot.jpg?raw=true',
				tags: ['React', 'Node', 'Express', 'MongoDB'],
				description: 'South American travel application that targeting adventurous thrill-seekers.',
				github: 'https://github.com/jdhawks2132/escapade-mern',
				demo: null
			}}
		/>
	</div>
	<div class="flex flex-col lg:flex-row ">
		<ProjectCard
			project={{
				title: 'Vendor Management System',
				image:
					'https://github.com/jdhawks2132/mqvc/raw/main/client/src/assets/images/screenshots/dashboard.png?raw=true',
				tags: ['React', 'Ruby on Rails', 'PostgreSQL', 'Tailwind CSS'],
				description: 'Vendor Management System designed for an arts organization.',
				github: 'https://github.com/jdhawks2132/mqvc',
				demo: null
			}}
		/>
		<ProjectCard
			project={{
				title: 'Texas Bassoon Center',
				image:
					'https://github.com/jdhawks2132/tx-bassoon/blob/main/src/lib/assets/images/landing_page.png?raw=true',
				tags: ['Svelte', 'SvelteKit', 'Tailwind CSS'],
				description: 'Landing page for a the Texas Bassoon Center in Dallas, TX.',
				github: 'https://github.com/jdhawks2132/tx-bassoon',
				demo: 'https://tx-bassoon-center.vercel.app/'
			}}
		/>
		<ProjectCard
			project={{
				title: 'Weather-All',
				image: 'https://github.com/jdhawks2132/weatherman/blob/main/assets/weatherall.png?raw=true',
				tags: ['Html', 'Bootstrap', 'JavaScript'],
				description:
					'Weather App that uses Openweather to search US cities and return the current forecast.',
				github: 'https://github.com/jdhawks2132/weatherman',
				demo: 'https://jdhawks2132.github.io/weatherman/'
			}}
		/>
	</div>
</section>

<section id="skills" class="my-10">
	<div class="container mx-auto flex flex-col justify-center items-center">
		<img src={Skills} alt="projects" class="w-20 md:w-24 mb-10" />
	</div>
	<div class="flex flex-col lg:flex-row justify-center items-center">
		<SkillCard
			skill={{
				title: 'Front-End',
				skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Svelte', 'Tailwind CSS']
			}}
		/>
		<SkillCard
			skill={{
				title: 'Back-End',
				skills: ['Ruby on Rails', 'Node.js', 'Express', 'MySQL/ PostgreSQL', 'MongoDB', 'Firebase']
			}}
		/>
		<SkillCard
			skill={{
				title: 'Other',
				skills: [
					'Git',
					'GitHub/ GitLab',
					'NGINX',
					'Heroku / Vercel/ Netlify',
					'Linux (RHEL & Ubuntu)',
					'Adobe Creative Suite'
				]
			}}
		/>
	</div>
</section>

<section id="connect" class="mt-10 flex flex-col justify-center items-center">
	<div class="container mx-auto flex flex-col justify-center items-center">
		<img src={Connect} alt="projects" class="w-52 md:w-64 mb-10" />
	</div>
	<div class="flex justify-around items-end p-5 w-4/5">
		<a href="https://www.linkedin.com/in/joshuahawks1/" target="_blank" rel="noreferrer">
			<img src={LinkedIn} alt="LinkedIn" class="w-12 md:w-24 mb-10" />
		</a>
		<a href="https://github.com/jdhawks2132" target="_blank" rel="noreferrer">
			<img src={GitHub} alt="GitHub" class="w-12 md:w-24 mb-10" />
		</a>
		<a href="mailto:jdhawks@gmail.com">
			<img src={Email} alt="Email" class="w-12 md:w-24 mb-10" />
		</a>
	</div>
</section>
