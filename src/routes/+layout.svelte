<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'
	import PageTransition from './transition.svelte'
	import * as config from '$lib/config'

	import { dev } from '$app/environment'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'

	import 'open-props/style'
	import 'open-props/normalize'
	import 'open-props/buttons'
	import '../app.css'

	if (!dev) {
		injectSpeedInsights()
	}

	interface Props {
		children?: import('svelte').Snippet
		data: {
			url: string
			posts: any[]
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

	<link rel="alternate" type="application/rss+xml" title={config.title} href="/rss" />
	<link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap" />

	<link rel="canonical" href="{config.url}{data.url}" />

	<meta property="og:site_name" content={config.title} />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="{config.url}{data.url}" />
	<meta property="og:title" content={data.meta?.title || config.title} />
	<meta property="og:description" content={data.meta?.description || config.description} />
	<meta property="og:image" content="{config.url}/og-image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="{config.url}{data.url}" />
	<meta name="twitter:title" content={data.meta?.title || config.title} />
	<meta name="twitter:description" content={data.meta?.description || config.description} />
	<meta name="twitter:image" content="{config.url}/og-image.png" />
</svelte:head>

<div class="layout">
	<Header />

	<div class="sidebar-grid">
		<aside class="sidebar">
			<nav>
				<p class="nav-label">Latest</p>
				<ul class="sidebar-list">
					{#each data.posts.slice(0, 5) as post}
						<li class:active={data.url.includes(post.slug)}>
							<span class="side-date">
								{post.date.split('-')[2]}.{parseInt(post.date.split('-')[1])}
							</span>
							<a href="/{post.slug}">{post.title}</a>
						</li>
					{/each}
				</ul>

				<div class="archive-nav">
					<a href="/archive" class="archive-link">Full Archive →</a>
				</div>
			</nav>
		</aside>

		<main>
			<PageTransition url={data.url}>
				{@render children?.()}
			</PageTransition>
		</main>
	</div>

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
		min-height: 100vh;

		/* Base Dark Mode Vars */
		--side-text: var(--gray-6);
		--side-link: var(--gray-4);
		--side-active: white;
		--side-border: var(--gray-9);
	}

	@media (prefers-color-scheme: light) {
		.layout {
			--side-text: var(--gray-7) !important;
			--side-link: var(--gray-8) !important;
			--side-active: var(--gray-12) !important;
			--side-border: var(--gray-4) !important;
		}
	}

	:global([color-scheme='light']) .layout {
		--side-text: var(--gray-7) !important;
		--side-link: var(--gray-8) !important;
		--side-active: var(--gray-12) !important;
		--side-border: var(--gray-4) !important;
	}

	.sidebar-grid {
		display: grid;
		grid-template-columns: 240px 1fr;
		gap: var(--size-10);
		align-items: start;
		margin-top: var(--size-8);
	}

	.sidebar {
		position: sticky;
		top: var(--size-9);
		padding-block: var(--size-4);
		padding-right: var(--size-8);
		border-right: 1px solid var(--side-border);
		height: fit-content;
	}

	.nav-label {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--orange-5);
		margin-bottom: var(--size-6);
		display: flex;
		align-items: center;
		gap: var(--size-2);
	}

	.nav-label::before {
		content: '';
		width: 6px;
		height: 6px;
		background-color: var(--orange-5);
		border-radius: 50%;
		display: inline-block;
	}

	.sidebar-list {
		list-style: none;
		padding: 0;
		display: grid;
		gap: var(--size-7);
		margin-bottom: var(--size-8);
	}

	.side-date {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--side-text);
		display: block;
		margin-bottom: 2px;
	}

	.sidebar-list a {
		text-decoration: none;
		color: var(--side-link) !important;
		font-size: var(--font-size-1);
		line-height: var(--font-lineheight-1);
		transition: color 0.2s ease;
	}

	.sidebar-list li.active a {
		color: var(--side-active) !important;
		font-weight: var(--font-weight-6);
	}

	.sidebar-list li.active .side-date {
		color: var(--orange-5);
	}

	.sidebar-list a:hover {
		color: var(--orange-5) !important;
	}

	.archive-nav {
		border-top: 1px dashed var(--side-border);
		padding-top: var(--size-6);
	}

	.archive-link {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--side-text) !important;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.archive-link:hover {
		color: var(--orange-5) !important;
		text-decoration: underline;
	}

	main {
		padding-block: var(--size-4);
	}

	@media (max-width: 1024px) {
		.sidebar-grid {
			grid-template-columns: 1fr;
		}
		.sidebar {
			display: none;
		}
	}

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
