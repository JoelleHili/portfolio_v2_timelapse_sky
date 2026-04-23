<script lang="ts">
	let { range, selected = $bindable() } = $props();
</script>

<section class="tabs">
	{#each range as r}
		<label class="tabs__entry">
			<input
				class="tabs__entry__radio"
				type="radio"
				name="Experience Dates"
				value={r}
				bind:group={selected}
			/>
			{r}
		</label>
	{/each}
</section>

<style>
	.tabs {
		padding: 8px;
		background-color: #f1f7ee;
		border-radius: 16px;
		gap: clamp(0px, 0.2rem, 16px);
		align-self: center;
		display: flex;
		width: fit-content;
		box-shadow: inset 8px 4px 2px 0px #00000025;
		height: fit-content;
		justify-content: center;
        margin-right: clamp(8px, 5vw, 160px);
	}

	@media only screen and (min-width: 1024px) {
		.tabs {
			flex-direction: column;
			gap: 8px;
			width: 15dvw;
			align-items: center;
			align-self: start;
            margin: 5% 0px;

			& label {
				width: 100%;
				text-align: center;
				padding: 4px 0px;
			}
		}
	}

	.tabs__entry__radio {
		display: none;
	}

	label {
		padding: 4px 6px;
		border-radius: 8px;

        cursor: pointer;
		user-select: none;
	}

	label:has(input[type='radio']:checked) {
		background-color: #468189;
		color: #f1f7ee;
	}
</style>
