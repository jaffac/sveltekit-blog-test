<script>
	// No complex logic needed, just a clean template
</script>

<section class="contact-vertical-wrapper">
	<header class="contact-header">
		<h1>Connect</h1>
		<p class="subtitle">Reach out for collaborations, self-hosting queries, or just a chat.</p>
	</header>

	<div class="contact-stack">
		<div class="contact-card">
			<div class="card-header">
				<span class="label">Direct Channels</span>
				<span class="status-dot">Available</span>
			</div>

			<div class="content-row">
				<div class="info-group">
					<h3>Email</h3>
					<a href="mailto:jaffaster@gmail.com" class="primary-link">jaffaster@gmail.com</a>
				</div>
				<div class="info-group">
					<h3>Location</h3>
					<p class="data-text">Sarajevo, B&H</p>
				</div>
			</div>
		</div>

		<div class="contact-card">
			<div class="card-header">
				<span class="label">Digital Presence</span>
			</div>

			<div class="content-row">
				<div class="info-group">
					<h3>GitHub</h3>
					<a
						href="https://github.com/jaffac"
						target="_blank"
						rel="noopener noreferrer"
						class="primary-link">github.com/jaffac</a
					>
				</div>
				<div class="info-group">
					<h3>Updates</h3>
					<a href="/rss" class="primary-link" data-sveltekit-reload> RSS Subscription </a>
				</div>
			</div>
		</div>
	</div>

	<footer class="contact-footer">
		<p class="terminal-text">> echo "New phone, who dis?"</p>
	</footer>
</section>

<style>
	.contact-vertical-wrapper {
		max-width: 900px;
		margin-inline: auto;
		padding: var(--size-12) var(--size-5);
	}

	.contact-header {
		margin-bottom: var(--size-11);
	}

	h1 {
		font-size: var(--font-size-8);
		color: var(--brand);
		margin-bottom: var(--size-2);
	}

	.subtitle {
		font-size: var(--font-size-3);
		color: var(--text-2);
		line-height: var(--font-lineheight-3);
	}

	/* THE STACK */
	.contact-stack {
		display: flex;
		flex-direction: column;
		gap: var(--size-8);
	}

	/* THE CARD */
	.contact-card {
		background: var(--surface-2);
		border: 1px solid var(--border);
		border-radius: var(--radius-3);
		padding: var(--size-9);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: var(--size-8);
		border-bottom: 1px solid var(--border);
		padding-bottom: var(--size-4);
	}

	.label {
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-size: var(--font-size-00);
		color: var(--text-2);
		font-weight: var(--font-weight-7);
	}

	.status-dot {
		display: flex;
		align-items: center;
		gap: var(--size-2);
		color: var(--green-6);
		font-weight: bold;
		font-size: var(--font-size-0);
	}

	.status-dot::before {
		content: '';
		width: 10px;
		height: 10px;
		background: var(--green-6);
		border-radius: var(--radius-round);
		box-shadow: 0 0 10px var(--green-6);
	}

	.content-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: var(--size-8);
	}

	.info-group h3 {
		font-size: var(--font-size-0);
		color: var(--text-2);
		margin-bottom: var(--size-2);
		text-transform: uppercase;
	}

	.primary-link,
	.data-text {
		font-size: var(--font-size-4);
		font-weight: var(--font-weight-7);
		color: var(--text-1);
		text-decoration: none;
	}

	.primary-link:hover {
		color: var(--brand);
		text-decoration: underline;
	}

	.contact-footer {
		margin-top: var(--size-12);
		text-align: center;
		opacity: 0.5;
	}

	.terminal-text {
		font-family: var(--font-monospace-code);
		font-size: var(--font-size-1);
	}

	@media (max-width: 600px) {
		.contact-card {
			padding: var(--size-6);
		}
		.primary-link {
			font-size: var(--font-size-3);
		}
	}
</style>
