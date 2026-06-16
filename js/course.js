/* =====================================================================
   COURSE — a tananyag konténere és gamifikációs beállításai.
   A tartalmi modulok (m1..m8) a COURSE.addModule(...) hívással töltik fel.
   ===================================================================== */
window.COURSE = {
  meta: {
    title: 'Villanyszerelési vezetékek és kábelek',
    subtitle: 'Magyar és szabványos megnevezések · jelölések megfejtése · felhasználás · terhelhetőség',
    storageKey: 'vk_tananyag_v1'
  },

  modules: [],
  finalExam: null,

  // RANGOK (XP-küszöbök)
  ranks: [
    { xp: 0,    name: 'Tanonc' },
    { xp: 120,  name: 'Inas' },
    { xp: 320,  name: 'Bekötő segéd' },
    { xp: 620,  name: 'Kábelszerelő' },
    { xp: 1000, name: 'Vezető szerelő' },
    { xp: 1500, name: 'Áram-mágus' },
    { xp: 2200, name: 'Az Áram Nagymestere' }
  ],

  // XP-jutalmak
  xp: {
    lesson: 15,       // egy fejezet leckéinek végigolvasása (egyszer)
    interact: 5,      // interaktív elem teljesítése
    chapterQuiz: 40,  // fejezetkvíz teljesítése (elsőre)
    moduleQuiz: 80,   // modulkvíz teljesítése
    finalExam: 250,   // záróvizsga
    badge: 30,        // jelvény
    perfectBonus: 20  // hibátlan elsőre
  },

  // GLOBÁLIS JELVÉNYEK (a modul-jelvényeket a modulok hozzák)
  badges: [
    { id: 'first_step',  name: 'Első szikra',        desc: 'Teljesítetted az első fejezetet.',           icon: 'spark' },
    { id: 'decoder',     name: 'Kódfejtő',           desc: 'Megfejtetted mind a három jelölésrendszert.', icon: 'key' },
    { id: 'explorer',    name: 'Rétegkutató',        desc: 'Felfedezted egy kábel minden rétegét.',       icon: 'layers' },
    { id: 'flawless',    name: 'Hibátlan varázslat', desc: 'Egy kvízt elsőre, hibátlanul teljesítettél.', icon: 'sparkles' },
    { id: 'streak',      name: 'Áramütés-sorozat',   desc: '6 helyes válasz zsinórban.',                  icon: 'flame' },
    { id: 'halfway',     name: 'Félúton',            desc: 'A tananyag felét teljesítetted.',             icon: 'compass' },
    { id: 'scholar',     name: 'A Szabványok Tudósa',desc: 'Minden modult teljesítettél.',                icon: 'hat' },
    { id: 'grandmaster', name: 'Az Áram Mestere',    desc: 'Letetted a nagy záróvizsgát.',                icon: 'crown' }
  ],

  addModule: function (m) { this.modules.push(m); return m; },
  setFinalExam: function (f) { this.finalExam = f; },

  // segéd: minden fejezet lapszáma stb. az appban dől el
  getModule: function (id) { return this.modules.find(function (m) { return m.id === id; }); }
};
