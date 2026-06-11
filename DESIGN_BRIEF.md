# AIV 设计移交文档（Design Brief）

> 用途：将 AIV 的产品形态完整转达给设计师或设计 AI。配合 [PRD.md](PRD.md)（需求明细）与线上原型（Cloudflare Pages，main 分支自动部署）使用。

---

## 1. 一句话定位（先讲这个）

**AIV = Fiverr 的双向接单市场 × Udemy 式视频课程 × Seedance 式 AI 视频生成工作室。**

三个模块咬合成一个站内循环：

```
① 上课（学技能，第 1 节永远免费试听）
② 接单（双向市场：商家发需求，创作者发服务，平台担保托管）
③ 创作（站内代币生成视频 + 工具优惠，完成交付）
↻ 进阶课程 → 回到 ①，接更大的单
```

注意：循环只在首页以一条低调的「三步条带」呈现，**不要做成大型飞轮可视化**（已被否决的方案）。

## 2. 角色

- **创作者**：学课、接单、用工作室交付
- **商家**：发需求、选提案、下单服务
- **讲师**：开课、颁证书，同时也可能在市场接单
- **关键设定：角色可重叠**。同一账号 = 创作者 + 商家双重身份（双徽章、双视角订单管理）

## 3. 设计原则（约束，按优先级）

