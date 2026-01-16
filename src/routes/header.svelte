<script lang="ts">
	import Toggle from './toggle.svelte'
	import * as config from '$lib/config'
	import 'media-chrome'

	const radioStreamUrl = 'https://radio.streemlion.com:1760/stream'
	const radioStationName = 'Nordic Lodge Copenhagen'

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
					<audio slot="media" src={radioStreamUrl} crossorigin="anonymous" preload="none"></audio>
					<media-control-bar>
						<media-play-button></media-play-button>
						<media-time-display class="player-label"></media-time-display>
						<media-mute-button></media-mute-button>
						<media-volume-range></media-volume-range>
					</media-control-bar>
				</media-controller>
			</div>
		</li>
		<li class="mobile-only-items"><Toggle /></li>
	</ul>

	<div class="desktop-media-player-container">
		<media-controller audio class="header-media-player">
			<audio slot="media" src={radioStreamUrl} crossorigin="anonymous" preload="none"></audio>
			<media-control-bar>
				<media-play-button></media-play-button>
				<media-time-display class="player-label"></media-time-display>
				<media-mute-button></media-mute-button>
				<media-volume-range></media-volume-range>
			</media-control-bar>
		</media-controller>
	</div>

	<div class="desktop-toggle-container"><Toggle /></div>
</nav>

<style>
	/* ... Navigation styles same as before ... */
	nav.main-nav-wrapper {
		padding-block: var(--size-7);
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--size-4);
		position: relative;
		z-index: 10;
	}
	nav .title {
		margin-right: auto;
		margin-left: -10px;
		font-size: var(--font-size-fluid-3);
	}
	nav .links {
		display: flex;
		gap: var(--size-7);
		margin-block: 0;
		list-style: none;
		padding: 0;
	}
	nav a {
		color: inherit;
		text-decoration: none;
	}
	.desktop-media-player-container {
		flex-shrink: 0;
		margin-top: 12px;
		margin-left: var(--size-4);
	}
	.desktop-toggle-container {
		flex-shrink: 0;
		margin-left: var(--size-4);
	}

	/* Hamburger Menu Styles */
	.menu-toggle {
		display: none;
		background: none;
		border: none;
		cursor: pointer;
		padding: var(--size-2);
		flex-direction: column;
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
	.menu-toggle.is-active .bar:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.menu-toggle.is-active .bar:nth-child(2) {
		opacity: 0;
	}
	.menu-toggle.is-active .bar:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* --- MEDIA-CHROME PLAYER REFINEMENT --- */
	.header-media-player {
		width: 250px;
		height: 40px;
		font-size: 0.9em;

		/* FIX: Remove the 'backlight' glow from all buttons on hover */
		--media-control-hover-background: transparent;

		--media-background-color: transparent;
		--media-control-background: transparent;
		--media-range-thumb-color: var(--brand);
		--media-range-track-color: var(--text-2);
		--media-range-track-active-color: var(--brand);

		/* FIX: Precision alignment for the volume track */
		--media-range-track-height: 4px;
		--media-range-thumb-height: 10px;
		--media-range-thumb-width: 10px;

		/* FIX: Removing focus backlight glow */
		--media-focus-box-shadow: none;

		--media-font-family: var(--font-system-ui);
		--media-button-border-radius: var(--radius-round);

		& .player-label {
			font-weight: var(--font-weight-bold);
			min-width: 50px; /* Ensures timer doesn't jump around */
		}
	}

	media-volume-range {
		outline: none;
	}

	/* Mobile logic same as before */
	.mobile-only-items {
		display: none;
		width: 100%;
		margin-top: var(--size-4);
	}
	.media-player-container-mobile {
		width: 100%;
		text-align: center;
	}
	.media-player-container-mobile .header-media-player {
		width: 100%;
		max-width: 300px;
	}

	@media (max-width: 767px) {
		.menu-toggle {
			display: flex;
			margin-left: auto;
		}
		.desktop-media-player-container,
		.desktop-toggle-container {
			display: none;
		}
		nav .links {
			position: absolute;
			top: 100%;
			left: 0;
			width: 100%;
			background-color: var(--surface-3);
			border-top: 1px solid var(--border);
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.3s ease-out;
			padding: 0 var(--size-4);
			flex-direction: column;
		}
		nav .links.is-open {
			max-height: 500px;
			padding: var(--size-4);
		}
		.mobile-only-items {
			display: block;
		}
	}
</style>
