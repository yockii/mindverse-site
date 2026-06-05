# mindverse-site

心域文明 **Mindverse** 的公开介绍页（落地页）。

- 技术栈：[Astro](https://astro.build/) + Tailwind CSS v4
- 托管：GitHub Pages（push 到 `main` 自动构建部署，见 `.github/workflows/deploy.yml`）
- 线上：https://yockii.github.io/mindverse-site

> 本仓库仅为公开介绍页，**不含**产品源码与实现细节。

## 本地开发

```bash
pnpm install
pnpm dev      # 本地预览
pnpm build    # 构建到 dist/
```

## 改文案

页面与文案集中在 `src/pages/index.astro`，样式走 Tailwind（`src/styles/global.css`）。改完 push 即自动重新部署。

镜像：[`yockii/mindverse`](https://hub.docker.com/r/yockii/mindverse) on Docker Hub。
