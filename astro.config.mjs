// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages 项目页：站点根 = https://yockii.github.io/mindverse-site
// 若以后挂自定义域名，把 site 改成域名、base 改成 '/'。
export default defineConfig({
	site: 'https://yockii.github.io',
	base: '/mindverse-site',
	vite: {
		plugins: [tailwindcss()],
	},
});
