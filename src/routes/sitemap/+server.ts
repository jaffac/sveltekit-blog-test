import type { RequestHandler } from './$types'
import * as config from '$lib/config'
import type { Post } from '$lib/types'

export const GET: RequestHandler = async ({ fetch }) => {
	try {
		const response = await fetch('/api/posts')

		if (!response.ok) {
			throw new Error(`Failed to fetch posts: ${response.status}`)
		}

		const posts: Post[] = await response.json()

		const headers = {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}

		const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${config.url}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>${config.url}/archive</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    ${posts
			.map(
				(post) => `
    <url>
        <loc>${config.url}/${post.slug}</loc>
        <lastmod>${new Date(post.date).toISOString().split('T')[0]}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>`
			)
			.join('')}
</urlset>`.trim()

		return new Response(xml, { headers })
	} catch (error) {
		console.error('Sitemap generation error:', error)
		return new Response(
			`<?xml version="1.0" encoding="UTF-8"?>
            <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                <url><loc>${config.url}</loc></url>
            </urlset>`,
			{ headers: { 'Content-Type': 'application/xml' } }
		)
	}
}
