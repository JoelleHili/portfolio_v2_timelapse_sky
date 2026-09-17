<script lang=ts>
	import { onMount } from 'svelte';

	let { data } = $props();

	let title: HTMLHeadingElement;

	onMount(() => title.scrollIntoView())
	
    $effect(() => {
		document.body.dataset.theme = 'Night';
	});
</script>

<h1 bind:this={title}>{data.poemData.title}</h1>
<h2>Theme: {data.poemData.theme}</h2>
{@html data.poemData.poem}