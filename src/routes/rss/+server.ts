import type { RequestHandler } from './$types'
import * as config from '$lib/config'
import type { Post } from '$lib/types'

export const GET: RequestHandler = async ({ fetch }) => {
	// 1. Added leading slash for absolute internal fetch
	const response = await fetch('/api/posts')

	if (!response.ok) {
		return new Response('Could not fetch posts', { status: 500 })
	}

	const posts: Post[] = await response.json()

	const headers = {
		'Content-Type': 'application/xml',
		'Cache-Control': 'max-age=0, s-maxage=3600'
	}

	const xml = `
        <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
            <channel>
                <title>${config.title}</title>
                <description>${config.description}</description>
                <link>${config.url}</link>
                <atom:link href="${config.url}/rss" rel="self" type="application/rss+xml"/>
                ${posts
									.map(
										(post) => `
                        <item>
                            <title>${post.title}</title>
                            <description>${post.description}</description>
                            <link>${config.url}/${post.slug}</link>
                            <guid isPermaLink="true">${config.url}/${post.slug}</guid>
                            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
                        </item>
                    `
									)
									.join('')}
            </channel>
        </rss>
    `.trim()

	return new Response(xml, { headers })
}
