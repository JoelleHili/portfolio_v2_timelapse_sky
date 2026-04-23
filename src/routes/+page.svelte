<script>
	let { data } = $props();

	$effect(() => {
		document.body.dataset.theme = 'Morning';
	});
</script>

<title>About Me</title>

<section class="about">
	<h1>{data.title}</h1>
	<h2>{data.subtitle}</h2>
	<p>{@html data.description}</p>
</section>

<style scoped>
	.about {
		width: clamp(320px, 75dvw, 2000px);
	}
</style>
