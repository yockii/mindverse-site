// 站点多语言字典。默认 en（对外读作国际站，降低监管扫描权重）；zh 可切。
// 单页落地页：所有可见文案集中此处，Landing.astro 按 lang 取用。新增语言加一个 key 即可。

export type Lang = 'en' | 'zh' | 'ja' | 'ko' | 'es' | 'fr' | 'de';
export const LANGS: Lang[] = ['en', 'zh', 'ja', 'ko', 'es', 'fr', 'de'];
export const DEFAULT_LANG: Lang = 'en';
// 切换菜单里的显示名（用各语言自称）。
export const LANG_NAMES: Record<Lang, string> = {
	en: 'English',
	zh: '中文',
	ja: '日本語',
	ko: '한국어',
	es: 'Español',
	fr: 'Français',
	de: 'Deutsch',
};
// 非 en/zh 为机器辅助翻译，待母语者复校（landing 文案，含合规免责/安全标识等关键句）。

export interface Pillar {
	icon: string;
	title: string;
	tag: string;
	body: string;
}

export interface Strings {
	htmlLang: string;
	metaTitle: string;
	metaDesc: string;
	ogTitle: string;
	ogDesc: string;
	nav: { forAgent: string; github: string; dockerHub: string };
	langSwitch: string; // 切到另一语言的标签
	hero: {
		badge: string;
		kicker: string;
		titleA: string; // “不是聊天机器人。”
		titleB: string; // 渐变高亮句
		lead1: string;
		leadEmph: string; // 观察与养育
		lead2: string;
		poetic: string;
		ctaStart: string;
		ctaGet: string;
		versionNote: string;
		panelBar: string;
		panelCaption: string;
		panelCaptionSays: string;
		panelCaptionDoes: string;
		panelAlt: string;
	};
	compare: {
		notTitle: string;
		isTitle: string;
		not: string[];
		is: string[];
	};
	pillarsTitle: string;
	pillars: Pillar[];
	innerOuter: { title: string; body: string };
	start: {
		title: string;
		intro: string;
		step1: string;
		step2: string;
		step2note: string;
		step3: string;
		step3comment: string;
		warn: string;
		runAltLabel: string; // “不想用 compose？直接 docker run：”
		runAltNote: string; // 关于 TAIXU_ACCESS_TOKEN 留空/填写的说明
	};
	disk: { title: string; body1: string; body2: string };
	security: { title: string; body: string; envLine: string; note: string };
	stage: { body: string; feedbackPre: string; feedbackLink: string; feedbackPost: string };
	closing: { line: string; cta: string };
	footer: { left: string; tagline: string };
	disclaimer: string; // 合规免责（AI 生成 / 非营利学术观测）
	composeComments: { brain: string; workspace: string; token: string };
}

import { en } from './locales/en';
import { zh } from './locales/zh';
import { ja } from './locales/ja';
import { ko } from './locales/ko';
import { es } from './locales/es';
import { fr } from './locales/fr';
import { de } from './locales/de';

// 各语言字典拆到 locales/<lang>.ts（避免单文件过大）；本文件只留类型 + 语言元数据 + 装配。
export const ui: Record<Lang, Strings> = { en, zh, ja, ko, es, fr, de };
