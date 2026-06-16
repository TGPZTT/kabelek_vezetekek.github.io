/* =====================================================================
   1. MODUL — ALAPFOGALMAK
   ===================================================================== */
COURSE.addModule({
  id: 'm1',
  title: 'Alapfogalmak',
  subtitle: 'Vezeték vagy kábel? Az erek fajtái és a kötelező érszínek — ezt értsd meg először.',
  icon: 'book',
  intro: 'Mielőtt bármilyen rejtélyes betűjelet megfejtenénk, le kell raknunk a három alappillért: ' +
    'mi a különbség vezeték és kábel között, milyen az ér felépítése, és mit jelentenek a kötelező érszínek.',
  badge: { id: 'm1', name: 'Az Alapok Őre', desc: 'Teljesítetted az Alapfogalmak modult.', icon: 'book' },

  chapters: [
    /* ---------------- 1.1 ---------------- */
    {
      id: 'c1', code: '1.1', title: 'Vezeték vagy kábel?',
      blurb: 'A felépítés dönt: van-e külső köpeny? Egy réteg → vezeték, érszigetelés + köpeny → kábel.',
      pages: [
        {
          kicker: '1.1 · A legfontosabb megkülönböztetés',
          blocks: [
            { type: 'lead', text: 'A szakmában minden ezzel kezdődik: <em>vezeték</em> vagy <em>kábel</em>? A kettő nem ugyanaz — és a különbség nem az erek számán, hanem a <strong>külső köpeny meglétén</strong> múlik.' },
            {
              type: 'figure', img: 'images/concept_vezetek_kabel.png',
              caption: 'Balra: szigetelt vezeték (1 ér). Jobbra: kábel — szigetelt erek + kitöltőanyag + közös külső köpeny.',
              alt: 'Vezeték és kábel keresztmetszete'
            },
            {
              type: 'callout', variant: 'info', title: 'VEZETÉK',
              html: 'Egy <strong>szigetelt ér</strong> (vezető + érszigetelés), <strong>külső köpeny nélkül</strong>. Önmagában nem mehet a falba: védőcsőbe, kábelcsatornába vagy készülékbe való. Pl. <code>MCu</code>, <code>MKH</code>.'
            },
            {
              type: 'callout', variant: 'rule', title: 'KÁBEL (és köpenyes vezeték)',
              html: 'Egy vagy több szigetelt ér egy <strong>közös, vastagabb külső köpenyben</strong>, gyakran kitöltőanyaggal. A köpeny véd a mechanikai sérülés és a nedvesség ellen, ezért a kábelnek a védelméhez <strong>nem kell külön védőcső</strong>. Hogy pontosan hova fektethető (falon kívül, vakolat alá, kültér, föld), az <strong>típusonként más</strong> — pl. földbe csak a földkábel (NYY/NAYY) való, vakolat alá cső nélkül az MM-fal. Pl. <code>NYM</code>, <code>NYY</code>, <code>MBCu</code>.'
            }
          ]
        },
        {
          kicker: '1.1 · A köznyelv csapdája',
          blocks: [
            { type: 'h', text: 'A hétköznapi szóhasználat összemossa őket' },
            { type: 'p', text: 'A köpenyes szerelvényvezetékeket (<code>MBCu</code>, <code>NYM</code>) a köznyelvben is „kábelnek” hívjuk — ez nem hiba, a katalógusok is keverve használják. A lényeg, hogy a <strong>szerkezetet</strong> ismerd fel, ne a nevet.' },
            {
              type: 'cable3d', h: 'Nézd meg 3D-ben — ez egy kábel', intro: 'Húzd az egérrel (vagy ujjal) a modell forgatásához. Jól látszik a szürke <strong>köpeny</strong>, alatta a <strong>kitöltőanyag</strong>, és a kibújó, színes <strong>szigetelt erek</strong>, a végükön a csupasz rézvezetővel.',
              spec: { sheath: '#cbd0cc', fill: true, layout: 'round', cores: [{ color: 'brown' }, { color: 'blue' }, { color: 'pe' }] },
              caption: 'Háromeres köpenyes kábel (NYM-J jelleg): világosszürke köpeny, barna fázis, kék nulla, zöld-sárga védő.'
            }
          ]
        },
        {
          kicker: '1.1 · Rögzítsük',
          blocks: [
            { type: 'h', text: 'Párosítsd a fogalmakat!' },
            { type: 'p', text: 'Húzd (vagy kattintsd) a jobb oldali meghatározásokat a megfelelő fogalomhoz. A továbblépéshez mindet helyesen kell eltalálnod.' },
            {
              type: 'match', gate: true, leftLabel: 'Fogalom', rightLabel: 'Jelentése',
              pairs: [
                { left: 'Vezeték', right: '1 szigetelt ér, köpeny nélkül → csőbe, csatornába' },
                { left: 'Kábel', right: 'erek + köpeny → nem kell védőcső (hova fektethető: típusfüggő)' },
                { left: 'Ér', right: 'a vezető + a rá húzott érszigetelés' },
                { left: 'Köpeny', right: 'közös külső védőréteg az erek körül' }
              ]
            },
            { type: 'h3', text: 'És most sorold be a típusokat!' },
            {
              type: 'sort', gate: true,
              prompt: 'Húzd (vagy kattintsd) mindegyik típust a megfelelő csoportba — a köpeny léte dönt, nem az érszám!',
              bins: [{ id: 'v', label: 'VEZETÉK (köpeny nélkül)' }, { id: 'k', label: 'KÁBEL (van köpeny)' }],
              items: [
                { label: 'MCu', bin: 'v' }, { label: 'MKH', bin: 'v' }, { label: 'H05V-K', bin: 'v' },
                { label: 'NYM-J (MBCu)', bin: 'k' }, { label: 'NYY', bin: 'k' }, { label: 'MM-fal', bin: 'k' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          type: 'single', q: 'Mi dönti el, hogy egy termék vezeték vagy kábel?',
          options: [
            { t: 'A külső köpeny megléte', correct: true },
            { t: 'Az erek száma' },
            { t: 'A vezető anyaga (réz vagy alumínium)' },
            { t: 'A névleges feszültség' }
          ],
          explain: 'A választóvonal a köpeny: egyetlen szigetelőréteg (érszigetelés) → vezeték; érszigetelés + külső köpeny → kábel. Az érszám NEM dönt.'
        },
        {
          type: 'tf', q: 'A köpenyes kábelnek a köpeny ad mechanikai és nedvesség elleni védelmet, ezért a védelméhez nincs szüksége külön védőcsőre.', answer: true,
          explain: 'Igen — a köpeny maga véd. Hogy konkrétan hova fektethető (vakolat alá, kültér, föld), az viszont típusonként eltér: pl. földbe csak a földkábel (NYY/NAYY) való, vakolat alá cső nélkül az MM-fal.'
        },
        {
          type: 'single', q: 'Egy szigetelt rézszál, külső köpeny nélkül (pl. MCu). Ez:',
          options: [
            { t: 'Vezeték', correct: true },
            { t: 'Kábel' },
            { t: 'Földkábel' },
            { t: 'Árnyékolt kábel' }
          ],
          explain: 'Egy ér, köpeny nélkül = vezeték. Falba csak védőcsőben mehet.'
        },
        {
          type: 'multi', q: 'Melyek tartoznak egy KÁBEL szerkezetéhez? (több helyes is lehet)',
          options: [
            { t: 'Szigetelt erek', correct: true },
            { t: 'Külső köpeny', correct: true },
            { t: 'Kitöltőanyag', correct: true },
            { t: 'Kötelezően alumínium vezető' }
          ],
          explain: 'A kábel: szigetelt erek + (gyakran) kitöltőanyag + közös külső köpeny. A vezető lehet réz vagy alumínium — az anyag nem megkülönböztető jegy.'
        },
        {
          type: 'single', q: 'Miért hívja a köznyelv „kábelnek” az MBCu-t és az NYM-et?',
          options: [
            { t: 'Mert van köpenyük, így szerkezetileg kábelszerűek', correct: true },
            { t: 'Mert alumínium vezetőből készülnek, mint a földkábelek' },
            { t: 'Mert mindig közvetlenül a földbe fektetik őket' },
            { t: 'Mert nincs bennük zöld-sárga védővezető' }
          ],
          explain: 'A köpeny miatt szerkezetileg kábelszerűek, így a köznyelv és a katalógusok is „kábelnek” hívják őket.'
        }
      ]
    },

    /* ---------------- 1.2 ---------------- */
    {
      id: 'c2', code: '1.2', title: 'A vezető (ér) fajtái',
      blurb: 'Tömör, sodrott, finomsodrott — ettől függ a hajlékonyság, és ez jelenik meg a betűjelekben is.',
      pages: [
        {
          kicker: '1.2 · A vezető kialakítása',
          blocks: [
            { type: 'lead', text: 'A vezető <strong>rézből (Cu)</strong> vagy <strong>alumíniumból (Al)</strong> készül. A hivatalos megkülönböztetés azon múlik, hogy a vezető <em>egyetlen huzalból</em>, vagy <em>több elemi szálból</em> áll-e (IEC 60228 vezető-osztályok).' },
            {
              type: 'table',
              head: ['Kialakítás (IEC 60228)', 'Szabványos jel', 'Felépítés', 'Hol találkozol vele?'],
              rows: [
                ['Tömör / egyhuzalú (1. osztály)', '<code>-U</code> (re)', '1 db tömör (egyetlen elemi szál) — merev, formatartó, olcsó', 'MCu, MBCu, NYM — fix szerelés falban'],
                ['Sodrott (2. osztály)', '<code>-R</code> (rm)', 'kevés, vastagabb elemi szálból sodorva — kissé hajlítható', 'nagyobb keresztmetszetű fővezetékek, földkábelek'],
                ['Hajlékony / finomsodrott (5–6. osztály)', '<code>-K</code>, <code>-F</code>', 'sok vékony elemi szálból sodorva — nagyon hajlékony', 'MKH, MT, gumikábel — mozgó, hajlítgatott helyek']
              ],
              note: 'A „tömör” = <strong>egyhuzalú</strong> (egyetlen elemi szál); minden más több elemi szálból sodort. A <code>re</code> = kör tömör, <code>rm</code> = kör sodrott ér (a VDE-jelölésnél is előjön).'
            },
            { type: 'p', text: '<div style="background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:14px;padding:14px;margin:8px 0">' +
              '<div style="font-weight:600;color:#eaf1ff;margin-bottom:8px">Így néz ki a három kialakítás keresztmetszete (az elemi szálak száma a különbség):</div>' +
              '<svg viewBox="0 0 470 165" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">' +
              '<circle cx="80" cy="62" r="33" fill="none" stroke="#6f421f" stroke-width="9"/><circle cx="80" cy="62" r="25" fill="#c8772f" stroke="#a85f24" stroke-width="1.5"/>' +
              '<text x="80" y="125" fill="#dceafb" font-size="13" text-anchor="middle" font-weight="700">Tömör (-U)</text><text x="80" y="143" fill="#7e8eac" font-size="10.5" text-anchor="middle">1 elemi szál</text>' +
              '<g fill="#c8772f" stroke="#a85f24" stroke-width="1"><circle cx="235" cy="62" r="33" fill="none" stroke="#6f421f" stroke-width="9"/>' +
              '<circle cx="235" cy="62" r="9"/><circle cx="253" cy="62" r="9"/><circle cx="217" cy="62" r="9"/><circle cx="244" cy="46" r="9"/><circle cx="226" cy="46" r="9"/><circle cx="244" cy="78" r="9"/><circle cx="226" cy="78" r="9"/></g>' +
              '<text x="235" y="125" fill="#dceafb" font-size="13" text-anchor="middle" font-weight="700">Sodrott (-R)</text><text x="235" y="143" fill="#7e8eac" font-size="10.5" text-anchor="middle">kevés elemi szál</text>' +
              '<g fill="#e0a766" stroke="#a85f24" stroke-width="0.5"><circle cx="390" cy="62" r="33" fill="none" stroke="#6f421f" stroke-width="9"/>' +
              '<circle cx="390" cy="62" r="4"/><circle cx="398" cy="62" r="4"/><circle cx="394" cy="69" r="4"/><circle cx="386" cy="69" r="4"/><circle cx="382" cy="62" r="4"/><circle cx="386" cy="55" r="4"/><circle cx="394" cy="55" r="4"/>' +
              '<circle cx="406" cy="62" r="4"/><circle cx="404" cy="70" r="4"/><circle cx="398" cy="76" r="4"/><circle cx="390" cy="78" r="4"/><circle cx="382" cy="76" r="4"/><circle cx="376" cy="70" r="4"/><circle cx="374" cy="62" r="4"/><circle cx="376" cy="54" r="4"/><circle cx="382" cy="48" r="4"/><circle cx="390" cy="46" r="4"/><circle cx="398" cy="48" r="4"/><circle cx="404" cy="54" r="4"/></g>' +
              '<text x="390" y="125" fill="#dceafb" font-size="13" text-anchor="middle" font-weight="700">Finomsodrott (-K/-F)</text><text x="390" y="143" fill="#7e8eac" font-size="10.5" text-anchor="middle">sok vékony elemi szál</text>' +
              '</svg></div>' }
          ]
        },
        {
          kicker: '1.2 · Aranyszabály',
          blocks: [
            {
              type: 'callout', variant: 'danger', title: 'Aranyszabály — érvéghüvely!',
              html: '<strong>Minden NEM tömör (elemi szálakból álló, azaz sodrott vagy finomsodrott) eret</strong> csavaros kötésbe csak <strong>érvéghüvellyel</strong> szabad bekötni — különben a szálak szétnyomódnak, a kötés meglazul és <strong>melegszik</strong> (tűzveszély). A tömör (egyhuzalú) ér mehet hüvely nélkül.'
            },
            {
              type: 'callout', variant: 'info', title: 'WAGO — mikor mi kell?',
              html: 'A <strong>rugós (WAGO) gyorskötő</strong> (pl. 221) elemi szálas eret is fogad <strong>érvéghüvely nélkül</strong>. <strong>WAGO doboz</strong> a <em>bontható</em> (újra nyitható) kötésekhez kell, hogy a kötés hozzáférhető és ellenőrizhető maradjon. A teljesen beépített, <em>nem bontható</em> kötés (pl. gyári forrasztott/préselt) nem igényel kötődobozt. WAGO-pasztát alumínium érhez vagy nagy keresztmetszetnél használnak az oxidáció/kontaktus miatt.'
            },
            { type: 'h', text: 'Párosítsd a kialakítást a tipikus felhasználással!' },
            {
              type: 'match', gate: true, leftLabel: 'Kialakítás', rightLabel: 'Tipikus felhasználás',
              pairs: [
                { left: 'Tömör (-U / re)', right: 'fix szerelés falban: MCu, MBCu, NYM' },
                { left: 'Sodrott (-R / rm)', right: 'nagy keresztmetszetű fővezeték, földkábel' },
                { left: 'Finomsodrott (-K / -F)', right: 'mozgó, rázkódó hely: MKH, MT, gumikábel' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          type: 'single', q: 'Melyik kialakítás a legmerevebb, formatartó és olcsó?',
          options: [{ t: 'Tömör (-U / re)', correct: true }, { t: 'Sodrott (-R / rm)' }, { t: 'Finomsodrott (-K / -F)' }],
          explain: 'A tömör ér egyetlen vastag szál — merev, formatartó, olcsó; fix falba-szereléshez ideális (MCu, NYM).'
        },
        {
          type: 'single', q: 'Mit jelez a -K vagy -F betű az ér kialakításában?',
          options: [
            { t: 'Finomsodrott, nagyon hajlékony ér', correct: true },
            { t: 'Tömör, egyhuzalú merev ér' }, { t: 'Alumínium vezető anyag' }, { t: 'Gumi érszigetelés' }
          ],
          explain: 'A -K (finomsodrott, fix szereléshez) és -F (hajlékony, mozgóhoz) sok vékony szálból áll — nagyon hajlékony (MKH, MT, gumikábel).'
        },
        {
          type: 'tf', q: 'Finomsodrott eret csavaros kötésbe érvéghüvely nélkül is biztonságos bekötni.', answer: false,
          explain: 'Nem! Érvéghüvely nélkül a szálak szétnyomódnak, a kötés meglazul és melegszik. Csavaros kötésbe csak érvéghüvellyel.'
        },
        {
          type: 'single', q: 'Milyen anyagból készülhet a vezető (ér)?',
          options: [
            { t: 'Rézből (Cu) vagy alumíniumból (Al)', correct: true },
            { t: 'Kizárólag rézből (Cu)' }, { t: 'Kizárólag alumíniumból (Al)' }, { t: 'Acélból vagy vasból' }
          ],
          explain: 'A vezető réz (Cu) vagy alumínium (Al) lehet. Ez is megjelenik a jelölésben (pl. NAYY: az A = alumínium).'
        }
      ]
    },

    /* ---------------- 1.3 ---------------- */
    {
      id: 'c3', code: '1.3', title: 'Érszínek — a kötelező színkód',
      blurb: 'Barna/fekete/szürke = fázis, kék = nulla (N), zöld-sárga = védő (PE). Régi hálózatnál mindig mérj!',
      pages: [
        {
          kicker: '1.3 · A színkód',
          blocks: [
            { type: 'lead', text: 'Az érszínek nem dekorációk — <strong>kötelező, szabványos kódot</strong> hordoznak. Az élet múlhat azon, hogy felismered őket.' },
            { type: 'figure', img: 'images/erszinek.png', caption: 'A szabványos érszínek és jelentésük.', alt: 'Érszínek' },
            { type: 'callout', variant: 'tip', title: 'Fázis (L1, L2, L3)', html: '<strong>barna</strong>, <strong>fekete</strong> és <strong>szürke</strong> — a fázisvezetők színei.' },
            { type: 'callout', variant: 'info', title: 'Nulla (N)', html: '<strong>kék</strong> — alapból a nullavezető (N). Csak akkor használható másra (pl. fázis), ha az áramkörben <strong>nincs nulla</strong>, és a végeken <strong>egyértelműen átjelölik</strong> (pl. színes gyűrűvel/szalaggal).' },
            { type: 'callout', variant: 'rule', title: 'Védővezető (PE)', html: '<strong>zöld-sárga</strong> — kizárólag védővezető (PE). <strong>Soha</strong> ne használd fázisnak vagy nullának!' }
          ]
        },
        {
          kicker: '1.3 · Felfedező',
          blocks: [
            { type: 'h', text: 'Fedezd fel az ereket!' },
            {
              type: 'xsec', gate: true, img: 'images/erszinek.png',
              intro: 'Kattints sorban minden érre (vagy a lista soraira). Mindegyik egy-egy szabványos színt és funkciót takar — mind az öt rétegét fel kell fedezned.',
              layers: [
                { name: 'Barna — fázis (L1)', desc: 'Fázisvezető. Feszültség alatt áll!', color: '#6f421f', hot: { x: 13.5, y: 41, r: 7 } },
                { name: 'Fekete — fázis (L2)', desc: 'Szintén fázis. Régi hálózatban a fekete lehetett nulla is — mérj!', color: '#1b1b1b', hot: { x: 31.7, y: 41, r: 7 } },
                { name: 'Szürke — fázis (L3)', desc: 'A harmadik fázis színe háromfázisú rendszerben.', color: '#9aa1a8', hot: { x: 50, y: 41, r: 7 } },
                { name: 'Kék — nulla (N)', desc: 'Nullavezető. Kizárólag erre — másra tilos!', color: '#1f6fd0', hot: { x: 68.3, y: 41, r: 7 } },
                { name: 'Zöld-sárga — védő (PE)', desc: 'Védővezető. Soha nem fázis vagy nulla!', color: '#1f9d3f', hot: { x: 86.5, y: 41, r: 7 } }
              ]
            }
          ]
        },
        {
          kicker: '1.3 · Vigyázz a régivel',
          blocks: [
            {
              type: 'callout', variant: 'warn', title: 'Régi szerelés: ne a színnek higgy!',
              html: 'Régi szerelésekben más a kód: a <strong>fekete</strong> és a <strong>szürke</strong> régen lehetett <strong>nulla</strong> is, a fázis akár piros, a védő zöld vagy szürke. <strong>Régi hálózatnál mindig mérj</strong> — ne a színre hagyatkozz! (Csak a zöld-sárga jelentése állandó: mindig PE.)'
            },
            { type: 'h', text: 'Párosítsd a színt a funkcióval!' },
            {
              type: 'match', gate: true, leftLabel: 'Érszín', rightLabel: 'Funkció',
              pairs: [
                { left: 'Kék', right: 'Nulla (N) — alapból (átjelölve lehet kivétel)' },
                { left: 'Zöld-sárga', right: 'Védővezető (PE) — kizárólag erre' },
                { left: 'Barna', right: 'Fázis (L1)' },
                { left: 'Szürke', right: 'Fázis (L3)' }
              ]
            },
            { type: 'h3', text: 'Színezd be az NYM-J 5 erét a szabvány szerint!' },
            {
              type: 'coloring', gate: true,
              intro: 'Koppints egy érre (a felirat a funkciója), majd válaszd ki a helyes szabványos színt a palettán.',
              cores: [
                { role: 'Fázis (L1)', correct: 'brown' },
                { role: 'Fázis (L2)', correct: 'black' },
                { role: 'Fázis (L3)', correct: 'grey' },
                { role: 'Nulla (N)', correct: 'blue' },
                { role: 'Védő (PE)', correct: 'pe' }
              ],
              palette: [
                { id: 'brown', label: 'barna', css: '#6f421f' },
                { id: 'black', label: 'fekete', css: '#1b1b1b' },
                { id: 'grey', label: 'szürke', css: '#9aa1a8' },
                { id: 'blue', label: 'kék', css: '#1f6fd0' },
                { id: 'pe', label: 'zöld-sárga', css: 'repeating-linear-gradient(45deg,#1f9d3f 0 6px,#f2d21a 6px 12px)' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          type: 'single', q: 'Milyen színű KIZÁRÓLAG a védővezető (PE)?',
          options: [{ t: 'Zöld-sárga', correct: true }, { t: 'Kék' }, { t: 'Barna' }, { t: 'Fekete' }],
          explain: 'A zöld-sárga szín kizárólag a védővezetőé (PE). Soha nem használható fázisnak vagy nullának.'
        },
        {
          type: 'single', q: 'Mit jelöl a kék ér egy korszerű szerelésben?',
          options: [{ t: 'Nulla (N)', correct: true }, { t: 'Fázis' }, { t: 'Védővezető' }, { t: 'Vezérlőjel' }],
          explain: 'A kék a nullavezető (N) színe. Másra használni tilos.'
        },
        {
          type: 'multi', q: 'Mely színek jelölhetnek FÁZIST? (több is)',
          options: [{ t: 'Barna', correct: true }, { t: 'Fekete', correct: true }, { t: 'Szürke', correct: true }, { t: 'Zöld-sárga' }],
          explain: 'A fázisok színei: barna (L1), fekete (L2), szürke (L3). A zöld-sárga soha nem fázis — az a védővezető.'
        },
        {
          type: 'tf', q: 'Régi hálózatnál is elég a színre hagyatkozni — nem kell mérni.', answer: false,
          explain: 'Soha! Régi szerelésben a színkód eltérhet (piros fázis, fekete nulla stb.). Régi hálózatnál mindig mérj.'
        }
      ]
    }
  ],

  /* ---------------- MODULKVÍZ ---------------- */
  quiz: [
    {
      type: 'single', q: 'A vezeték és a kábel közötti szerkezeti határvonal:',
      options: [
        { t: 'a külső köpeny megléte', correct: true },
        { t: 'az erek száma' }, { t: 'a feszültségszint' }, { t: 'a vezető anyaga' }
      ],
      explain: 'Egy szigetelőréteg → vezeték; érszigetelés + külső köpeny → kábel.'
    },
    {
      type: 'single', q: 'Melyik ér a legmerevebb?',
      options: [{ t: 'tömör (-U / re)', correct: true }, { t: 'finomsodrott (-K)' }, { t: 'hajlékony (-F)' }],
      explain: 'A tömör (egy vastag szál) a legmerevebb, formatartó — fix falba szereléshez.'
    },
    {
      type: 'single', q: 'Finomsodrott ér csavaros kötésbe — mire van szükség?',
      options: [{ t: 'érvéghüvelyre', correct: true }, { t: 'semmire' }, { t: 'forrasztásra mindig' }, { t: 'alumínium saruzásra' }],
      explain: 'Érvéghüvely, hogy a szálak ne nyomódjanak szét és a kötés ne melegedjen.'
    },
    {
      type: 'single', q: 'A zöld-sárga ér funkciója:',
      options: [{ t: 'védővezető (PE)', correct: true }, { t: 'nulla (N)' }, { t: 'fázis (L)' }, { t: 'vezérlőjel' }],
      explain: 'Zöld-sárga = PE, kizárólag védővezető.'
    },
    {
      type: 'single', q: 'A kék ér:',
      options: [{ t: 'nulla (N), másra tilos', correct: true }, { t: 'fázis' }, { t: 'védővezető' }],
      explain: 'Kék = nulla (N). Más célra nem használható.'
    },
    {
      type: 'tf', q: 'Az NYM köpenyes kábelt a köznyelv joggal hívja „kábelnek”.', answer: true,
      explain: 'Igen, mert van köpenye — szerkezetileg kábelszerű, a katalógusok is így kezelik.'
    },
    {
      type: 'multi', q: 'Melyik IGAZ a régi hálózatok érszíneire?',
      options: [
        { t: 'Eltérhetnek a mai kódtól (pl. piros fázis)', correct: true },
        { t: 'Mindig mérni kell, nem a színnek hinni', correct: true },
        { t: 'Mindig megegyeznek a mai szabvánnyal' }
      ],
      explain: 'Régi szerelésnél a színek mások lehetnek — mindig mérj.'
    }
  ]
});
