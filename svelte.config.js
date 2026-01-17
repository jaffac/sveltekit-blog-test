import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Pre-loading languages here makes the build much faster
const highlighter = await createHighlighter({
	themes: ['poimandres'],
	langs: ['javascript', 'typescript', 'css', 'html', 'json', 'bash']
})

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		_: path.join(__dirname, 'src', 'mdsvex.svelte')
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			// No need to load languages inside here anymore; they are pre-loaded above
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'poimandres' }))
			return `{@html \`${html}\` }`
		}
	},
	remarkPlugins: [[remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		// FIX: Explicitly set the runtime to match your Debian Node version
		adapter: adapter({
			runtime: 'nodejs22.x'
		}),
		alias: {
			$components: 'src/lib/components'
		}
	}
}

export default config
