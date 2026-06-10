/* ========= AIV pages & components ========= */

/* ================= cards ================= */

function courseCard(c) {
  const enrolled = state.enrolled[c.id] !== undefined;
  return `
  <a class="card course-card" href="#/course/${c.id}">
    <div class="cover ${c.grad}">
      <span class="cover-emoji">${c.emoji}</span>
      <span class="badge lvl">${t('f_' + c.level)}</span>
      <span class="badge trial">▶ ${t('trialBadge')}</span>
    </div>
    <div class="card-body">
      <h3 class="card-title">${L(c.title)}</h3>
      <p class="card-sub clamp2">${L(c.tagline)}</p>
      <div class="meta-row">
        <span class="rating">★ ${c.rating}</span>
        <span>${c.students.toLocaleString()} ${t('studentsSuffix')}</span>
        <span>${c.curriculum.length} ${t('lessonsSuffix')}</span>
      </div>
      <div class="card-foot">
        <span class="who">${av(c.instructor.i, c.instructor.g, 'sm')} ${L(c.instructor.name)}</span>
        ${enrolled
          ? `<span class="price enrolled-tag">✓ ${t('enrolledBadge')}</span>`
          : `<span class="price">${money(c.price)} <s>${money(c.oldPrice)}</s></span>`}
      </div>
    </div>
  </a>`;
}

function briefCard(b) {
  return `
  <a class="card brief-card" href="#/brief/${b.id}">
    <div class="brief-top">
      <span class="who">${av(b.client.i, b.client.g, 'sm')} ${L(b.client.name)}
        ${b.client.verified ? '<span class="vbadge" title="' + t('verified') + '">✓</span>' : ''}
        ${b.mine ? `<span class="minebadge">${t('youBadge')}</span>` : ''}
      </span>
      <span class="status ${b.status}">${b.status === 'open' ? t('statusOpen') : b.status === 'review' ? t('statusReview') : t('statusProg')}</span>
    </div>
    <h3 class="card-title"><span class="t-emoji">${b.emoji}</span>${L(b.title)}</h3>
    <p class="card-sub clamp2">${L(b.desc)}</p>
    <div class="brief-foot">
      <div>
        <div class="brief-budget">${money(b.budget[0])}–${money(b.budget[1])}</div>
        <div class="brief-meta">⏱ ${state.lang === 'zh' ? b.deadline + ' 天内交付' : 'due in ' + b.deadline + ' days'} · 👥 ${b.joined} ${t('joinedSuffix')}</div>
      </div>
      <span class="btn ghost sm">${t('viewDetail')} →</span>
    </div>
  </a>`;
}

function gigCard(g) {
  return `
  <a class="card gig-card" href="#/gig/${g.id}">
    <div class="cover sm ${g.grad}"><span class="cover-emoji">${g.emoji}</span></div>
    <div class="card-body">
      <div class="who">${av(g.seller.i, g.seller.g, 'sm')} ${L(g.seller.name)}
        <span class="lvl-tag">${L(g.seller.level)}</span>
        ${g.seller.online ? `<span class="dot-on" title="${t('onlineNow')}"></span>` : ''}
      </div>
      <h3 class="card-title clamp2">${L(g.title)}</h3>
      <div class="meta-row">
        <span class="rating">★ ${g.seller.rating}</span><span>(${g.seller.reviews})</span>
        ${g.seller.certs.length ? `<span class="cert-mini">🎓 ×${g.seller.certs.length}</span>` : ''}
      </div>
      <div class="card-foot">
        <span class="muted">${t('fromLabel')}</span>
        <span class="price">${money(g.from)}</span>
      </div>
    </div>
  </a>`;
}

function toolCard(tool) {
  const btnId = 'copy-' + tool.id;
  return `
  <div class="card tool-card">
    <div class="tool-head">
      <span class="tool-logo ${tool.grad}">${tool.emoji}</span>
      <div>
        <h3 class="card-title">${tool.name}</h3>
        <div class="muted sm-text">${L(tool.by)} · ${t('toolCat_' + tool.cat)}</div>
      </div>
      <span class="deal-badge">${t('dealBadge')}</span>
    </div>
    <p class="card-sub">${L(tool.desc)}</p>
    <div class="deal-line">🎁 ${L(tool.deal)}</div>
    <div class="code-row">
      <code class="promo">${tool.code}</code>
      <button id="${btnId}" class="btn ghost sm" onclick="App.copyCode('${tool.code}','${btnId}')">${t('copyBtn')}</button>
      <a class="btn outline sm" href="${tool.link}" target="_blank" rel="noopener">${t('visitBtn')} ↗</a>
    </div>
  </div>`;
}

/* ================= home ================= */

