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

<title>Experience</title>

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
