<script>
	import ToggleMenuIcon from './toggleMenuIcon.svelte';

	const closePopover = () => {
		const popover = document.getElementById('navigation-popover');
		popover?.hidePopover();
	};
</script>

<button
	class="sun-navigation"
	popovertarget="navigation-popover"
	popovertargetaction="show"
	aria-label="open-nav-button"
>
	<ToggleMenuIcon isOpen={false} />
</button>

<section class="nav-popover" popover id="navigation-popover">
	<section class="nav-selection">
		<a class="nav-link" href="/" onclick={closePopover}>ABOUT</a>
		<a class="nav-link" href="/experience" onclick={closePopover}>EXPERIENCE</a>
		<a class="nav-link" href="/education" onclick={closePopover}>EDUCATION</a>
	</section>

	<button
		class="sun-navigation sun-navigation__hide"
		popovertarget="navigation-popover"
		popovertargetaction="hide"
		aria-label="close-nav-button"
	>
		<ToggleMenuIcon isOpen={true} />
	</button>
</section>

<style>
	@import '/styles/_variables.css';

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

	.nav-popover {
		display: flex;
		justify-content: center;
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
		bottom: calc((var(--menu-size) / 3) * -1);
		/* left: calc(50% - (var(--menu-size) / 2)); */
		z-index: 99;
		width: var(--menu-size);
		height: var(--menu-size);
		position: fixed;
		border: 0px;
		border-radius: 100%;
		transition: all 0.75s ease, background-color 0s, box-shadow 0s;
	}
	.sun-navigation:hover {
		width: var(--menu-size-hovering);
		height: var(--menu-size-hovering);
		/* left: calc(50% - (var(--menu-size-hovering) / 2)); */
		box-shadow: none;
		transition: all 0.75s ease;
		cursor: pointer;
	}
	.sun-navigation:focus {
		outline: none;
	}

	.sun-navigation__hide {
		z-index: 100;
		align-self: center;
	}

	[popover] {
		border: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background-color: var(--menu-color);
		z-index: 1;

		clip-path: circle(0% at 50% 100%);
		transition: clip-path 0.75s ease;
	}

	[popover]:popover-open {
		clip-path: circle(200% at 50% 100%);
		z-index: 1;
	}
	@starting-style {
		[popover]:popover-open {
			clip-path: circle(0% at 50% 100%);
		}
	}
</style>