function pageHome() {
  const flySteps = [
    { n: '01', icon: '🎓', s: t('fly_s1'), d: t('fly_d1'), href: '#/courses' },
    { n: '02', icon: '🤝', s: t('fly_s2'), d: t('fly_d2'), href: '#/market' },
    { n: '03', icon: '🛠️', s: t('fly_s3'), d: t('fly_d3'), href: '#/tools' },
    { n: '04', icon: '🚀', s: t('fly_s4'), d: t('fly_d4'), href: '#/courses' },
  ];
  return `
  <!-- hero -->
  <section class="hero container">
    <div class="hero-left">
      <div class="eyebrow">${t('hero_eyebrow')}</div>
      <h1>${t('hero_t1')}<br><span class="grad-text">${t('hero_t2')}</span></h1>
      <p class="hero-sub">${t('hero_sub')}</p>
      <div class="cta-row">
        <a class="btn primary lg" href="#/courses">${t('hero_ctaLearn')}</a>
        <a class="btn outline lg" href="#/market">${t('hero_ctaMarket')}</a>
      </div>
      <div class="hero-stats">
        ${[1, 2, 3, 4].map(i => `<div class="hstat"><b>${t('hero_s' + i + 'n')}</b><span>${t('hero_s' + i)}</span></div>`).join('')}
      </div>
    </div>
    <div class="hero-right">
      <div class="float-card fc1">
        <div class="who">${av('ML', 'g2', 'sm')} ${state.lang === 'zh' ? '茉莉女装' : 'Jasmine Apparel'}</div>
        <div class="fc-title">👗 ${state.lang === 'zh' ? '5 件连衣裙上身视频' : '5 dress try-on videos'}</div>
        <div class="fc-foot"><span class="brief-budget">¥1,500–2,500</span><span class="btn primary sm">${t('participate')}</span></div>
      </div>
      <div class="float-card fc2">
        <div class="fc-course-cover g1">🎬</div>
        <div>
          <div class="fc-title">${state.lang === 'zh' ? 'AI 视频入门' : 'AI Video 101'}</div>
          <div class="muted sm-text">▶ ${t('trialBadge')}</div>
        </div>
      </div>
      <div class="float-card fc3">
        <div class="fc-title">⬡ AIV Studio</div>
        <div class="gen-bar"><div class="gen-fill"></div></div>
        <div class="muted sm-text">${t('generatingBtn')} 87%</div>
      </div>
    </div>
  </section>

  <!-- flywheel -->
  <section class="container section">
    <div class="sec-head center">
      <div class="eyebrow">${t('fly_eyebrow')}</div>
      <h2>${t('fly_title')}</h2>
      <p class="sec-sub">${t('fly_sub')}</p>
    </div>
    <div class="fly-wrap">
      <div class="fly-ring"></div>
      <div class="fly-hub"><span>♻</span>${t('fly_hub')}</div>
      ${flySteps.map((f, i) => `
        <a class="fly-node n${i + 1}" href="${f.href}">
          <div class="fly-num">${f.n}</div>
          <div class="fly-icon">${f.icon}</div>
          <h4>${f.s}</h4>
          <p>${f.d}</p>
        </a>`).join('')}
    </div>
  </section>

  <!-- featured courses -->
  <section class="container section">
    <div class="sec-head">
      <div><h2>${t('sec_courses')}</h2><p class="sec-sub">${t('sec_courses_sub')}</p></div>
      <a class="btn ghost" href="#/courses">${t('viewAll')} →</a>
    </div>
    <div class="grid cols3">${DATA.courses.slice(0, 3).map(courseCard).join('')}</div>
  </section>

  <!-- marketplace preview -->
  <section class="container section">
    <div class="grid cols2 gap-lg">
      <div>
        <div class="sec-head">
          <h2>${t('sec_briefs')}</h2>
          <a class="btn ghost" href="#/market">${t('viewAll')} →</a>
        </div>
        <div class="stack">${DATA.briefs.slice(0, 3).map(briefCard).join('')}</div>
      </div>
      <div>
        <div class="sec-head">
          <h2>${t('sec_gigs')}</h2>
          <a class="btn ghost" href="#/market">${t('viewAll')} →</a>
        </div>
        <div class="stack">${DATA.gigs.slice(0, 3).map(g => `
          <a class="card gig-row" href="#/gig/${g.id}">
            <div class="gig-row-cover ${g.grad}">${g.emoji}</div>
            <div class="gig-row-body">
              <h3 class="card-title clamp1">${L(g.title)}</h3>
              <div class="meta-row"><span class="who">${av(g.seller.i, g.seller.g, 'sm')} ${L(g.seller.name)}</span><span class="rating">★ ${g.seller.rating}</span><span>(${g.seller.reviews})</span></div>
            </div>
            <div class="gig-row-price"><span class="muted sm-text">${t('fromLabel')}</span> <b>${money(g.from)}</b></div>
          </a>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <!-- tools strip -->
  <section class="container section">
    <div class="sec-head">
      <div><h2>${t('sec_tools')}</h2><p class="sec-sub">${t('sec_tools_sub')}</p></div>
      <a class="btn ghost" href="#/tools">${t('viewAll')} →</a>
    </div>
    <div class="tool-strip">
      <a class="tool-pill studio-pill" href="#/studio"><span class="tool-logo g1">⬡</span> AIV Studio <span class="beta-tag">Beta</span></a>
      ${DATA.tools.map(x => `<a class="tool-pill" href="#/tools"><span class="tool-logo ${x.grad}">${x.emoji}</span> ${x.name}</a>`).join('')}
    </div>
  </section>

  <!-- cta -->
  <section class="container section">
    <div class="cta-band">
      <h2>${t('cta_title')}</h2>
      <p>${t('cta_sub')}</p>
      <div class="cta-row center">
        <a class="btn white lg" href="#/course/1">${t('cta_btn1')}</a>
        <button class="btn glass lg" onclick="App.postRequestModal()">${t('cta_btn2')}</button>
      </div>
    </div>
  </section>`;
}

/* ================= courses ================= */

function courseListHTML() {
  const f = state.courseFilter;
  const list = DATA.courses.filter(c => f === 'all' || c.level === f);
  return `
    <div class="chips">
      ${['all', 'beginner', 'intermediate', 'advanced'].map(x => chip(t('f_' + x), f === x, `App.setCourseFilter('${x}')`)).join('')}
    </div>
    <div class="grid cols3">${list.map(courseCard).join('')}</div>`;
}

function pageCourses() {
  return `
  <section class="container page-head">
    <h1>${t('courses_title')}</h1>
    <p class="sec-sub">${t('courses_sub')}</p>
  </section>
  <section class="container section" id="course-list">${courseListHTML()}</section>`;
}

/* ---- course detail ---- */

function curriculumHTML(c) {
  const enrolled = state.enrolled[c.id] !== undefined;
  return `<div class="lessons">
    ${c.curriculum.map((l, i) => {
      const unlocked = enrolled || l.trial;
      return `
      <div class="lesson ${unlocked ? '' : 'locked'}" onclick="App.playLesson(${c.id},${i})">
        <span class="l-idx">${String(i + 1).padStart(2, '0')}</span>
        <span class="l-title">${L(l.t)}</span>
        ${l.trial && !enrolled ? `<span class="badge trial sm">${t('freeTrial')}</span>` : ''}
        <span class="l-dur">${l.d}</span>
        <span class="l-ico">${unlocked ? '▶' : '🔒'}</span>
      </div>`;
    }).join('')}
  </div>`;
}

function communityHTML(c) {
  const enrolled = state.enrolled[c.id] !== undefined;
  const posts = c.community.length ? c.community : [
    { a: { zh: '小柚', en: 'Yuzu' }, i: 'XY', g: 'g4', time: { zh: '3 小时前', en: '3h ago' }, replies: 6, likes: 18, c: { zh: '第 3 节的作业交了，求老师和同学们拍砖！', en: 'Lesson 3 homework submitted — feedback welcome!' } },
    { a: { zh: '一帆', en: 'Evan' }, i: 'YF', g: 'g6', time: { zh: '昨天', en: 'Yesterday' }, replies: 11, likes: 35, c: { zh: '整理了一份本课的工具清单和优惠码，自取～', en: 'Compiled a tool list + promo codes for this course, help yourselves~' } },
  ];
  const list = posts.map(p => `
    <div class="post ${p.pinned ? 'pinned' : ''}">
      <div class="post-head">
        <span class="who">${av(p.i, p.g, 'sm')} <b>${L(p.a)}</b></span>
        ${p.pinned ? `<span class="pin-tag">📌 ${t('pinned')}</span>` : ''}
        <span class="muted sm-text">${L(p.time)}</span>
      </div>
      <p class="post-body">${L(p.c)}</p>
      <div class="post-foot">💬 ${p.replies} ${t('repliesSuffix')} · 👍 ${p.likes} ${t('likesSuffix')}</div>
    </div>`).join('');

  if (!enrolled) {
    return `
    <div class="community-locked">
      <div class="cl-blur">${list}</div>
      <div class="cl-overlay">
        <div class="cl-lock">🔒</div>
        <h3>${t('communityLocked')}</h3>
        <p>${t('communityLockedSub')}</p>
        <button class="btn primary" onclick="App.enrollModal(${c.id})">${t('unlockBtn')} · ${money(c.price)}</button>
      </div>
    </div>`;
  }
  return `
    <div class="post-compose">
      ${av(DATA.profile.i, DATA.profile.g, 'sm')}
      <input id="community-input" class="f-input" placeholder="${t('postPh')}" onkeydown="if(event.key==='Enter')App.postCommunity(${c.id})">
      <button class="btn primary sm" onclick="App.postCommunity(${c.id})">${t('postBtn')}</button>
    </div>
    ${list}`;
}

function courseTabsHTML(c) {
  const tab = state.courseTab;
  let body = '';
  if (tab === 'overview') {
    body = `
      <h3 class="block-title">${t('whatLearn')}</h3>
      <div class="learn-grid">${c.learn.map(x => `<div class="learn-item">✓ ${L(x)}</div>`).join('')}</div>
      <h3 class="block-title">${t('aboutInstructor')}</h3>
      <div class="card instructor-card">
        ${av(c.instructor.i, c.instructor.g, 'lg')}
        <div>
          <b>${L(c.instructor.name)}</b>
          <p class="muted">${L(c.instructor.title)}</p>
        </div>
        <button class="btn outline sm" onclick="App.follow()">${t('followBtn')}</button>
      </div>`;
  } else if (tab === 'curriculum') {
    body = curriculumHTML(c);
  } else {
    body = communityHTML(c);
  }
  return `
    <div class="tabs">
      ${['overview', 'curriculum', 'community'].map(x => `<button class="tab ${tab === x ? 'on' : ''}" onclick="App.setCourseTab('${x}',${c.id})">${t('tab_' + x)}${x === 'community' && state.enrolled[c.id] === undefined ? ' 🔒' : ''}</button>`).join('')}
    </div>
    <div class="tab-body">${body}</div>`;
}

function pageCourse(id) {
  const c = DATA.courses.find(x => x.id === id) || DATA.courses[0];
  state.courseTab = 'overview';
  const enrolled = state.enrolled[c.id] !== undefined;
  const progress = state.enrolled[c.id] || 0;
  const next = DATA.courses.find(x => x.id !== c.id && x.level !== 'beginner') || DATA.courses[0];
  return `
  <section class="container detail-grid section">
    <div class="detail-main">
      <a class="crumb" href="#/courses">← ${t('courses_title')}</a>
      <h1 class="detail-title">${c.emoji} ${L(c.title)}</h1>
      <p class="sec-sub">${L(c.tagline)}</p>
      <div class="meta-row lg">
        <span class="rating">★ ${c.rating}</span>
        <span>${c.students.toLocaleString()} ${t('studentsSuffix')}</span>
        <span>${c.curriculum.length} ${t('lessonsSuffix')} · ${c.hours} ${t('hoursSuffix')}</span>
        <span class="badge lvl static">${t('f_' + c.level)}</span>
      </div>

      <div id="player" class="player ${c.grad}">
        <div class="player-center"><button class="play-btn" onclick="App.playLesson(${c.id},0)">▶</button></div>
        <div class="player-bar">
          <span class="eq"><i></i><i></i><i></i></span>
          <span id="player-title">${t('lessonWord', { n: 1 })} · ${L(c.curriculum[0].t)} <span class="badge trial sm">${t('freeTrial')}</span></span>
          <span id="player-dur" class="l-dur">${c.curriculum[0].d}</span>
        </div>
        <div class="player-progress"><div class="pp-fill"></div></div>
      </div>

      <div id="course-tabs-wrap">${courseTabsHTML(c)}</div>
    </div>

    <aside class="detail-side">
      <div class="card side-card">
        ${enrolled ? `
          <div class="side-enrolled">✓ ${t('enrolledBadge')}</div>
          <div class="prog-row"><span>${t('courseProgress')}</span><b>${progress}%</b></div>
          <div class="prog-bar"><div style="width:${progress}%"></div></div>
          <button class="btn primary block" onclick="App.playLesson(${c.id},${Math.min(Math.floor(progress / 10), 9)})">${t('continueLearning')}</button>
        ` : `
          <div class="side-price">${money(c.price)} <s>${money(c.oldPrice)}</s></div>
          <button class="btn primary block" onclick="App.enrollModal(${c.id})">${t('enrollNow')}</button>
          <button class="btn outline block" onclick="App.playLesson(${c.id},0)">▶ ${t('tryFree')}</button>
          <p class="modal-hint center">${t('onePay')}</p>
        `}
        <div class="divider"></div>
        <h4>${t('includesTitle')}</h4>
        <ul class="inc-list">
          <li>🎬 ${c.curriculum.length} ${t('lessonsSuffix')} · ${t('inc1')}</li>
          <li>💬 ${t('inc2')}</li>
          <li>🎓 ${t('inc3')}</li>
          <li>📦 ${t('inc4')}</li>
        </ul>
      </div>
      <div class="card side-card next-card">
        <div class="eyebrow">${t('recommendNext')}</div>
        <a class="next-course" href="#/course/${next.id}">
          <span class="fc-course-cover ${next.grad}">${next.emoji}</span>
          <div><b>${L(next.title)}</b><div class="muted sm-text">★ ${next.rating} · ${money(next.price)}</div></div>
        </a>
      </div>
    </aside>
  </section>`;
}

/* ================= marketplace ================= */

function marketGridHTML() {
  const q = state.marketQ;
  const cat = state.marketCat;
  if (state.marketTab === 'briefs') {
    const list = DATA.briefs.filter(b => (cat === 'all' || b.cat === cat) && (!q || L(b.title).toLowerCase().includes(q) || L(b.desc).toLowerCase().includes(q)));
    return list.length ? `<div class="grid cols2">${list.map(briefCard).join('')}</div>` : `<div class="empty">🔍</div>`;
  }
  const list = DATA.gigs.filter(g => (cat === 'all' || g.cat === cat) && (!q || L(g.title).toLowerCase().includes(q)));
  return list.length ? `<div class="grid cols3">${list.map(gigCard).join('')}</div>` : `<div class="empty">🔍</div>`;
}

function marketListHTML() {
  const cats = ['all', 'ecom', 'promo', 'avatar', 'anim', 'food', 'real'];
  return `
    <div class="market-tabs">
      <button class="mtab ${state.marketTab === 'briefs' ? 'on' : ''}" onclick="App.setMarketTab('briefs')">📣 ${t('tab_briefs')} <span class="count">${DATA.briefs.length}</span></button>
      <button class="mtab ${state.marketTab === 'gigs' ? 'on' : ''}" onclick="App.setMarketTab('gigs')">🎥 ${t('tab_gigs')} <span class="count">${DATA.gigs.length}</span></button>
    </div>
    <div class="chips">${cats.map(x => chip(t('cat_' + x), state.marketCat === x, `App.setMarketCat('${x}')`)).join('')}</div>
    <div id="market-grid">${marketGridHTML()}</div>`;
}

function pageMarket() {
  return `
  <section class="container page-head">
    <div class="page-head-row">
      <div>
        <h1>${t('market_title')}</h1>
        <p class="sec-sub">${t('market_sub')}</p>
      </div>
      <div class="head-actions">
        <button class="btn outline" onclick="App.postServiceModal()">🎥 ${t('postService')}</button>
        <button class="btn primary" onclick="App.postRequestModal()">📣 ${t('postRequest')}</button>
      </div>
    </div>
    <div class="search-row">
      <input class="f-input search" placeholder="${t('searchPh')}" oninput="App.marketSearch(this.value)">
    </div>
  </section>
  <section class="container section" id="market-list">${marketListHTML()}</section>
  <section class="container section">
    <div class="hw-band">
      <h3>🛡 ${t('howWorks')} · ${t('escrow')}</h3>
      <div class="hw-steps">
        ${[t('hw1'), t('hw2'), t('hw3')].map((x, i) => `<div class="hw-step"><b>${i + 1}</b><span>${x}</span></div>`).join('')}
      </div>
    </div>
  </section>`;
}

/* ---- brief detail ---- */

function pageBrief(id) {
  const b = DATA.briefs.find(x => x.id === id) || DATA.briefs[0];
  return `
  <section class="container detail-grid section">
    <div class="detail-main">
      <a class="crumb" href="#/market">← ${t('market_title')}</a>
      <div class="brief-top lg">
        <span class="who">${av(b.client.i, b.client.g)} <b>${L(b.client.name)}</b>
          ${b.client.verified ? '<span class="vbadge">✓ ' + t('verified') + '</span>' : ''}
          ${b.mine ? `<span class="minebadge">${t('youBadge')}</span>` : ''}
        </span>
        <span class="status ${b.status}">${b.status === 'open' ? t('statusOpen') : b.status === 'review' ? t('statusReview') : t('statusProg')}</span>
      </div>
      <h1 class="detail-title">${b.emoji} ${L(b.title)}</h1>
      <p class="detail-desc">${L(b.desc)}</p>

      ${b.reqs.length ? `
      <h3 class="block-title">${t('requirements')}</h3>
      <div class="card req-card"><ul class="req-list">${b.reqs.map(r => `<li>✓ ${L(r)}</li>`).join('')}</ul></div>` : ''}

      <h3 class="block-title">${t('proposalsTitle')} <span class="count">${b.proposals.length}</span></h3>
      <div class="stack">
        ${b.proposals.map(p => `
          <div class="card proposal">
            <div class="post-head">
              <span class="who">${av(p.i, p.g, 'sm')} <b>${L(p.name)}</b></span>
              <span class="muted sm-text">${L(p.time)}</span>
            </div>
            <p class="post-body">${L(p.note)}</p>
            <div class="proposal-foot">
              <span class="brief-budget">${money(p.price)}</span>
              ${b.mine ? `<button class="btn outline sm" onclick="App.openChat('${esc(L(p.name))}')">💬 ${t('chatToRefine')}</button>` : ''}
            </div>
          </div>`).join('') || `<div class="empty">💭</div>`}
      </div>
    </div>

    <aside class="detail-side">
      <div class="card side-card">
        <div class="side-budget-label">${t('budget')}</div>
        <div class="side-price">${money(b.budget[0])}–${money(b.budget[1])}</div>
        <div class="side-rows">
          <div class="side-row"><span>⏱ ${t('deadlineLabel')}</span><b>${b.deadline} ${t('daysSuffix')}</b></div>
          <div class="side-row"><span>👥 ${t('joinedSuffix')}</span><b>${b.joined}</b></div>
          <div class="side-row"><span>🛡 ${t('escrow')}</span><b>✓</b></div>
        </div>
        ${b.mine ? '' : `
        <button class="btn primary block" onclick="App.participateModal(${b.id})">⚡ ${t('participate')}</button>
        <button class="btn outline block" onclick="App.openChat('${esc(L(b.client.name))}')">💬 ${t('chatToRefine')}</button>`}
      </div>
      <div class="card side-card">
        <h4>${t('aboutClient')}</h4>
        <div class="who lg">${av(b.client.i, b.client.g)} <div><b>${L(b.client.name)}</b><div class="muted sm-text">${L(b.client.info)}</div></div></div>
      </div>
      <div class="card side-card hw-mini">
        <h4>${t('howWorks')}</h4>
        <ol>${[t('hw1'), t('hw2'), t('hw3')].map(x => `<li>${x}</li>`).join('')}</ol>
      </div>
    </aside>
  </section>`;
}

/* ---- gig detail ---- */

function pageGig(id) {
  const g = DATA.gigs.find(x => x.id === id) || DATA.gigs[0];
  const s = g.seller;
  return `
  <section class="container detail-grid section">
    <div class="detail-main">
      <a class="crumb" href="#/market">← ${t('market_title')}</a>
      <h1 class="detail-title">${g.emoji} ${L(g.title)}</h1>
      <div class="meta-row lg">
        <span class="who">${av(s.i, s.g, 'sm')} <b>${L(s.name)}</b></span>
        <span class="lvl-tag">${L(s.level)}</span>
        <span class="rating">★ ${s.rating}</span><span>(${s.reviews} ${t('reviewsTitle')})</span>
        ${s.online ? `<span class="dot-on"></span> ${t('onlineNow')}` : ''}
      </div>

      <div class="gallery">
        ${g.gallery.map((gr, i) => `<div class="gal-item ${gr} ${i === 0 ? 'main' : ''}"><span>${g.emoji}</span><i class="play-mini">▶</i></div>`).join('')}
      </div>

      <h3 class="block-title">${t('packages')}</h3>
      <div class="pkg-grid">
        ${g.packages.map(p => `
          <div class="pkg ${p.popular ? 'pop' : ''}">
            ${p.popular ? `<div class="pop-tag">🔥 ${t('popular')}</div>` : ''}
            <div class="pkg-name">${t('pkg_' + p.key)}</div>
            <div class="pkg-price">${money(p.price)}</div>
            <div class="pkg-meta">⏱ ${p.delivery} ${t('daysSuffix')} · ↺ ${p.revisions >= 99 ? t('unlimited') : p.revisions + ' ' + t('timesSuffix')}</div>
            <ul class="pkg-feats">${p.features.map(f => `<li>✓ ${L(f)}</li>`).join('')}</ul>
            <button class="btn ${p.popular ? 'primary' : 'outline'} block" onclick="App.orderGig(${g.id},'${p.key}')">${t('selectPkg')}</button>
          </div>`).join('')}
      </div>

      ${g.reviews.length ? `
      <h3 class="block-title">${t('reviewsTitle')} <span class="count">${s.reviews}</span></h3>
      <div class="stack">
        ${g.reviews.map(r => `
          <div class="card proposal">
            <div class="post-head">
              <span class="who">${av(r.i, r.g, 'sm')} <b>${L(r.name)}</b></span>
              <span>${stars(r.rating)} <span class="muted sm-text">${L(r.time)}</span></span>
            </div>
            <p class="post-body">${L(r.text)}</p>
          </div>`).join('')}
      </div>` : ''}

      ${g.faq.length ? `
      <h3 class="block-title">${t('faqTitle')}</h3>
      <div class="stack">
        ${g.faq.map(f => `<div class="card faq-item"><b>Q：${L(f.q)}</b><p class="muted">${L(f.a)}</p></div>`).join('')}
      </div>` : ''}
    </div>

    <aside class="detail-side">
      <div class="card side-card">
        <div class="side-budget-label">${t('fromLabel')}</div>
        <div class="side-price">${money(g.from)}</div>
        <button class="btn primary block" onclick="App.orderGig(${g.id},'${(g.packages.find(p => p.popular) || g.packages[0]).key}')">${t('orderNow')}</button>
        <button class="btn outline block" onclick="App.openChat('${esc(L(s.name))}')">💬 ${t('contactSeller')}</button>
        <div class="side-rows">
          <div class="side-row"><span>📦 ${t('ordersInQueue')}</span><b>${s.queue}</b></div>
          <div class="side-row"><span>⚡ ${t('avgResponse')}</span><b>${L(s.resp)}</b></div>
          <div class="side-row"><span>🛡 ${t('escrow')}</span><b>✓</b></div>
        </div>
      </div>
      <div class="card side-card">
        <h4>${t('aboutSeller')}</h4>
        <div class="who lg">${av(s.i, s.g)} <div><b>${L(s.name)}</b><div class="muted sm-text">${L(s.level)}</div></div></div>
        <p class="muted sm-text">${L(s.bio)}</p>
        ${s.certs.length ? `
        <h5 class="cert-head">🎓 ${t('sellerCerts')}</h5>
        <div class="cert-tags">${s.certs.map(c => `<span class="cert-tag">✓ ${L(c)}</span>`).join('')}</div>` : ''}
      </div>
    </aside>
  </section>`;
}

/* ================= tools ================= */

function pageTools() {
  return `
  <section class="container page-head">
    <h1>${t('tools_title')}</h1>
    <p class="sec-sub">${t('tools_sub')}</p>
  </section>
  <section class="container section">
    <a class="studio-banner" href="#/studio">
      <div class="sb-left">
        <div class="sb-title">⬡ ${t('studioCardTitle')} <span class="beta-tag">${t('studioCardBeta')}</span></div>
        <p>${t('studioCardSub')}</p>
        <span class="btn white">${t('openStudio')} →</span>
      </div>
      <div class="sb-right">
        <div class="sb-prompt">"${state.lang === 'zh' ? '模特身穿白色连衣裙在日落海边行走…' : 'A model in a white dress walking on a sunset beach…'}"</div>
        <div class="gen-bar"><div class="gen-fill"></div></div>
      </div>
    </a>
  </section>
  <section class="container section">
    <div class="grid cols3">${DATA.tools.map(toolCard).join('')}</div>
  </section>`;
}

/* ================= studio ================= */

function studioPanelHTML() {
  const s = state.studio;
  const seg = (key, options) => `
    <div class="seg">${options.map(([val, label]) => `<button class="seg-btn ${s[key] === val ? 'on' : ''}" onclick="App.setStudio('${key}','${val}')">${label}</button>`).join('')}</div>`;
  const segNum = (key, options) => `
    <div class="seg">${options.map(([val, label]) => `<button class="seg-btn ${s[key] === val ? 'on' : ''}" onclick="App.setStudio('${key}',${val})">${label}</button>`).join('')}</div>`;
  return `
    <label class="f-label">${t('modeLabel')}</label>
    ${seg('mode', [['t2v', '✍️ ' + t('mode_t2v')], ['i2v', '🖼 ' + t('mode_i2v')]])}
    ${s.mode === 'i2v' ? `<div class="i2v-drop" onclick="App.demo()">⬆ ${t('i2vDrop')}</div>` : ''}
    <label class="f-label">${t('promptLabel')}</label>
    <textarea id="studio-prompt" class="f-input prompt-area" rows="4" placeholder="${t('promptPh')}" oninput="App.studioPrompt(this.value)">${esc(s.prompt)}</textarea>
    <div class="tip-line">💡 ${t('promptTips')} <a href="#/course/4">${L(DATA.courses[3].title)}</a></div>
    <label class="f-label">${t('modelLabel')}</label>
    ${seg('model', [['turbo', '⚡ ' + t('model_turbo')], ['pro', '💎 ' + t('model_pro')]])}
    <label class="f-label">${t('aspectLabel')}</label>
    ${seg('aspect', [['9:16', '9:16'], ['16:9', '16:9'], ['1:1', '1:1']])}
    <div class="f-row two">
      <div><label class="f-label">${t('durLabel')}</label>${segNum('dur', [[5, '5s'], [10, '10s']])}</div>
      <div><label class="f-label">${t('resLabel')}</label>${seg('res', [['720', '720p'], ['1080', '1080p']])}</div>
    </div>
    <div class="cost-row">
      <span>${t('costLabel')}</span>
      <b>⬡ ${App.genCost()} ${t('tokensWord')}</b>
    </div>
    <button class="btn primary block lg" onclick="App.generate()">✨ ${t('generateBtn')}</button>`;
}

function pageStudio() {
  return `
  <section class="container page-head">
    <div class="page-head-row">
      <div>
        <h1>⬡ ${t('studio_title')} <span class="beta-tag">Beta</span></h1>
        <p class="sec-sub">${t('studio_sub')}</p>
      </div>
      <div class="head-actions">
        <div class="balance-box">
          <span class="muted sm-text">${t('balanceLabel')}</span>
          <b>⬡ ${state.tokens.toLocaleString()}</b>
          <button class="btn outline sm" onclick="App.buyTokensModal()">${t('topUp')}</button>
        </div>
      </div>
    </div>
  </section>
  <section class="container section studio-grid">
    <div class="card studio-form" id="studio-panel">${studioPanelHTML()}</div>
    <div class="studio-out">
      <h3 class="block-title top0">${t('historyTitle')}</h3>
      ${DATA.generations.length ? `
      <div class="gen-grid">
        ${DATA.generations.map(g => `
          <div class="gen-card ${g.status === 'gen' ? 'busy' : ''}">
            <div class="gen-thumb ${g.grad} a${g.aspect.replace(':', '-')}">
              ${g.status === 'gen'
                ? `<div class="gen-loading"><div class="spinner"></div><span>${t('generatingBtn')}</span><div class="gen-bar"><div class="gen-fill slow"></div></div></div>`
                : `<i class="play-mini lg">▶</i><span class="gen-dur">${g.dur}s</span>`}
            </div>
            <div class="gen-info">
              <p class="clamp2">${esc(L(g.prompt))}</p>
              <div class="gen-meta"><span>${g.model} · ${g.aspect}</span>
                <span class="gen-actions">
                  <button class="icon-btn" title="${t('reusePrompt')}" onclick="App.reusePrompt(${g.id})">↺</button>
                  <button class="icon-btn" title="${t('downloadBtn')}" onclick="App.downloadDemo()">⬇</button>
                </span>
              </div>
            </div>
          </div>`).join('')}
      </div>` : `<div class="empty">${t('queueEmpty')}</div>`}
    </div>
  </section>`;
}

/* ================= profile ================= */

function profilePanelHTML() {
  const p = DATA.profile;
  const tab = state.profileTab;

  if (tab === 'portfolio') {
    return `<div class="grid cols3">
      ${p.portfolio.map(w => `
        <div class="card work-card" onclick="App.demo()">
          <div class="cover sm ${w.grad}"><span class="cover-emoji">${w.emoji}</span><i class="play-mini">▶</i></div>
          <div class="card-body tight">
            <h3 class="card-title clamp1">${L(w.title)}</h3>
            <div class="muted sm-text">▶ ${w.views} ${t('viewsSuffix')}</div>
          </div>
        </div>`).join('')}
    </div>`;
  }

  if (tab === 'courses') {
    const enrolledCourses = Object.keys(state.enrolled).map(Number).map(id => DATA.courses.find(c => c.id === id)).filter(Boolean);
    const suggest = DATA.courses.find(c => state.enrolled[c.id] === undefined);
    return `
    <div class="stack">
      ${enrolledCourses.map(c => {
        const prog = state.enrolled[c.id];
        return `
        <div class="card course-row">
          <a class="fc-course-cover ${c.grad}" href="#/course/${c.id}">${c.emoji}</a>
          <div class="course-row-body">
            <a href="#/course/${c.id}"><b>${L(c.title)}</b></a>
            <div class="prog-row sm"><span>${t('courseProgress')}</span><b>${prog}%</b></div>
            <div class="prog-bar"><div style="width:${prog}%"></div></div>
          </div>
          ${prog >= 100
            ? `<button class="btn outline sm" onclick="App.demo()">🎓 ${t('viewCert')}</button>`
            : `<a class="btn primary sm" href="#/course/${c.id}">${t('continueLearning')}</a>`}
        </div>`;
      }).join('')}
      ${suggest ? `
      <div class="card course-row suggest">
        <span class="eyebrow">${t('keepLearning')}</span>
        <a class="fc-course-cover ${suggest.grad}" href="#/course/${suggest.id}">${suggest.emoji}</a>
        <div class="course-row-body">
          <a href="#/course/${suggest.id}"><b>${L(suggest.title)}</b></a>
          <div class="muted sm-text">★ ${suggest.rating} · ${money(suggest.price)} · ${t('trialBadge')}</div>
        </div>
        <a class="btn outline sm" href="#/course/${suggest.id}">▶ ${t('freeTrial')}</a>
      </div>` : ''}
    </div>`;
  }

  if (tab === 'orders') {
    const sub = state.ordersSub;
    const statusLabel = st => ({ prog: t('o_prog'), deliver: t('o_deliver'), done: t('o_done'), review: t('o_review') }[st]);
    let rows = '';
    if (sub === 'creator') {
      rows = p.ordersCreator.map(o => `
        <div class="card order-row">
          ${av(o.i, o.g, 'sm')}
          <div class="order-body">
            <b>${L(o.title)}</b>
            <div class="muted sm-text">${t('o_due')}: ${L(o.due)}</div>
          </div>
          <span class="status ${o.status === 'done' ? 'done' : 'open'}">${statusLabel(o.status)}</span>
          <b class="order-amt">${money(o.amount)}</b>
        </div>`).join('');
    } else {
      const mine = DATA.briefs.filter(b => b.mine);
      rows = mine.length ? mine.map(b => `
        <div class="card order-row">
          <span class="t-emoji">${b.emoji}</span>
          <div class="order-body">
            <b>${L(b.title)}</b>
            <div class="muted sm-text">${money(b.budget[0])}–${money(b.budget[1])} · ${b.proposals.length} ${t('proposalsCount')}</div>
          </div>
          <span class="status ${b.status}">${b.status === 'open' ? t('statusOpen') : b.status === 'review' ? t('statusReview') : t('statusProg')}</span>
          <a class="btn outline sm" href="#/brief/${b.id}">${t('viewBrief')}</a>
        </div>`).join('') : `<div class="empty">📭</div>`;
    }
    return `
    <div class="sub-tabs">
      <button class="chip ${sub === 'creator' ? 'on' : ''}" onclick="App.setOrdersSub('creator')">🎥 ${t('ordersAsCreator')}</button>
      <button class="chip ${sub === 'client' ? 'on' : ''}" onclick="App.setOrdersSub('client')">📣 ${t('ordersAsClient')}</button>
    </div>
    <div class="stack">${rows}</div>`;
  }

  if (tab === 'reviews') {
    return `<div class="stack">
      ${p.reviewsIn.map(r => `
        <div class="card proposal">
          <div class="post-head">
            <span class="who">${av(r.i, r.g, 'sm')} <b>${L(r.name)}</b></span>
            <span>${stars(r.rating)} <span class="muted sm-text">${L(r.time)}</span></span>
          </div>
          <p class="post-body">${L(r.text)}</p>
        </div>`).join('')}
    </div>`;
  }

  /* settings */
  return `
  <div class="stack">
    <div class="card set-card">
      <div><b>${t('set_lang')}</b><div class="muted sm-text">${t('set_lang_sub')}</div></div>
      <div class="seg">
        <button class="seg-btn ${state.lang === 'zh' ? 'on' : ''}" onclick="App.setLangSelect('zh')">中文</button>
        <button class="seg-btn ${state.lang === 'en' ? 'on' : ''}" onclick="App.setLangSelect('en')">English</button>
      </div>
    </div>
    <div class="card set-card">
      <div><b>${t('set_notif')}</b>
        <label class="check-row"><input type="checkbox" checked> ${t('set_notif1')}</label>
        <label class="check-row"><input type="checkbox" checked> ${t('set_notif2')}</label>
      </div>
    </div>
    <div class="card set-card">
      <div><b>${t('set_payout')}</b><div class="muted sm-text">💳 ${t('set_payout_val')}</div></div>
      <button class="btn outline sm" onclick="App.demo()">${t('set_change')}</button>
    </div>
    <button class="btn primary" onclick="App.demo()">${t('saveBtn')}</button>
  </div>`;
}

function pageProfile() {
  const p = DATA.profile;
  const certCourses = p.certs.map(c => ({ ...c, course: DATA.courses.find(x => x.id === c.course) }));
  return `
  <section class="profile-banner"></section>
  <section class="container profile-head">
    <div class="profile-id">
      ${av(p.i, p.g, 'xl')}
      <div class="profile-info">
        <h1>${L(p.name)} <span class="muted handle">${p.handle}</span></h1>
        <div class="role-row">
          <span class="role-badge creator">🎥 ${t('roleCreator')}</span>
          <span class="role-badge client">📣 ${t('roleClient')}</span>
          <span class="muted sm-text">· ${t('dualRoleHint')}</span>
        </div>
        <p class="muted">${L(p.bio)}</p>
        <div class="muted sm-text">📍 ${t('locationVal')} · 📅 ${t('memberSince')}</div>
      </div>
      <div class="profile-actions">
        <button class="btn outline" onclick="App.demo()">${t('editProfile')}</button>
        <button class="btn ghost" onclick="App.demo()">${t('shareBtn')} ↗</button>
      </div>
    </div>
    <div class="pstats">
      <div class="pstat"><b>${p.stats.orders}</b><span>${t('st_orders')}</span></div>
      <div class="pstat"><b>★ ${p.stats.rating}</b><span>${t('st_rating')}</span></div>
      <div class="pstat"><b>${p.stats.onTime}</b><span>${t('st_onTime')}</span></div>
      <div class="pstat"><b>${p.stats.followers}</b><span>${t('st_followers')}</span></div>
    </div>
  </section>

  <section class="container section profile-grid">
    <div class="profile-main">
      <div class="tabs">
        ${['portfolio', 'courses', 'orders', 'reviews', 'settings'].map(x => `<button class="tab ptab ${state.profileTab === x ? 'on' : ''}" data-tab="${x}" onclick="App.setProfileTab('${x}')">${t('ptab_' + x)}</button>`).join('')}
      </div>
      <div class="tab-body" id="profile-panel">${profilePanelHTML()}</div>
    </div>

    <aside class="detail-side">
      <div class="card side-card wallet-card">
        <div class="wallet-top">
          <span>⬡ ${t('walletTitle')}</span>
          <button class="btn white sm" onclick="App.buyTokensModal()">${t('topUp')}</button>
        </div>
        <div class="wallet-balance">${state.tokens.toLocaleString()} <small>${t('tokensWord')}</small></div>
        <div class="wallet-txns">
          <div class="muted sm-text">${t('txnTitle')}</div>
          ${p.txns.slice(0, 4).map(x => `<div class="txn"><span>${L(x.t)}</span><span class="muted sm-text">${x.date}</span><b class="${x.kind}">${x.amt}</b></div>`).join('')}
        </div>
      </div>
      <div class="card side-card">
        <h4>🎓 ${t('certsTitle')}</h4>
        <div class="stack sm-gap">
          ${certCourses.map(c => `
            <a class="cert-card" href="#/course/${c.course.id}">
              <span class="cert-icon ${c.course.grad}">🎓</span>
              <div><b>${L(c.course.title)}</b><div class="muted sm-text">✓ ${t('certVerified')} · ${L(c.date)}</div></div>
            </a>`).join('')}
        </div>
      </div>
    </aside>
  </section>`;
}

/* ================= boot ================= */
document.documentElement.lang = state.lang === 'zh' ? 'zh-CN' : 'en';
document.title = t('docTitle');
route();
