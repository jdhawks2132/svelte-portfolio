<script>
	export let project;
</script>

<div
	class="flex flex-col items-center justify-center text-center w-full  lg:w-1/3 p-4 my-5 mx-auto md:mx-5 bg-white rounded-lg shadow-lg "
>
	<img src={project.image} alt={project.title} class="w-2/3 rounded-lg shadow-lg" />
	<div class="flex flex-col items-center justify-center w-full h-full mt-4">
		<h2 class="text-2xl font-bold text-gray-800">{project.title}</h2>
		<p class="mt-2 text-gray-600">{project.description}</p>
		<div class="flex flex-row flex-wrap items-center justify-center w-full mt-4">
			{#each project.tags as tag}
				<span class="px-2 py-1 mr-2 mt-2 text-sm text-gray-800 bg-gray-200 rounded-lg">{tag}</span>
			{/each}
		</div>
		<div class="flex flex-row items-center justify-center w-full mt-4">
			<a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
				class="w-28 px-4 py-2 text-sm text-white bg-red-800 rounded-lg hover:bg-red-700">Github</a
			>
			<a
				href={project.demo}
				target="_blank"
				rel="noopener noreferrer"
				class="w-28 px-4 py-2 ml-4 text-sm text-white bg-red-800 rounded-lg hover:bg-red-700"
				>Live Site</a
			>
		</div>
	</div>
</div>
