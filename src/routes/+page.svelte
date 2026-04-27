<script>
	import { getGestureType } from '../helper/touchHandler.ts';
	import { goto } from '$app/navigation';

	let { data } = $props();

	let scrollStartY = $state();
	let scrollEndY = $state();
	let scrollType = $derived(getGestureType(scrollStartY, scrollEndY));

	$effect(() => {
		document.body.dataset.theme = 'Morning';
	});

	$effect(() => {
		console.log(scrollType);

		switch(scrollType){
			case "swipeUp": goto('/experience'); break;
			case "swipeDown": break;
			default: break;
		}
	})
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<title>Joelle Hili | A Frontend Dev</title>
	<meta
		name="description"
		content="Learn more about Joelle Hili, her background, interests, and personal journey."
	/>
	<meta name="author" content="Joelle Hili" />
	<link rel="canonical" href="https://joellehili.com/" />

	<meta property="og:title" content="About Me | Joelle Hili" />
	<meta
		property="og:description"
		content="Learn more about Joelle Hili, her background, interests, and personal journey."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://joellehili.com/" />
	<meta property="og:image" content="https://joellehili.com/about-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="About Me | Joelle Hili" />
	<meta
		name="twitter:description"
		content="Learn more about Joelle Hili, her background, interests, and personal journey."
	/>
	<meta name="twitter:image" content="https://joellehili.com/about-preview.png" />

	<meta name="theme-color" content="#468189" />
</svelte:head>

<section
	class="about"
	role="application"
	ontouchstart={(e) => (scrollStartY = e.changedTouches[0].screenY)}
	ontouchend={(e) => (scrollEndY = e.changedTouches[0].screenY)}
>
	<h1>{data.title}</h1>
	<h2>{data.subtitle}</h2>
	<p>{@html data.description}</p>
</section>

<style scoped>
	.about {
		width: clamp(320px, 75dvw, 2000px);
	}
</style>
