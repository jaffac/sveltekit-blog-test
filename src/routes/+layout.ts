export const prerender = true

export async function load({ url, fetch }) {
	// Fetch the posts from your existing API or helper
	const response = await fetch('/api/posts')
	const posts = await response.json()

	return {
		url: url.pathname,
		posts: posts // This now goes to your layout props
	}
}
