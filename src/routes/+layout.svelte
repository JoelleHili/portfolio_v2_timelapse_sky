<script>
	import SunNavigation from '../components/SunNavigation/sunNavigation.svelte';
	import LinkedIn from '/linkedin.svg?raw';
	import GitHub from '/github.svg?raw';

	let { children } = $props();
</script>

<section class="app">
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

	<section class="content">
		{@render children()}
	</section>
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
		margin-left: clamp(16px, 5vw, 160px);
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
