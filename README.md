# AIV · AI Video Hub

**AIV** is a front-end prototype of a Fiverr-style platform for AIGC video creators, built around a growth flywheel: **Learn → Earn → Create → Level up**.

AIV 是一个面向 AIGC 视频创作者的平台原型（类 Fiverr），围绕增长飞轮设计：**上课 → 接单 → 创作 → 进阶**。

## Modules · 三大模块

1. **Courses 课程** — video-first courses; lesson 1 is always a free trial, enrolling unlocks all lessons plus a learners-only community board. 视频课为主，第一节免费试听，购课解锁全部课时与学员社区。
2. **Marketplace 接单市场** — two-sided: clients post requests with budgets (pump.fun/go style), creators post Fiverr-style services with packages. 双向市场：商家发需求，创作者发服务。
3. **Tools 工具** — curated AI video tools with promo codes, plus **AIV Studio**: a token-based prompt-to-video workspace (Seedance-style). 工具推荐 + 代币制 AI 生成工作室。

## Run · 运行

No build step — it's a fully static site. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 4173
# → http://localhost:4173
```

Use the 🌐 button in the navbar to switch between 中文 / English.

## Notes · 说明

- Pure HTML/CSS/vanilla JS, no dependencies. 纯静态，无依赖。
- Demo prototype: all data is mock and lives in memory; payments, generation and messaging are simulated. 演示原型：数据为内存模拟，支付/生成/消息均为演示效果。
