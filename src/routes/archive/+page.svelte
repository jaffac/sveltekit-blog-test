<script lang="ts">
	import * as config from '$lib/config'
	import type { Post } from '$lib/types'

	interface Props {
		data: {
			posts: Post[]
		}
	}

	let { data }: Props = $props()

	let validPosts = $derived(data.posts?.filter((p) => p.date) ?? [])

	let postsByYear = $derived(
		validPosts.reduce(
			(acc, post) => {
				const year = post.date.split('-')[0]
				if (!acc[year]) acc[year] = []
				acc[year].push(post)
				return acc
			},
			{} as Record<string, Post[]>
		)
	)

	let years = $derived(Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a)))
</script>

<svelte:head>
	<title>Archive | {config.title}</title>
</svelte:head>

<section class="archive-container">
	<h1 class="page-title">Full Archive</h1>

	{#each years as year}
		<div class="year-block">
			<h2 class="year-label">{year}</h2>
			<ul class="post-list">
				{#each postsByYear[year] as post}
					<li class="post-row">
						<span class="minimal-date">
							{post.date.split('-')[2]}.{parseInt(post.date.split('-')[1])}
						</span>
						<a href="/{post.slug}" class="post-link">{post.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</section>

<style>
	.archive-container {
		max-width: 800px;
		padding-top: var(--size-4);

		/* 1. Define Local Color Variables to bypass app.css issues */
		--archive-bg: var(--background);
		--archive-h1: var(--text-1);
		--archive-link: var(--text-1);
		--archive-date: var(--text-2);
		--archive-border: var(--border);
	}

	/* 2. Force visibility in Lite Mode by targeting the global attribute */
	:global([color-scheme='light']) .archive-container {
		--archive-bg: var(--gray-0);
		--archive-h1: var(--gray-12);
		--archive-link: var(--gray-12);
		--archive-date: var(--gray-8);
		--archive-border: var(--gray-3);
	}

	.page-title {
		font-size: var(--font-size-6);
		color: var(--archive-h1); /* Use local var */
		margin-bottom: var(--size-10);
		letter-spacing: var(--font-letterspacing-1);
	}

	.year-block {
		margin-bottom: var(--size-11);
	}

	.year-label {
		font-family: var(--font-mono);
		font-size: var(--font-size-2);
		color: var(--orange-5);
		border-bottom: 1px solid var(--archive-border);
		padding-bottom: var(--size-2);
		margin-bottom: var(--size-7);
	}

	.post-list {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: var(--size-6);
	}

	.post-row {
		display: flex;
		align-items: baseline;
		gap: var(--size-6);
	}

	.minimal-date {
		font-family: var(--font-mono);
		font-size: var(--font-size-1);
		color: var(--archive-date); /* Use local var */
		min-width: 50px;
	}

	.post-link {
		/* 3. The !important here kills the "Pink" from app.css */
		color: var(--archive-link) !important;
		text-decoration: none;
		font-size: var(--font-size-4);
		transition: color 0.2s ease;
	}

	.post-link:hover {
		color: var(--orange-5) !important;
	}

	/* Mobile handling for full visibility */
	@media (max-width: 768px) {
		.post-row {
			flex-direction: column;
			gap: var(--size-1);
		}
		.minimal-date {
			font-size: var(--font-size-00);
		}
	}
</style>
