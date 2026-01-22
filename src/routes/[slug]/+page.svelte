<script lang="ts">
	import { formatDate } from '$lib/utils'
	import { untrack } from 'svelte' // If you want to avoid re-running on content change

	let { data } = $props()

	let meta = $derived(data?.meta || { title: 'Loading...', date: '', categories: [] })

	// AUTOMATED LINK LOGIC:
	// This effect runs after the component is mounted to the DOM
	$effect(() => {
		// We look for links specifically inside the 'prose' div
		const links = document.querySelectorAll('.prose a')

		links.forEach((link) => {
			const href = link.getAttribute('href')
			// Check if it's an external link (starts with http)
			if (href && href.startsWith('http')) {
				link.setAttribute('target', '_blank')
				link.setAttribute('rel', 'noopener noreferrer')
			}
		})
	})
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
		max-inline-size: 72ch; /* Good choice, keeps line lengths readable */
		margin-inline: auto;
		padding-bottom: var(--size-12);

		h1 {
			text-transform: capitalize;
			color: var(--brand);
			font-size: var(--font-size-7);
			line-height: var(--font-lineheight-1); /* Tighter heading line height */
		}

		h1 + p {
			margin-top: var(--size-2);
			color: var(--text-2);
		}

		.tags {
			display: flex;
			gap: var(--size-3);
			margin-top: var(--size-4);
			margin-bottom: var(--size-10);

			.tag {
				color: var(--orange-5);
				font-family: var(--font-monospace-code);
				font-size: var(--font-size-0);
			}
		}
	}

	.prose {
		/* FIX FOR CRAMPED TEXT: Vertical Rhythm */
		display: flex;
		flex-direction: column;
		gap: var(--size-6); /* Consistent spacing between all blocks */

		:global(p) {
			line-height: 1.75; /* Increased for better readability */
			font-size: var(--font-size-2);
			color: var(--text-1);
		}

		:global(h2) {
			margin-top: var(--size-8); /* Significant gap before a new section */
			margin-bottom: var(--size-2);
			color: var(--text-1);
			font-size: var(--font-size-5);
		}

		/* Blockquote / Pull Quote style for that "Island" look */
		:global(blockquote) {
			margin-inline: 0;
			padding: var(--size-4) var(--size-6);
			border-left: 4px solid var(--orange-5);
			background: var(--surface-2);
			font-style: italic;
		}

		/* Cleaning up the Links */
		:global(a),
		:global(a:hover),
		:global(a:focus),
		:global(a:active) {
			text-decoration: none !important;
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
			text-shadow: 0 0 10px rgba(255, 145, 0, 0.3);
		}
	}
</style>