1. **信任优先于装饰**：担保托管、技能认证、评分、按时打款率是视觉重心；气质参考 Fiverr 的「工具感」，明确避免 AI 产品常见的赛博朋克/霓虹炫技风
2. **证书是贯穿全站的信任资产**：带全局序号（「第 N 位获得者」），出现在 ① 课程购买侧栏（已颁发 N 张 · 完课成为第 N+1 位）② 个人主页证书墙 ③ 服务详情页卖家认证标签
3. **免费试听是课程的核心钩子**：每套课第 1 节可直接播放，其余课时带锁；社区与聊天室未购时模糊预览 + 解锁引导
4. **深色主题**，紫(#8b5cf6)→青(#22d3ee) 渐变仅做点缀（按钮/强调数字），大面积保持安静的近黑底色
5. **中英双语**：所有界面与内容双语，导航一键切换；版式需兼容两种语言的长度差异

## 4. 页面清单（信息架构）

| # | 页面 | 核心内容 |
| --- | --- | --- |
| 1 | 首页 | 搜索式 Hero（标题+搜索框+热门标签）→ **三大模块 Banner**（课程/市场/工作室）→ 三步循环条（含信任数据）→ 精选课程 ×3 → 最新商家需求 ×3 + 优选创作者服务 ×3 |
| 2 | 课程列表 | 难度筛选 chips + 课程卡（封面/难度/试听角标/评分/在学人数/价格或已购态） |
| 3 | 课程详情 | 视频播放器（第 1 节免费试听）；四 tab：课程介绍（学习收获/讲师卡→讲师主页）、课程目录（第 1 节可播、其余带锁）、学员社区（贴吧式：置顶帖/发帖/回复数）、**实时聊天室**（在线人数/群聊气泡/输入框）；购买侧栏（价格、试听按钮、课程包含、**证书序号钩子**、学完推荐） |
| 4 | 接单市场 | 双 tab：**商家需求**（预算区间、期限、参与人数、状态徽章：报名中/选稿中/进行中）/ **创作者服务**（Fiverr 式卡片：封面、卖家+等级+在线点、评分、起步价）；分类 chips + 搜索框 + 发布需求/发布服务按钮 + 底部担保玩法三步说明 |
| 5 | 需求详情 | 需求描述 + 明细清单 + 提案列表（报价/查看提案/沟通）；侧栏：预算、期限、参与数、担保标识、立即参与/沟通按钮、商家卡→商家主页 |
| 6 | 提案详情 | 提案人、完整方案、**分步交付计划**、相关作品网格；侧栏：报价、预计交付、担保；若是自己发布的需求则有「**选用此提案**」主按钮（选用后打勾标记） |
| 7 | 服务详情 | 作品画廊（1 大 2 小）、**三档套餐**（基础/标准/高级：价格/交付天数/修改次数/功能清单，中档标「最受欢迎」）、买家评价、FAQ；侧栏：起步价、立即下单、联系卖家、排单/响应数据、卖家卡（含**课程技能认证**绿色标签） |
| 8 | 商家主页 | 头像+认证徽章+商家徽章+简介；四统计：发布需求/成交订单/累计支出/**按时打款率**；在招需求卡；「创作者这样评价 TA」 |
| 9 | 讲师主页 | 头像+讲师徽章+头衔+介绍；四统计：学员/课程数/评分/**已颁发证书**；开设的课程；「**讲师也在市场接单**」联动卡；学员评价 |
| 10 | 个人主页 | 渐变 banner + 大头像 + **双重身份徽章**（创作者 Lv.x + 商家）；四统计；五 tab：作品集/我的课程（进度条/查看证书/进阶推荐）/我的订单（**我接的单 / 我发布的需求**双视角）/收到的评价/设置（语言/通知/收款）；侧栏：代币钱包卡（余额/充值/流水）+ 证书墙（含序号与日期） |
| 11 | 工作室 | 左侧生成面板：文生/图生切换、提示词输入（下挂提示词课程入口）、模型档位（Turbo/Pro）、画幅（9:16/16:9/1:1）、时长（5s/10s）、分辨率（720p/1080p）分段选择器、**预计消耗 N 代币**、生成按钮；右侧生成记录网格（生成中进度态/完成态、复用提示词/下载）；页面底部：**创作工具箱**（6 张第三方工具卡：简介、专属优惠码+一键复制、前往官网） |

全局组件：顶部导航（4 项 + 语言切换 + 代币余额胶囊 + 头像）、聊天弹窗（含担保提示）、充值弹窗（4 档代币包）、发布需求/服务表单弹窗、购课确认弹窗、Toast 提示。

## 5. 关键流程（设计需走通）

1. **学习线**：浏览课程 → 免费试听第 1 节 → 购课 → 解锁全部课时+社区+聊天室 → 完课 → 获得带序号的证书 → 证书出现在接单主页
2. **商家线**：发布需求（预算/期限）→ 收到提案 → 查看提案详情/站内沟通 → 选用提案 → 托管交付
3. **创作者线**：浏览需求 → 提交报价+方案 → 中选 → 工作室生成/交付 → 收款+获得评价
4. **生成线**：写提示词 → 选参数看代币消耗 → 生成（队列进度）→ 完成入记录 → 余额不足时引导充值
5. **信任线**：课程证书 → 服务页认证标签 → 商家下单依据（这条是隐性的，但要在视觉上串起来）

## 6. 移交注意事项

- **定死不可改**：信息架构（上述 11 页）、五条流程、双语、证书序号机制、第 1 节免费试听、双重身份
- **开放可探索**：视觉风格可重新设计（当前深色+紫青渐变只是基线，亮色方案也可提案）、布局与组件造型、插画/图标体系
- **现状基线**：线上原型可交互（中英可切换），所有页面真实可点；建议设计师先把原型完整走一遍五条流程再动手
- **明确任务类型**：是「按现有结构做视觉升级」还是「自由重设计」——移交时务必说清楚

---

## 7. 可直接粘贴的设计 AI Prompt

### 中文版

> 设计一个名为 AIV 的 AI 视频创作者平台（Web，深色主题，中英双语）。定位：Fiverr 的双向接单市场 × Udemy 式视频课程 × Seedance 式 AI 视频生成工作室，三者形成「上课→接单→创作」的站内循环。需要的页面：① 首页：搜索框 Hero + 三个模块 Banner（课程/市场/工作室）+「三步一个循环」条带 + 精选课程与市场内容预览；② 课程详情：视频播放器（第 1 节免费试听、其余课时带锁）、学员社区（贴吧式）与实时聊天室两个 tab（未购模糊+解锁引导）、购买侧栏含「已颁发 1,247 张证书 · 完课即成为第 1,248 位获得者」；③ 接单市场：双 tab——商家需求列表（预算区间/期限/参与人数/报名中状态徽章）与创作者服务列表（Fiverr 式卡片）；④ 需求详情：需求明细、提案列表、平台担保托管说明；⑤ 提案详情：分步交付计划、相关作品、报价侧栏、商家视角的「选用此提案」按钮；⑥ 服务详情：作品画廊、基础/标准/高级三档套餐对比卡、买家评价、FAQ、卖家卡含课程技能认证绿标；⑦ 商家主页：发布需求数/成交订单/累计支出/按时打款率四统计、在招需求、创作者评价；⑧ 讲师主页：学员/课程/评分/已颁发证书四统计、开设课程、「讲师也在市场接单」联动卡；⑨ 个人主页：创作者+商家双重身份徽章、作品集/我的课程（进度条）/双视角订单/评价/设置五 tab、代币钱包卡、带序号的证书墙；⑩ 工作室：提示词输入、文生/图生切换、模型/画幅/时长/分辨率分段选择器、代币消耗估算、生成记录网格（含生成中进度态）、底部六张第三方工具推荐卡（优惠码一键复制）。风格要求：深色底，紫→青渐变只做点缀；工具感、专业、克制，以信任要素（担保托管、认证、评分、按时打款率）为视觉重心，像 Fiverr 一样简洁，避免赛博朋克霓虹风；兼容中英双语文案长度。

### English 版（适合 v0 / Lovable / Figma Make 等）

> Design a web platform called **AIV** for AIGC video creators (dark theme, bilingual zh/en). Positioning: **Fiverr's two-sided marketplace × Udemy-style video courses × a Seedance-style AI video generation studio**, forming an in-platform loop: learn → earn → create. Pages needed: ① Home: search-first hero + three module banners (Courses / Marketplace / Studio) + a subtle "three steps, one loop" strip + featured courses and marketplace previews; ② Course detail: video player (lesson 1 is a free trial, other lessons locked), tabs for a forum-style community board and a real-time chat room (blurred preview + unlock CTA when not enrolled), purchase sidebar with "1,247 certificates issued · finish to become holder #1,248"; ③ Marketplace: two tabs — client requests (budget range, deadline, participant count, status badges) and creator services (Fiverr-style gig cards); ④ Request detail: requirement checklist, proposal list, escrow explainer; ⑤ Proposal detail: step-by-step delivery plan, relevant work samples, quote sidebar, an "Accept proposal" primary button for the request owner; ⑥ Service detail: gallery, Basic/Standard/Premium package comparison, reviews, FAQ, seller card with green course-certification tags; ⑦ Client profile: stats (requests posted / orders awarded / total spent / on-time payment rate), open requests, "what creators say"; ⑧ Instructor profile: stats (learners / courses / rating / certificates issued), their courses, an "also selling in the marketplace" cross-link card; ⑨ User profile: dual-role badges (Creator Lv.x + Client), tabs for portfolio / my courses (progress bars) / orders from both perspectives / reviews / settings, a token wallet card, and a certificate wall with serial numbers ("Holder #1,184"); ⑩ Studio: prompt input, text-to-video / image-to-video toggle, segmented controls for model tier / aspect ratio / duration / resolution, estimated token cost, a generation history grid (with in-progress state), and six partner-tool cards with copyable promo codes at the bottom. Style: dark background with restrained violet→cyan gradient accents; professional tool-like feel where trust elements (escrow, certifications, ratings, on-time payment) carry the visual hierarchy — think Fiverr's simplicity, explicitly avoid cyberpunk neon AI clichés; layouts must tolerate both Chinese and English copy lengths.
