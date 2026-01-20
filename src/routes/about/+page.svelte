<section class="prose page-container">
	<h1>About Me</h1>

	<div class="content-wrapper">
		<p>
			I am a developer focused on <strong>self-hosting</strong>, privacy, and building lightweight
			web applications. This blog is my digital garden where I document my journey with Debian,
			SvelteKit, and homelab experiments.
		</p>

		<blockquote class="custom-quote">
			"Reclaiming the digital shelf, one service at a time."
		</blockquote>
	</div>
</section>

<style>
	.page-container {
		/* max-width: var(--size-content-3); */
		max-width: 80ch; /* Slightly wider for a more open feel */
		margin-inline: auto;
		padding: var(--size-12) var(--size-5); /* Increased top/bottom padding */
	}

	h1 {
		margin-bottom: var(--size-8); /* More space after the title */
		font-size: var(--font-size-8);
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--size-8); /* Significant gap between paragraph and quote */
	}

	p {
		font-size: var(--font-size-3); /* Bigger text */
		line-height: var(--font-lineheight-4); /* More space between lines of text */
		color: var(--text-1);
	}

	.custom-quote {
		margin-top: var(--size-4);
		font-size: var(--font-size-4);
		font-style: italic;
		border-inline-start: 4px solid var(--brand);
		padding-inline-start: var(--size-6);
		color: var(--text-2);
		background: var(--surface-3);
	}
</style>
