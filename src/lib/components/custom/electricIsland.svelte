<script lang="ts">
	let { children } = $props()
</script>

<div class="island-wrapper">
	<svg style="position: absolute; width: 0; height: 0;" aria-hidden="true">
		<filter id="wiggle" x="-20%" y="-20%" width="140%" height="140%">
			<feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" result="noise">
				<animate
					attributeName="baseFrequency"
					values="0.015;0.02;0.015"
					dur="10s"
					repeatCount="indefinite"
				/>
			</feTurbulence>
			<feDisplacementMap in="SourceGraphic" scale="15" />
		</filter>
	</svg>

	<div class="electric-border"></div>
	<div class="island-content">
		{@render children?.()}
	</div>
</div>

<style>
	.island-wrapper {
		position: relative;
		margin-block: var(--size-12);
		z-index: 1;
	}

	.electric-border {
		position: absolute;
		inset: -4px;
		border: 2px solid var(--orange-5);
		border-radius: var(--radius-3);
		filter: url(#wiggle);
		pointer-events: none;
	}

	.island-content {
		background: var(--surface-2);
		padding: var(--size-9);
		border-radius: var(--radius-3);
		/* Ensures markdown inside is spaced correctly */
		display: flex;
		flex-direction: column;
		gap: var(--size-4);
	}
</style>
