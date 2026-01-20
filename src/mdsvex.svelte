<script lang="ts" module>
	import { img } from '$lib/components/custom'
	// 1. Add the Electric Island import here
	import ElectricIsland from '$lib/components/custom/electricIsland.svelte'

	// 2. Export it so MDSvex can use it automatically
	export { img, ElectricIsland }
</script>

<script lang="ts">
	let props = $props()
</script>

<div class="prose">
	{@render props.children?.()}
</div>
