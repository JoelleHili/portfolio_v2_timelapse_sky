<script>
	let { data } = $props();

	$effect(() => {
		const popover = document.getElementById('navigation-popover');
		popover?.hidePopover();

		document.body.dataset.theme = 'Evening';
	});
</script>

<title>My Education</title>

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