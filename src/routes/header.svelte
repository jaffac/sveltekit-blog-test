<script lang="ts">
	import Toggle from './toggle.svelte' // This is your light/dark mode toggle
	import * as config from '$lib/config'
	import 'media-chrome' // Make sure this is still here!

	const radioStreamUrl = 'https://radio.jaffac.link/listen/music/radio.mp3'
	const radioStationName = 'My Radio'

	// Svelte state to manage mobile menu visibility
	let isMobileMenuOpen = false

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen
	}
</script>

<nav class="main-nav-wrapper">
	<a href="/" class="title">
		<b>{config.title}</b>
	</a>

	<button
		class="menu-toggle"
		class:is-active={isMobileMenuOpen}
		on:click={toggleMobileMenu}
		aria-expanded={isMobileMenuOpen}
		aria-controls="mobile-nav-links"
		aria-label="Toggle navigation menu"
	>
		<span class="bar"></span>
		<span class="bar"></span>
		<span class="bar"></span>
	</button>

	<ul class="links" id="mobile-nav-links" class:is-open={isMobileMenuOpen}>
		<li>
			<a
				href="/about"
				on:click={() => {
					if (window.innerWidth <= 767) isMobileMenuOpen = false
				}}>About</a
			>
		</li>
		<li>
			<a
				href="/contact"
				on:click={() => {
					if (window.innerWidth <= 767) isMobileMenuOpen = false
				}}>Contact</a
			>
		</li>
		<li>
			<a
				href="/portfolio"
				on:click={() => {
					if (window.innerWidth <= 767) isMobileMenuOpen = false
				}}>Folio</a
			>
		</li>
		<li class="mobile-only-items">
			<div class="media-player-container-mobile">
				<media-controller audio class="header-media-player">
					<audio
						slot="media"
						src={radioStreamUrl}
						preload="none"
						aria-label="{radioStationName} Stream"
					></audio>
					<media-control-bar>
						<media-play-button></media-play-button>
						<media-time-display class="player-label"></media-time-display>
						<media-mute-button></media-mute-button>
						<media-volume-range></media-volume-range>
					</media-control-bar>
				</media-controller>
			</div>
		</li>
		<li class="mobile-only-items">
			<Toggle />
		</li>
	</ul>

	<div class="desktop-media-player-container">
		<media-controller audio class="header-media-player">
			<audio slot="media" src={radioStreamUrl} preload="none" aria-label="{radioStationName} Stream"
			></audio>

			<media-control-bar>
				<media-play-button></media-play-button>
				<media-time-display class="player-label"></media-time-display>
				<media-mute-button></media-mute-button>
				<media-volume-range></media-volume-range>
			</media-control-bar>
		</media-controller>
	</div>

	<div class="desktop-toggle-container">
		<Toggle />
	</div>
</nav>

<style>
	/* Reset base nav styles to allow for controlled mobile behavior */
	nav.main-nav-wrapper {
		padding-block: var(--size-7);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4); /* Space between main items */
		position: relative; /* For absolute positioning of mobile nav */
		z-index: 10; /* Ensure nav is on top */
	}

	nav .title {
		margin-right: auto; /* Push other items to the right */
		margin-left: -10px; /* Adjust as needed for alignment */
		font-size: var(--font-size-fluid-3);
	}

	/* Desktop Navigation Links */
	nav .links {
		display: flex; /* Always flex on desktop */
		gap: var(--size-7);
		margin-block: 0;
		list-style: none;
		padding: 0;
	}

	nav a {
		color: inherit;
		text-decoration: none;
	}

	/* Desktop Media Player Container */
	.desktop-media-player-container {
		flex-shrink: 0;
		margin-top: 12px;
		margin-left: var(--size-4);
	}

	/* Desktop Toggle Container */
	.desktop-toggle-container {
		flex-shrink: 0;
		margin-left: var(--size-4); /* Add space between player and toggle */
	}

	/* --- Hamburger Menu Button --- */
	.menu-toggle {
		display: none; /* <-- CRITICAL FIX: Hide by default on ALL screens */
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--size-2);
		flex-direction: column; /* This is fine, but won't apply if display is none */
		gap: 4px;
		justify-content: center;
		align-items: center;
		width: 40px;
		height: 40px;
		z-index: 20;
	}

	.menu-toggle .bar {
		display: block;
		width: 28px;
		height: 3px;
		background-color: var(--text-1);
		border-radius: 2px;
		transition: all 0.3s ease-in-out;
	}

	/* Hamburger icon animation when open */
	.menu-toggle.is-active .bar:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.menu-toggle.is-active .bar:nth-child(2) {
		opacity: 0;
	}
	.menu-toggle.is-active .bar:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* --- MEDIA-CHROME PLAYER STYLING (remains unchanged) --- */
	.header-media-player {
		width: 250px;
		height: 40px;
		font-size: 0.9em;

		--media-background-color: transparent;
		--media-control-background: transparent;
		--media-control-hover-background: var(--surface-4);

		--media-range-thumb-color: var(--brand);
		--media-range-track-color: var(--text-2);
		--media-range-track-active-color: var(--brand);

		--media-focus-color: var(--link);
		--media-font-family: var(--font-system-ui);
		--media-button-border-radius: var(--radius-round);

		& .player-label {
			font-weight: var(--font-weight-bold);
		}

		media-control-bar > * {
			height: 30px;
			width: 30px;
		}
		media-volume-range {
			height: 30px;
			flex-grow: 1;
		}
	}

	/* Mobile specific elements (hidden on desktop) */
	.mobile-only-items {
		display: none;
		width: 100%;
		margin-top: var(--size-4);
	}

	/* Adjust player for mobile menu */
	.media-player-container-mobile {
		width: 100%;
		text-align: center;
	}
	.media-player-container-mobile .header-media-player {
		width: 100%;
		max-width: 300px;
		height: 50px;
	}

	/* --- Media Queries for Mobile --- */
	@media (max-width: 767px) {
		nav.main-nav-wrapper {
			flex-wrap: wrap;
			align-items: flex-start;
			position: relative;
		}

		nav .title {
			margin-bottom: 0;
			margin-right: auto;
		}

		/* CRITICAL FIX: ONLY show the hamburger menu button on small screens */
		.menu-toggle {
			display: flex; /* <-- IMPORTANT: OVERRIDE default 'display: none' */
			margin-left: auto;
		}

		/* Hide desktop specific elements */
		.desktop-media-player-container,
		.desktop-toggle-container {
			display: none;
		}

		/* Hide the regular links on mobile by default */
		nav .links {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			background-color: var(--surface-3);
			border-top: 1px solid var(--border);
			max-height: 0;
			overflow: hidden;
			transition:
				max-height 0.3s ease-out,
				padding 0.3s ease-out;
			padding: 0 var(--size-4);
			flex-direction: column;
			align-items: flex-start;
		}

		/* When the mobile menu is open (JavaScript adds is-open class) */
		nav .links.is-open {
			max-height: 500px; /* Or enough height to show all items. Adjust as needed. */
			padding: var(--size-4);
		}

		nav .links li {
			width: 100%;
			margin-block: var(--size-2);
		}

		nav .links a {
			display: block;
			width: 100%;
			padding: var(--size-3) var(--size-4);
			background-color: var(--surface-3);
			border-radius: var(--radius-2);
		}
		nav .links a:hover {
			background-color: var(--surface-3);
		}

		/* Show mobile-only items within the expanded menu */
		.mobile-only-items {
			display: block;
		}
	}
</style>
