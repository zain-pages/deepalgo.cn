# 长沙深算科技有限公司官网

基于 Astro + Tailwind CSS v4 构建的现代化静态网站。

## 技术栈

- **Astro 4** - 现代化静态站点生成器
- **Tailwind CSS v4** - 使用最新 `@theme` 和 `@utility` 语法
- **TypeScript** - 类型安全
- **GitHub Actions** - 自动化 CI/CD

## 项目结构

```
src/
├── layouts/
│   └── Layout.astro          # 全局布局
├── components/
│   ├── Header.astro          # 导航栏
│   ├── Footer.astro          # 页脚
│   └── ContactSection.astro  # 联系我们组件
├── pages/
│   ├── index.astro           # 主页
│   ├── invoice-info.astro    # 发票信息
│   ├── bank-info.astro       # 银行信息
│   └── products/
│       ├── mobile-sync.astro       # 移动存储同步
│       └── eye-tracking.astro      # 眼动新闻平台
└── styles/
    └── global.css            # 全局样式 + Tailwind 配置
```

## 开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 部署

项目使用 GitHub Actions 自动部署到 GitHub Pages：
- 推送到 `main` 分支自动触发部署
- 构建产物位于 `dist/` 目录

## 设计系统

采用素雅简洁的蓝色主题：
- 主色：Sky Blue (#0ea5e9)
- 中性色：Gray 系列配色
- 圆角：适度的 rounded-lg
- 阴影：轻微的 shadow-sm/shadow-md

## 页面列表

- `/` - 主页
- `/invoice-info` - 发票信息
- `/bank-info` - 银行账户信息
- `/products/mobile-sync` - 移动存储同步系统
- `/products/eye-tracking` - 眼动新闻实验平台
