import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import path from 'path'
import { fileURLToPath } from 'url' // Required for ESM paths

// This calculates the absolute path to your 'sveltekit-blog-test' folder
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// We create the highlighter once outside the config to make builds much faster
const highlighter = await createHighlighter({
	themes: ['poimandres'],
	langs: ['javascript', 'typescript', 'css', 'html']
})

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	layout: {
		// FIXED: Using path.join with __dirname ensures it finds the file
		// inside sveltekit-blog-test/src/mdsvex.svelte
		_: path.join(__dirname, 'src', 'mdsvex.svelte')
	},
	highlight: {
		highlighter: async (code, lang = 'text') => {
			await highlighter.loadLanguage('javascript', 'typescript', 'css', 'html')
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
		adapter: adapter(),
		alias: {
			$components: 'src/lib/components'
		}
	}
}

export default config
