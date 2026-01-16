<script>
	const projects = [
		{
			title: 'Booklore Self-Hosted',
			description:
				'A private, lightweight book tracking application. I manage my entire library here, away from big tech platforms.',
			tags: ['Docker', 'Debian', 'Privacy'],
			status: 'Live',
			link: '/booklore'
		},
		{
			title: 'Custom Radio Player',
			description:
				'Integrated Media Chrome player with real-time stream handling and CORS-compliant audio fetching.',
			tags: ['Svelte', 'Media Chrome', 'Audio API'],
			status: 'Production',
			link: '#'
		},
		{
			title: 'Personal Dev Blog',
			description:
				'This site! A high-performance SvelteKit blog utilizing Open Props for design tokens and mdsvex for content.',
			tags: ['SvelteKit', 'Open Props', 'Vite'],
			status: 'Active',
			link: '/'
		}
	]
</script>

<section class="portfolio-grid-wrapper">
	<header class="portfolio-header">
		<h1>Selected Work</h1>
	</header>

	<div class="grid">
		{#each projects as project}
			<a href={project.link} class="card">
				<div class="card-content">
					<div class="card-top">
						<span class="status-pill">{project.status}</span>
						<div class="tags">
							{#each project.tags as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>

					<h3>{project.title}</h3>
					<p>{project.description}</p>
				</div>
				<div class="card-footer">
					<span>View Project →</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.portfolio-grid-wrapper {
		max-width: 1200px;
		margin-inline: auto;
		padding: var(--size-8) var(--size-5);
	}

	.portfolio-header {
		margin-bottom: var(--size-9);
		text-align: center;
	}

	.portfolio-header h1 {
		font-size: var(--font-size-8);
		color: var(--brand);
		margin-bottom: var(--size-2);
	}

	/* THE GRID */
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--size-6);
	}

	/* THE CARD */
	.card {
		background: var(--surface-2);
		border: 1px solid var(--border);
		border-radius: var(--radius-3);
		padding: var(--size-6);
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition:
			transform 0.2s var(--ease-2),
			border-color 0.2s var(--ease-2),
			background 0.2s var(--ease-2);
	}

	.card:hover {
		transform: translateY(-5px);
		border-color: var(--brand);
		background: var(--surface-3);
	}

	.card-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: var(--size-4);
	}

	.status-pill {
		font-size: var(--font-size-00);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		background: var(--brand);
		color: white;
		padding: 2px 8px;
		border-radius: var(--radius-round);
	}

	.tags {
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
		justify-content: flex-end;
	}

	.tag {
		font-family: var(--font-monospace-code);
		font-size: var(--font-size-00);
		color: var(--text-2);
		background: var(--surface-4);
		padding: 2px 6px;
		border-radius: var(--radius-1);
	}

	h3 {
		font-size: var(--font-size-4);
		margin-bottom: var(--size-2);
		color: var(--text-1);
	}

	p {
		font-size: var(--font-size-1);
		color: var(--text-2);
		line-height: var(--font-lineheight-3);
	}

	.card-footer {
		margin-top: var(--size-6);
		font-weight: var(--font-weight-6);
		color: var(--brand);
		font-size: var(--font-size-1);
	}

	@media (max-width: 768px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
