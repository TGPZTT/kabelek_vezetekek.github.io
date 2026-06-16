/* =====================================================================
   COMPONENTS — interaktív tanulóelemek.
   Mind DOM-elemet ad vissza, és onDone()-t hív, ha a feladat kész
   (a lecke-oldal kapuzásához).
   ===================================================================== */
window.Components = (function () {
  'use strict';
  var I = window.ICON;
  function el(t, c) { var e = document.createElement(t); if (c) e.className = c; return e; }
  function html(s) { var d = document.createElement('div'); d.innerHTML = s.trim(); return d.firstChild; }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function once(fn) { var done = false; return function () { if (done) return; done = true; fn && fn(); }; }

  /* ---------- JELÖLÉS-DEKÓDOLÓ ---------- */
  function decoder(b, onDone) {
    var fire = once(onDone);
    var wrap = el('div');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    var box = el('div', 'decoder');
    box.appendChild(html('<div class="dc-head"><span class="ci">' + I('key', 22) + '</span><b>' +
      (b.title || 'Fejtsd meg: ') + '<span style="font-family:var(--mono);color:var(--cyan)">' + b.code + '</span></b></div>' +
      '<div class="dc-sub">' + (b.sub || 'Kattints sorban a jelekre — minden betű egy-egy üzenetet rejt.') + '</div>'));

    var strip = el('div', 'code-strip');
    var out = el('div', 'decode-out');
    var revealed = 0;
    b.parts.forEach(function (p, i) {
      var g = el('div', 'glyph'); g.innerHTML = p.glyph + '<span class="tick">' + I('check', 11) + '</span>';
      var line = el('div', 'decode-line');
      line.innerHTML = '<span class="dl-glyph">' + p.glyph + '</span><span class="dl-text"><b>' +
        (p.label || '') + '</b> — ' + p.html + '</span>';
      out.appendChild(line);
      g.addEventListener('click', function () {
        if (g.classList.contains('revealed')) return;
        g.classList.add('revealed'); line.classList.add('show'); revealed++;
        if (revealed === b.parts.length) {
          var r = box.querySelector('.dc-result'); if (r) r.classList.add('show');
          fire();
        }
      });
      strip.appendChild(g);
    });
    box.appendChild(strip);
    box.appendChild(out);
    if (b.result) box.appendChild(html('<div class="dc-result">' + I('sparkles', 18, 'style="vertical-align:-3px"') + ' ' + b.result + '</div>'));
    box.appendChild(html('<div class="dc-hint">' + (b.hint || 'Tipp: a jelölést mindig balról jobbra, pozíciónként olvasd.') + '</div>'));
    wrap.appendChild(box);
    return wrap;
  }

  /* ---------- KERESZTMETSZET-FELFEDEZŐ ---------- */
  function xsec(b, onDone) {
    var fire = once(onDone);
    var wrap = el('div');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    if (b.intro) wrap.appendChild(html('<p>' + b.intro + '</p>'));
    var grid = el('div', 'xsec');
    var stage = el('div', 'stage');
    var imgwrap = el('div'); imgwrap.style.cssText = 'position:relative;display:block';
    var img = el('img'); img.src = b.img; img.alt = b.alt || '';
    imgwrap.appendChild(img);
    stage.appendChild(imgwrap);

    var list = el('div', 'layer-list');
    var found = {}, total = b.layers.length;
    var prog = html('<div class="xsec-progress">0 / ' + total + ' réteg felfedezve — kattints a pontokra vagy a listára</div>');

    b.layers.forEach(function (L, i) {
      // hotspot
      var hot = el('div', 'hot');
      var sz = (L.hot.r || 7);
      hot.style.cssText = 'left:' + L.hot.x + '%;top:' + L.hot.y + '%;width:' + (sz * 2) +
        '%;aspect-ratio:1;transform:translate(-50%,-50%);';
      hot.innerHTML = '<span class="dot"></span>';
      imgwrap.appendChild(hot);
      // list item
      var li = el('div', 'li');
      li.innerHTML = '<span class="sw" style="background:' + (L.color || '#888') + '"></span><div><b>' +
        L.name + '</b><span>' + L.desc + '</span></div>';
      function activate() {
        document.querySelectorAll('.xsec .li.active').forEach(function (x) { x.classList.remove('active'); });
        document.querySelectorAll('.xsec .hot.active').forEach(function (x) { x.classList.remove('active'); });
        li.classList.add('active'); hot.classList.add('active');
        if (!found[i]) { found[i] = true; hot.classList.add('done'); li.style.borderColor = 'var(--arcane)'; }
        var n = Object.keys(found).length;
        prog.textContent = n + ' / ' + total + ' réteg felfedezve' + (n === total ? ' — kész! ✓' : '');
        if (n === total) { fire(); if (window.APP && APP.awardBadge) APP.awardBadge('explorer'); }
      }
      hot.addEventListener('click', activate);
      li.addEventListener('click', activate);
      list.appendChild(li);
    });
    grid.appendChild(stage); grid.appendChild(list);
    wrap.appendChild(grid);
    wrap.appendChild(prog);
    return wrap;
  }

  /* ---------- PÁROSÍTÓ (kattints-és-helyezd + húzás) ---------- */
  function match(b, onDone) {
    var fire = once(onDone);
    var wrap = el('div', 'match');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    if (b.prompt) wrap.appendChild(html('<p>' + b.prompt + '</p>'));
    var grid = el('div', 'm-grid');
    var leftCol = el('div', 'm-col'), rightCol = el('div', 'm-col');
    leftCol.appendChild(html('<h4>' + (b.leftLabel || 'Ehhez…') + '</h4>'));
    rightCol.appendChild(html('<h4>' + (b.rightLabel || '…ezt') + '</h4>'));

    var pairs = b.pairs.map(function (p, i) { return { id: i, left: p.left, right: p.right }; });
    var picked = null, solved = 0;

    // bal: slotok
    pairs.forEach(function (p) {
      var slot = el('div', 'slot'); slot.dataset.id = p.id;
      slot.innerHTML = '<span class="slot-label">' + p.left + '</span>';
      slot.addEventListener('click', function () { if (picked) tryPlace(slot, picked); });
      slot.addEventListener('dragover', function (e) { e.preventDefault(); slot.classList.add('over'); });
      slot.addEventListener('dragleave', function () { slot.classList.remove('over'); });
      slot.addEventListener('drop', function (e) {
        e.preventDefault(); slot.classList.remove('over');
        var id = e.dataTransfer.getData('text'); var chip = rightCol.querySelector('.chip[data-id="' + id + '"]');
        if (chip) tryPlace(slot, chip);
      });
      leftCol.appendChild(slot);
    });
    // jobb: kevert chip-ek
    shuffle(pairs.slice()).forEach(function (p) {
      var chip = el('div', 'chip'); chip.dataset.id = p.id; chip.textContent = p.right; chip.setAttribute('draggable', 'true');
      chip.addEventListener('click', function () {
        if (chip.classList.contains('used')) return;
        if (picked === chip) { chip.classList.remove('picked'); picked = null; return; }
        rightCol.querySelectorAll('.chip.picked').forEach(function (c) { c.classList.remove('picked'); });
        chip.classList.add('picked'); picked = chip;
      });
      chip.addEventListener('dragstart', function (e) { e.dataTransfer.setData('text', p.id); chip.classList.add('dragging'); picked = chip; });
      chip.addEventListener('dragend', function () { chip.classList.remove('dragging'); });
      rightCol.appendChild(chip);
    });

    function tryPlace(slot, chip) {
      if (slot.classList.contains('correct')) return;
      if (slot.dataset.id === chip.dataset.id) {
        slot.classList.add('filled', 'correct');
        slot.innerHTML = '<span class="slot-label">' + pairs[slot.dataset.id].left + '</span>' +
          '<span class="placed" style="background:rgba(84,230,160,.16);border-color:rgba(84,230,160,.5)">' + chip.textContent + ' ' + I('check', 13) + '</span>';
        chip.classList.add('used'); chip.style.display = 'none'; chip.classList.remove('picked'); picked = null;
        solved++; if (solved === pairs.length) { wrap.appendChild(doneNote()); fire(); }
      } else {
        slot.classList.add('wrong'); setTimeout(function () { slot.classList.remove('wrong'); }, 450);
        if (window.APP) APP.toast(I('x', 15) + ' Nem ez a párja — nézd meg újra!');
        chip.classList.remove('picked'); picked = null;
      }
    }
    grid.appendChild(leftCol); grid.appendChild(rightCol);
    wrap.appendChild(grid);
    return wrap;
  }
  function doneNote() { return html('<div class="callout rule" style="margin-top:16px"><span class="ci">' + I('check', 22) + '</span><b>Tökéletes párosítás!</b>Minden összepárosítva — léphetsz tovább.</div>'); }

  /* ---------- SORRENDEZŐ ---------- */
  function order(b, onDone) {
    var fire = once(onDone);
    var wrap = el('div');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    if (b.prompt) wrap.appendChild(html('<p>' + b.prompt + '</p>'));
    var correct = b.items.slice();
    var cur = shuffle(b.items.slice());
    // ne maradjon véletlenül eleve helyes
    if (cur.join('|') === correct.join('|')) cur.reverse();
    var listEl = el('div', 'order-list');

    function draw() {
      listEl.innerHTML = '';
      cur.forEach(function (it, i) {
        var row = el('div', 'order-item');
        row.innerHTML = '<span class="num">' + (i + 1) + '</span><span style="flex:1">' + it + '</span>';
        var up = el('button', 'icon-btn'); up.style.cssText = 'width:32px;height:32px'; up.innerHTML = I('arrowL', 16, 'style="transform:rotate(90deg)"');
        var dn = el('button', 'icon-btn'); dn.style.cssText = 'width:32px;height:32px'; dn.innerHTML = I('arrowR', 16, 'style="transform:rotate(90deg)"');
        up.disabled = i === 0; dn.disabled = i === cur.length - 1;
        up.onclick = function () { var t = cur[i - 1]; cur[i - 1] = cur[i]; cur[i] = t; draw(); };
        dn.onclick = function () { var t = cur[i + 1]; cur[i + 1] = cur[i]; cur[i] = t; draw(); };
        var grp = el('div'); grp.style.cssText = 'display:flex;gap:4px'; grp.appendChild(up); grp.appendChild(dn);
        row.appendChild(grp);
        listEl.appendChild(row);
      });
    }
    draw();
    wrap.appendChild(listEl);
    var btn = el('button', 'btn primary'); btn.innerHTML = I('check', 18) + ' Ellenőrzés'; btn.style.marginTop = '6px';
    btn.addEventListener('click', function () {
      var rows = listEl.querySelectorAll('.order-item'); var ok = true;
      cur.forEach(function (it, i) {
        if (it === correct[i]) rows[i].classList.add('correct'); else { rows[i].classList.add('wrong'); ok = false; }
        setTimeout(function () { rows[i].classList.remove('wrong'); }, 700);
      });
      if (ok) { btn.disabled = true; wrap.appendChild(doneNote()); fire(); }
      else if (window.APP) APP.toast(I('x', 15) + ' Még nem jó a sorrend — igazíts rajta!');
    });
    wrap.appendChild(btn);
    return wrap;
  }

  /* ---------- SZITUÁCIÓS VÁLASZTÓ ---------- */
  function scenario(b, onDone) {
    var fire = once(onDone);
    var items = b.items; var idx = 0, solved = 0;
    var wrap = el('div', 'scenario');
    if (b.h) wrap.appendChild(html('<h3 style="margin-top:0">' + b.h + '</h3>'));
    var head = el('div'); wrap.appendChild(head);
    var optsBox = el('div', 'sc-opts'); wrap.appendChild(optsBox);
    var fb = el('div', 'sc-feedback'); wrap.appendChild(fb);
    var nav = el('div'); nav.style.cssText = 'margin-top:16px;display:flex;justify-content:flex-end'; wrap.appendChild(nav);

    function draw() {
      var it = items[idx];
      head.innerHTML = '<div class="sc-q">' + I('compass', 18, 'style="vertical-align:-3px;color:var(--arcane)"') + ' ' + it.q + '</div>' +
        (it.ctx ? '<div class="sc-ctx">' + it.ctx + '</div>' : '') +
        '<div class="muted" style="font-size:.8rem;margin-bottom:8px">Helyzet ' + (idx + 1) + ' / ' + items.length + '</div>';
      optsBox.innerHTML = ''; fb.className = 'sc-feedback'; nav.innerHTML = '';
      var opts = shuffle(it.options.slice());
      opts.forEach(function (o) {
        var d = el('div', 'sc-opt');
        d.innerHTML = '<b>' + o.label + '</b>' + (o.sub ? '<small>' + o.sub + '</small>' : '');
        d.addEventListener('click', function () { pick(d, o, it, opts); });
        optsBox.appendChild(d);
      });
    }
    function pick(d, o, it, opts) {
      Array.prototype.forEach.call(optsBox.children, function (c) { c.style.pointerEvents = 'none'; });
      if (o.correct) {
        d.classList.add('correct');
        fb.className = 'sc-feedback show ok';
        fb.innerHTML = '<b>' + I('check', 15) + ' Pontosan!</b> ' + (it.feedback || o.why || '');
        solved++;
        if (idx < items.length - 1) {
          var b2 = el('button', 'btn primary');
          b2.innerHTML = 'Következő helyzet ' + I('arrowR', 16);
          b2.addEventListener('click', function () { idx++; draw(); });
          nav.appendChild(b2);
        } else {
          // utolsó (vagy egyetlen) helyzet megoldva → azonnal kész, nincs külön gomb
          wrap.appendChild(doneNote()); fire();
        }
      } else {
        d.classList.add('wrong');
        fb.className = 'sc-feedback show no';
        fb.innerHTML = '<b>' + I('x', 15) + ' Nem ez a legjobb.</b> ' + (o.why || it.wrongHint || 'Gondold át újra a felhasználási környezetet.');
        var b3 = el('button', 'btn gold'); b3.innerHTML = I('refresh', 16) + ' Újra';
        b3.addEventListener('click', function () { draw(); });
        nav.appendChild(b3);
      }
    }
    draw();
    return wrap;
  }

  /* ---------- TANULÓKÁRTYÁK ---------- */
  function flashcards(b, onDone) {
    var fire = once(onDone);
    var wrap = el('div');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    if (b.intro) wrap.appendChild(html('<p>' + b.intro + '</p>'));
    var grid = el('div', 'cards'); var seen = {}, total = b.cards.length;
    var prog = html('<div class="xsec-progress">Fordíts meg minden kártyát (0 / ' + total + ')</div>');
    b.cards.forEach(function (c, i) {
      var f = el('div', 'flip');
      f.innerHTML = '<div class="inner"><div class="face front">' + c.front + '</div>' +
        '<div class="face back">' + c.back + '</div></div>';
      f.addEventListener('click', function () {
        f.classList.toggle('flipped');
        if (!seen[i]) { seen[i] = true; var n = Object.keys(seen).length; prog.textContent = 'Fordíts meg minden kártyát (' + n + ' / ' + total + ')' + (n === total ? ' — kész! ✓' : ''); if (n === total) fire(); }
      });
      grid.appendChild(f);
    });
    wrap.appendChild(grid); wrap.appendChild(prog);
    return wrap;
  }

  /* ---------- KATEGORIZÁLÓ (sorter) — húzd/kattintsd a megfelelő csoportba ---------- */
  function sort(b, onDone) {
    var fire = once(onDone);
    var wrap = el('div', 'sortc');
    if (b.h) wrap.appendChild(html('<h3>' + b.h + '</h3>'));
    if (b.prompt) wrap.appendChild(html('<p>' + b.prompt + '</p>'));
    var pool = el('div', 'sort-pool');
    var binsWrap = el('div', 'sort-bins');
    var picked = null, total = b.items.length, solved = 0;
    shuffle(b.items.slice()).forEach(function (it) {
      var chip = el('div', 'chip'); chip.textContent = it.label; chip.dataset.bin = it.bin; chip.setAttribute('draggable', 'true');
      chip.addEventListener('click', function () {
        if (chip.classList.contains('used')) return;
        if (picked === chip) { chip.classList.remove('picked'); picked = null; return; }
        pool.querySelectorAll('.chip.picked').forEach(function (c) { c.classList.remove('picked'); });
        chip.classList.add('picked'); picked = chip;
      });
      chip.addEventListener('dragstart', function () { picked = chip; chip.classList.add('dragging'); });
      chip.addEventListener('dragend', function () { chip.classList.remove('dragging'); });
      pool.appendChild(chip);
    });
    function place(bx, bin) {
      if (!picked || picked.classList.contains('used')) return;
      if (picked.dataset.bin === bin.id) {
        var tag = el('span', 'placed'); tag.style.cssText = 'background:rgba(84,230,160,.16);border-color:rgba(84,230,160,.5)'; tag.innerHTML = picked.textContent + ' ' + I('check', 12);
        bx.querySelector('.sb-items').appendChild(tag);
        picked.classList.add('used'); picked.style.display = 'none'; picked.classList.remove('picked'); picked = null;
        solved++; if (solved === total) { wrap.appendChild(doneNote()); fire(); }
      } else {
        bx.classList.add('wrong'); setTimeout(function () { bx.classList.remove('wrong'); }, 450);
        if (window.APP) APP.toast(I('x', 14) + ' Nem ebbe a csoportba tartozik — gondold át!');
        picked.classList.remove('picked'); picked = null;
      }
    }
    b.bins.forEach(function (bin) {
      var bx = el('div', 'sort-bin'); bx.dataset.id = bin.id;
      bx.innerHTML = '<div class="sb-title">' + (bin.icon || '') + bin.label + '</div><div class="sb-items"></div>';
      bx.addEventListener('click', function () { place(bx, bin); });
      bx.addEventListener('dragover', function (e) { e.preventDefault(); bx.classList.add('over'); });
      bx.addEventListener('dragleave', function () { bx.classList.remove('over'); });
      bx.addEventListener('drop', function (e) { e.preventDefault(); bx.classList.remove('over'); place(bx, bin); });
      binsWrap.appendChild(bx);
    });
    wrap.appendChild(pool); wrap.appendChild(binsWrap);
    return wrap;
  }

  return { decoder: decoder, xsec: xsec, match: match, order: order, scenario: scenario, flashcards: flashcards, sort: sort };
})();
