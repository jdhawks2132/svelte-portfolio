<script>
	export let skill;
</script>

<div
	class="flex flex-col items-center justify-center text-center w-4/5 lg:w-1/3 p-2 my-5 mx-auto md:mx-5 bg-white rounded-lg shadow-lg"
>
	<h2 class="text-2xl font-bold text-red-800">{skill.title}</h2>
	<div class="flex flex-col items-center justify-center w-full h-full mt-1">
		<ul class="flex flex-col items-center justify-center w-full h-full mt-1">
			{#each skill.skills as skill}
				<li class="mb-2 text-gray-600">{skill}</li>
			{/each}
		</ul>
	</div>
</div>
