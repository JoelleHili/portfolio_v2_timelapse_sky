<script>
	import SunNavigation from '../components/SunNavigation/sunNavigation.svelte';
	import LinkedIn from '../lib/linkedin.svg?raw';
	import GitHub from '../lib/github.svg?raw';

	let { children } = $props();
</script>

<img class="noise" src="/src/lib/noise.svg" alt="Noise" />

<section class="social">
	<a href="https://github.com/JoelleHili" target="_blank" rel="nofollow" aria-label="github-link">
		{@html GitHub}
	</a>

	<a href="https://www.linkedin.com/in/joelle-hili-a89366164/" target="_blank" rel="nofollow" aria-label="linkedin-link">
		{@html LinkedIn}
	</a>
</section>

<img class="clouds" src="/src/lib/clouds.svg" alt="Clouds" />

<nav>
	<SunNavigation />
</nav>

<section class="content">
	{@render children()}
</section>

<style>
	@import '/src/styles/_variables.css';
	
	.noise {
		mix-blend-mode: darken;
		position: fixed;
		width: 200%;
		height: 200%;
		pointer-events: none;
		z-index: 9999;
	}

	.content {
		margin-left: clamp(16px, 5vw, 160px);
	}

	.clouds {
		display: var(--cloud-visibily);
		transform: translateX(var(--cloud-transform));
		transition-duration: 3s;
		pointer-events: none;
		height: clamp(40px, 16dvh, 126px);
	}
</style>
