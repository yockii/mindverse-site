// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages 项目页：服务于 https://yockii.github.io/taixu-site/ 子路径，故 base '/taixu-site'
// （资源/链接经 base 自动加前缀，否则 /_astro/*、/panel.png 在子路径下 404）。
// 若日后切自定义域名 taixu.icu 根服务：base 改回 '/' 并加 public/CNAME。
export default defineConfig({
	site: 'https://yockii.github.io',
	base: '/taixu-site',
	// 多语言：默认 en（站点根，对外读作国际站，降低监管扫描权重）；zh 在 /zh/。
	// prefixDefaultLocale:false → en 不带 /en 前缀，落在站点根。
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'de'],
		routing: { prefixDefaultLocale: false },
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
