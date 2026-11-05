# 大米老师｜敢敢做 IP (React + Vite)

专为有经验的女老板打造的老板 IP 官网与 Preview Class 咨询落地页，已完全重构为现代 React 应用程序。

## 技术栈与架构
- **前端框架**：React 19 + TypeScript + Vite
- **架构组件**：
  - `Header`: 品牌标志与锚点平滑导航
  - `Hero`: 主视觉、核心价值主张、肖像展示与关键成效数据
  - `PainPoints`: 3 大痛点分析卡片
  - `About`: 创业与转型历程时间线（Me Beauty & Health Sdn Bhd 创办人）
  - `Method`: 5 步老板 IP 获客体系（定位、内容、AI、信任、转化）
  - `PreviewClass`: 免费试听课核心内容、WhatsApp 直达报名与 5 件套课后赠礼
  - `FitCheck`: 适合人群与不适合人群筛选
  - `Faq`: 交互式常见问题解答
  - `FinalCta`: 导师寄语与 30 天老板 IP 执行系统咨询
  - `Footer`: 联络方式、公司信息与版权
  - `StickyCta`: 移动端自适应浮动 CTA，依据视口滚动交叉状态（Intersection Observer）自动展示/收起
- **设计特性**：
  - 经典品牌配色：酒红（`#7A2E35`）、高贵金（`#A9844A`）、暖米底色（`#FAF6EF`）
  - 字体：Noto Serif SC 衬线标题与 Noto Sans SC 正文
  - 响应式设计与 Mobile-First 体验

## 开发与构建
- 启动开发服务：`npm run dev`
- 类型检查：`npm run lint`
- 生产构建：`npm run build`
