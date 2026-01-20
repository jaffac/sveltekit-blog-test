<script lang="ts">
	let { children } = $props()
</script>

<div class="island-card">
	<div class="island-content">
		{@render children?.()}
	</div>
</div>

<style>
	.island-card {
		position: relative;
		margin-block: var(--size-12);
		background: var(--surface-3);
		border-radius: var(--radius-3);
		/* Simple, clean border on all sides for structure */
		border: 1px solid var(--surface-4);
		overflow: hidden;
	}

	/* The "Electric" accent: A single, vibrant vertical line */
	.island-card::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 4px;
		background: linear-gradient(to bottom, var(--orange-5), var(--orange-3));
		box-shadow: 2px 0 10px var(--orange-9);
	}

	.island-content {
		padding: var(--size-8);

		/* Reset spacing inside the box to prevent "Ritual" from looking clunky */
		:global(h3) {
			margin-top: 0 !important;
			color: var(--text-1);
			font-size: var(--font-size-4);
		}

		:global(p) {
			margin-top: var(--size-3) !important;
			font-size: var(--font-size-2) !important;
			line-height: var(--font-lineheight-4);
			color: var(--text-2);
		}
	}

	@media (max-width: 600px) {
		.island-card {
			/* Remove margins on mobile to let it feel like a "section" */
			margin-inline: calc(var(--size-4) * -1);
			border-radius: 0;
			border-inline: none;
		}

		.island-content {
			padding: var(--size-6) var(--size-8);
		}
	}
</style>
