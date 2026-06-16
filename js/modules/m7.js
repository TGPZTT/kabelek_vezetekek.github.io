/* =====================================================================
   7. MODUL — KERESZTMETSZET ÉS TERHELHETŐSÉG
   ===================================================================== */
COURSE.addModule({
  id: 'm7',
  title: 'Keresztmetszet és terhelhetőség',
  subtitle: 'Mennyit bír a réz? Melyik kismegszakító védi? És miért „számít egy mérettel lejjebb” az alumínium?',
  icon: 'ruler',
  intro: 'A vezeték keresztmetszete határozza meg, mekkora áramot bír el tartósan. A kismegszakító feladata, hogy a vezetéket megvédje — ezért a méretezés életbevágó (tűzvédelem).',
  badge: { id: 'm7', name: 'A Terhelhetőség Tudója', desc: 'Érted a keresztmetszet, terhelhetőség és kismegszakító kapcsolatát.', icon: 'ruler' },

  chapters: [
    /* ---------------- 7.1 ---------------- */
    {
      id: 'c1', code: '7.1', title: 'Réz keresztmetszet és terhelhetőség',
      blurb: '1,5→10 A világítás · 2,5→16 A dugalj · 6→32 A sütő · 16→ház betáp. A kismegszakító védi a vezetéket!',
      pages: [
        {
          kicker: '7.1 · A terhelhetőségi táblázat',
          blocks: [
            { type: 'lead', text: 'Az alábbi értékek <em>tájékoztató</em> jellegűek: falba süllyesztett, védőcsöves/köpenyes fektetésre (PVC szigetelés, 2 terhelt ér, ~30 °C). A pontos érték a fektetési módtól, halmozástól és hőmérséklettől függ (MSZ HD 60364-5-52).' },
            {
              type: 'table', h: 'Réz terhelhetőség (tájékoztató)',
              head: ['Keresztmetszet (réz)', 'Terhelhetőség kb.', 'Jellemző kismegszakító', 'Tipikus felhasználás'],
              rows: [
                ['1,5 mm²', '~16 A', '10 A (max. 16 A)', 'világítási körök'],
                ['2,5 mm²', '~21–24 A', '16 A', 'dugaljkörök, bojler'],
                ['4 mm²', '~28–32 A', '20–25 A', 'klíma, nagyobb egyfázisú fogyasztó'],
                ['6 mm²', '~36–41 A', '32 A', 'sütő + főzőlap, kisebb mellékelosztó'],
                ['10 mm²', '~50–57 A', '40 A', 'lakás fővezeték, mellékelosztó betáp'],
                ['16 mm²', '~66–76 A', '50–63 A', 'családi ház betáp (réz)'],
                ['25 mm²', '~84–101 A', '80 A', 'nagyobb betáplálások']
              ]
            },
            { type: 'p', text: '<div style="background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:14px;padding:14px;margin:10px 0">' +
              '<div style="font-weight:600;color:#eaf1ff;margin-bottom:10px">Terhelhetőség a keresztmetszet függvényében (réz, tájékoztató):</div>' +
              '<svg viewBox="0 0 470 218" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">' +
              '<text x="6" y="23" fill="#dceafb" font-size="12">1,5 mm²</text><rect x="70" y="11" width="53" height="16" rx="4" fill="#37d6ec"/><text x="129" y="23" fill="#9fb0cc" font-size="11">~16 A</text>' +
              '<text x="6" y="51" fill="#dceafb" font-size="12">2,5 mm²</text><rect x="70" y="39" width="73" height="16" rx="4" fill="#37d6ec"/><text x="149" y="51" fill="#9fb0cc" font-size="11">~22 A</text>' +
              '<text x="6" y="79" fill="#dceafb" font-size="12">4 mm²</text><rect x="70" y="67" width="99" height="16" rx="4" fill="#3fd8c0"/><text x="175" y="79" fill="#9fb0cc" font-size="11">~30 A</text>' +
              '<text x="6" y="107" fill="#dceafb" font-size="12">6 mm²</text><rect x="70" y="95" width="125" height="16" rx="4" fill="#54e6a0"/><text x="201" y="107" fill="#9fb0cc" font-size="11">~38 A</text>' +
              '<text x="6" y="135" fill="#dceafb" font-size="12">10 mm²</text><rect x="70" y="123" width="175" height="16" rx="4" fill="#8fe06a"/><text x="251" y="135" fill="#9fb0cc" font-size="11">~53 A</text>' +
              '<text x="6" y="163" fill="#dceafb" font-size="12">16 mm²</text><rect x="70" y="151" width="231" height="16" rx="4" fill="#f0c84b"/><text x="307" y="163" fill="#9fb0cc" font-size="11">~70 A</text>' +
              '<text x="6" y="191" fill="#dceafb" font-size="12">25 mm²</text><rect x="70" y="179" width="304" height="16" rx="4" fill="#f0a233"/><text x="380" y="191" fill="#9fb0cc" font-size="11">~92 A</text>' +
              '</svg>' +
              '<div style="font-size:.82rem;color:var(--ink-soft);margin-top:6px">Jól látszik: a keresztmetszet növelésével nő a terhelhetőség (de nem lineárisan — a felület számít).</div></div>' },
            {
              type: 'callout', variant: 'danger', title: 'Az aranyszabály',
              html: 'A vezetéket <strong>mindig a kismegszakító védi</strong> — a megszakító névleges árama NEM lehet nagyobb, mint amit a vezeték elbír! Fordított esetben a vezeték melegedhet/éghet, mielőtt a megszakító lekapcsol.'
            },
            {
              type: 'callout', variant: 'tip', title: 'Hosszú vezeték',
              html: 'Kb. <strong>20–25 m felett</strong> a feszültségesés miatt érdemes egy mérettel nagyobb keresztmetszetet választani.'
            }
          ]
        },
        {
          kicker: '7.1 · Méretezés gyakorlat',
          blocks: [
            { type: 'h', text: 'Párosítsd a keresztmetszetet!' },
            {
              type: 'match', gate: true, leftLabel: 'Réz keresztmetszet', rightLabel: 'Jellemző kismegszakító + felhasználás',
              pairs: [
                { left: '1,5 mm²', right: '10 A — világítási kör' },
                { left: '2,5 mm²', right: '16 A — dugaljkör, bojler' },
                { left: '6 mm²', right: '32 A — sütő + főzőlap' },
                { left: '16 mm²', right: '50–63 A — családi ház betáp' }
              ]
            },
            {
              type: 'scenario', gate: true, h: 'Válaszd a méretet!',
              items: [
                {
                  q: 'Új dugaljkört viszel egy nappaliba, 16 A-es kismegszakítóval.',
                  ctx: 'Réz, falba, normál hossz.',
                  options: [
                    { label: '2,5 mm²', sub: '~21–24 A', correct: true, why: 'A 16 A-es körhöz 2,5 mm² réz a szabványos választás (a vezeték ~21–24 A-t bír).' },
                    { label: '1,5 mm²', sub: '~16 A', why: 'Az 1,5 mm² a világítási köré (10 A). 16 A-es dugaljkörhöz kevés — a megszakító a vezeték határán védene.' },
                    { label: '6 mm²', sub: '~36–41 A', why: 'Túlméretezett egy sima dugaljkörhöz; a 6 mm² a sütő/főzőlap köré (32 A).' }
                  ]
                },
                {
                  q: 'Beépített sütő + indukciós főzőlap közös, nagyobb teljesítményű köre, 32 A.',
                  ctx: 'Réz, fix bekötés.',
                  options: [
                    { label: '6 mm²', sub: '~36–41 A', correct: true, why: '32 A-es körhöz 6 mm² réz kell (a vezeték ~36–41 A-t bír).' },
                    { label: '2,5 mm²', sub: '~21–24 A', why: 'Csak ~24 A-ig — 32 A-es megszakítóval a vezeték túlterhelődne. TILOS.' },
                    { label: '1,5 mm²', sub: '~16 A', why: 'Sokszorosan alulméretezett — tűzveszélyes.' }
                  ]
                }
              ]
            },
            { type: 'h3', text: 'Méretező csúszka — állítsd be a helyes keresztmetszetet!' },
            {
              type: 'slider', gate: true,
              intro: 'Húzd a csúszkát, és figyeld a visszajelzést: túl kicsi (tűzveszély), megfelelő, vagy túlméretezett. Oldd meg mind a hármat!',
              steps: [{ label: '1,5 mm²' }, { label: '2,5 mm²' }, { label: '4 mm²' }, { label: '6 mm²' }, { label: '10 mm²' }, { label: '16 mm²' }],
              items: [
                { prompt: 'Világítási kör, 10 A kismegszakító — melyik réz keresztmetszet?', correct: 0 },
                { prompt: 'Dugaljkör, 16 A — melyik réz keresztmetszet?', correct: 1 },
                { prompt: 'Sütő + főzőlap, 32 A — melyik réz keresztmetszet?', correct: 3 }
              ]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mekkora réz keresztmetszet való egy 16 A-es dugaljkörhöz?', options: [{ t: '2,5 mm²', correct: true }, { t: '1,5 mm²' }, { t: '0,75 mm²' }, { t: '10 mm²' }], explain: '2,5 mm² réz ~21–24 A-t bír — ez a 16 A-es dugaljkör szabványos mérete.' },
        { type: 'single', q: 'Mi a kismegszakító feladata a vezetékkel kapcsolatban?', options: [{ t: 'megvédi a vezetéket a túlterheléstől', correct: true }, { t: 'megnöveli a vezeték terhelhetőségét' }, { t: 'csökkenti a hálózati feszültséget' }, { t: 'nincs köze a vezeték méretéhez' }], explain: 'A megszakító névleges árama nem lehet nagyobb, mint amit a vezeték elbír — különben a vezeték éghet.' },
        { type: 'single', q: 'Sütő + főzőlap 32 A-es köre — milyen réz keresztmetszet?', options: [{ t: '6 mm²', correct: true }, { t: '2,5 mm²' }, { t: '1,5 mm²' }, { t: '0,5 mm²' }], explain: '6 mm² réz ~36–41 A — a 32 A-es körhöz ez kell.' },
        { type: 'tf', q: '20–25 m feletti hossznál a feszültségesés miatt érdemes nagyobb keresztmetszetet választani.', answer: true, explain: 'Igen, a hosszú vezetéken eső feszültség miatt egy mérettel feljebb.' }
      ]
    },

    /* ---------------- 7.2 ---------------- */
    {
      id: 'c2', code: '7.2', title: 'Alumínium — az ökölszabály',
      blurb: 'Az alu vezetőképessége a réz ~61%-a → ~1,6× keresztmetszet. „Egy mérettel lejjebb számít.”',
      pages: [
        {
          kicker: '7.2 · Réz vs alumínium',
          blocks: [
            { type: 'lead', text: 'Az alumínium vezetőképessége a réznek csak kb. <strong>61%-a</strong>, ezért azonos terheléshez kb. <strong>1,6-szoros</strong> keresztmetszet kell belőle.' },
            {
              type: 'callout', variant: 'rule', title: 'Ökölszabály',
              html: 'Az alumínium „<strong>egy mérettel lejjebb számít</strong>” — az alu keresztmetszet annyit bír, mint az eggyel kisebb réz.'
            },
            {
              type: 'list', items: [
                '16 mm² alu ≈ 10 mm² réz (~50 A)',
                '25 mm² alu ≈ 16 mm² réz (~66 A)'
              ]
            },
            {
              type: 'callout', variant: 'danger', title: 'Háztartási alu — figyelem!',
              html: 'Háztartási szerelésben alumínium ma már csak <strong>betápra</strong> használatos, minimum <strong>16 mm²</strong>-rel. A régi 2,5–4 mm²-es alu lakásvezetékelés <strong>tűzveszélyes, cserélendő</strong>!'
            }
          ]
        },
        {
          kicker: '7.2 · Gyakorlat',
          blocks: [
            {
              type: 'match', gate: true, leftLabel: 'Alumínium', rightLabel: 'Réz-megfelelő (kb.)',
              pairs: [
                { left: '16 mm² alu', right: '≈ 10 mm² réz (~50 A)' },
                { left: '25 mm² alu', right: '≈ 16 mm² réz (~66 A)' }
              ]
            },
            {
              type: 'scenario', gate: true, h: 'Igaz vagy tévhit?',
              items: [{
                q: 'Egy régi lakásban 2,5 mm²-es ALUMÍNIUM vezetékelést találsz a dugaljkörökön. Mi a helyes teendő?',
                ctx: 'Régi alu lakásvezeték.',
                options: [
                  { label: 'Cserélni — tűzveszélyes', sub: '', correct: true, why: 'A régi 2,5–4 mm²-es alu lakásvezeték tűzveszélyes (kúszás, melegedő kötések) — cserélendő rézre.' },
                  { label: 'Hagyni, jó az úgy', sub: '', why: 'A vékony alu lakásvezeték tűzveszélyes; a kötések kúsznak, melegednek — cserélni kell.' },
                  { label: 'Nagyobb kismegszakítót tenni rá', sub: '', why: 'Pont fordítva: nagyobb megszakító még veszélyesebb. A vezetéket kell cserélni.' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Az alumínium vezetőképessége a réznek kb. hány %-a?', options: [{ t: '~61 %', correct: true }, { t: '~100 %' }, { t: '~160 %' }, { t: '~30 %' }], explain: 'Kb. 61% — ezért kell belőle ~1,6× keresztmetszet azonos terheléshez.' },
        { type: 'single', q: '16 mm² alumínium kb. mennyit bír (réz-megfelelő)?', options: [{ t: '≈ 10 mm² réz, ~50 A', correct: true }, { t: '≈ 25 mm² réz' }, { t: '≈ 1,5 mm² réz' }, { t: '~120 A' }], explain: 'Egy mérettel lejjebb: 16 alu ≈ 10 réz (~50 A).' },
        { type: 'tf', q: 'A régi 2,5 mm²-es alumínium lakásvezetékelés biztonságos, nem kell vele foglalkozni.', answer: false, explain: 'Tűzveszélyes — cserélendő. Az alu csak betápra (min. 16 mm²) ajánlott ma.' }
      ]
    }
  ],

  /* ---------------- MODULKVÍZ ---------------- */
  quiz: [
    { type: 'single', q: 'Világítási kör réz keresztmetszete és kismegszakítója:', options: [{ t: '1,5 mm² · 10 A', correct: true }, { t: '2,5 mm² · 16 A' }, { t: '6 mm² · 32 A' }, { t: '0,5 mm² · 6 A' }], explain: '1,5 mm² réz, 10 A (max 16 A) — világítás.' },
    { type: 'single', q: 'Melyik állítás IGAZ a kismegszakítóról?', options: [{ t: 'névleges árama nem lehet nagyobb a vezeték terhelhetőségénél', correct: true }, { t: 'minél nagyobb, annál jobb' }, { t: 'a feszültséget szabályozza' }, { t: 'a vezeték helyett véd, ezért a vezeték lehet vékonyabb' }], explain: 'A megszakító a vezetéket védi; árama ≤ a vezeték terhelhetősége.' },
    { type: 'single', q: 'Azonos terheléshez az alumínium keresztmetszete a rézhez képest kb.:', options: [{ t: '~1,6-szor nagyobb', correct: true }, { t: 'ugyanakkora' }, { t: 'feleakkora' }, { t: '3-szor nagyobb' }], explain: 'Az alu ~61% vezetőképesség → ~1,6× keresztmetszet.' },
    { type: 'single', q: '25 mm² alumínium kb. melyik réz keresztmetszetnek felel meg?', options: [{ t: '16 mm² réz (~66 A)', correct: true }, { t: '10 mm² réz' }, { t: '35 mm² réz' }, { t: '2,5 mm² réz' }], explain: '25 alu ≈ 16 réz (~66 A) — egy mérettel lejjebb.' },
    { type: 'tf', q: 'Hosszú (20–25 m feletti) körnél a feszültségesés miatt nagyobb keresztmetszet ajánlott.', answer: true, explain: 'Igen, hogy a feszültségesés a határon belül maradjon.' }
  ]
});
