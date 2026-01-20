<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()

	// Safety check: Fallback to an empty object if meta is missing
	let meta = $derived(data?.meta || { title: 'Loading...', date: '', categories: [] })
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={meta.title} />
</svelte:head>

<article>
	{#if data?.meta}
		<hgroup>
			<h1>{meta.title}</h1>
			<p>Published at {formatDate(meta.date)}</p>
		</hgroup>

		<div class="tags">
			{#each meta.categories as category}
				<span class="tag">&num;{category}</span>
			{/each}
		</div>

		<div class="prose">
			<data.content />
		</div>
	{:else}
		<p>Post not found.</p>
	{/if}
</article>

<style>
	article {
		/* Increased width slightly for a more "gallery" feel */
		max-inline-size: 72ch;
		margin-inline: auto;
		padding-bottom: var(--size-12);

		h1 {
			text-transform: capitalize;
			color: var(--brand);
			font-size: var(--font-size-7);
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-top: var(--size-4);
			margin-bottom: var(--size-10); /* Air before content starts */

			.tag {
				color: var(--orange-5);
				font-family: var(--font-monospace-code);
				font-size: var(--font-size-0);
			}
		}
	}

	.prose {
		/* Target all links and every possible state */
		:global(a),
		:global(a:hover),
		:global(a:focus),
		:global(a:active) {
			text-decoration: none !important;
			/* This removes the 'ghost' underline some browsers add */
			text-decoration-line: none !important;
			/* This removes the box some browsers put around links */
			outline: none !important;
			border-bottom: none !important;
		}

		:global(a) {
			color: var(--orange-6) !important;
			font-weight: 700;
			transition: color 0.2s ease;
		}

		:global(a:hover) {
			color: var(--orange-3) !important;
			/* Instead of a line, we use a glow to show it's active */
			text-shadow: 0 0 10px rgba(255, 145, 0, 0.3);
		}
	}
</style>
