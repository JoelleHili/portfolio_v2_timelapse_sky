<script lang="ts">
	import SunNavigation from '../components/SunNavigation/sunNavigation.svelte';
	import LinkedIn from '/linkedin.svg?raw';
	import GitHub from '/github.svg?raw';
	import { goto } from '$app/navigation';
	import { getVerticalSwipeType } from '../helper/touchHandler.ts';
	import { pages } from '../data/routes.ts';
	import { page } from '$app/state';

	let { children } = $props();

	let scrollY = $state({ start: 0, end: 0 });

	const handleSwipe = (e: TouchEvent) => {
		scrollY.end = e.changedTouches[0].screenY;

		let scrollType = getVerticalSwipeType(scrollY);
		let pageIndex = pages.findIndex((p) => p === page.url.pathname);

		if (scrollType === 'swipeUp' && pageIndex < pages.length - 1) {
			goto(pages[pageIndex + 1]);
		} else if (scrollType === 'swipeDown' && pageIndex > 0) {
			goto(pages[pageIndex - 1]);
		}

		scrollY = { start: 0, end: 0 };
	};

	const goBack = () => history.back();

	export const prerender = true;
</script>

<section
	class="app"
	role="application"
	ontouchstart={(e) => (scrollY.start = e.changedTouches[0].screenY)}
	ontouchend={(e) => handleSwipe(e)}
>
	<img class="noise" src="/noise.svg" alt="Noise" />

	<section class="social">
		<a href="https://github.com/JoelleHili" target="_blank" rel="nofollow" aria-label="github-link">
			{@html GitHub}
		</a>

		<a
			href="https://www.linkedin.com/in/joelle-hili-a89366164/"
			target="_blank"
			rel="nofollow"
			aria-label="linkedin-link"
		>
			{@html LinkedIn}
		</a>
	</section>

	<img class="clouds" src="/clouds.svg" alt="Clouds" />
	<button class="back_button" onclick={goBack}><h2>&#8592;{" Back"}</h2></button>

	<nav class="nav">
		<SunNavigation />
	</nav>

	<main class="content">
		{@render children()}
	</main>
</section>

<style>
	@import '/styles/_variables.css';

	@property --background-top {
		syntax: '<color>';
		inherits: true;
		initial-value: #f1f7ee;
	}

	@property --background-bottom {
		syntax: '<color>';
		inherits: true;
		initial-value: #f1f7ee;
	}

	.app {
		min-height: 100dvh;
		background: linear-gradient(to top, var(--background-bottom) 0%, var(--background-top) 33%);
		transition:
			--background-bottom 0.75s ease-in-out,
			--background-top 0.75s ease-in-out;
	}

	.nav {
		display: flex;
		justify-content: center;
	}

	.noise {
		mix-blend-mode: screen;
		filter: invert(1);
		position: fixed;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 9999;
		animation: noiseAnim 0.5s infinite;
		transform: scale(150%);
		opacity: 0.5;
	}

	@keyframes noiseAnim {
		0% {
			transform: rotateY(200deg);
		}
		19% {
			transform: rotateY(0deg);
		}
		20% {
			transform: rotateX(180deg);
		}
		39% {
			transform: rotateY(0deg);
		}
		40% {
			transform: rotateY(220deg);
		}
		59% {
			transform: rotateY(0deg);
		}
		60% {
			transform: rotateX(160deg);
		}
		79% {
			transform: rotateY(0deg);
		}
		80% {
			transform: rotateY(240deg);
		}
		99% {
			transform: rotateY(0deg);
		}
		100% {
			transform: rotateX(140deg);
		}
	}

	.content {
		margin-top: calc(clamp(40px, 18svh, 320px) + 8px);
		margin-left: clamp(8px, 5vw, 160px);
		overflow: scroll;
		scrollbar-width: thin;
		mask-image: linear-gradient(to bottom, var(--background-bottom) 90%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, var(--background-bottom) 90%, transparent 100%);

		@media screen and (max-aspect-ratio: 13/9) {
			height: 64dvh;
		}

		@media screen and (min-aspect-ratio: 13/9) {
			height: 54dvh;
		}
	}

	.clouds {
		display: var(--cloud-visibily);
		transform: translateX(var(--cloud-transform));
		transition-duration: 3s;
		pointer-events: none;
		height: clamp(40px, 18svh, 320px);
		position: fixed;
	}

	.back_button {
		display: var(--back-button-visibility);
		border: none;
		background-color: transparent;
		height: clamp(40px, 18svh, 320px);
		position: fixed;
		margin-left: clamp(8px, 5vw, 160px);
		cursor: pointer;
		
		h2{
			color: var(--menu-color);
		}
	}
</style>
