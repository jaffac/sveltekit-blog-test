import type { PageLoad } from './$types'
import type { Post } from '$lib/types'

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/api/posts')

	if (!response.ok) {
		throw new Error(`Failed to fetch posts: ${response.status}`)
	}

	const posts: Post[] = await response.json()
	return { posts }
}
