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
		/* This creates the big, airy vertical rhythm */
		:global(p) {
			margin-top: var(--size-9); /* Big space between paragraphs */
			line-height: var(--font-lineheight-4);
			font-size: var(--font-size-3);
		}

		/* Keep text tight to the header it belongs to */
		:global(h2 + p),
		:global(h3 + p) {
			margin-top: var(--size-3);
		}

		:global(h2) {
			margin-top: var(--size-12); /* Massive space before new sections */
			color: var(--text-1);
		}

		:global(ul) {
			margin-top: var(--size-6);
			padding-inline-start: var(--size-8);
			list-style-type: '🔥';
		}

		:global(li) {
			margin-block: var(--size-4);
		}
	}
</style>
