// AIV 全站设计稿 — 双语内容数据（演示数据，非真实）
export const DATA = {
zh: {
  nav: { home:"首页", courses:"课程中心", market:"接单市场", studio:"工作室", tokens:"代币", searchPh:"搜索需求、服务或课程…", searchBtn:"搜索", post:"发布需求" },
  home: {
    heroTitle:"找到会用 AI 做视频的人", heroSub:"或者，成为那个人。", hotLabel:"热门：",
    hotTags:["商品视频","数字人口播","Logo 动画","开业宣传","课程剪辑"],
    banners:[
      {tag:"课程中心", title:"不会的人，来上课", desc:"实战课程 + 结业证书，第 1 节永远免费试听", cta:"去学习", ph:"插画位 · 学习场景"},
      {tag:"接单市场", title:"学会的人，来接单", desc:"商家发需求，创作者发服务，平台担保托管", cta:"去接单", ph:"插画位 · 交易场景"},
      {tag:"工作室", title:"接到单，用工具完成", desc:"站内代币生成视频，主流工具专属优惠", cta:"去创作", ph:"插画位 · 创作场景"}
    ],
    loopTitle:"三步，一个循环",
    loopSteps:[
      {n:"01", title:"上课学技能", desc:"完课拿带序号的结业证书"},
      {n:"02", title:"市场接真单", desc:"证书背书，承接商家真实订单"},
      {n:"03", title:"工作室交付", desc:"代币生成 + 工具优惠完成制作"}
    ],
    loopAgain:"↻ 进阶课程，接更大的单",
    trust:[{v:"12,400+", l:"在学学员"},{v:"3,860", l:"已完成订单"},{v:"100%", l:"资金担保托管"}],
    secCourses:"精选课程", secReqs:"最新商家需求", secGigs:"优选创作者服务", viewAll:"查看全部 →"
  },
  courses:[
    {id:1, title:"AI 视频从零到接单：完整工作流", level:"入门", rating:"4.9", students:"2,318", price:"¥299", oldPrice:"¥599", certs:"1,247", lessons:"32 课时"},
    {id:2, title:"数字人口播实战：从克隆到成片", level:"进阶", rating:"4.8", students:"1,562", price:"¥459", oldPrice:"¥699", certs:"863", lessons:"28 课时"},
    {id:3, title:"电商商品视频批量生产线", level:"进阶", rating:"4.9", students:"1,104", price:"¥399", oldPrice:"¥599", certs:"512", lessons:"24 课时"},
    {id:4, title:"提示词进阶：让模型听话的 50 个范式", level:"高级", rating:"4.7", students:"986", price:"¥259", oldPrice:"¥399", certs:"477", lessons:"18 课时"},
    {id:5, title:"AI 动画短片：分镜到成片", level:"高级", rating:"4.8", students:"742", price:"¥599", oldPrice:"¥899", certs:"289", lessons:"36 课时"},
    {id:6, title:"本地商家宣传片速成", level:"入门", rating:"4.6", students:"1,893", price:"¥259", oldPrice:"¥459", certs:"1,031", lessons:"16 课时"}
  ],
  coursesPage:{ title:"课程中心", sub:"实战课程，完课颁发带全局序号的结业证书", filters:["全部","入门","进阶","高级"], freeBadge:"第 1 节免费试听", studentsSuffix:"在学", certNote:"已颁证书" },
  courseDetail:{
    crumb:"课程中心 / 入门", title:"AI 视频从零到接单：完整工作流",
    metaRating:"4.9（1,892 条评价）", metaStudents:"2,318 人在学", metaLevel:"入门 · 32 课时 · 中文",
    playerPh:"视频播放器 · 第 1 节试听中", playerTag:"免费试听 · 第 1 节 课程导览（08:24）",
    tabs:["课程介绍","课程目录","学员社区","实时聊天室"],
    learnTitle:"你将学会", learns:["文生视频 / 图生视频完整工作流与选型","商业订单的需求拆解与报价方法","数字人、口播、商品展示三类高频单","交付规范：格式、修改轮次、验收话术"],
    instTitle:"讲师", inst:{name:"林墨", title:"前 MCN 内容操盘手 · 平台认证讲师", students:"5,400 学员", courses:"3 门课程", cta:"讲师主页 →"},
    lessons:[
      {n:"01", title:"课程导览：这门课怎么帮你接到第一单", dur:"08:24", free:true},
      {n:"02", title:"工具地图：生成、剪辑、配音选型", dur:"21:10", free:false},
      {n:"03", title:"文生视频：提示词的结构化写法", dur:"26:42", free:false},
      {n:"04", title:"图生视频：商品图驱动的展示片", dur:"24:08", free:false},
      {n:"05", title:"数字人口播：脚本到成片", dur:"32:15", free:false},
      {n:"06", title:"实战：接一个 ¥800 的连衣裙展示单", dur:"40:02", free:false},
      {n:"07", title:"报价、沟通与防跳单", dur:"18:36", free:false},
      {n:"08", title:"结课作业与证书申请", dur:"12:50", free:false}
    ],
    freeTag:"试听", lockedTag:"购课解锁",
    posts:[
      {pinned:true, author:"林墨（讲师）", title:"【置顶】结课作业提交规范 + 优秀作业合集", replies:"248", time:"置顶"},
      {pinned:false, author:"阿杰", title:"第 6 课实战单照着做，真的接到第一单了（¥600）", replies:"96", time:"2 小时前"},
      {pinned:false, author:"Momo", title:"提示词总是出穿模，第 3 课的结构化写法有人总结吗？", replies:"31", time:"5 小时前"}
    ],
    postPh:"发帖参与讨论…", lockNote:"购买课程后解锁社区与聊天室", lockCta:"立即解锁",
    chatOnline:"326 人在线",
    chats:[
      {author:"林墨（讲师）", text:"今晚 8 点直播答疑，问题先发这里", time:"19:02"},
      {author:"阿杰", text:"第 6 课的实战单我接到了！感谢老师", time:"19:04"},
      {author:"Momo", text:"恭喜！我还卡在第 3 课的提示词", time:"19:05"},
      {author:"小满", text:"穿模问题把镜头运动写慢一点就好很多", time:"19:06"},
      {author:"Leo", text:"+1，再配合 10s 时长，成功率高很多", time:"19:08"}
    ],
    chatPh:"说点什么…",
    sb:{ price:"¥299", oldPrice:"¥599", buy:"购买课程", trial:"免费试听第 1 节",
      incTitle:"课程包含", includes:["32 课时高清视频，永久回看","学员社区 + 实时聊天室","结业证书（带全局序号）","进阶课优惠券 ¥50"],
      certLine1:"已颁发 1,247 张证书", certLine2:"完课即成为第 1,248 位获得者",
      nextTitle:"学完推荐", nextCourse:"提示词进阶：让模型听话的 50 个范式", nextMeta:"高级 · ¥259" }
  },
  market:{
    title:"接单市场", sub:"商家发需求，创作者发服务，平台担保托管",
    tabReq:"商家需求", tabGig:"创作者服务", postReq:"+ 发布需求", postGig:"+ 发布服务",
    cats:["全部","电商","宣传片","数字人","动画","餐饮","民宿","口播"],
    escrowTitle:"担保交易怎么玩", escrowSteps:[
      {n:"1", title:"商家发布 · 资金托管", desc:"预算先存入平台托管账户，创作者放心参与"},
      {n:"2", title:"站内沟通 · 选用提案", desc:"所有沟通在站内进行，受担保保护，防跳单"},
      {n:"3", title:"确认交付 · 平台打款", desc:"商家验收确认后，平台扣佣打款给创作者"}
    ]
  },
  requests:[
    {status:"报名中", tone:"green", cat:"电商", title:"5 件连衣裙模特上身展示视频", desc:"淘宝女装店，需要真人感 AI 模特上身展示，每件 15–20 秒，竖屏", budget:"¥800–1,500", deadline:"7 天", proposals:"12 人参与", client:"杭州·梨花女装"},
    {status:"报名中", tone:"green", cat:"餐饮", title:"火锅店开业宣传片（30 秒）", desc:"新店开业，需要有食欲感的镜头组接 + 字幕配音", budget:"¥500–900", deadline:"5 天", proposals:"8 人参与", client:"重庆·辣灶火锅"},
    {status:"选稿中", tone:"amber", cat:"数字人", title:"品牌数字人口播 ×4 条（带货话术）", desc:"已有话术稿，需要稳定的数字人形象与口型", budget:"¥1,200–2,000", deadline:"10 天", proposals:"15 人参与", client:"广州·禾光品牌"},
    {status:"进行中", tone:"gray", cat:"民宿", title:"民宿四季宣传短片（航拍混剪风）", desc:"提供实拍素材，需要 AI 补镜头 + 调色混剪", budget:"¥1,500–2,500", deadline:"14 天", proposals:"已选稿", client:"大理·云见民宿"}
  ],
  gigs:[
    {title:"电商服装上身展示视频，3 天交付", seller:"陈一帆", lv:"Lv.3", online:true, rating:"5.0", reviews:"86", price:"¥200", certified:true, queue:"排单 3"},
    {title:"数字人口播定制：形象+口型+配音一条龙", seller:"周可", lv:"Lv.4", online:true, rating:"4.9", reviews:"132", price:"¥350", certified:true, queue:"排单 5"},
    {title:"Logo 动画 / 品牌片头，电影感运镜", seller:"Sandy", lv:"Lv.2", online:false, rating:"4.8", reviews:"54", price:"¥150", certified:true, queue:"排单 1"},
    {title:"餐饮探店风短视频，AI 补镜头混剪", seller:"大力", lv:"Lv.3", online:true, rating:"4.9", reviews:"71", price:"¥280", certified:false, queue:"排单 2"},
    {title:"商品 360° 展示 + 卖点字幕包装", seller:"阿鹿", lv:"Lv.2", online:true, rating:"4.7", reviews:"43", price:"¥180", certified:true, queue:"排单 0"},
    {title:"AI 动画短片：脚本到成片全包", seller:"NOVA 工作室", lv:"Lv.5", online:true, rating:"5.0", reviews:"208", price:"¥800", certified:true, queue:"排单 7"}
  ],
  gigMeta:{ from:"起步价", certTag:"已认证", onlineTag:"在线" },
  requestDetail:{
    crumb:"接单市场 / 商家需求", status:"报名中", cat:"电商", title:"5 件连衣裙模特上身展示视频",
    posted:"杭州·梨花女装 发布于 2 天前",
    desc:"我们是淘宝女装店，夏季新品 5 件连衣裙需要模特上身展示视频。希望用 AI 模特实现真人感效果，风格参考店铺现有图（提供平铺图与挂拍图）。每件 15–20 秒竖屏，用于商品详情页与逛逛短视频。",
    checkTitle:"需求明细", checklist:["5 件连衣裙，各 1 条竖屏视频（9:16，15–20s）","AI 模特需真人感，身形与目标客群匹配","提供商品平铺图 + 挂拍图作为素材","含简单字幕（面料 / 版型卖点）","商用授权：需确认素材可商用"],
    propTitle:"已收到提案（12）", view:"查看提案", chat:"站内沟通",
    proposals:[
      {author:"陈一帆", lv:"Lv.3", rating:"5.0", quote:"¥1,200", days:"5 天", excerpt:"先出 1 条小样确认风格，再批量产出其余 4 条。用图生视频保证衣服版型还原…", selected:false},
      {author:"周可", lv:"Lv.4", rating:"4.9", quote:"¥1,400", days:"6 天", excerpt:"提供 2 种模特形象供选择，含 1 轮免费修改。过往做过 30+ 服装类订单…", selected:false},
      {author:"阿鹿", lv:"Lv.2", rating:"4.7", quote:"¥900", days:"7 天", excerpt:"价格更友好的方案：固定 1 个模特形象，统一棚拍风背景…", selected:false}
    ],
    sb:{ budget:"¥800–1,500", budgetL:"预算区间", deadline:"7 天", deadlineL:"交付期限", part:"12 人", partL:"参与人数", escrow:"资金已托管，交付确认后打款", join:"立即参与报价", chat:"先沟通再报价", clientT:"发布商家", client:"梨花女装", clientRate:"按时打款率 98%", clientLink:"商家主页 →" }
  },
  proposalDetail:{
    crumb:"需求 / 5 件连衣裙模特上身展示视频 / 提案",
    author:"陈一帆", lv:"Lv.3", rating:"★ 5.0 (86)", cert:"电商商品视频 · 认证",
    bodyTitle:"方案陈述",
    body:"建议采用图生视频路线：以你们提供的挂拍图为驱动，生成 AI 模特上身效果，最大程度保住衣服的版型与面料质感（纯文生视频容易跑形）。先交付 1 条小样确认模特形象与运镜风格，确认后 48 小时内批量交付其余 4 条。",
    planTitle:"分步交付计划",
    plan:[
      {n:"第 1 步", title:"小样确认", desc:"1 条成片小样：模特形象 ×2 供选 + 运镜风格", days:"第 1–2 天"},
      {n:"第 2 步", title:"批量生成", desc:"确认后批量产出其余 4 条，统一风格", days:"第 3–4 天"},
      {n:"第 3 步", title:"字幕包装", desc:"卖点字幕 + 统一片头片尾", days:"第 4 天"},
      {n:"第 4 步", title:"交付验收", desc:"1 轮免费修改，源文件交付", days:"第 5 天"}
    ],
    worksTitle:"相关作品", works:["连衣裙上身展示 · 竖屏","针织衫展示 · 竖屏","风衣外套 · 街拍风","泳装系列 · 棚拍风"],
    sb:{ quoteL:"报价", quote:"¥1,200", daysL:"预计交付", days:"5 天", escrow:"担保托管 · 验收后打款", accept:"选用此提案", accepted:"已选用 ✓", chat:"站内沟通" }
  },
  gigDetail:{
    crumb:"接单市场 / 创作者服务", title:"电商服装上身展示视频，3 天交付",
    galleryMain:"作品演示视频 16:9", galleryThumbs:["作品 2","作品 3"],
    pkgs:[
      {name:"基础", price:"¥200", days:"3 天交付", rev:"1 次修改", feats:["1 件商品 / 1 条视频","9:16 竖屏 15s","AI 模特 ×1 形象","基础字幕"], popular:false},
      {name:"标准", price:"¥520", days:"4 天交付", rev:"2 次修改", feats:["3 件商品 / 3 条视频","模特形象 ×2 供选","卖点字幕包装","片头片尾"], popular:true},
      {name:"高级", price:"¥980", days:"6 天交付", rev:"3 次修改", feats:["6 件商品 / 6 条视频","先出小样确认","多场景背景","源文件交付"], popular:false}
    ],
    popularTag:"最受欢迎", choose:"选择此套餐",
    revTitle:"买家评价（86）", reviews:[
      {author:"梨花女装", rating:"5.0", text:"小样沟通顺畅，衣服版型还原得很好，第二批 10 件已经在排了。", time:"1 周前"},
      {author:"南风家居", rating:"5.0", text:"交付比承诺还早一天，字幕卖点提炼得专业。", time:"2 周前"},
      {author:"Kiko 饰品", rating:"4.8", text:"首饰类细节略有瑕疵，但修改很快，整体满意。", time:"1 个月前"}
    ],
    faqTitle:"常见问题", faqs:[
      {q:"需要我提供什么素材？", a:"商品平铺图或挂拍图 2–3 张/件，越清晰版型还原越好。"},
      {q:"模特形象可以指定吗？", a:"标准套餐起提供 2 个形象供选；也可按目标客群定制。"},
      {q:"视频可以商用吗？", a:"交付即含商用授权，AI 生成内容会按平台规范标识。"}
    ],
    sb:{ fromL:"起步价", from:"¥200", order:"立即下单", contact:"联系卖家", queue:"当前排单 3 · 平均响应 1 小时内",
      sellerT:"卖家", seller:"陈一帆", lv:"Lv.3", online:"在线", rating:"★ 5.0 (86)",
      certs:["电商商品视频 · 课程认证","提示词进阶 · 课程认证"] }
  },
  clientProfile:{
    name:"梨花女装", badge:"商家", verified:"企业认证", bio:"杭州淘宝女装店，主营通勤连衣裙。长期有商品视频需求，按时打款，沟通直接。",
    stats:[{v:"23", l:"发布需求"},{v:"19", l:"成交订单"},{v:"¥21,400", l:"累计支出"},{v:"98%", l:"按时打款率"}],
    openTitle:"在招需求", revTitle:"创作者这样评价 TA",
    reviews:[
      {author:"陈一帆", text:"需求写得清楚，素材给得齐，验收不拖。", time:"1 周前"},
      {author:"阿鹿", text:"修改意见明确，打款准时，推荐接。", time:"3 周前"},
      {author:"周可", text:"长期客户，连续合作 4 单了。", time:"1 个月前"}
    ]
  },
  instructorProfile:{
    name:"林墨", badge:"认证讲师", title:"前 MCN 内容操盘手", bio:"操盘过 2000 万粉丝矩阵，现专注 AI 视频教学。课程以「能接到单」为唯一标准。",
    stats:[{v:"5,400", l:"学员"},{v:"3", l:"课程"},{v:"4.9", l:"综合评分"},{v:"2,587", l:"已颁发证书"}],
    coursesTitle:"开设的课程",
    crossTitle:"讲师也在市场接单", crossDesc:"AI 动画短片：脚本到成片全包 · ★ 5.0 (208) · 起步价 ¥800", crossCta:"查看服务 →",
    revTitle:"学员评价",
    reviews:[
      {author:"阿杰", text:"第 6 课照着做真的接到第一单，这是别的课没有的。", time:"2 天前"},
      {author:"Momo", text:"答疑很勤，社区里讲师天天在线。", time:"1 周前"},
      {author:"小满", text:"进阶课刚买，冲着证书序号也要学完。", time:"2 周前"}
    ]
  },
  profile:{
    name:"陈一帆", creatorBadge:"创作者 Lv.3", clientBadge:"商家", bio:"专注电商商品视频。两年剪辑师转型，AIV 第 184 位证书获得者。",
    stats:[{v:"47", l:"完成订单"},{v:"5.0", l:"综合评分"},{v:"100%", l:"准时率"},{v:"1,206", l:"关注者"}],
    tabs:["作品集","我的课程","我的订单","收到的评价","设置"],
    works:[{label:"连衣裙上身展示", views:"12.4 万"},{label:"针织衫展示", views:"8.2 万"},{label:"风衣街拍风", views:"6.8 万"},{label:"泳装棚拍", views:"5.1 万"},{label:"饰品特写", views:"3.9 万"},{label:"火锅探店", views:"2.7 万"}],
    myCourses:[
      {title:"AI 视频从零到接单：完整工作流", status:"done", progress:100, cta:"查看证书", meta:"证书 No.184"},
      {title:"提示词进阶：让模型听话的 50 个范式", status:"learning", progress:62, cta:"继续学习", meta:"18 课时 · 已学 11"},
      {title:"AI 动画短片：分镜到成片", status:"rec", progress:0, cta:"进阶推荐", meta:"高级 · ¥599"}
    ],
    ordersTakenT:"我接的单", ordersPostedT:"我发布的需求",
    ordersTaken:[
      {title:"5 件连衣裙模特上身展示视频", status:"进行中", tone:"amber", deadline:"3 天后截止", amount:"¥1,200"},
      {title:"品牌数字人口播 ×4 条", status:"待验收", tone:"green", deadline:"已交付", amount:"¥1,600"},
      {title:"火锅店开业宣传片", status:"已完成", tone:"gray", deadline:"上周", amount:"¥700"}
    ],
    ordersPosted:[
      {title:"店铺 Logo 动画升级", proposals:"6 个提案", status:"选稿中", tone:"amber"},
      {title:"短视频封面模板 ×10", proposals:"已选稿", status:"进行中", tone:"gray"}
    ],
    reviews:[
      {author:"梨花女装", text:"版型还原好，沟通顺畅，已二次复购。", time:"1 周前", rating:"5.0"},
      {author:"辣灶火锅", text:"开业片有食欲感，老板很满意。", time:"3 周前", rating:"5.0"},
      {author:"禾光品牌", text:"口播口型自然，话术断句处理得好。", time:"1 个月前", rating:"4.9"}
    ],
    settings:{langL:"界面语言", lang:"简体中文", notifL:"通知", notif:"订单与社区消息已开启", payoutL:"收款方式", payout:"支付宝 ··· 8841"},
    wallet:{title:"代币钱包", balance:"2,450", balanceL:"当前余额", topup:"充值",
      flows:[{label:"生成消耗 · 连衣裙小样", amt:"−120", time:"今天"},{label:"充值套餐 · 2000+300", amt:"+2,300", time:"昨天"},{label:"完课奖励", amt:"+100", time:"3 天前"}]},
    certsTitle:"证书墙",
    certs:[{course:"AI 视频从零到接单", serial:"第 184 位获得者", date:"2026.03.18"},{course:"电商商品视频生产线", serial:"第 96 位获得者", date:"2026.05.02"}]
  },
  studio:{
    title:"工作室", sub:"代币生成 · 站内完成交付",
    modeT2V:"文生视频", modeI2V:"图生视频",
    promptPh:"描述你想生成的画面：一位模特身穿碎花连衣裙，在街头自然行走，镜头缓慢环绕…",
    promptCourse:"想写出更稳的提示词？「提示词进阶」课程 →",
    modelL:"模型", turbo:"Turbo", turboD:"快速 · 1 代币/秒", pro:"Pro", proD:"高质量 · 3 代币/秒",
    aspectL:"画幅", durL:"时长", resL:"分辨率",
    costL:"预计消耗", cost:"30 代币", balance:"余额 2,450", gen:"生成视频",
    histTitle:"生成记录",
    history:[
      {prompt:"碎花连衣裙模特街头行走，镜头环绕", status:"progress", pct:64, meta:"Pro · 9:16 · 10s · 1080p"},
      {prompt:"火锅沸腾特写，热气与红油翻滚", status:"done", meta:"Pro · 16:9 · 5s · 1080p"},
      {prompt:"民宿清晨航拍，云海慢慢散开", status:"done", meta:"Pro · 16:9 · 10s · 1080p"},
      {prompt:"数字人口播：新品发布话术 A 段", status:"done", meta:"Turbo · 9:16 · 10s · 720p"},
      {prompt:"针织衫面料质感特写，缓慢推近", status:"done", meta:"Pro · 1:1 · 5s · 1080p"},
      {prompt:"Logo 金属质感旋转展示", status:"done", meta:"Turbo · 16:9 · 5s · 720p"}
    ],
    reuse:"复用提示词", download:"下载", generating:"生成中",
    toolsTitle:"创作工具箱", toolsSub:"主流工具专属优惠，一键复制优惠码",
    tools:[
      {name:"Seedance", desc:"文生视频 · 高一致性", code:"AIV20"},
      {name:"可灵 Kling", desc:"图生视频 · 真人感强", code:"AIVKL15"},
      {name:"Runway", desc:"视频编辑 · 风格化", code:"AIVRW10"},
      {name:"海螺 Hailuo", desc:"数字人 · 口型同步", code:"AIVHL20"},
      {name:"Pika", desc:"动画风格 · 快速出片", code:"AIVPK12"},
      {name:"剪映", desc:"剪辑包装 · 字幕配音", code:"AIVJY30"}
    ],
    copy:"复制", copied:"已复制 ✓", visit:"官网 →"
  },
  ui:{ themeDark:"深色", themeLight:"浅色", langBtn:"EN" }
},
en: {
  nav: { home:"Home", courses:"Courses", market:"Marketplace", studio:"Studio", tokens:"tokens", searchPh:"Search requests, services or courses…", searchBtn:"Search", post:"Post a request" },
  home: {
    heroTitle:"Find people who make videos with AI", heroSub:"Or become one of them.", hotLabel:"Hot:",
    hotTags:["Product videos","AI avatar","Logo animation","Grand opening","Course editing"],
    banners:[
      {tag:"Courses", title:"Don't know how? Learn.", desc:"Hands-on courses + certificates. Lesson 1 is always free", cta:"Start learning", ph:"Illustration · learning"},
      {tag:"Marketplace", title:"Know how? Earn.", desc:"Clients post requests, creators sell services, escrow protected", cta:"Start earning", ph:"Illustration · marketplace"},
      {tag:"Studio", title:"Got a job? Create.", desc:"Generate with tokens in-platform, exclusive tool deals", cta:"Start creating", ph:"Illustration · creating"}
    ],
    loopTitle:"Three steps, one loop",
    loopSteps:[
      {n:"01", title:"Learn the skill", desc:"Finish a course, get a numbered certificate"},
      {n:"02", title:"Win real orders", desc:"Certificates back you up in the marketplace"},
      {n:"03", title:"Deliver in Studio", desc:"Token-based generation + tool discounts"}
    ],
    loopAgain:"↻ Level up, win bigger orders",
    trust:[{v:"12,400+", l:"learners"},{v:"3,860", l:"orders completed"},{v:"100%", l:"escrow protected"}],
    secCourses:"Featured courses", secReqs:"Latest client requests", secGigs:"Top creator services", viewAll:"View all →"
  },
  courses:[
    {id:1, title:"AI Video Zero to First Order: the Full Workflow", level:"Beginner", rating:"4.9", students:"2,318", price:"¥299", oldPrice:"¥599", certs:"1,247", lessons:"32 lessons"},
    {id:2, title:"AI Avatar Presenters: Clone to Final Cut", level:"Intermediate", rating:"4.8", students:"1,562", price:"¥459", oldPrice:"¥699", certs:"863", lessons:"28 lessons"},
    {id:3, title:"E-commerce Product Video Pipeline", level:"Intermediate", rating:"4.9", students:"1,104", price:"¥399", oldPrice:"¥599", certs:"512", lessons:"24 lessons"},
    {id:4, title:"Advanced Prompting: 50 Patterns That Work", level:"Advanced", rating:"4.7", students:"986", price:"¥259", oldPrice:"¥399", certs:"477", lessons:"18 lessons"},
    {id:5, title:"AI Animated Shorts: Storyboard to Screen", level:"Advanced", rating:"4.8", students:"742", price:"¥599", oldPrice:"¥899", certs:"289", lessons:"36 lessons"},
    {id:6, title:"Local Business Promo Videos, Fast", level:"Beginner", rating:"4.6", students:"1,893", price:"¥259", oldPrice:"¥459", certs:"1,031", lessons:"16 lessons"}
  ],
  coursesPage:{ title:"Courses", sub:"Hands-on courses with globally numbered certificates", filters:["All","Beginner","Intermediate","Advanced"], freeBadge:"Lesson 1 free", studentsSuffix:"learning", certNote:"certs issued" },
  courseDetail:{
    crumb:"Courses / Beginner", title:"AI Video Zero to First Order: the Full Workflow",
    metaRating:"4.9 (1,892 reviews)", metaStudents:"2,318 learning", metaLevel:"Beginner · 32 lessons · zh/en",
    playerPh:"Video player · Lesson 1 free trial", playerTag:"Free trial · Lesson 1 Course tour (08:24)",
    tabs:["About","Curriculum","Community","Live chat"],
    learnTitle:"What you'll learn", learns:["Full text-to-video / image-to-video workflow","Scoping and pricing commercial orders","Avatars, presenters and product showcase orders","Delivery standards: formats, revisions, acceptance"],
    instTitle:"Instructor", inst:{name:"Lin Mo", title:"Ex-MCN content lead · Verified instructor", students:"5,400 learners", courses:"3 courses", cta:"Instructor profile →"},
    lessons:[
      {n:"01", title:"Course tour: how this gets you your first order", dur:"08:24", free:true},
      {n:"02", title:"Tool map: generation, editing, voiceover", dur:"21:10", free:false},
      {n:"03", title:"Text-to-video: structured prompting", dur:"26:42", free:false},
      {n:"04", title:"Image-to-video: product-driven showcases", dur:"24:08", free:false},
      {n:"05", title:"AI presenters: script to final cut", dur:"32:15", free:false},
      {n:"06", title:"Practice: land a ¥800 dress showcase order", dur:"40:02", free:false},
      {n:"07", title:"Quoting, communication, anti-bypassing", dur:"18:36", free:false},
      {n:"08", title:"Final project & certificate", dur:"12:50", free:false}
    ],
    freeTag:"Free", lockedTag:"Locked",
    posts:[
      {pinned:true, author:"Lin Mo (Instructor)", title:"[Pinned] Final project guidelines + best submissions", replies:"248", time:"Pinned"},
      {pinned:false, author:"A-Jie", title:"Followed lesson 6 and landed my first order (¥600)", replies:"96", time:"2h ago"},
      {pinned:false, author:"Momo", title:"Clothes keep clipping — any notes on lesson 3 prompting?", replies:"31", time:"5h ago"}
    ],
    postPh:"Start a discussion…", lockNote:"Enroll to unlock community & live chat", lockCta:"Unlock now",
    chatOnline:"326 online",
    chats:[
      {author:"Lin Mo (Instructor)", text:"Live Q&A at 8pm tonight — drop questions here", time:"19:02"},
      {author:"A-Jie", text:"Landed the lesson-6 practice order! Thanks!", time:"19:04"},
      {author:"Momo", text:"Congrats! Still stuck on lesson 3 prompts", time:"19:05"},
      {author:"Xiaoman", text:"Slow down the camera motion, fixes most clipping", time:"19:06"},
      {author:"Leo", text:"+1, and use 10s duration — much higher success", time:"19:08"}
    ],
    chatPh:"Say something…",
    sb:{ price:"¥299", oldPrice:"¥599", buy:"Enroll now", trial:"Watch lesson 1 free",
      incTitle:"This course includes", includes:["32 HD lessons, lifetime access","Community + live chat room","Certificate with global serial number","¥50 coupon for advanced courses"],
      certLine1:"1,247 certificates issued", certLine2:"Finish to become holder #1,248",
      nextTitle:"Up next", nextCourse:"Advanced Prompting: 50 Patterns That Work", nextMeta:"Advanced · ¥259" }
  },
  market:{
    title:"Marketplace", sub:"Clients post requests, creators sell services, escrow protected",
    tabReq:"Client requests", tabGig:"Creator services", postReq:"+ Post request", postGig:"+ Post service",
    cats:["All","E-commerce","Promo","AI avatar","Animation","Food","B&B","Presenter"],
    escrowTitle:"How escrow works", escrowSteps:[
      {n:"1", title:"Post · funds held", desc:"Budget goes into platform escrow, creators join with confidence"},
      {n:"2", title:"Chat · pick a proposal", desc:"All communication stays in-platform, protected from bypassing"},
      {n:"3", title:"Confirm · get paid", desc:"After acceptance, the platform releases payment minus commission"}
    ]
  },
  requests:[
    {status:"Open", tone:"green", cat:"E-commerce", title:"5 dress try-on showcase videos", desc:"Taobao womenswear shop, needs realistic AI model try-ons, 15–20s each, vertical", budget:"¥800–1,500", deadline:"7 days", proposals:"12 proposals", client:"Lihua Womenswear"},
    {status:"Open", tone:"green", cat:"Food", title:"Hotpot grand-opening promo (30s)", desc:"New store opening, appetizing shots + subtitles & voiceover", budget:"¥500–900", deadline:"5 days", proposals:"8 proposals", client:"Lazao Hotpot"},
    {status:"Reviewing", tone:"amber", cat:"AI avatar", title:"Brand avatar presenter ×4 (sales scripts)", desc:"Scripts ready; needs a stable avatar with good lip-sync", budget:"¥1,200–2,000", deadline:"10 days", proposals:"15 proposals", client:"Heguang Brand"},
    {status:"In progress", tone:"gray", cat:"B&B", title:"Four-seasons B&B short film (aerial mix)", desc:"Footage provided; AI shot extension + grading & editing", budget:"¥1,500–2,500", deadline:"14 days", proposals:"Awarded", client:"Yunjian B&B"}
  ],
  gigs:[
    {title:"E-commerce clothing try-on videos, 3-day delivery", seller:"Chen Yifan", lv:"Lv.3", online:true, rating:"5.0", reviews:"86", price:"¥200", certified:true, queue:"3 in queue"},
    {title:"Custom AI avatar presenter: face + lip-sync + voice", seller:"Zhou Ke", lv:"Lv.4", online:true, rating:"4.9", reviews:"132", price:"¥350", certified:true, queue:"5 in queue"},
    {title:"Logo animation / brand intro, cinematic moves", seller:"Sandy", lv:"Lv.2", online:false, rating:"4.8", reviews:"54", price:"¥150", certified:true, queue:"1 in queue"},
    {title:"Food-vlog style shorts, AI shot extension", seller:"Dali", lv:"Lv.3", online:true, rating:"4.9", reviews:"71", price:"¥280", certified:false, queue:"2 in queue"},
    {title:"360° product showcase + selling-point captions", seller:"A-Lu", lv:"Lv.2", online:true, rating:"4.7", reviews:"43", price:"¥180", certified:true, queue:"0 in queue"},
    {title:"AI animated shorts: script to screen, full service", seller:"NOVA Studio", lv:"Lv.5", online:true, rating:"5.0", reviews:"208", price:"¥800", certified:true, queue:"7 in queue"}
  ],
  gigMeta:{ from:"From", certTag:"Certified", onlineTag:"Online" },
  requestDetail:{
    crumb:"Marketplace / Client requests", status:"Open", cat:"E-commerce", title:"5 dress try-on showcase videos",
    posted:"Lihua Womenswear · posted 2 days ago",
    desc:"We run a Taobao womenswear shop. 5 new summer dresses need try-on showcase videos. We'd like realistic AI models matching our shop's existing look (flat-lay and hanger shots provided). 15–20s vertical each, for product pages and short-video feeds.",
    checkTitle:"Requirements", checklist:["5 dresses, 1 vertical video each (9:16, 15–20s)","Realistic AI model matching target audience","Flat-lay + hanger shots provided as source","Simple captions (fabric / fit selling points)","Commercial license confirmation required"],
    propTitle:"Proposals received (12)", view:"View proposal", chat:"Chat",
    proposals:[
      {author:"Chen Yifan", lv:"Lv.3", rating:"5.0", quote:"¥1,200", days:"5 days", excerpt:"One sample first to lock the style, then batch-produce the remaining four. Image-to-video keeps garment fit accurate…", selected:false},
      {author:"Zhou Ke", lv:"Lv.4", rating:"4.9", quote:"¥1,400", days:"6 days", excerpt:"Two model looks to choose from, one free revision round. 30+ apparel orders delivered…", selected:false},
      {author:"A-Lu", lv:"Lv.2", rating:"4.7", quote:"¥900", days:"7 days", excerpt:"Budget-friendly option: one fixed model look, unified studio-style background…", selected:false}
    ],
    sb:{ budget:"¥800–1,500", budgetL:"Budget range", deadline:"7 days", deadlineL:"Deadline", part:"12", partL:"Participants", escrow:"Funds in escrow, released after acceptance", join:"Submit a proposal", chat:"Chat before quoting", clientT:"Posted by", client:"Lihua Womenswear", clientRate:"On-time payment 98%", clientLink:"Client profile →" }
  },
  proposalDetail:{
    crumb:"Request / 5 dress try-on showcase videos / Proposal",
    author:"Chen Yifan", lv:"Lv.3", rating:"★ 5.0 (86)", cert:"E-commerce video · Certified",
    bodyTitle:"Proposal",
    body:"I recommend the image-to-video route: drive generation from your hanger shots so the garment's fit and fabric stay accurate (pure text-to-video tends to drift). I'll deliver one sample first to confirm the model look and camera style, then batch-deliver the remaining four within 48 hours of approval.",
    planTitle:"Delivery plan",
    plan:[
      {n:"Step 1", title:"Sample", desc:"1 finished sample: 2 model looks to choose + camera style", days:"Day 1–2"},
      {n:"Step 2", title:"Batch production", desc:"Produce the remaining 4 in a unified style", days:"Day 3–4"},
      {n:"Step 3", title:"Captions", desc:"Selling-point captions + unified intro/outro", days:"Day 4"},
      {n:"Step 4", title:"Delivery", desc:"One free revision round, source files included", days:"Day 5"}
    ],
    worksTitle:"Relevant work", works:["Dress try-on · vertical","Knitwear showcase · vertical","Trench coat · street style","Swimwear · studio style"],
    sb:{ quoteL:"Quote", quote:"¥1,200", daysL:"Est. delivery", days:"5 days", escrow:"Escrow · released after acceptance", accept:"Accept proposal", accepted:"Accepted ✓", chat:"Chat" }
  },
  gigDetail:{
    crumb:"Marketplace / Creator services", title:"E-commerce clothing try-on videos, 3-day delivery",
    galleryMain:"Showreel video 16:9", galleryThumbs:["Work 2","Work 3"],
    pkgs:[
      {name:"Basic", price:"¥200", days:"3-day delivery", rev:"1 revision", feats:["1 product / 1 video","9:16 vertical, 15s","1 AI model look","Basic captions"], popular:false},
      {name:"Standard", price:"¥520", days:"4-day delivery", rev:"2 revisions", feats:["3 products / 3 videos","2 model looks to choose","Selling-point captions","Intro & outro"], popular:true},
      {name:"Premium", price:"¥980", days:"6-day delivery", rev:"3 revisions", feats:["6 products / 6 videos","Sample-first workflow","Multiple scene backgrounds","Source files included"], popular:false}
    ],
    popularTag:"Most popular", choose:"Choose package",
    revTitle:"Reviews (86)", reviews:[
      {author:"Lihua Womenswear", rating:"5.0", text:"Smooth sample process, garment fit was spot on. Already queuing the next batch of 10.", time:"1w ago"},
      {author:"Nanfeng Home", rating:"5.0", text:"Delivered a day early, professional caption work.", time:"2w ago"},
      {author:"Kiko Jewelry", rating:"4.8", text:"Minor flaws on jewelry details but revisions were fast.", time:"1mo ago"}
    ],
    faqTitle:"FAQ", faqs:[
      {q:"What do I need to provide?", a:"2–3 clear flat-lay or hanger shots per product — the clearer, the better the fit accuracy."},
      {q:"Can I pick the model look?", a:"Standard and above include 2 looks to choose; custom looks for your audience also possible."},
      {q:"Is commercial use included?", a:"Yes, delivery includes a commercial license; AI content is labeled per platform rules."}
    ],
    sb:{ fromL:"From", from:"¥200", order:"Order now", contact:"Contact seller", queue:"3 in queue · responds within 1 hour",
      sellerT:"Seller", seller:"Chen Yifan", lv:"Lv.3", online:"Online", rating:"★ 5.0 (86)",
      certs:["E-commerce video · Course certified","Advanced prompting · Course certified"] }
  },
  clientProfile:{
    name:"Lihua Womenswear", badge:"Client", verified:"Verified business", bio:"Hangzhou Taobao womenswear shop, commuter dresses. Regular video needs, pays on time, communicates directly.",
    stats:[{v:"23", l:"Requests posted"},{v:"19", l:"Orders awarded"},{v:"¥21,400", l:"Total spent"},{v:"98%", l:"On-time payment"}],
    openTitle:"Open requests", revTitle:"What creators say",
    reviews:[
      {author:"Chen Yifan", text:"Clear briefs, complete source files, no acceptance delays.", time:"1w ago"},
      {author:"A-Lu", text:"Specific revision notes, pays on time. Recommended.", time:"3w ago"},
      {author:"Zhou Ke", text:"Repeat client — four orders in a row now.", time:"1mo ago"}
    ]
  },
  instructorProfile:{
    name:"Lin Mo", badge:"Verified instructor", title:"Ex-MCN content lead", bio:"Ran a 20M-follower matrix; now teaching AI video full-time. One standard for my courses: you land orders.",
    stats:[{v:"5,400", l:"Learners"},{v:"3", l:"Courses"},{v:"4.9", l:"Rating"},{v:"2,587", l:"Certificates issued"}],
    coursesTitle:"Courses",
    crossTitle:"Also selling in the marketplace", crossDesc:"AI animated shorts: script to screen · ★ 5.0 (208) · from ¥800", crossCta:"View service →",
    revTitle:"Learner reviews",
    reviews:[
      {author:"A-Jie", text:"Lesson 6 literally got me my first order. No other course does that.", time:"2d ago"},
      {author:"Momo", text:"Very active Q&A — the instructor is in the community daily.", time:"1w ago"},
      {author:"Xiaoman", text:"Just bought the advanced course. The serial number alone motivates me.", time:"2w ago"}
    ]
  },
  profile:{
    name:"Chen Yifan", creatorBadge:"Creator Lv.3", clientBadge:"Client", bio:"E-commerce product videos. Former editor, two years in. AIV certificate holder #184.",
    stats:[{v:"47", l:"Orders completed"},{v:"5.0", l:"Rating"},{v:"100%", l:"On-time rate"},{v:"1,206", l:"Followers"}],
    tabs:["Portfolio","My courses","My orders","Reviews","Settings"],
    works:[{label:"Dress try-on", views:"124k"},{label:"Knitwear showcase", views:"82k"},{label:"Trench street style", views:"68k"},{label:"Swimwear studio", views:"51k"},{label:"Jewelry close-up", views:"39k"},{label:"Hotpot vlog", views:"27k"}],
    myCourses:[
      {title:"AI Video Zero to First Order: the Full Workflow", status:"done", progress:100, cta:"View certificate", meta:"Certificate No.184"},
      {title:"Advanced Prompting: 50 Patterns That Work", status:"learning", progress:62, cta:"Continue", meta:"18 lessons · 11 done"},
      {title:"AI Animated Shorts: Storyboard to Screen", status:"rec", progress:0, cta:"Recommended next", meta:"Advanced · ¥599"}
    ],
    ordersTakenT:"Orders I'm working", ordersPostedT:"Requests I posted",
    ordersTaken:[
      {title:"5 dress try-on showcase videos", status:"In progress", tone:"amber", deadline:"Due in 3 days", amount:"¥1,200"},
      {title:"Brand avatar presenter ×4", status:"Pending acceptance", tone:"green", deadline:"Delivered", amount:"¥1,600"},
      {title:"Hotpot grand-opening promo", status:"Completed", tone:"gray", deadline:"Last week", amount:"¥700"}
    ],
    ordersPosted:[
      {title:"Shop logo animation refresh", proposals:"6 proposals", status:"Reviewing", tone:"amber"},
      {title:"Short-video cover templates ×10", proposals:"Awarded", status:"In progress", tone:"gray"}
    ],
    reviews:[
      {author:"Lihua Womenswear", text:"Great fit accuracy, smooth communication. Ordered again.", time:"1w ago", rating:"5.0"},
      {author:"Lazao Hotpot", text:"The opening promo looks delicious. Boss is happy.", time:"3w ago", rating:"5.0"},
      {author:"Heguang Brand", text:"Natural lip-sync, great phrasing on the script.", time:"1mo ago", rating:"4.9"}
    ],
    settings:{langL:"Language", lang:"English", notifL:"Notifications", notif:"Order & community alerts on", payoutL:"Payout method", payout:"Alipay ··· 8841"},
    wallet:{title:"Token wallet", balance:"2,450", balanceL:"Balance", topup:"Top up",
      flows:[{label:"Generation · dress sample", amt:"−120", time:"Today"},{label:"Top-up bundle · 2000+300", amt:"+2,300", time:"Yesterday"},{label:"Course completion bonus", amt:"+100", time:"3d ago"}]},
    certsTitle:"Certificate wall",
    certs:[{course:"AI Video Zero to First Order", serial:"Holder #184", date:"2026.03.18"},{course:"E-commerce Video Pipeline", serial:"Holder #96", date:"2026.05.02"}]
  },
  studio:{
    title:"Studio", sub:"Token-based generation · deliver without leaving",
    modeT2V:"Text to video", modeI2V:"Image to video",
    promptPh:"Describe the shot: a model in a floral dress walking naturally down a street, camera slowly orbiting…",
    promptCourse:"Want steadier prompts? \"Advanced Prompting\" course →",
    modelL:"Model", turbo:"Turbo", turboD:"Fast · 1 token/s", pro:"Pro", proD:"High quality · 3 tokens/s",
    aspectL:"Aspect", durL:"Duration", resL:"Resolution",
    costL:"Estimated cost", cost:"30 tokens", balance:"Balance 2,450", gen:"Generate",
    histTitle:"Generation history",
    history:[
      {prompt:"Floral dress model walking, orbiting camera", status:"progress", pct:64, meta:"Pro · 9:16 · 10s · 1080p"},
      {prompt:"Boiling hotpot close-up, steam and red oil", status:"done", meta:"Pro · 16:9 · 5s · 1080p"},
      {prompt:"B&B aerial at dawn, sea of clouds parting", status:"done", meta:"Pro · 16:9 · 10s · 1080p"},
      {prompt:"Avatar presenter: launch script part A", status:"done", meta:"Turbo · 9:16 · 10s · 720p"},
      {prompt:"Knitwear fabric texture, slow push-in", status:"done", meta:"Pro · 1:1 · 5s · 1080p"},
      {prompt:"Metallic logo rotating showcase", status:"done", meta:"Turbo · 16:9 · 5s · 720p"}
    ],
    reuse:"Reuse prompt", download:"Download", generating:"Generating",
    toolsTitle:"Creator toolbox", toolsSub:"Exclusive deals on mainstream tools — copy a code",
    tools:[
      {name:"Seedance", desc:"Text-to-video · high consistency", code:"AIV20"},
      {name:"Kling", desc:"Image-to-video · realistic people", code:"AIVKL15"},
      {name:"Runway", desc:"Video editing · stylization", code:"AIVRW10"},
      {name:"Hailuo", desc:"AI avatars · lip-sync", code:"AIVHL20"},
      {name:"Pika", desc:"Animation styles · fast output", code:"AIVPK12"},
      {name:"JianYing", desc:"Editing · captions & voiceover", code:"AIVJY30"}
    ],
    copy:"Copy", copied:"Copied ✓", visit:"Website →"
  },
  ui:{ themeDark:"Dark", themeLight:"Light", langBtn:"中文" }
}
};
