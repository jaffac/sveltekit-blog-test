<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'
	import * as config from '$lib/config'

	// 1. Add these imports
	import { dev } from '$app/environment'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '../app.css'

	// 2. Initialize it (only in production)
	if (!dev) {
		injectSpeedInsights()
	}

	interface Props {
		children?: import('svelte').Snippet
		data: {
			url: string
			meta?: {
				title?: string
				description?: string
			}
		}
	}

	let { children, data }: Props = $props()
</script>

<svelte:head>
	<title>{data.meta?.title ? `${data.meta.title} | ${config.title}` : config.title}</title>
	<meta name="description" content={data.meta?.description || config.description} />

	<meta property="og:site_name" content={config.title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content={data.url} />
	<meta property="og:title" content={data.meta?.title || config.title} />
	<meta property="og:description" content={data.meta?.description || config.description} />
	<meta property="og:image" content="{config.url}/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={data.url} />
	<meta name="twitter:title" content={data.meta?.title || config.title} />
	<meta name="twitter:description" content={data.meta?.description || config.description} />
	<meta name="twitter:image" content="{config.url}/og-image.png" />
</svelte:head>

<div class="layout">
	<Header />

	<main>
		<PageTransition url={data.url}>
			{@render children?.()}
		</PageTransition>
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		padding-inline: var(--size-7);

		@media (min-width: 1440px) {
			padding-inline: 0;
		}

		main {
			padding-block: var(--size-9);
		}
	}

	/* Global override to remove those gray circles/bubbles around tags */
	:global(.tags a) {
		background: none !important;
		border: none !important;
		box-shadow: none !important;
		padding: 0 !important;
		color: var(--orange-5) !important;
		text-decoration: none;
		font-weight: var(--font-weight-6);
	}

	:global(.tags a:hover) {
		text-decoration: underline !important;
	}
</style>
