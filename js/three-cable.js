/* =====================================================================
   CABLE3D — valós idejű 3D kábelmodell-motor (Three.js, offline)
   Lépcsőzetes "kibontott" metszet: minden réteg külön hosszúságban
   végződik, így a köpeny, kitöltőanyag, koncentrikus/páncél réteg és
   az erek is jól láthatók. Z-fighting mentes (eltérő z-síkok),
   pontos illesztés (nincs clipping), lapos szalag és szektoros erek.
   Egyetlen WebGL-kontextust használ: mount() leszereli a régit.
   ===================================================================== */
(function (global) {
  'use strict';

  var INS = {
    brown: '#6f421f', black: '#1b1b1b', grey: '#9aa1a8', blue: '#1f6fd0',
    green: '#1f9d3f', white: '#e9ebee', red: '#c23b2e', numbered: '#1c1c1c'
  };
  var COND = {
    cu: { color: 0xc8772f, metalness: 0.92, roughness: 0.34, emissive: 0x140a02 },
    al: { color: 0xd2d7dc, metalness: 0.92, roughness: 0.36 }
  };

  function stripeTexture() {
    var c = document.createElement('canvas'); c.width = 128; c.height = 128;
    var x = c.getContext('2d');
    x.fillStyle = '#1f9d3f'; x.fillRect(0, 0, 128, 128);
    x.strokeStyle = '#f2d21a'; x.lineWidth = 30;
    for (var i = -160; i < 300; i += 56) { x.beginPath(); x.moveTo(i, 0); x.lineTo(i + 150, 128); x.stroke(); }
    var t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(2, 1);
    return t;
  }

  function makeManager() {
    var THREE_OK = (typeof THREE !== 'undefined');
    var ctx = null;

    function teardown() {
      if (!ctx) return;
      cancelAnimationFrame(ctx.raf);
      window.removeEventListener('resize', ctx.onResize);
      if (ctx.io) ctx.io.disconnect();
      try {
        ctx.scene.traverse(function (o) {
          if (o.geometry) o.geometry.dispose();
          if (o.material) { (Array.isArray(o.material) ? o.material : [o.material]).forEach(function (m) { if (m.map) m.map.dispose(); m.dispose(); }); }
        });
        ctx.renderer.dispose();
        if (ctx.renderer.domElement && ctx.renderer.domElement.parentNode) ctx.renderer.domElement.parentNode.removeChild(ctx.renderer.domElement);
      } catch (e) {}
      ctx = null;
    }

    function fallback(el, spec) {
      el.classList.add('c3d-fallback');
      var img = spec && spec.img ? '<img src="' + spec.img + '" alt="">' : '';
      el.innerHTML = '<div class="c3d-fb-inner">' + img + '<span>A 3D nézethez WebGL szükséges — itt a keresztmetszeti ábra látható.</span></div>';
    }

    // ---- geometriai segédek ----
    function tube(rOuter, rInner, len, seg) {
      // cső (vagy tömör henger, ha rInner=0) Z tengely mentén, lapos véglappal
      var g;
      if (rInner > 0.001) {
        var shape = new THREE.Shape(); shape.absarc(0, 0, rOuter, 0, Math.PI * 2, false);
        var hole = new THREE.Path(); hole.absarc(0, 0, rInner, 0, Math.PI * 2, true); shape.holes.push(hole);
        g = new THREE.ExtrudeGeometry(shape, { depth: len, bevelEnabled: false, curveSegments: seg || 48 });
      } else {
        g = new THREE.CylinderGeometry(rOuter, rOuter, len, seg || 40, 1, false);
        g.rotateX(Math.PI / 2); g.translate(0, 0, len / 2); // így a [0..len] tartományban áll, mint az extrude
      }
      return g;
    }
    function sectorGeom(a0, a1, rInner, rOuter, len, seg) {
      var shape = new THREE.Shape();
      shape.absarc(0, 0, rOuter, a0, a1, false);
      shape.absarc(0, 0, rInner, a1, a0, true);
      var g = new THREE.ExtrudeGeometry(shape, { depth: len, bevelEnabled: false, curveSegments: seg || 24 });
      return g;
    }
    function roundedRectShape(w, h, r) {
      var s = new THREE.Shape(); var x = -w / 2, y = -h / 2;
      s.moveTo(x + r, y);
      s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
      s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
      s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
      return s;
    }
    function mat(color, rough, metal, extra) {
      return new THREE.MeshStandardMaterial(Object.assign({ color: new THREE.Color(color), roughness: rough, metalness: metal }, extra || {}));
    }

    function build(el, spec) {
      var w = el.clientWidth || 360, h = el.clientHeight || 340;
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(40, w / h, 0.5, 60);
      var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance', logarithmicDepthBuffer: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(w, h); renderer.domElement.style.cssText = 'display:block;cursor:grab';
      el.innerHTML = ''; el.appendChild(renderer.domElement);

      scene.add(new THREE.AmbientLight(0x6a7a96, 1.0));
      var key = new THREE.DirectionalLight(0xffffff, 2.1); key.position.set(5, 7, 8); scene.add(key);
      var rim = new THREE.DirectionalLight(0x37d6ec, 1.5); rim.position.set(-7, 2, 4); scene.add(rim);
      var warm = new THREE.PointLight(0x54e6a0, 0.55, 60); warm.position.set(3, -5, 6); scene.add(warm);

      var group = new THREE.Group(); scene.add(group);

      var cores = spec.cores || [{ color: 'brown' }];
      var n = cores.length;
      var kind = spec.layout || (n === 1 ? 'single' : 'round');
      var coreShape = spec.coreShape || 'round';

      // --- lépcsőzetes véghosszak (kibontott metszet) ---
      var H = 4.4;                 // teljes hossz (vezető a leghosszabb)
      var backZ = -H / 2;
      var zCond = H / 2;
      var zCore = zCond - 0.55;
      var zFill = zCore - 0.5;
      var zArmor = zFill - 0.35;
      var zSheath = zArmor - (spec.armor ? 0.0 : 0.35) - 0.4;
      if (!spec.armor) zArmor = zFill; // nincs külön páncél lépcső
      function L(z) { return z - backZ; }

      var rc = 0.5, rCond = 0.3, stripeTex = null;

      // --- erek pozíciói ---
      var positions = [];
      if (kind === 'flat') {
        for (var i = 0; i < n; i++) positions.push({ x: (i - (n - 1) / 2) * rc * 2.15, y: 0, a: 0 });
      } else if (n === 1) {
        positions.push({ x: 0, y: 0, a: 0 });
      } else {
        var R = (coreShape === 'sector') ? 0 : rc / Math.sin(Math.PI / n);
        for (var k = 0; k < n; k++) {
          var ang = -Math.PI / 2 + k * 2 * Math.PI / n;
          positions.push({ x: Math.cos(ang) * R, y: Math.sin(ang) * R, a: ang });
        }
      }

      // bounding radius
      var maxCoreR = 0;
      positions.forEach(function (p) { maxCoreR = Math.max(maxCoreR, Math.hypot(p.x, p.y) + rc); });
      if (coreShape === 'sector') maxCoreR = rc * 2.0; // szektor sugár
      var fillerR = maxCoreR + 0.10;
      var hasArmor = !!spec.armor;
      var armorOuter = fillerR + 0.12;
      // a köpeny belső fala NE essen egybe a páncél/kitöltő külső falával (különben villog)
      var sheathInner = (hasArmor ? armorOuter : fillerR) + 0.05;
      var sheathOuter = sheathInner + 0.18;
      // a hátsó véglapok eltolása rétegenként, hogy ne legyenek egy síkban (z-fighting ellen)
      var BZ = { sheath: backZ, armor: backZ + 0.04, fill: backZ + 0.08, core: backZ + 0.12, cond: backZ + 0.16 };

      // ---- KÖPENY ----
      if (spec.sheath) {
        var sCol = spec.sheath;
        if (kind === 'flat') {
          var rowW = Math.abs(positions[0].x) * 2 + rc * 2;
          var shp = roundedRectShape(rowW + 0.5, rc * 2 + 0.45, (rc + 0.22));
          var fg = new THREE.ExtrudeGeometry(shp, { depth: L(zSheath), bevelEnabled: false, curveSegments: 24 });
          var fm = mat(sCol, 0.62, 0.06);
          var sh = new THREE.Mesh(fg, fm); sh.position.z = BZ.sheath; group.add(sh);
        } else {
          // a köpenyt üreges csőként rajzoljuk, hogy belelássunk a metszetbe
          var g = tube(sheathOuter, sheathInner, L(zSheath), 56);
          var sm = mat(sCol, 0.6, 0.06, { side: THREE.DoubleSide });
          var sh2 = new THREE.Mesh(g, sm); sh2.position.z = BZ.sheath; group.add(sh2);
        }
      }

      // ---- PÁNCÉL / KONCENTRIKUS ----
      if (hasArmor && kind !== 'flat') {
        var amCol = spec.armor === 'concentric' ? 0xc8772f : (spec.armor === 'tape' ? 0xb9c0c8 : 0x9aa3ad);
        var amMetal = 0.95, amRough = spec.armor === 'concentric' ? 0.4 : 0.3;
        var ag = tube(armorOuter, fillerR + 0.02, L(zArmor), 56);
        var am = new THREE.Mesh(ag, mat(amCol, amRough, amMetal, { side: THREE.DoubleSide }));
        am.position.z = BZ.armor; group.add(am);
      }

      // ---- KITÖLTŐANYAG ----
      if (spec.fill && kind !== 'flat') {
        var flg = tube(fillerR, 0, L(zFill), 56);
        var flm = mat(spec.fillColor || '#e9e3d4', 0.85, 0.02);
        var fl = new THREE.Mesh(flg, flm); fl.position.z = BZ.fill; group.add(fl);
      }

      // ---- EREK ----
      function insulationMat(col) {
        if (col === 'pe' || col === 'greenyellow') {
          if (!stripeTex) stripeTex = stripeTexture();
          return new THREE.MeshStandardMaterial({ map: stripeTex, roughness: 0.5, metalness: 0.04 });
        }
        return mat(INS[col] || col, 0.55, 0.05);
      }
      positions.forEach(function (p, i) {
        var c = cores[i] || cores[0];
        var insMat = insulationMat(c.color);
        var condMat = new THREE.MeshStandardMaterial(c.conductor === 'al' ? COND.al : COND.cu);
        if (coreShape === 'sector') {
          var gap = 0.10; // rad
          var span = (2 * Math.PI) / n;
          var a0 = p.a - span / 2 + gap / 2, a1 = p.a + span / 2 - gap / 2;
          var ri = 0.14, ro = rc * 1.95;
          var ins = new THREE.Mesh(sectorGeom(a0, a1, ri, ro, L(zCore), 24), insMat);
          ins.position.z = BZ.core; group.add(ins);
          var t = 0.10;
          var cnd = new THREE.Mesh(sectorGeom(a0 + 0.06, a1 - 0.06, ri + t, ro - t, L(zCond), 24), condMat);
          cnd.position.z = BZ.cond; group.add(cnd);
        } else {
          var ig = tube(rc, 0, L(zCore), 36);
          var ins2 = new THREE.Mesh(ig, insMat); ins2.position.set(p.x, p.y, BZ.core); group.add(ins2);
          var cg = tube(rCond, 0, L(zCond), 28);
          var cnd2 = new THREE.Mesh(cg, condMat); cnd2.position.set(p.x, p.y, BZ.cond); group.add(cnd2);
        }
      });

      // ---- illesztés: középre + skála ----
      var box = new THREE.Box3().setFromObject(group);
      var center = new THREE.Vector3(); box.getCenter(center);
      group.position.sub(center); // origóba
      var sphere = box.getBoundingSphere(new THREE.Sphere());
      var targetR = 2.2;
      var s = targetR / sphere.radius;
      group.scale.setScalar(s);
      group.rotation.x = -0.38; group.rotation.y = -0.55;

      // kamera: a tényleges sugárhoz illesztve, bőséges margóval
      var fitR = targetR * 1.0;
      var dist = (fitR / Math.sin((camera.fov * Math.PI / 180) / 2)) * 1.18;
      camera.position.set(0, dist * 0.18, dist);
      camera.lookAt(0, 0, 0);

      return { scene: scene, camera: camera, renderer: renderer, group: group, el: el };
    }

    function mount(el, spec) {
      teardown();
      spec = spec || {};
      if (!THREE_OK) { fallback(el, spec); return null; }
      try {
        var c = build(el, spec); ctx = c;
        var dragging = false, lx = 0, ly = 0, idle = 0, autov = 0.004;
        function pt(e) { var t = e.touches ? e.touches[0] : e; return { x: t.clientX, y: t.clientY }; }
        function down(e) { dragging = true; idle = 0; c.renderer.domElement.style.cursor = 'grabbing'; var p = pt(e); lx = p.x; ly = p.y; if (e.cancelable) e.preventDefault(); }
        function move(e) {
          if (!dragging) return; var p = pt(e);
          c.group.rotation.y += (p.x - lx) * 0.01;
          c.group.rotation.x = Math.max(-1.25, Math.min(1.05, c.group.rotation.x + (p.y - ly) * 0.01));
          lx = p.x; ly = p.y; idle = 0;
        }
        function up() { dragging = false; if (ctx) c.renderer.domElement.style.cursor = 'grab'; idle = 0; }
        c.renderer.domElement.addEventListener('pointerdown', down);
        window.addEventListener('pointermove', move); window.addEventListener('pointerup', up);

        var visible = true;
        if ('IntersectionObserver' in window) { ctx.io = new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0.02 }); ctx.io.observe(el); }

        function loop() {
          ctx.raf = requestAnimationFrame(loop);
          if (!visible || document.hidden) return;
          if (!dragging) { idle++; if (idle > 45) c.group.rotation.y += autov; }
          c.renderer.render(c.scene, c.camera);
        }
        loop();
        ctx.onResize = function () { var w = el.clientWidth || 360, hh = el.clientHeight || 340; c.camera.aspect = w / hh; c.camera.updateProjectionMatrix(); c.renderer.setSize(w, hh); };
        window.addEventListener('resize', ctx.onResize);
        return ctx;
      } catch (err) { console.warn('CABLE3D fallback:', err); fallback(el, spec); return null; }
    }

    return { mount: mount, teardown: teardown, INS: INS };
  }

  global.CABLE3D = makeManager();
})(window);
