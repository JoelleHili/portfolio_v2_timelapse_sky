<script>
	let { data } = $props();

    $effect(() => {
		document.body.dataset.theme = 'Night';
	});
</script>

<h1>{data.poemData.title}</h1>
<h2>Theme: {data.poemData.theme}</h2>
{@html data.poemData.poem}