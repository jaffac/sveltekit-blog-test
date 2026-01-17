import type { LayoutLoad } from './$types'

export const prerender = true

export const load: LayoutLoad = async ({ url, fetch }) => {
	// SvelteKit's fetch handles absolute paths correctly during prerendering
	const response = await fetch('/api/posts')

	if (!response.ok) {
		throw new Error(`Failed to load posts for layout: ${response.status}`)
	}

	const posts = await response.json()

	return {
		url: url.pathname,
		posts: posts
	}
}
