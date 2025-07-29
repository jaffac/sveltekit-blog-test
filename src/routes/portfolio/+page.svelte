<script>
	// The same project data works perfectly here.
	// We'll just display it differently.
	const projects = [
		{
			title: 'Project One: Video Showcase',
			description:
				'This project demonstrates the use of Media Chrome for a custom video player, styled according to the global theme. It highlights advanced frontend capabilities.',
			tags: ['SvelteKit', 'Media Chrome', 'CSS Variables', 'HLS'],
			liveUrl: '#',
			repoUrl: '#'
		},
		{
			title: 'Project Two: Data Visualization',
			description:
				'An interactive dashboard for visualizing complex datasets. Built with performance and accessibility in mind, using the Atkinson Hyperlegible font you specified.',
			tags: ['Svelte', 'D3.js', 'API', 'JavaScript'],
			liveUrl: '#',
			repoUrl: '#'
		},
		{
			title: 'Project Three: E-commerce Platform',
			description:
				'A full-featured online store with a custom backend. The design uses the surface color system to create a clean, layered user interface.',
			tags: ['SvelteKit', 'Node.js', 'Stripe', 'PostgreSQL'],
			liveUrl: '#',
			repoUrl: '#'
		},
		{
			title: 'Project Four: Personal Blog',
			description:
				'The very blog you are on! Built from the ground up to be lightweight, fast, and fully responsive with a custom dark/light theme switcher.',
			tags: ['SvelteKit', 'Markdown', 'Open Props'],
			liveUrl: '#',
			repoUrl: '#'
		}
	]

	// Self-contained SVG icons are still useful for the links
	const icons = {
		github:
			'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
		externalLink:
			'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>'
	}
</script>

<section class="portfolio-container prose">
	<header>
		<h1>My Work</h1>
		<p>A list of selected projects I've worked on.</p>
	</header>

	<ul class="project-list">
		{#each projects as project}
			<li class="project-item">
				<h2>
					<a href={project.liveUrl || project.repoUrl} target="_blank" rel="noopener noreferrer">
						{project.title}
					</a>
				</h2>

				<p>{project.description}</p>

				<p class="tech-stack">
					<strong>Built with:</strong>
					{project.tags.join(', ')}
				</p>

				<div class="project-links">
					{#if project.liveUrl}
						<a href={project.liveUrl} class="cta-link" target="_blank" rel="noopener noreferrer">
							{@html icons.externalLink}
							<span>Live Demo</span>
						</a>
					{/if}
					{#if project.repoUrl}
						<a href={project.repoUrl} class="cta-link" target="_blank" rel="noopener noreferrer">
							{@html icons.github}
							<span>Source Code</span>
						</a>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
</section>

<style>
	/* All styles use the CSS variables from your global stylesheet */
	.portfolio-container {
		padding-top: 0, 9rem;
		max-width: 150ch; /* Increased from 70ch to 90ch, or even more like 120ch */
		margin-inline: auto;
	}

	header {
		margin-bottom: var(--size-fluid-7);
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-5);
	}

	header h1 {
		color: var(--brand); /* Using your brand color for the main title */
		font-size: var(--font-size-8);
	}

	/* The .prose class from your global CSS will style most of the text */
	.prose h2 {
		font-size: var(--font-size-4);
		margin-bottom: var(--size-2);
	}

	.prose h2 a {
		color: var(--text-1);
		text-decoration: none;
		border-bottom: 2px solid transparent;
		transition: border-color 0.2s ease-in-out;
	}

	.prose h2 a:hover {
		border-bottom-color: var(--brand);
	}

	.project-list {
		list-style: none;
		padding: 0;
	}

	.project-item {
		padding: var(--size-6) 0;
		border-bottom: 1px solid var(--border);
	}

	.project-item:first-child {
		padding-top: var(--size-5);
	}

	.project-item:last-child {
		border-bottom: none;
	}

	.tech-stack {
		font-family: var(--font-monospace-code);
		font-size: var(--font-size-0);
		color: var(--text-2);
	}

	.project-links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--size-5);
		margin-top: var(--size-4);
	}

	.cta-link {
		display: inline-flex;
		align-items: center;
		gap: var(--size-2);
		color: var(--link);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s ease;
	}

	.cta-link:hover {
		color: var(--brand);
	}

	.cta-link :global(svg) {
		width: 18px;
		height: 18px;
		stroke: currentColor;
	}
</style>
