import { dev } from '$app/environment'

export const title = 'Blog.link'
export const description = 'Self-hosting, privacy, and lightweight dev from Sarajevo.'
// This ensures your RSS feed and social tags use the real URL when live
export const url = dev ? 'http://localhost:5173' : 'https://blog.jaffac.dpdns.org'
