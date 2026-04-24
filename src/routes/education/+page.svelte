<script>
	let { data } = $props();

	$effect(() => {
		document.body.dataset.theme = 'Evening';
	});
</script>

<svelte:head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Education | Joelle Hili</title>
	<meta name="description" content="Explore the educational background, qualifications, and academic history of Joelle Hili." />
	<meta name="author" content="Joelle Hili" />

    <meta property="og:title" content="Education | Joelle Hili" />
	<meta property="og:description" content="Explore the educational background, qualifications, and academic history of Joelle Hili." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://joellehili.com/education" />
	<meta property="og:image" content="https://joellehili.com/education-preview.png" />

    <meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Education | Joelle Hili" />
	<meta name="twitter:description" content="Explore the educational background, qualifications, and academic history of Joelle Hili." />
	<meta name="twitter:image" content="https://joellehili.com/education-preview.png" />

	<meta name="theme-color" content="#0B3C49" />
</svelte:head>

{#each data.educationData as edu}
	<section class="education__entry">
		<section class="education__entry__title">
			<img class="education__entry__icon" src={`${edu.icon}.svg`} alt={edu.icon} height="24px" width="24px" />
			<h2>{edu.title}</h2>
		</section>
		<p class="education__entry__info">
			{edu.college}, {#if edu.campus}{edu.campus},
			{/if}{edu.dateRange}
		</p>
	</section>
{/each}

<style>
    .education__entry{
        margin-right: 10dvw;
        display: block;
        padding-bottom: 16px;
    }

    .education__entry__title{
        display: flex;
        flex-direction: row;
        gap: 16px;
        align-items: center;
    }

    .education__entry__info{
        margin-left: calc(var(--icon-size) + 16px);
        margin-top: 4px;
    }

    .education__entry__icon{
        height: var(--icon-size);
        width: var(--icon-size);

        color: #f1f7ee;
    }

    :root{
        --icon-size: clamp(24px, 3dvw , 48px);
    }
</style>