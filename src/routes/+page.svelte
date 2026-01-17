<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()

	// Focus only on the most recent/featured post
	let featuredPost = $derived(data.posts[0])
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="home-container">
	{#if featuredPost}
		<article class="featured-hero">
			<header class="hero-header">
				<span class="status-badge">Featured Selection</span>
				<h1 class="hero-title">
					<a href={featuredPost.slug}>{featuredPost.title}</a>
				</h1>
				<p class="hero-date">{formatDate(featuredPost.date)}</p>
			</header>

			<div class="description-box">
				<p class="description">{featuredPost.description}</p>
			</div>

			<footer class="hero-footer">
				<a href={featuredPost.slug} class="read-link">Read entry —</a>
			</footer>
		</article>
	{:else}
		<p class="empty-state">The lodge is quiet. No entries found.</p>
	{/if}
</section>

<style>
	.home-container {
		padding-top: var(--size-10);
		max-inline-size: var(--size-content-3);

		/* High Contrast Safety Variables */
		--home-text: var(--text-1);
		--home-muted: var(--text-2);
		--home-border: var(--border);
	}

	/* Force visibility in Lite Mode */
	:global([color-scheme='light']) .home-container {
		--home-text: var(--gray-12) !important;
		--home-muted: var(--gray-8) !important;
		--home-border: var(--gray-4) !important;
	}

	.status-badge {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--orange-5);
		text-transform: uppercase;
		letter-spacing: 0.25em;
		display: block;
		margin-bottom: var(--size-4);
	}

	.hero-title a {
		font-size: var(--font-size-fluid-3);
		color: var(--home-text) !important;
		text-decoration: none;
		line-height: var(--font-lineheight-1);
	}

	.hero-title a:hover {
		color: var(--orange-5) !important;
	}

	.hero-date {
		color: var(--home-muted);
		font-size: var(--font-size-1);
		font-family: var(--font-mono);
		margin-top: var(--size-2);
	}

	.description-box {
		margin-top: var(--size-10);
		padding-left: var(--size-6);
		border-left: 2px solid var(--home-border);
	}

	.description {
		font-size: var(--font-size-3);
		line-height: var(--font-lineheight-3);
		color: var(--home-muted);
	}

	.read-link {
		display: inline-block;
		margin-top: var(--size-10);
		font-family: var(--font-mono);
		font-size: var(--font-size-1);
		color: var(--orange-5) !important;
		text-decoration: none;
	}

	.read-link:hover {
		text-decoration: underline;
	}

	.empty-state {
		font-family: var(--font-mono);
		color: var(--home-muted);
		padding-top: var(--size-10);
	}
</style>
