<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()

	// Top post for the "Hero"
	let featuredPost = $derived(data.posts[0])
	// The rest of the library for mobile visibility
	let archivePosts = $derived(data.posts.slice(1))
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

		<div class="mobile-archive">
			<h2 class="mobile-label">Library Archive</h2>
			<ul class="mobile-list">
				{#each archivePosts as post}
					<li class="mobile-item">
						<span class="mobile-date">
							{post.date.split('-')[2]}.{parseInt(post.date.split('-')[1])}
						</span>
						<a href="/{post.slug}" class="mobile-link">{post.title}</a>
					</li>
				{/each}
			</ul>
		</div>
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

	/* --- MOBILE ARCHIVE SECTION --- */
	.mobile-archive {
		display: none; /* Hidden on Desktop */
		margin-top: var(--size-12);
		padding-top: var(--size-10);
		border-top: 1px solid var(--home-border);
	}

	.mobile-label {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		text-transform: uppercase;
		letter-spacing: 0.2em;
		color: var(--orange-5);
		margin-bottom: var(--size-8);
	}

	.mobile-list {
		list-style: none;
		padding: 0;
		display: grid;
		gap: var(--size-7);
	}

	.mobile-item {
		display: flex;
		flex-direction: column;
		gap: var(--size-1);
	}

	.mobile-date {
		font-family: var(--font-mono);
		font-size: var(--font-size-00);
		color: var(--home-muted);
	}

	.mobile-link {
		color: var(--home-text) !important;
		text-decoration: none;
		font-size: var(--font-size-2);
		font-weight: var(--font-weight-6);
	}

	/* Activate Mobile List only when Sidebar is hidden */
	@media (max-width: 1024px) {
		.mobile-archive {
			display: block;
		}
	}

	.empty-state {
		font-family: var(--font-mono);
		color: var(--home-muted);
		padding-top: var(--size-10);
	}
</style>
