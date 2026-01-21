<script>
	const projects = [
		{
			title: 'Mirela Art Gallery',
			description:
				'A curated digital showcase of jewelry, textures, and illustrations. This project focuses on high-fidelity image delivery and a minimalist aesthetic to highlight the delicate details of traditional craftsmanship in a digital space.',
			tags: ['Design', 'Gallery', 'Art'],
			status: 'Live',
			link: 'https://bymirela.dpdns.org/'
		},
		{
			title: 'Booklore Self-Hosted',
			description:
				'A private, lightweight book tracking application. I manage my entire library here, away from big tech platforms. Built to handle massive metadata locally with a focus on speed and privacy.',
			tags: ['Docker', 'Debian', 'Privacy'],
			status: 'Live',
			link: '/booklore'
		},
		{
			title: 'Custom Radio Player',
			description:
				'Integrated Media Chrome player with real-time stream handling and CORS-compliant audio fetching. Optimized for Nordic Lodge Copenhagen to provide a seamless listening experience.',
			tags: ['Svelte', 'Media Chrome', 'Audio API'],
			status: 'Production',
			link: '#'
		},
		{
			title: 'Personal Dev Blog',
			description:
				'This site! A high-performance SvelteKit blog utilizing Open Props for design tokens and mdsvex for content. Fast, responsive, and fully automated deployment.',
			tags: ['SvelteKit', 'Open Props', 'Vite'],
			status: 'Active',
			link: '/'
		}
	]
</script>

<section class="portfolio-vertical-wrapper">
	<header class="portfolio-header">
		<h1>Selected Work</h1>
		<p class="subtitle">A deep dive into my technical projects and experiments.</p>
	</header>

	<div class="project-stack">
		{#each projects as project}
			<a href={project.link} class="vertical-card">
				<div class="card-body">
					<div class="meta-row">
						<span class="status-pill">{project.status}</span>
						<div class="tags">
							{#each project.tags as tag}
								<span class="tag">{tag}</span>
							{/each}
						</div>
					</div>

					<div class="text-content">
						<h3>{project.title}</h3>
						<p>{project.description}</p>
					</div>
				</div>

				<div class="card-action">
					<span>Explore Project</span>
					<span class="arrow">→</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<style>
	.portfolio-vertical-wrapper {
		max-width: 900px; /* Narrower than the grid to keep lines of text readable */
		margin-inline: auto;
		padding: var(--size-12) var(--size-5);
	}

	.portfolio-header {
		margin-bottom: var(--size-11);
	}

	.portfolio-header h1 {
		font-size: var(--font-size-8);
		color: var(--brand);
		margin-bottom: var(--size-2);
	}

	.subtitle {
		font-size: var(--font-size-3);
		color: var(--text-2);
	}

	/* THE STACK */
	.project-stack {
		display: flex;
		flex-direction: column;
		gap: var(--size-10); /* Massive space between vertical boxes */
	}

	/* THE VERTICAL CARD */
	.vertical-card {
		background: var(--surface-3);
		border: 1px solid var(--border);
		border-radius: var(--radius-3);
		padding: var(--size-9);
		text-decoration: none;
		color: inherit;
		display: flex;
		flex-direction: column;
		gap: var(--size-6);
		transition:
			transform 0.3s var(--ease-3),
			border-color 0.3s var(--ease-3);
	}

	.vertical-card:hover {
		border-color: var(--brand);
		transform: scale(1.01);
		background: var(--surface-3);
	}

	.meta-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--size-6);
	}

	.status-pill {
		font-size: var(--font-size-0);
		font-weight: var(--font-weight-7);
		text-transform: uppercase;
		background: var(--brand);
		color: white;
		padding: var(--size-1) var(--size-3);
		border-radius: var(--radius-round);
	}

	.tags {
		display: flex;
		gap: var(--size-2);
	}

	.tag {
		font-family: var(--font-monospace-code);
		font-size: var(--font-size-0);
		color: var(--text-2);
		background: var(--surface-4);
		padding: var(--size-1) var(--size-2);
		border-radius: var(--radius-1);
	}

	h3 {
		font-size: var(--font-size-6); /* Large, bold titles */
		margin-bottom: var(--size-3);
		color: var(--text-1);
	}

	p {
		font-size: var(--font-size-3); /* Larger body text like the About page */
		color: var(--text-2);
		line-height: var(--font-lineheight-4);
		max-width: 65ch; /* Keeps description width comfortable to read */
	}

	.card-action {
		margin-top: var(--size-6);
		display: flex;
		align-items: center;
		gap: var(--size-2);
		font-weight: var(--font-weight-7);
		color: var(--brand);
		font-size: var(--font-size-3);
	}

	.arrow {
		transition: transform 0.2s var(--ease-3);
	}

	.vertical-card:hover .arrow {
		transform: translateX(10px);
	}

	@media (max-width: 600px) {
		.vertical-card {
			padding: var(--size-6);
		}
		.meta-row {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--size-3);
		}
	}
</style>
