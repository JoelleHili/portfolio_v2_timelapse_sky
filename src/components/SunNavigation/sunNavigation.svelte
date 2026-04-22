<script>
	import ToggleMenuIcon from './toggleMenuIcon.svelte';
</script>

<button class="sun-navigation" popovertarget="navigation-popover" popovertargetaction="show" aria-label="open-nav-button">
	<ToggleMenuIcon isOpen={false} />
</button>

<section popover id="navigation-popover">
	<section class="nav-selection">
		<a class="nav-link" href="/">ABOUT</a>
		<a class="nav-link" href="/experience">EXPERIENCE</a>
		<a class="nav-link" href="/education">EDUCATION</a>
	</section>

	<button class="sun-navigation" popovertarget="navigation-popover" popovertargetaction="hide" aria-label="close-nav-button">
		<ToggleMenuIcon isOpen={true} />
	</button>
</section>

<style>
	@import '/src/styles/_variables.css';

	.nav-selection {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
	@media only screen and (max-width: 1024px) {
		.nav-selection {
			flex-direction: column;
			gap: 5dvh;
		}
	}
	@media only screen and (min-width: 1024px) {
		.nav-selection {
			flex-direction: row;
			gap: 5dvw;
		}
	}

	.nav-link {
		font-family: 'Fascinate', system-ui;
		font-weight: 400;
		font-style: normal;
		color: var(--link-text-color);
		font-size: clamp(32px, 6vw, 56px);

		margin: 0px;
		display: inline-block;
		position: relative;
	}
	.nav-link::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 8px;
		border-radius: 4px;
		bottom: 0;
		left: 0;
		background-color: #0b3c49;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}
	.nav-link:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.sun-navigation {
		background-color: var(--menu-color);
		box-shadow: var(--menu-glow);
		bottom: calc((var(--menu-size)/3)*-1);
		left: calc(50% - (var(--menu-size) / 2));
		z-index: 100;
		width: var(--menu-size);
		height: var(--menu-size);
		position: fixed;
		border: 0px;
		border-radius: 100%;
		transition: all 1s ease-out;
	}
	.sun-navigation:hover {
		width: var(--menu-size-hovering);
		height: var(--menu-size-hovering);
		left: calc(50% - (var(--menu-size-hovering) / 2));
		box-shadow: none;
		transition: all 1s ease-out;
		cursor: pointer;
	}
	.sun-navigation:focus {
		outline: none;
	}

	[popover] {
		border: 0;
		bottom: 0;
		width: 100dvw;
		height: 100dvh;
		background-color: var(--menu-color);
		z-index: 1;

		clip-path: circle(200% at 50% 100%);
		transition: clip-path 1s ease-out;
	}

	[popover]:popover-open {
		z-index: 1;
	}

	@starting-style {
		[popover] {
			clip-path: circle(200% at 50% 100%);
		}
	}
	@starting-style {
		[popover]:popover-open {
			clip-path: circle(0% at 50% 100%);
		}
	}
</style>
