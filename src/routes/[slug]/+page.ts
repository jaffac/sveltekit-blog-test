import type { PageLoad } from './$types'
import { error } from '@sveltejs/kit'

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../posts/${params.slug}.md`)

		return {
			content: post.default,
			meta: post.metadata
		}
	} catch {
		// We removed the (e) because it wasn't being used
		throw error(404, `Could not find ${params.slug}`)
	}
}
