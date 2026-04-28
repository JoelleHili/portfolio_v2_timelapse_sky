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
		scrollY.end = e.changedTouches[0].screenY

		let scrollType = getVerticalSwipeType(scrollY)
		let pageIndex = pages.findIndex((p) => p === page.url.pathname);

		if (scrollType === 'swipeUp' && pageIndex < pages.length - 1) {
			goto(pages[pageIndex + 1]);
		} else if (scrollType === 'swipeDown' && pageIndex > 0) {
			goto(pages[pageIndex - 1]);
		}

		scrollY = { start: 0, end: 0 };
	}

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

	<nav class="nav">
		<SunNavigation />
	</nav>

	<main class="content">
		{@render children()}
	</main>
</section>

<style>
	@import '/styles/_variables.css';

	.app {
		min-height: 100dvh;
		background: var(--background);
	}

	.nav {
		display: flex;
		justify-content: center;
	}

	.noise {
		mix-blend-mode: darken;
		position: fixed;
		width: 200%;
		height: 200%;
		pointer-events: none;
		z-index: 9999;
	}

	.content {
		margin-top: calc(clamp(40px, 18svh, 320px) + 8px);
		margin-left: clamp(8px, 5vw, 160px);
	}

	.clouds {
		display: var(--cloud-visibily);
		transform: translateX(var(--cloud-transform));
		transition-duration: 3s;
		pointer-events: none;
		height: clamp(40px, 18svh, 320px);
		position: fixed;
	}
</style>
