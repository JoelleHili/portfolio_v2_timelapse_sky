<script>
	let { isOpen } = $props();
</script>

{#if isOpen}
	<svg
		class="menu-icon menu-icon__open"
		viewBox="0 0 64 64"
		fill="#0B3C49"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect class="menu-icon__top" height="8" width="64" x="0" y="12" rx="4"></rect>
		<rect class="menu-icon__middle" height="8" width="64" x="0" y="28" rx="4"></rect>
		<rect class="menu-icon__bottom" height="8" width="64" x="0" y="44" rx="4"></rect>
	</svg>
{:else}
	<svg
		class="menu-icon"
		viewBox="0 0 64 64"
		fill="#0B3C49"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect class="menu-icon__top" height="8" width="64" x="0" y="12" rx="4"></rect>
		<rect class="menu-icon__middle" height="8" width="64" x="0" y="28" rx="4"></rect>
		<rect class="menu-icon__bottom" height="8" width="64" x="0" y="44" rx="4"></rect>
	</svg>
{/if}

<style>
	@import '/src/styles/_variables.css';


	.menu-icon {
		position: fixed;
		bottom: 20px;
		left: calc(50dvw - calc(var(--menu-size)/6));
		pointer-events: none;
		height: calc(var(--menu-size)/3);
		width: calc(var(--menu-size)/3);
	}

	.menu-icon__open {
		.menu-icon__top {
			transform-origin: center;
			animation: topAnim 0.8s forwards;
		}

		.menu-icon__middle {
			transform-origin: center;
			transition-delay: 0.8s;
			animation: middleAnim 0.5s forwards;
		}

		.menu-icon__bottom {
			transform-origin: center;
			animation: bottomAnim 0.8s forwards;
		}
	}

	@keyframes topAnim {
		40% {
			transform: translateY(16px);
		}
		100% {
			transform: translateX(-10px) translateY(11px) rotate(45deg);
		}
	}

	@keyframes middleAnim {
		100% {
			opacity: 0;
		}
	}

	@keyframes bottomAnim {
		40% {
			transform: translateY(-16px);
		}
		100% {
			transform: translateX(-10px) translateY(-11px) rotate(-45deg);
		}
	}
</style>
