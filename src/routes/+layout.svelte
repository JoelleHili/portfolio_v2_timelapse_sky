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
	<div class="noise noise-white"></div>
	<div class="noise noise-black"></div>

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
	<button class="back_button" onclick={goBack}><h2>&#8592;{' Back'}</h2></button>

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

	@property --lines {
		syntax: '<length>';
		inherits: false;
		initial-value: 0.00314px;
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
		position: fixed;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 100;
		animation: line-anim 5s infinite;
		background-color: var(--static);
		mask: repeating-radial-gradient(
			circle at center,
			#000 0,
			#000 var(--lines),
			#0000 calc(var(--lines) * 2),
			#0000 calc(var(--lines) * 80)
		);
		opacity: var(--static-opacity);
	}

	.noise-black {
		background-color: var(--accent-color);
		mix-blend-mode: exclusion;
		rotate: random(0deg, 30deg);
		opacity: calc(var(--static-opacity)- 50%);
	}

	.noise-white {
		background-color: var(--text-color);
		mix-blend-mode: lighten;
	}

	@keyframes line-anim {
		20% {
			--lines: 0.001234px;
		}
		40% {
			--lines: 0.002341px;
		}
		60% {
			--lines: 0.003412px;
		}
		80% {
			--lines: 0.004123px;
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

		h2 {
			color: var(--menu-color);
		}
	}
</style>
