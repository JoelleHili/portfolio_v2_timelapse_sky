<script lang="ts">
	import Tabs from '../../components/Tabs/tabs.svelte';

	let { data } = $props();

	interface IExperience {
		companyName: string;
		role: string;
		description: string;
		dateRange: string;
	}

	interface IExperienceData {
		experienceData: IExperience[];
	}

	$effect(() => {
		document.body.dataset.theme = 'Noon';
	});

	let dates = data.experienceData.map((x) => x.dateRange);

	let selectedDate = $state(data.experienceData[0].dateRange);
	let selectedJob = $derived(data.experienceData.find((x) => x.dateRange === selectedDate));
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<title>Experience | Joelle Hili</title>
	<meta name="description" content="Explore the professional experience, roles, and work history of Joelle Hili." />
	<meta name="author" content="Joelle Hili" />
	<link rel="canonical" href="https://joellehili.com/experience" />

	<meta property="og:title" content="Experience | Joelle Hili" />
	<meta property="og:description" content="Explore the professional experience, roles, and work history of Joelle Hili." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://joellehili.com/experience" />
	<meta property="og:image" content="https://joellehili.com/experience-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Experience | Joelle Hili" />
	<meta name="twitter:description" content="Explore the professional experience, roles, and work history of Joelle Hili." />
	<meta name="twitter:image" content="https://joellehili.com/experience-preview.png" />

	<meta name="theme-color" content="#468189" />
</svelte:head>

<section class="experience">
	<section class="experience__entry">
		{#if selectedJob}
			<h1>{selectedJob.companyName}</h1>
			<h2>{selectedJob.role}</h2>
			<p>{selectedJob.description}</p>
		{/if}
	</section>

	<Tabs bind:selected={selectedDate} range={dates} />
</section>

<style>
	.experience {
		height: 60dvh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	@media only screen and (min-width: 1024px) {
		.experience {
			flex-direction: row-reverse;
			gap: 10dvw;
		}
	}
	.experience__entry {
        padding-right: 10dvw;
		width: clamp(320px, 75dvw, 2000px);
	}
</style>
