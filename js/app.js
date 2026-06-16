/* =====================================================================
   APP — tanulómotor: routing, haladásmentés, szigorú kvíz-kapuzás,
   XP/rang/jelvény rendszer, oldalrenderelés, animált háttér.
   ===================================================================== */
(function () {
  'use strict';
  var C = window.COURSE, I = window.ICON;
  var app = document.getElementById('app');

  /* ---------- ÁLLAPOT ---------- */
  var S = { xp: 0, badges: [], flawless: false, maxStreak: 0, mod: {}, finalPassed: false, seen: {} };
  var streak = 0;

  function load() {
    try {
      var raw = localStorage.getItem(C.meta.storageKey);
      if (raw) S = Object.assign(S, JSON.parse(raw));
    } catch (e) {}
    if (!S.mod) S.mod = {}; if (!S.badges) S.badges = []; if (!S.seen) S.seen = {};
  }
  function save() { try { localStorage.setItem(C.meta.storageKey, JSON.stringify(S)); } catch (e) {} }

  function ms(mId) { if (!S.mod[mId]) S.mod[mId] = { ch: {}, quiz: false }; if (!S.mod[mId].ch) S.mod[mId].ch = {}; return S.mod[mId]; }
  function cs(mId, cId) { var m = ms(mId); if (!m.ch[cId]) m.ch[cId] = { lesson: false, quiz: false, best: 0 }; return m.ch[cId]; }

  /* ---------- HALADÁS / ZÁRAK ---------- */
  function chapterComplete(mId, cId) { var c = cs(mId, cId); return c.lesson && c.quiz; }
  function moduleAllChaptersDone(mod) { return mod.chapters.every(function (ch) { return chapterComplete(mod.id, ch.id); }); }
  function moduleComplete(mod) { return moduleAllChaptersDone(mod) && (!mod.quiz || ms(mod.id).quiz); }
  function moduleIndex(mId) { return C.modules.findIndex(function (m) { return m.id === mId; }); }
  function moduleUnlocked(idx) {
    if (idx <= 0) return true;
    return moduleComplete(C.modules[idx - 1]);
  }
  function chapterUnlocked(mod, ci) {
    if (ci <= 0) return true;
    return chapterComplete(mod.id, mod.chapters[ci - 1].id);
  }
  function moduleQuizUnlocked(mod) { return moduleAllChaptersDone(mod); }
  function finalUnlocked() { return C.modules.every(function (m) { return moduleComplete(m); }); }

  function totals() {
    var done = 0, total = 0;
    C.modules.forEach(function (m) {
      m.chapters.forEach(function (ch) { total++; if (chapterComplete(m.id, ch.id)) done++; });
      if (m.quiz) { total++; if (ms(m.id).quiz) done++; }
    });
    if (C.finalExam) { total++; if (S.finalPassed) done++; }
    return { done: done, total: total };
  }

  /* ---------- XP / RANG ---------- */
  function rankFor(xp) {
    var r = C.ranks[0], idx = 0;
    for (var i = 0; i < C.ranks.length; i++) if (xp >= C.ranks[i].xp) { r = C.ranks[i]; idx = i; }
    var next = C.ranks[idx + 1] || null;
    var base = r.xp, ceil = next ? next.xp : r.xp + 1;
    var pct = next ? Math.min(100, Math.round(((xp - base) / (ceil - base)) * 100)) : 100;
    return { level: idx + 1, name: r.name, pct: pct, next: next };
  }
  function awardXp(n, silent) {
    if (!n) return;
    var before = rankFor(S.xp).level;
    S.xp += n; save(); updateHud();
    if (!silent) toast(I('spark', 18) + ' +' + n + ' XP', false);
    var after = rankFor(S.xp);
    if (after.level > before) {
      setTimeout(function () { toast(I('crown', 18) + ' Új rang: <b>' + after.name + '</b>!', true); confetti(); }, 500);
    }
  }
  function hasBadge(id) { return S.badges.indexOf(id) >= 0; }
  function awardBadge(id) {
    if (hasBadge(id)) return;
    var b = C.badges.concat(moduleBadges()).find(function (x) { return x.id === id; });
    if (!b) return;
    S.badges.push(id); save();
    awardXp(C.xp.badge, true);
    toast(I(b.icon || 'medal', 20) + ' Jelvény: <b>' + b.name + '</b>', true);
    confetti();
    updateHud();
  }
  function moduleBadges() { return C.modules.filter(function (m) { return m.badge; }).map(function (m) { return m.badge; }); }

  function bumpStreak(ok) {
    if (ok) { streak++; if (streak > S.maxStreak) S.maxStreak = streak; if (streak >= 6) awardBadge('streak'); }
    else streak = 0;
  }

  /* ---------- HUD ---------- */
  function updateHud() {
    var r = rankFor(S.xp);
    document.getElementById('lvlNum').textContent = r.level;
    document.getElementById('rankName').textContent = r.name;
    document.getElementById('xpFill').style.width = r.pct + '%';
    var t = totals(); var pc = t.total ? Math.round((t.done / t.total) * 100) : 0;
    document.getElementById('progPct').textContent = pc + '%';
    document.getElementById('progBar').style.width = pc + '%';
    document.getElementById('lvlRing').style.background =
      'radial-gradient(closest-side, rgba(8,12,20,.95) 60%, transparent 62%), ' +
      'conic-gradient(var(--gold) ' + r.pct + '%, rgba(255,255,255,.12) 0)';
    // félúton jelvény
    if (pc >= 50) awardBadgeQuiet('halfway');
    if (C.modules.length && C.modules.every(function (m) { return moduleComplete(m); })) awardBadgeQuiet('scholar');
  }
  function awardBadgeQuiet(id) { if (!hasBadge(id)) awardBadge(id); }

  /* =====================================================================
     ROUTER
     ===================================================================== */
  var route = { view: 'home' };
  function go(r) { route = r; render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function render() {
    if (window.CABLE3D) CABLE3D.teardown();
    app.innerHTML = '';
    var v = route.view;
    if (v === 'home') renderHome();
    else if (v === 'module') renderModule(route.mId);
    else if (v === 'lesson') renderLesson(route.mId, route.cId, route.page || 0);
    else if (v === 'quiz') renderQuiz(route.scope);
    updateHud();
    setCheatEnabled(v !== 'quiz'); // a puska feladat (kvíz) közben zárva
    if (navOpen) refreshNav();
  }

  /* ---------- HOME / TÉRKÉP ---------- */
  function renderHome() {
    var t = totals();
    var wrap = el('div', 'view view-enter');
    var head = el('div', 'realm-head');
    head.innerHTML =
      '<div class="hero3d"><div class="c3d" id="heroCable"></div></div>' +
      '<h1 class="page-title">' + C.meta.title + '</h1>' +
      '<p class="page-sub" style="margin:0 auto">' + C.meta.subtitle + '</p>';
    wrap.appendChild(head);

    var r = rankFor(S.xp);
    var oc = el('div', 'overall-card');
    oc.innerHTML =
      stat(t.done + '/' + t.total, 'Teljesített rész') +
      '<div class="divider"></div>' + stat(S.xp + '', 'Összes XP', 'gold') +
      '<div class="divider"></div>' + stat(r.level + ' · ' + r.name, 'Rang', 'green') +
      '<div class="divider"></div>' + stat(S.badges.length + '/' + (C.badges.length + moduleBadges().length), 'Jelvény');
    wrap.appendChild(oc);

    var intro = el('div', 'center');
    intro.style.cssText = 'max-width:680px;margin:0 auto 26px;color:var(--ink-soft);line-height:1.6';
    intro.innerHTML = 'Lépésenként vezet végig a villanyszerelési vezetékek és kábelek világán: ' +
      'először <em>interaktívan tanítunk</em> — 3D modellek, jelölés-dekódoló, keresztmetszet-felfedező, párosítók — ' +
      'majd <em>visszakérdezünk</em>. A következő részre csak akkor léphetsz, ha a kvíz <b>hibátlan</b>. ' +
      'Haladásod automatikusan mentődik.';
    wrap.appendChild(intro);

    var path = el('div', 'path');
    C.modules.forEach(function (m, idx) {
      var unlocked = moduleUnlocked(idx);
      var done = moduleComplete(m);
      var active = unlocked && !done;
      var node = el('div', 'node ' + (done ? 'is-done' : active ? 'is-active' : unlocked ? '' : 'is-locked'));

      var rail = el('div', 'rail');
      var orb = el('div', 'orb');
      orb.innerHTML = done ? I('check', 28) : unlocked ? (m.icon ? I(m.icon, 28) : (idx + 1)) : I('lock', 24);
      rail.appendChild(orb);
      var conn = el('div', 'connector'); rail.appendChild(conn);
      node.appendChild(rail);

      var cd = el('div', 'node-card tilt');
      var chDone = m.chapters.filter(function (ch) { return chapterComplete(m.id, ch.id); }).length;
      var chTot = m.chapters.length + (m.quiz ? 1 : 0);
      var chDoneFull = chDone + (m.quiz && ms(m.id).quiz ? 1 : 0);
      var pct = Math.round((chDoneFull / chTot) * 100);
      cd.innerHTML =
        '<div class="tilt-inner">' +
        '<div class="nc-top"><h3>' + (idx + 1) + '. ' + m.title + '</h3>' +
        (done ? '<span class="lock-i" style="color:var(--arcane)">' + I('shieldCheck', 22) + '</span>'
          : unlocked ? '' : '<span class="lock-i">' + I('lock', 18) + '</span>') + '</div>' +
        '<div class="nc-sub">' + m.subtitle + '</div>' +
        '<div class="nc-meta"><span class="chip">' + m.chapters.length + ' fejezet</span>' +
        (m.quiz ? '<span class="chip">+ modulkvíz</span>' : '') +
        (m.badge ? '<span class="chip">' + I(m.badge.icon, 13, 'style="vertical-align:-2px"') + ' jelvény</span>' : '') +
        (done ? '<span class="chip" style="color:var(--arcane)">Kész ✓</span>'
          : unlocked ? '' : '<span class="chip" style="color:var(--amber)">Zárolva</span>') + '</div>' +
        '<div class="modbar"><i style="width:' + pct + '%"></i></div>' +
        '</div>';
      if (unlocked) cd.addEventListener('click', function () { go({ view: 'module', mId: m.id }); });
      else cd.addEventListener('click', function () { toast(I('lock', 16) + ' Előbb fejezd be az előző modult!'); });
      attachTilt(cd);
      node.appendChild(cd);
      path.appendChild(node);
    });
    wrap.appendChild(path);

    // záróvizsga csomópont
    if (C.finalExam) {
      var fu = finalUnlocked();
      var fn = el('div', 'node ' + (S.finalPassed ? 'is-done' : fu ? 'is-active' : 'is-locked'));
      fn.innerHTML = '<div class="rail"><div class="orb">' +
        (S.finalPassed ? I('crown', 28) : fu ? I('trophy', 28) : I('lock', 24)) + '</div></div>';
      var fc = el('div', 'node-card');
      fc.innerHTML = '<div class="nc-top"><h3>' + I('trophy', 20, 'style="vertical-align:-4px;color:var(--gold)"') +
        ' Nagy Záróvizsga</h3></div>' +
        '<div class="nc-sub">A teljes tananyagot átfogó, hibátlanra teljesítendő vizsga. ' +
        'A mesterré váláshoz minden modult le kell zárnod.</div>' +
        '<div class="nc-meta"><span class="chip">' + (C.finalExam.length) + ' kérdés</span>' +
        (S.finalPassed ? '<span class="chip" style="color:var(--arcane)">Letéve ✓</span>'
          : fu ? '<span class="chip" style="color:var(--gold)">Elérhető</span>'
            : '<span class="chip" style="color:var(--amber)">Zárolva</span>') + '</div>';
      if (fu) fc.addEventListener('click', function () { go({ view: 'quiz', scope: { kind: 'final' } }); });
      else fc.addEventListener('click', function () { toast(I('lock', 16) + ' Előbb teljesítsd mind a ' + C.modules.length + ' modult!'); });
      fn.appendChild(fc);
      path.appendChild(fn);
    }

    app.appendChild(wrap);
    // hero 3D kábel (NYM-J jellegű)
    setTimeout(function () {
      if (window.CABLE3D) CABLE3D.mount(document.getElementById('heroCable'), {
        sheath: '#cbd0cc', fill: true, layout: 'round',
        cores: [{ color: 'brown' }, { color: 'blue' }, { color: 'pe' }, { color: 'black' }, { color: 'grey' }]
      });
    }, 30);
  }
  function stat(b, s, cls) { return '<div class="stat ' + (cls || '') + '"><b>' + b + '</b><span>' + s + '</span></div>'; }

  /* ---------- MODUL (fejezetlista) ---------- */
  function renderModule(mId) {
    var m = C.getModule(mId); var idx = moduleIndex(mId);
    var wrap = el('div', 'view view-enter');
    wrap.appendChild(crumbs([['Térkép', function () { go({ view: 'home' }); }], [(idx + 1) + '. modul', null]]));
    var h = el('div');
    h.innerHTML = '<div class="kicker">' + (idx + 1) + '. modul' + (m.badge ? ' · jelvény: ' + m.badge.name : '') + '</div>' +
      '<h1 class="page-title">' + m.title + '</h1><p class="page-sub">' + m.subtitle + '</p>';
    if (m.intro) { var ip = el('p', 'page-sub'); ip.style.marginTop = '12px'; ip.innerHTML = m.intro; h.appendChild(ip); }
    wrap.appendChild(h);

    // modul-haladás
    var doneCh = m.chapters.filter(function (ch) { return chapterComplete(m.id, ch.id); }).length;
    var totCh = m.chapters.length + (m.quiz ? 1 : 0);
    var doneAll = doneCh + (m.quiz && ms(m.id).quiz ? 1 : 0);
    var pctM = Math.round((doneAll / totCh) * 100);
    var mp = el('div', 'mod-progress');
    mp.innerHTML = '<div class="ring-s" style="border-radius:50%;background:radial-gradient(var(--bg-1) 56%,transparent 57%),conic-gradient(var(--cyan) ' + pctM + '%, rgba(255,255,255,.08) 0)"><b>' + pctM + '%</b></div>' +
      '<div class="mp-text"><b>' + doneAll + ' / ' + totCh + '</b> rész kész ebben a modulban' + (doneAll === totCh ? ' — teljesítve! ✓' : '') + '</div>';
    wrap.appendChild(mp);

    var grid = el('div', 'chapter-grid');
    m.chapters.forEach(function (ch, ci) {
      var unlocked = chapterUnlocked(m, ci);
      var done = chapterComplete(m.id, ch.id);
      var card = el('div', 'chap-card ' + (done ? 'done' : '') + (unlocked ? '' : ' locked'));
      card.innerHTML =
        '<div class="ix">' + (ch.code || (idx + 1) + '.' + (ci + 1)) + '</div>' +
        '<h3>' + ch.title + '</h3>' +
        '<p>' + (ch.blurb || '') + '</p>' +
        '<div class="foot"><span class="status-dot"></span>' +
        (done ? 'Teljesítve' : unlocked ? (ch.pages.length + ' lépés + kvíz') : 'Zárolva') +
        (done ? '<span class="pill">✓</span>' : unlocked ? '' : '<span class="pill">' + I('lock', 13) + '</span>') +
        '</div>';
      if (unlocked) card.addEventListener('click', function () { go({ view: 'lesson', mId: m.id, cId: ch.id, page: 0 }); });
      else card.addEventListener('click', function () { toast(I('lock', 16) + ' Előbb fejezd be az előző fejezetet!'); });
      grid.appendChild(card);
    });

    // modulkvíz kártya
    if (m.quiz) {
      var qu = moduleQuizUnlocked(m); var qp = ms(m.id).quiz;
      var qc = el('div', 'chap-card ' + (qp ? 'done' : '') + (qu ? '' : ' locked'));
      qc.innerHTML = '<div class="ix">' + I('trophy', 14, 'style="vertical-align:-2px;color:var(--gold)"') + ' MODULKVÍZ</div>' +
        '<h3>Modulzáró próba</h3><p>A modul összes fejezetét átfogó kérdéssor. Hibátlanra kell teljesíteni.</p>' +
        '<div class="foot"><span class="status-dot"></span>' +
        (qp ? 'Teljesítve' : qu ? (m.quiz.length + ' kérdés') : 'Előbb a fejezetek') +
        (qp ? '<span class="pill">✓</span>' : '') + '</div>';
      if (qu) qc.addEventListener('click', function () { go({ view: 'quiz', scope: { kind: 'module', mId: m.id } }); });
      else qc.addEventListener('click', function () { toast(I('lock', 16) + ' Előbb teljesítsd a modul összes fejezetét!'); });
      grid.appendChild(qc);
    }
    wrap.appendChild(grid);
    app.appendChild(wrap);
  }

  /* ---------- LECKE (oldalak) ---------- */
  function renderLesson(mId, cId, page) {
    var m = C.getModule(mId); var ci = m.chapters.findIndex(function (x) { return x.id === cId; });
    var ch = m.chapters[ci];
    var pages = ch.pages; var total = pages.length;
    page = Math.max(0, Math.min(page, total - 1));
    var pg = pages[page];

    var wrap = el('div', 'view view-enter');
    wrap.appendChild(crumbs([
      ['Térkép', function () { go({ view: 'home' }); }],
      [(moduleIndex(mId) + 1) + '. modul', function () { go({ view: 'module', mId: mId }); }],
      [ch.title, null]
    ]));

    var lw = el('div', 'lesson-wrap');
    var top = el('div', 'lesson-topbar');
    top.innerHTML = '<div class="step-track"><i style="width:' + Math.round(((page + 1) / total) * 100) + '%"></i></div>' +
      '<span class="step-count">' + (page + 1) + ' / ' + total + '</span>';
    lw.appendChild(top);

    // megtekintett lépések követése + lépés-navigáció (stepper)
    var vk = mId + '_' + cId; S.seen[vk] = Math.max(S.seen[vk] || 0, page); save();
    var maxV = S.seen[vk];
    var stepper = el('div', 'stepper');
    for (var pi = 0; pi < total; pi++) {
      (function (pidx) {
        var cls = 'sdot' + (pidx === page ? ' cur' : (pidx <= maxV ? ' viewed' : ' locked'));
        var dd = el('div', cls); dd.textContent = (pidx + 1);
        if (pidx <= maxV && pidx !== page) dd.addEventListener('click', function () { route._rev = pidx < page; go({ view: 'lesson', mId: mId, cId: cId, page: pidx }); });
        stepper.appendChild(dd);
      })(pi);
    }
    lw.appendChild(stepper);

    var slide = el('div', 'slide ' + (route._rev ? 'slide-enter-rev' : 'slide-enter'));
    route._rev = false;
    if (pg.kicker) slide.appendChild(html('<div class="s-kicker">' + pg.kicker + '</div>'));

    // interakció-kapu
    var gate = { needed: false, done: false };
    var blocks = pg.blocks || [];
    blocks.forEach(function (b) {
      var node = renderBlock(b, function () {
        gate.done = true; var nb = document.getElementById('nextBtn');
        if (nb) { nb.disabled = false; nb.classList.remove('hidden'); }
        var note = document.getElementById('gateNote'); if (note) note.classList.add('hidden');
        if (!pg._xp) { pg._xp = true; awardXp(C.xp.interact, false); }
      });
      if (b.gate) gate.needed = true;
      if (node) slide.appendChild(node);
    });
    lw.appendChild(slide);

    // navigáció
    var nav = el('div', 'lesson-nav');
    var prev = el('button', 'btn ghost'); prev.innerHTML = I('arrowL', 18) + ' Vissza';
    prev.disabled = page === 0;
    prev.addEventListener('click', function () { route._rev = true; go({ view: 'lesson', mId: mId, cId: cId, page: page - 1 }); });
    nav.appendChild(prev);
    nav.appendChild(el('div', 'nav-spacer'));

    if (gate.needed && !gate.done) {
      var note = el('span', 'btn-locked-note'); note.id = 'gateNote';
      note.innerHTML = I('hand', 15) + ' Fejezd be a feladatot a továbblépéshez';
      nav.appendChild(note);
    }

    if (page < total - 1) {
      var next = el('button', 'btn primary'); next.id = 'nextBtn';
      next.innerHTML = 'Tovább ' + I('arrowR', 18);
      if (gate.needed && !gate.done) next.disabled = true;
      next.addEventListener('click', function () { go({ view: 'lesson', mId: mId, cId: cId, page: page + 1 }); });
      nav.appendChild(next);
    } else {
      // utolsó oldal → lecke kész, kvízre
      var fin = el('button', 'btn gold'); fin.id = 'nextBtn';
      fin.innerHTML = I('scroll', 18) + ' Fejezetkvíz';
      if (gate.needed && !gate.done) fin.disabled = true;
      fin.addEventListener('click', function () {
        var c = cs(mId, cId); if (!c.lesson) { c.lesson = true; awardXp(C.xp.lesson, false); save(); }
        go({ view: 'quiz', scope: { kind: 'chapter', mId: mId, cId: cId } });
      });
      nav.appendChild(fin);
      // ha nincs kvíz a fejezetben (ritka), zárjuk a leckét
    }
    lw.appendChild(nav);
    wrap.appendChild(lw);
    app.appendChild(wrap);
    mountDeferred(slide);
  }

  /* =====================================================================
     BLOKK-RENDERELÉS
     ===================================================================== */
  function renderBlock(b, onDone) {
    switch (b.type) {
      case 'h': return html('<h2>' + b.text + '</h2>');
      case 'h3': return html('<h3>' + b.text + '</h3>');
      case 'lead': return html('<p class="lead">' + b.text + '</p>');
      case 'p': return html('<p>' + b.text + '</p>');
      case 'list': return html('<ul>' + b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul>');
      case 'olist': return html('<ol>' + b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ol>');
      case 'callout': return html('<div class="callout ' + (b.variant || 'tip') + '"><span class="ci">' +
        I(calIcon(b.variant), 22) + '</span>' + (b.title ? '<b>' + b.title + '</b>' : '') + b.html + '</div>');
      case 'figure': return html('<figure class="fig">' + (b.h ? '<h3>' + b.h + '</h3>' : '') +
        '<img src="' + b.img + '" alt="' + (b.alt || '') + '">' +
        (b.caption ? '<figcaption>' + b.caption + '</figcaption>' : '') + '</figure>');
      case 'table': return renderTable(b);
      case 'spec': return renderSpec(b);
      case 'vs': return renderVs(b);
      case 'divider': return html('<div style="height:1px;background:var(--line);margin:22px 0"></div>');
      case 'cable3d': return deferBlock('cable3d', b);
      case 'coin3d': return renderCoin(b);
      case 'decoder': return Components.decoder(b, onDone);
      case 'xsec': return Components.xsec(b, onDone);
      case 'match': return Components.match(b, onDone);
      case 'order': return Components.order(b, onDone);
      case 'scenario': return Components.scenario(b, onDone);
      case 'flashcards': return Components.flashcards(b, onDone);
      case 'sort': return Components.sort(b, onDone);
      default: return html('<p>' + (b.html || '') + '</p>');
    }
  }
  function calIcon(v) { return v === 'warn' ? 'info' : v === 'danger' ? 'flame' : v === 'rule' ? 'shieldCheck' : v === 'info' ? 'bulb' : 'bulb'; }

  function renderTable(b) {
    var h = '<div class="tbl-wrap"><table class="data">';
    if (b.head) h += '<thead><tr>' + b.head.map(function (c) { return '<th>' + c + '</th>'; }).join('') + '</tr></thead>';
    h += '<tbody>' + b.rows.map(function (r) {
      return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
    }).join('') + '</tbody></table></div>';
    var wrap = el('div');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    if (b.intro) wrap.appendChild(html('<p>' + b.intro + '</p>'));
    wrap.appendChild(html(h));
    if (b.note) wrap.appendChild(html('<div class="callout tip"><span class="ci">' + I('bulb', 22) + '</span>' + b.note + '</div>'));
    return wrap;
  }
  function renderSpec(b) {
    var wrap = el('div');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    var h = '<div class="spec">' + b.rows.map(function (r) {
      return '<div class="row"><div class="k">' + r[0] + '</div><div class="v">' + r[1] + '</div></div>';
    }).join('') + '</div>';
    wrap.appendChild(html(h));
    return wrap;
  }
  function renderVs(b) {
    var wrap = el('div');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    wrap.appendChild(html('<div class="vs"><div class="vs-card a"><h4>' + b.a.title + '</h4><ul>' +
      b.a.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></div>' +
      '<div class="vs-card b"><h4>' + b.b.title + '</h4><ul>' +
      b.b.items.map(function (i) { return '<li>' + i + '</li>'; }).join('') + '</ul></div></div>'));
    return wrap;
  }
  function renderCoin(b) {
    // CSS 3D forgó korong (SVG arc) — az ér fajtáihoz
    var wrap = el('div');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    wrap.appendChild(html('<div class="coin3d"><div class="face">' + (b.svg || '') + '</div></div>' +
      (b.caption ? '<p class="center muted" style="font-size:.85rem">' + b.caption + '</p>' : '')));
    return wrap;
  }

  // 3D blokk: konténer, a render után mountoljuk
  function deferBlock(kind, b) {
    var wrap = el('div');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    if (b.intro) wrap.appendChild(html('<p>' + b.intro + '</p>'));
    var box = el('div', 'c3d' + (b.tall ? ' tall' : ''));
    box.setAttribute('data-defer', kind);
    box.setAttribute('data-spec', JSON.stringify(b.spec || {}));
    box.innerHTML = '<div class="c3d-badge">' + I('cube', 13) + ' Húzd a forgatáshoz · 3D modell</div>';
    wrap.appendChild(box);
    if (b.caption) wrap.appendChild(html('<p class="center muted" style="font-size:.85rem;margin-top:8px">' + b.caption + '</p>'));
    return wrap;
  }
  function mountDeferred(root) {
    var box = root.querySelector('[data-defer="cable3d"]');
    if (box && window.CABLE3D) {
      var spec = {}; try { spec = JSON.parse(box.getAttribute('data-spec')); } catch (e) {}
      var badge = box.querySelector('.c3d-badge');
      setTimeout(function () {
        CABLE3D.mount(box, spec);
        if (badge) box.appendChild(badge);
      }, 40);
    }
  }

  /* =====================================================================
     KVÍZ  (szigorú 100%, azonnali visszajelzés)
     ===================================================================== */
  function quizData(scope) {
    if (scope.kind === 'chapter') {
      var m = C.getModule(scope.mId); var ch = m.chapters.find(function (x) { return x.id === scope.cId; });
      return { qs: ch.quiz || [], title: ch.title, sub: 'Fejezetkvíz', back: { view: 'lesson', mId: scope.mId, cId: scope.cId, page: 0 } };
    }
    if (scope.kind === 'module') {
      var mm = C.getModule(scope.mId);
      return { qs: mm.quiz || [], title: mm.title, sub: 'Modulzáró kvíz', back: { view: 'module', mId: scope.mId } };
    }
    return { qs: C.finalExam || [], title: 'Nagy Záróvizsga', sub: 'A teljes tananyag', back: { view: 'home' } };
  }

  function renderQuiz(scope) {
    var data = quizData(scope);
    var qs = shuffle(data.qs.map(function (q) { return prepQ(q); }));
    var st = { i: 0, correct: 0, answered: false, results: [] };

    var wrap = el('div', 'view view-enter');
    wrap.appendChild(crumbs([
      ['Térkép', function () { go({ view: 'home' }); }],
      [data.sub, null]
    ]));

    var head = el('div', 'quiz-head');
    head.innerHTML = '<div class="q-crest">' + I(scope.kind === 'final' ? 'trophy' : 'scroll', 38) + '</div>' +
      '<div class="kicker">' + data.sub + '</div><h1 class="page-title" style="margin:.1em 0">' + data.title + '</h1>' +
      '<p class="quiz-intro">Válaszolj minden kérdésre. A továbblépéshez <b>mindet</b> hibátlanul kell eltalálnod — ' +
      'de korlátlanszor próbálkozhatsz, és minden válasznál kapsz magyarázatot.</p>';
    wrap.appendChild(head);

    var card = el('div', 'quiz-card'); card.id = 'quizCard';
    wrap.appendChild(card);
    app.appendChild(wrap);

    function drawProgress() {
      var dots = qs.map(function (_, k) {
        var cls = k === st.i ? 'cur' : (st.results[k] === true ? 'ok' : st.results[k] === false ? 'no' : '');
        return '<span class="dot ' + cls + '"></span>';
      }).join('');
      return '<div class="q-progress"><div class="dots">' + dots + '</div>' +
        '<span class="qnum">' + (st.i + 1) + '/' + qs.length + '</span></div>';
    }

    function drawQ() {
      var q = qs[st.i]; st.answered = false; var picked = [];
      card.innerHTML = drawProgress();
      var qt = el('div'); qt.innerHTML = '<div class="q-text">' + q.q + '</div>' +
        (q.hint ? '<div class="q-hint">' + q.hint + '</div>' : '');
      card.appendChild(qt);

      var opts = el('div', 'q-opts' + (q.type === 'tf' ? ' tf-row' : ''));
      if (q.type === 'text') {
        var inp = el('input', 'q-input'); inp.placeholder = 'Írd be a választ…'; inp.id = 'qInput';
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') check(); });
        opts.appendChild(inp);
      } else {
        q._opts.forEach(function (o, oi) {
          var d = el('div', 'q-opt');
          d.innerHTML = '<span class="mk">' + (q.type === 'tf' ? '' : String.fromCharCode(65 + oi)) + '</span><span>' + o.t + '</span>';
          d.addEventListener('click', function () {
            if (st.answered) return;
            if (q.type === 'multi') {
              d.classList.toggle('sel');
              var ix = picked.indexOf(oi); if (ix >= 0) picked.splice(ix, 1); else picked.push(oi);
            } else {
              picked = [oi];
              Array.prototype.forEach.call(opts.children, function (c) { c.classList.remove('sel'); });
              d.classList.add('sel');
            }
          });
          opts.appendChild(d);
        });
      }
      card.appendChild(opts);

      var ex = el('div', 'q-explain'); ex.id = 'qExplain'; card.appendChild(ex);

      var act = el('div', 'quiz-actions');
      var checkBtn = el('button', 'btn primary'); checkBtn.id = 'checkBtn';
      checkBtn.innerHTML = I('check', 18) + ' Ellenőrzés';
      checkBtn.addEventListener('click', check);
      act.appendChild(checkBtn);
      var nextBtn = el('button', 'btn gold hidden'); nextBtn.id = 'qNext';
      nextBtn.innerHTML = (st.i < qs.length - 1 ? 'Következő ' + I('arrowR', 18) : 'Eredmény ' + I('trophy', 18));
      nextBtn.addEventListener('click', function () {
        if (st.i < qs.length - 1) { st.i++; drawQ(); } else finish();
      });
      act.appendChild(nextBtn);
      card.appendChild(act);
      card.classList.remove('slide-enter'); void card.offsetWidth; card.classList.add('slide-enter');

      function check() {
        if (st.answered) return;
        var ok = false, q = qs[st.i];
        if (q.type === 'text') {
          var val = norm(document.getElementById('qInput').value);
          ok = q._accept.some(function (a) { return norm(a) === val || (val && a.length > 3 && val.indexOf(norm(a)) >= 0); });
          document.getElementById('qInput').style.borderColor = ok ? 'var(--arcane)' : 'var(--danger)';
        } else {
          if (picked.length === 0) { toast('Válassz előbb!'); return; }
          var correctIx = q._opts.map(function (o, k) { return o.correct ? k : -1; }).filter(function (k) { return k >= 0; });
          ok = picked.length === correctIx.length && picked.every(function (p) { return correctIx.indexOf(p) >= 0; });
          Array.prototype.forEach.call(opts.children, function (c, k) {
            c.classList.add('disabled');
            if (q._opts[k].correct) c.classList.add('correct');
            else if (picked.indexOf(k) >= 0) c.classList.add('wrong');
            else c.classList.add('dim');
          });
        }
        st.answered = true; st.results[st.i] = ok; if (ok) st.correct++;
        bumpStreak(ok);
        var exb = document.getElementById('qExplain');
        exb.className = 'q-explain show ' + (ok ? 'ok' : 'no');
        exb.innerHTML = '<b>' + (ok ? I('check', 16) + ' Helyes!' : I('x', 16) + ' Nem pontos') + '</b>' +
          '<div class="ex-body">' + q.explain + '</div>';
        checkBtn.classList.add('hidden');
        document.getElementById('qNext').classList.remove('hidden');
        card.querySelector('.q-progress').outerHTML = drawProgress();
      }
    }

    function finish() {
      var passed = st.correct === qs.length;
      var firstTry = passed && !data._retried;
      card.innerHTML = '';
      var res = el('div', 'result ' + (passed ? 'pass' : 'fail'));
      res.innerHTML =
        '<div class="seal">' + I(passed ? (scope.kind === 'final' ? 'crown' : 'shieldCheck') : 'rotate', 64) + '</div>' +
        '<div class="kicker">' + (passed ? 'Teljesítve' : 'Még nem tökéletes') + '</div>' +
        '<h2>' + (passed ? (scope.kind === 'final' ? 'Mesterré váltál!' : 'Hibátlan!') : 'Próbáld újra!') + '</h2>' +
        '<div class="score">' + st.correct + ' / ' + qs.length + ' helyes</div>' +
        '<p>' + (passed
          ? 'Minden választ eltaláltál — megnyílt az út tovább.'
          : 'A továbblépéshez minden kérdést hibátlanul kell megválaszolnod. Nézd át a magyarázatokat, és vágj bele újra — menni fog!') + '</p>';
      card.appendChild(res);

      var act = el('div', 'quiz-actions'); act.style.justifyContent = 'center';
      if (passed) {
        var cont = el('button', 'btn primary lg');
        cont.innerHTML = I('arrowR', 18) + ' Tovább';
        cont.addEventListener('click', function () { afterPass(scope, data); });
        // XP
        var gained = 0;
        if (scope.kind === 'chapter') { var c = cs(scope.mId, scope.cId); if (!c.quiz) { c.quiz = true; gained = C.xp.chapterQuiz; } }
        else if (scope.kind === 'module') { var m = ms(scope.mId); if (!m.quiz) { m.quiz = true; gained = C.xp.moduleQuiz; } }
        else { if (!S.finalPassed) { S.finalPassed = true; gained = C.xp.finalExam; } }
        save();
        if (gained) {
          res.appendChild(html('<div class="xp-pop">' + I('spark', 18) + ' +' + gained + ' XP' +
            (firstTry ? ' &nbsp;·&nbsp; +' + C.xp.perfectBonus + ' hibátlan bónusz' : '') + '</div>'));
          awardXp(gained, true); if (firstTry) { awardXp(C.xp.perfectBonus, true); S.flawless = true; awardBadge('flawless'); }
          confetti();
          // jelvények
          if (scope.kind === 'chapter') awardBadge('first_step');
          maybeModuleBadge(scope);
          if (scope.kind === 'final') awardBadge('grandmaster');
        }
        act.appendChild(cont);
        var mapb = el('button', 'btn ghost'); mapb.innerHTML = I('map', 18) + ' Térkép';
        mapb.addEventListener('click', function () { go({ view: 'home' }); });
        act.appendChild(mapb);
      } else {
        data._retried = true;
        var retry = el('button', 'btn gold lg'); retry.innerHTML = I('refresh', 18) + ' Újra';
        retry.addEventListener('click', function () { go({ view: 'quiz', scope: scope }); });
        act.appendChild(retry);
        var rev = el('button', 'btn ghost'); rev.innerHTML = I('book', 18) + ' Vissza a leckéhez';
        rev.addEventListener('click', function () { go(data.back); });
        act.appendChild(rev);
      }
      card.appendChild(act);
      confettiMaybe(passed);
    }
    drawQ();
  }

  function afterPass(scope, data) {
    if (scope.kind === 'chapter') {
      var m = C.getModule(scope.mId); var ci = m.chapters.findIndex(function (x) { return x.id === scope.cId; });
      if (ci < m.chapters.length - 1) go({ view: 'module', mId: scope.mId });
      else go({ view: 'module', mId: scope.mId });
    } else if (scope.kind === 'module') {
      var idx = moduleIndex(scope.mId);
      if (idx < C.modules.length - 1 && moduleUnlocked(idx + 1)) go({ view: 'home' });
      else go({ view: 'home' });
    } else go({ view: 'home' });
  }
  function maybeModuleBadge(scope) {
    if (scope.kind !== 'module' && scope.kind !== 'chapter') return;
    var m = C.getModule(scope.mId);
    if (m && m.badge && moduleComplete(m)) {
      awardBadge(m.badge.id);
      if (m.id === 'm2') awardBadge('decoder'); // a három jelölésrendszer megfejtve
    }
  }

  // kérdés-előkészítés (opciók keverése, helyes index megtartása)
  function prepQ(q) {
    var o = Object.assign({}, q);
    if (q.type === 'tf') {
      o._opts = [{ t: 'Igaz', correct: q.answer === true }, { t: 'Hamis', correct: q.answer === false }];
    } else if (q.type === 'text') {
      o._accept = q.accept || [q.answer];
    } else {
      o._opts = shuffle(q.options.slice());
    }
    return o;
  }

  /* =====================================================================
     SEGÉDEK
     ===================================================================== */
  function el(t, c) { var e = document.createElement(t); if (c) e.className = c; return e; }
  function html(s) { var d = document.createElement('div'); d.innerHTML = s.trim(); return d.firstChild; }
  function crumbs(items) {
    var c = el('div', 'crumbs');
    items.forEach(function (it, i) {
      if (i) c.appendChild(html('<span class="sep">/</span>'));
      if (it[1]) { var a = el('a'); a.textContent = it[0]; a.addEventListener('click', it[1]); c.appendChild(a); }
      else c.appendChild(html('<span>' + it[0] + '</span>'));
    });
    return c;
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function norm(s) { return (s || '').toString().toLowerCase().replace(/\s+/g, ' ').replace(/[.,;]/g, '').trim(); }

  function attachTilt(card) {
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    card.addEventListener('mousemove', function (e) {
      var r = card.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = 'perspective(800px) rotateY(' + (px * 6) + 'deg) rotateX(' + (-py * 6) + 'deg) translateY(-2px)';
    });
    card.addEventListener('mouseleave', function () { card.style.transform = ''; });
  }

  /* ---------- TOAST / MODAL / KONFETTI ---------- */
  var toastBox = document.getElementById('toasts');
  function toast(msg, gold) {
    var t = el('div', 'toast' + (gold ? ' gold' : ''));
    t.innerHTML = '<span class="ti">' + (gold ? I('star', 22) : I('spark', 20)) + '</span><span>' + msg + '</span>';
    toastBox.appendChild(t);
    setTimeout(function () { t.classList.add('out'); setTimeout(function () { t.remove(); }, 400); }, 2600);
  }
  function modal(title, body, actions) {
    var mb = document.getElementById('modalBack'), m = document.getElementById('modal');
    m.innerHTML = '<h3>' + title + '</h3><p>' + body + '</p>';
    var act = el('div', 'm-actions');
    actions.forEach(function (a) {
      var b = el('button', 'btn ' + (a.cls || 'ghost')); b.innerHTML = a.label;
      b.addEventListener('click', function () { mb.classList.remove('show'); a.fn && a.fn(); });
      act.appendChild(b);
    });
    m.appendChild(act); mb.classList.add('show');
    mb.onclick = function (e) { if (e.target === mb) mb.classList.remove('show'); };
  }

  // konfetti
  var cc = document.getElementById('confetti'), cx = cc.getContext('2d'), parts = [], craf = null;
  function resizeCC() { cc.width = innerWidth; cc.height = innerHeight; }
  resizeCC(); window.addEventListener('resize', resizeCC);
  function confetti() {
    var cols = ['#37d6ec', '#54e6a0', '#f4c84b', '#8b7cf6', '#ffffff'];
    for (var i = 0; i < 90; i++) parts.push({
      x: innerWidth / 2 + (Math.random() - .5) * 220, y: innerHeight / 3,
      vx: (Math.random() - .5) * 11, vy: Math.random() * -13 - 4,
      g: .35 + Math.random() * .2, s: 4 + Math.random() * 6, r: Math.random() * 6,
      vr: (Math.random() - .5) * .4, c: cols[(Math.random() * cols.length) | 0], life: 110
    });
    if (!craf) loopCC();
  }
  function confettiMaybe(p) { if (p) confetti(); }
  function loopCC() {
    cx.clearRect(0, 0, cc.width, cc.height);
    parts = parts.filter(function (p) { return p.life > 0 && p.y < cc.height + 40; });
    parts.forEach(function (p) {
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.r += p.vr; p.life--;
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.globalAlpha = Math.max(0, p.life / 110);
      cx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); cx.restore();
    });
    if (parts.length) craf = requestAnimationFrame(loopCC); else { craf = null; cx.clearRect(0, 0, cc.width, cc.height); }
  }

  /* ---------- HÁTTÉR-RÉSZECSKÉK ---------- */
  function bgInit() {
    var cv = document.getElementById('bg-canvas'), x = cv.getContext('2d'), ps = [];
    function rs() { cv.width = innerWidth; cv.height = innerHeight; }
    rs(); window.addEventListener('resize', rs);
    var N = Math.min(70, Math.floor(innerWidth / 22));
    for (var i = 0; i < N; i++) ps.push({
      x: Math.random() * cv.width, y: Math.random() * cv.height,
      r: Math.random() * 1.8 + .4, vy: -(.12 + Math.random() * .4), vx: (Math.random() - .5) * .15,
      a: Math.random() * .5 + .15, hue: Math.random() < .5 ? '55,214,236' : '84,230,160'
    });
    (function loop() {
      x.clearRect(0, 0, cv.width, cv.height);
      ps.forEach(function (p) {
        p.y += p.vy; p.x += p.vx; if (p.y < -5) { p.y = cv.height + 5; p.x = Math.random() * cv.width; }
        x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fillStyle = 'rgba(' + p.hue + ',' + p.a + ')';
        x.shadowBlur = 8; x.shadowColor = 'rgba(' + p.hue + ',.6)'; x.fill();
      });
      x.shadowBlur = 0;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- JELVÉNY-PANEL ---------- */
  function showBadges() {
    var all = C.badges.concat(moduleBadges());
    var body = '<div class="badge-grid">' + all.map(function (b) {
      var got = hasBadge(b.id);
      return '<div class="badge ' + (got ? 'earned' : 'locked') + '"><div class="bi">' + I(got ? b.icon : 'lock', 30) + '</div>' +
        '<b>' + b.name + '</b><span>' + b.desc + '</span></div>';
    }).join('') + '</div>';
    var mb = document.getElementById('modalBack'), m = document.getElementById('modal');
    m.style.maxWidth = '560px';
    m.innerHTML = '<h3>' + I('trophy', 22, 'style="vertical-align:-3px;color:var(--gold)"') + ' Jelvények (' +
      S.badges.length + '/' + all.length + ')</h3>' + body +
      '<div class="m-actions" style="margin-top:18px"><button class="btn primary" id="closeBadges">Bezár</button></div>';
    mb.classList.add('show');
    document.getElementById('closeBadges').onclick = function () { mb.classList.remove('show'); m.style.maxWidth = ''; };
    mb.onclick = function (e) { if (e.target === mb) { mb.classList.remove('show'); m.style.maxWidth = ''; } };
  }

  /* ---------- PUSKA (szabvány-segédlet) ---------- */
  var cheatOpen = false, cheatEnabled = true;
  function cheatsheetHTML() {
    return ''
      + chSec('Magyar (MSZ) betűjelek', 'key',
        chTbl([['M', 'Műanyag (PVC) szigetelés'], ['B', 'Burkolt = van köpeny (→ kábel)'], ['Cu / A(l)', 'réz / alumínium vezető'], ['T', 'Tömlővezeték (hajlékony)'], ['KH', 'Különösen Hajlékony (sok elemi szál)'], ['G', 'Gumi szigetelés'], ['MM + fal', 'dupla műanyag, falba (lapos kábel)'], ['L / Zs', 'Lapos · Zsinór']]))
      + chSec('Harmonizált (CENELEC) — pozíciók', 'layers',
        chTbl([['1. H / A', 'harmonizált / nemzeti'], ['2. 03/05/07', '300/300 · 300/500 · 450/750 V'], ['3. V/R/N/Z', 'érszig.: PVC/gumi/neoprén/halogénm.'], ['4.', 'köpeny anyaga (ugyanaz a betű)'], ['-U / -R', 'tömör (1 szál) / sodrott'], ['-K / -F', 'finomsodrott (fix) / hajlékony (mozgó)'], ['3G1,5 / 3×1,5', 'G = van zöld-sárga · × = nincs']]))
      + chSec('Német (VDE) típusjelek', 'shield',
        chTbl([['N', 'VDE szabvány (Norm)'], ['A (N után)', 'alumínium (különben réz)'], ['Y', 'PVC (1.=szig., 2.=köpeny)'], ['M', 'köpenyes (Mantel)'], ['C / W', 'koncentrikus / hullámos vezető'], ['H', 'halogénmentes'], ['-J / -O', 'van / nincs zöld-sárga'], ['re / rm', 'kör tömör / kör sodrott'], ['0,6/1 kV', 'földkábel feszültsége']]))
      + chSec('Érszínek', 'bulb',
        chSw([['#6f421f', 'barna — fázis'], ['#1b1b1b', 'fekete — fázis'], ['#9aa1a8', 'szürke — fázis'], ['#1f6fd0', 'kék — nulla (N)'], ['#1f9d3f', 'zöld-sárga — védő (PE)']]) + '<div class="cheat-note">Zöld-sárga KIZÁRÓLAG PE. A kék elsődlegesen nulla; csak akkor használható másra, ha nincs nulla az áramkörben ÉS a végeken átjelölik. Régi hálózatban a fekete/szürke lehetett nulla — mindig mérj!</div>')
      + chSec('Vezető + érvéghüvely', 'bolt',
        chTbl([['Tömör (egyhuzalú, -U)', '1 vastag szál — merev, fix falba'], ['Sodrott (-R)', 'kevés vastagabb elemi szál'], ['Finomsodrott (-K/-F)', 'sok vékony elemi szál — hajlékony']]) + '<div class="cheat-note">Minden NEM tömör (elemi szálakból álló) érhez csavaros kötésbe érvéghüvely kell! Rugós (WAGO) szorítóba nem.</div>')
      + chSec('Terhelhetőség (réz, tájékoztató)', 'ruler',
        chTbl([['1,5 mm²', '~16 A · kismegsz. 10 (max 16) A'], ['2,5 mm²', '~21–24 A · 16 A · dugaljak'], ['4 mm²', '~28–32 A · 20–25 A · klíma'], ['6 mm²', '~36–41 A · 32 A · sütő+főzőlap'], ['10 mm²', '~50–57 A · 40 A · fővezeték'], ['16 mm²', '~66–76 A · 50–63 A · ház betáp']]))
      + chSec('A „nagy ötös”', 'star',
        chTbl([['MCu csőbe', 'falba, védőcsőben (cserélhető)'], ['MM-fal / MBCu', 'falba (lapos / kör kábel)'], ['MT', 'beltéri gép, hosszabbító'], ['GT', 'kültér, mozgó, UV-álló'], ['NYY / NAYY', 'földbe (réz / alu)']]));
  }
  function chSec(title, icon, body) {
    return '<details class="ch-sec"><summary>' + I(icon, 16) + ' ' + title + '<span class="chev">' + I('arrowR', 14) + '</span></summary><div class="ch-inner">' + body + '</div></details>';
  }
  function chTbl(rows) { return '<table>' + rows.map(function (r) { return '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td></tr>'; }).join('') + '</table>'; }
  function chSw(items) { return '<div class="ch-swatches">' + items.map(function (s) { return '<span class="ch-sw"><i style="background:' + s[0] + '"></i>' + s[1] + '</span>'; }).join('') + '</div>'; }
  function buildCheat() {
    var handle = el('div', 'cheat-handle'); handle.id = 'cheatHandle'; handle.innerHTML = I('scroll', 18) + ' PUSKA';
    var drawer = el('div', 'cheat-drawer'); drawer.id = 'cheatDrawer';
    drawer.innerHTML = '<div class="ch-head">' + I('scroll', 22, 'style="color:var(--cyan)"') + '<b>Szabvány-puska</b><span class="x" id="cheatClose">' + I('x', 22) + '</span></div><div class="cheat-body">' + cheatsheetHTML() + '</div>';
    document.body.appendChild(handle); document.body.appendChild(drawer);
    handle.addEventListener('click', function () { if (!cheatEnabled) { toast(I('lock', 15) + ' A puska feladat közben zárva — előbb fejezd be a feladatot!'); return; } toggleCheat(); });
    document.getElementById('cheatClose').addEventListener('click', function () { toggleCheat(false); });
  }
  function toggleCheat(force) { cheatOpen = (force === undefined) ? !cheatOpen : force; var d = document.getElementById('cheatDrawer'); if (d) d.classList.toggle('open', cheatOpen); }
  function setCheatEnabled(on) {
    cheatEnabled = on; var h = document.getElementById('cheatHandle'); if (!h) return;
    h.classList.toggle('disabled', !on);
    h.innerHTML = on ? (I('scroll', 18) + ' PUSKA') : (I('lock', 16) + ' <span class="lock-mini">PUSKA</span>');
    if (!on) toggleCheat(false);
  }

  /* ---------- NAVIGÁCIÓS OLDALSÁV ---------- */
  var navOpen = false;
  function navHTML() {
    var cur = route || {}, h = '';
    h += '<div class="nv-home' + (cur.view === 'home' ? ' cur' : '') + '" data-home="1">' + I('home', 16) + ' Térkép / áttekintés</div>';
    C.modules.forEach(function (m, idx) {
      var unlocked = moduleUnlocked(idx), done = moduleComplete(m), active = unlocked && !done;
      var isCurMod = (cur.mId === m.id);
      var cls = done ? 'done' : active ? 'active' : unlocked ? '' : 'locked';
      h += '<div class="nv-mod ' + cls + (isCurMod ? ' open-acc' : '') + '">';
      h += '<div class="nv-mod-head" data-mh="' + m.id + '"><span class="ix">' + (done ? I('check', 15) : unlocked ? (idx + 1) : I('lock', 13)) + '</span><span class="t">' + m.title + '</span><span class="chev">' + I('arrowR', 14) + '</span></div>';
      h += '<div class="nv-chaps">';
      m.chapters.forEach(function (ch, ci) {
        var cu = chapterUnlocked(m, ci), cd = chapterComplete(m.id, ch.id);
        var isCur = isCurMod && cur.cId === ch.id && cur.view === 'lesson';
        h += '<div class="nv-chap ' + (cd ? 'done' : '') + (isCur ? ' cur' : '') + (cu ? '' : ' locked') + '" data-m="' + m.id + '" data-c="' + ch.id + '"><span class="dot"></span><span class="code">' + (ch.code || '') + '</span><span>' + ch.title + '</span></div>';
      });
      if (m.quiz) {
        var qp = ms(m.id).quiz, qu = moduleQuizUnlocked(m);
        h += '<div class="nv-chap quiz ' + (qp ? 'done' : '') + (qu ? '' : ' locked') + '" data-mq="' + m.id + '"><span class="dot"></span>' + I('trophy', 13, 'style="color:var(--gold);vertical-align:-2px"') + ' <span>Modulkvíz</span></div>';
      }
      h += '</div></div>';
    });
    if (C.finalExam) {
      var fu = finalUnlocked();
      h += '<div class="nv-mod ' + (S.finalPassed ? 'done' : fu ? 'active' : 'locked') + '"><div class="nv-mod-head" data-final="1"><span class="ix">' + (S.finalPassed ? I('crown', 15) : fu ? I('trophy', 14) : I('lock', 13)) + '</span><span class="t">Nagy Záróvizsga</span></div></div>';
    }
    return h;
  }
  function refreshNav() { var b = document.getElementById('navBody'); if (b) b.innerHTML = navHTML(); }
  function toggleNav(force) {
    navOpen = (force === undefined) ? !navOpen : force;
    if (navOpen) refreshNav();
    var d = document.getElementById('navDrawer'); if (d) d.classList.toggle('open', navOpen);
  }
  function buildNav() {
    var drawer = el('div', 'nav-drawer'); drawer.id = 'navDrawer';
    drawer.innerHTML = '<div class="nv-head">' + I('map', 22, 'style="color:var(--violet)"') + '<b>Tananyag-térkép</b><span class="x" id="navClose">' + I('x', 22) + '</span></div><div class="nav-body" id="navBody"></div>';
    document.body.appendChild(drawer);
    document.getElementById('navClose').addEventListener('click', function () { toggleNav(false); });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('.nv-home')) { toggleNav(false); go({ view: 'home' }); return; }
      var chap = e.target.closest('.nv-chap'), mh = e.target.closest('.nv-mod-head');
      if (chap) {
        if (chap.classList.contains('locked')) { toast(I('lock', 14) + ' Még zárolva.'); return; }
        if (chap.dataset.mq) { toggleNav(false); go({ view: 'quiz', scope: { kind: 'module', mId: chap.dataset.mq } }); return; }
        if (chap.dataset.c) { toggleNav(false); go({ view: 'lesson', mId: chap.dataset.m, cId: chap.dataset.c, page: 0 }); return; }
      }
      if (mh) {
        if (mh.dataset.final) { if (!finalUnlocked()) { toast(I('lock', 14) + ' Előbb teljesítsd a modulokat.'); return; } toggleNav(false); go({ view: 'quiz', scope: { kind: 'final' } }); return; }
        var modEl = mh.parentNode;
        if (modEl.classList.contains('locked')) { toast(I('lock', 14) + ' Előbb az előző modul.'); return; }
        modEl.classList.toggle('open-acc');
      }
    });
  }

  /* ---------- INDÍTÁS ---------- */
  function init() {
    load();
    document.getElementById('sigil').innerHTML = I('atom', 26);
    document.getElementById('badgesBtn').innerHTML = I('trophy', 20);
    document.getElementById('resetBtn').innerHTML = I('refresh', 20);
    document.getElementById('brandHome').addEventListener('click', function () { toggleNav(true); });
    document.getElementById('badgesBtn').addEventListener('click', showBadges);
    document.getElementById('resetBtn').addEventListener('click', function () {
      modal('Haladás visszaállítása', 'Biztosan törlöd az összes haladást, XP-t és jelvényt? Ez nem vonható vissza.',
        [{ label: 'Mégse' }, {
          label: 'Törlés', cls: 'gold', fn: function () {
            S = { xp: 0, badges: [], flawless: false, maxStreak: 0, mod: {}, finalPassed: false, seen: {} };
            streak = 0; save(); go({ view: 'home' }); toast('Haladás visszaállítva.');
          }
        }]);
    });
    bgInit();
    buildCheat();
    buildNav();
    if (!C.modules.length) {
      app.innerHTML = '<div class="view"><div class="callout warn"><span class="ci">' + I('info', 22) +
        '</span><b>Tartalom betöltése folyamatban</b>A tananyag modulfájljai még töltődnek vagy hiányoznak.</div></div>';
      return;
    }
    go({ view: 'home' });
  }

  // expose minimal API for components / debugging
  window.APP = { toast: toast, awardXp: awardXp, awardBadge: awardBadge, go: go, state: function () { return S; } };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
