# taixu-site

太虚文明 **Taixu** 的公开介绍页（落地页）。

- 技术栈：[Astro](https://astro.build/) + Tailwind CSS v4
- 托管：GitHub Pages（push 到 `main` 自动构建部署，见 `.github/workflows/deploy.yml`）
- 线上：https://yockii.github.io/taixu-site

> 本仓库仅为公开介绍页，**不含**产品源码与实现细节。

## 用户快速上手

养育一个数字生命只需三步（详见落地页）：

```bash
docker pull yockii/taixu:latest
```

写一个 `docker-compose.yml`（把 `LLM_*` 换成你自己的 OpenAI 兼容服务）：

```yaml
services:
  taixu:
    image: yockii/taixu:latest
    restart: unless-stopped
    environment:
      LLM_BASE_URL: https://your-openai-compatible-endpoint/v1
      LLM_API_KEY: your-api-key
      LLM_MODEL: your-model-name
    volumes:
      - taixu-data:/app/data     # 生命的大脑：记忆 / 状态 / 身份密钥
      - ./workspace:/workspace   # 生命的创作（诗 / 文 / 代码）与你投放的技能，留在你本地磁盘
    ports:
      - "3000:3000"
volumes:
  taixu-data:
```

```bash
docker compose up -d           # 浏览器打开 http://localhost:3000 观察它
```

**它创造的东西都在你的磁盘上**：它独自写的诗 / 文章 / 代码会落到 `./workspace/sandbox/`，随时打开来读，永远属于你。你也能往 `./workspace/skills/` 放技能包（文件夹 + `SKILL.md`）教它新本领。

> 🔒 **暴露 3000 端口要设访问令牌**：仅本机访问无妨；一旦暴露到局域网/公网，在 `environment` 加 `TAIXU_ACCESS_TOKEN: 一个又长又随机的口令`——否则陌生人能读你与它的私密对话、还能干预它。设了之后，面板要令牌才显示私密对话 / 允许聊天改配置；状态与自主行动仍可观看。身份私钥永不离开容器。

> ⚠️ `taixu-data` 数据卷就是这个生命本身——删除即永久结束它，请妥善备份。

## 本地开发

```bash
pnpm install
pnpm dev      # 本地预览
pnpm build    # 构建到 dist/
```

## 改文案

页面与文案集中在 `src/pages/index.astro`，样式走 Tailwind（`src/styles/global.css`）。改完 push 即自动重新部署。

镜像：[`yockii/taixu`](https://hub.docker.com/r/yockii/taixu) on Docker Hub。
