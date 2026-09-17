<script>
	let { data } = $props();

    $effect(() => {
		document.body.dataset.theme = 'Night';
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<title>Poetry | Joelle Hili</title>
	<meta
		name="description"
		content="Explore the contemparary poetry of Joelle Hili."
	/>
	<meta name="author" content="Joelle Hili" />
	<link rel="canonical" href="https://joellehili.com/poems" />

	<meta property="og:title" content="Poetry | Joelle Hili" />
	<meta property="og:site_name" content="Joelle Hili | Poetry" />

	<meta
		property="og:description"
		content="Explore the contemparary poetry of Joelle Hili."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://joellehili.com/poems" />
	<meta property="og:image" content="https://joellehili.com/poetry-preview.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Poetry | Joelle Hili" />
	<meta
		name="twitter:description"
		content="Explore the contemparary poetry of Joelle Hili."
	/>
	<meta name="twitter:image" content="https://joellehili.com/poetry-preview.png" />

	<meta name="theme-color" content="#030F12" />
</svelte:head>

<h1>My Poems</h1>
<ul>
    {#each data.poems as {slug, title}}
        <li><p><a href="/poems/{slug}">{title}</a></p></li>
    {/each}
</ul>

<style>
    ul{
        list-style-type: none;
        color: var(--text-color);
		padding: 0;
    }
</style>