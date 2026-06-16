/* =====================================================================
   5. MODUL — KÁBELEK ÉS KÖPENYES SZERELVÉNYVEZETÉKEK
   ===================================================================== */
COURSE.addModule({
  id: 'm5',
  title: 'Kábelek',
  subtitle: 'Teherbíró köpennyel — típustól függően falon kívül, vakolat alá vagy a földbe. MM-fal, MBCu/NYM, NYY, NYCY, NAYY, NYCWY, SZAMKAM, SzRMKVM, vezérlőkábelek.',
  icon: 'layers',
  intro: 'Ezeknél már van teherbíró külső köpeny, ezért a védelmükhöz nem kell külön védőcső. Hogy hova fektethetők (falon kívül, vakolat alá, kültér, föld), az típusonként változó — sorra vesszük a falba valókat, a föld- és betápkábeleket, az árnyékolt/páncélos típusokat és a vezérlőkábeleket.',
  badge: { id: 'm5', name: 'A Kábelek Mestere', desc: 'Végigvetted a kábeleket és köpenyes vezetékeket.', icon: 'layers' },

  chapters: [
    /* ---------------- 5.1 MM-fal ---------------- */
    {
      id: 'c1', code: '5.1', title: 'MM-fal (MMCu) — a LAPOS falkábel',
      blurb: 'Lapos, fehér, vakolat alá védőcső nélkül. Kültérre és földbe NEM! Panel/betonfalnál sekély horony elég.',
      pages: [
        {
          kicker: '5.1 · MM-fal (lapos)',
          blocks: [
            { type: 'lead', text: 'Az <em>MM-fal</em> 2–3 tömör eret fog össze lapos szalagformában, vékony fehér PVC külső réteggel — vakolat alá való, védőcső nélkül.' },
            {
              type: 'cable3d', h: '3D modell', intro: 'Figyeld a LAPOS, szalagszerű formát — ettől fér el sekély horonyban.',
              spec: { sheath: '#eef0f2', layout: 'flat', cores: [{ color: 'brown' }, { color: 'blue' }, { color: 'pe' }] },
              caption: 'MM-fal — 3 tömör ér egymás mellett, lapos fehér PVC köpenyben.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'MM-fal / MMCu — dupla műanyag szigetelésű, falba helyezhető <strong>lapos kábel</strong> (a külső fehér réteg a köpeny → ezért kábel, nem vezeték)'],
                ['Szabványos megfelelő', 'YDYt / YDYtzo / YMSteg-J / NYIFY jellegű lapos installációs (fal)kábel · 300/500 V'],
                ['Felépítés', '2–3 tömör réz ér egymás mellett, PVC érszigetelés + vékony fehér PVC külső réteg → lapos szalagforma; 3 eresnél a zöld-sárga PE kissé távolabb fut, hogy a rögzítőszeg ne sértse'],
                ['Hol használjuk', 'vakolat alá <strong>védőcső nélkül</strong>, falazatba/betonba ágyazva (vibrált/csömöszölt beton kivétel); panel- és betonfalas épületek kedvelt vezetéke, mert sekély horony is elég; 2×1,5 / 3×1,5 / 3×2,5'],
                ['Extra infó', '<strong>Kültéren és FÖLDBEN NEM használható!</strong> Színe jellemzően fehér. Hátránya: beépítve csak bontással javítható — új munkánál sokan a védőcső + MCu megoldást ajánlják. Hidegben a PVC törékeny — fektetés +5 °C felett.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=MM-fal+MMCu+YDYt+vezet%C3%A9k" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '5.1 · Lapos vs kör',
          blocks: [
            { type: 'figure', img: 'images/mmfal.png', caption: 'MM-fal keresztmetszete — lapos szalag, 3 tömör érrel.', alt: 'MM-fal keresztmetszet' },
            { type: 'callout', variant: 'warn', title: 'Ne keverd az MBCu-val!', html: 'Az <strong>MM-fal LAPOS és fehér</strong>; az MBCu KÖR és világosszürke. Mindkettő vakolat alá való kábel, de más termék.' },
            { type: 'callout', variant: 'info', title: 'MM-fal ≠ MTL!', html: 'Mindkettő „lapos”, de nem ugyanaz: az <strong>MM-fal</strong> falba vakolható, <strong>tömör erű installációs kábel</strong> (rögzített szerelés). Az <strong>MTL</strong> (H03VVH2-F) ezzel szemben <strong>finomsodrott lapos zsinór</strong> lámpákhoz, kis készülékekhez — mozgó/csatlakozó funkció, NEM falba!' },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ az MM-falról?',
              items: [{
                q: 'Egy igaz állítás a lapos MM-falról!',
                ctx: 'Forma, beépítés, korlátok.',
                options: [
                  { label: 'Lapos, fehér; vakolat alá VÉDŐCSŐ NÉLKÜL — sekély horony is elég', correct: true, why: 'Pontosan: ez az egyetlen, amit kifejezetten vakolat alá, cső nélkül terveztek; a lapos forma miatt sekély horony elég.' },
                  { label: 'Földbe és kültérre is fektethető', why: 'Nem: az MM-fal kültéren és földben NEM használható — csak beltéri vakolat alá.' },
                  { label: 'Kör keresztmetszetű, szürke — ez az NYM', why: 'Nem: az a leírás az MBCu (NYM). Az MM-fal lapos és fehér.' },
                  { label: 'Lapos zsinór lámpákhoz — ez az MTL', why: 'Nem: az MTL finomsodrott lapos zsinór (mozgó). Az MM-fal tömör erű, falba vakolható kábel.' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Milyen formájú és színű az MM-fal?', options: [{ t: 'lapos, fehér', correct: true }, { t: 'kör, világosszürke' }, { t: 'kör, fekete' }, { t: 'lapos, fekete' }], explain: 'MM-fal = LAPOS, fehér. (Az MBCu KÖR, világosszürke.)' },
        { type: 'tf', q: 'Az MM-fal földbe és kültérre is használható.', answer: false, explain: 'Nem! Kültéren és földben NEM használható — csak vakolat alá, beltér.' },
        { type: 'single', q: 'Miért kedvelt panel/betonfalon?', options: [{ t: 'mert lapos, így sekély horony is elég', correct: true }, { t: 'mert közvetlenül földbe is fektethető' }, { t: 'mert kifejezetten hőálló kivitelű' }, { t: 'mert fémárnyékolása is van' }], explain: 'A lapos szalagforma miatt sekély horonyba is befér.' }
      ]
    },

    /* ---------------- 5.2 MBCu = NYM-J ---------------- */
    {
      id: 'c2', code: '5.2', title: 'MBCu = NYM-J — a KÖR szerelvénykábel',
      blurb: 'A leggyakoribb szerelvénykábel: kör, világosszürke. Vakolat alá ÉS falon kívül, nedves beltér is. 5 eres: sütő, főzőlap, motor.',
      pages: [
        {
          kicker: '5.2 · MBCu (NYM-J)',
          blocks: [
            { type: 'lead', text: 'Az <em>MBCu</em> (= NYM-J) a magyar otthonok leggyakoribb szerelvénykábele: kör keresztmetszetű, szürke köpennyel.' },
            {
              type: 'cable3d', h: '3D modell',
              spec: { sheath: '#cbd0cc', fill: true, layout: 'round', cores: [{ color: 'brown' }, { color: 'blue' }, { color: 'pe' }] },
              caption: 'MBCu (NYM-J 3×1,5) — VILÁGOSSZÜRKE (RAL 7035) köpeny, kitöltőanyag, 3 tömör ér. Húzd a forgatáshoz.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'MBCu — műanyag szigetelésű, Burkolt (köpenyes), tömör rézvezetékes „kábelszerű vezeték”'],
                ['Szabványos név', '<code>NYM-J</code> / <code>NYM-O</code> · 300/500 V · VDE 0250 — a két név ugyanaz a termék: „MBCu (NYM-J)”'],
                ['Felépítés', '2–5 PVC szigetelésű ér + övréteg/kitöltőanyag + <strong>világosszürke (RAL 7035)</strong> PVC köpeny, kör forma; 1,5–10 mm²-ig tömör (egyhuzalú) erek (re), 16 mm²-től több elemi szálból sodrott (rm)'],
                ['Hol használjuk', 'a leggyakoribb szerelvénykábel: vakolat alá ÉS falon kívül (pince, garázs, műhely, kábelcsatorna), falazatba/betonba ágyazva; száraz, nyirkos és nedves <strong>BELTÉR</strong>; 5 eres: sütő, főzőlap, motor fix bekötés, mellékelosztó'],
                ['Extra infó', 'Kültéren csak közvetlen napsugárzástól védve; <strong>földbe csak védőcsőben!</strong> NYM-J = van zöld-sárga ér, NYM-O = nincs. Németül „Mantelleitung” = köpenyes vezeték — innen az M betű.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=NYM-J+MBCu+k%C3%A1bel" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '5.2 · Fedezd fel a rétegeket',
          blocks: [
            {
              type: 'xsec', gate: true, img: 'images/mbcu.png',
              intro: 'Az MBCu keresztmetszete. Kattints sorban minden rétegre — mind az ötöt fel kell fedezned.',
              layers: [
                { name: 'Világosszürke PVC köpeny (RAL 7035)', desc: 'A külső védőköpeny — ettől kábel. Falon kívül és vakolat alá is használják.', color: '#cbd0cc', hot: { x: 50, y: 7, r: 6 } },
                { name: 'Kitöltőanyag / övréteg', desc: 'A köpeny alatt kitölti az erek közti hézagot, kör formát ad.', color: '#e9e3d4', hot: { x: 26, y: 30, r: 6 } },
                { name: 'Barna ér — fázis', desc: 'Tömör réz vezető + barna PVC szigetelés (L).', color: '#6f421f', hot: { x: 50, y: 30, r: 8 } },
                { name: 'Kék ér — nulla (N)', desc: 'A nullavezető — kék szigetelés.', color: '#1f6fd0', hot: { x: 33, y: 61, r: 8 } },
                { name: 'Zöld-sárga ér — védő (PE)', desc: 'A védővezető — NYM-J esetén mindig van.', color: '#1f9d3f', hot: { x: 63, y: 60, r: 8 } }
              ]
            },
            { type: 'callout', variant: 'info', title: 'NYM-J 5×… ', html: '3 fázis + N + PE: sütő, főzőlap, motor fix bekötés, mellékelosztó.' },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ az MBCu (NYM-J)-ról?',
              items: [{
                q: 'Egy igaz állítás a leggyakoribb szerelvénykábelről!',
                ctx: 'Forma, szín, hol használható.',
                options: [
                  { label: 'KÖR, világosszürke köpenyes kábel; falon kívül ÉS vakolat alá, nedves beltér is', correct: true, why: 'Pontosan: a leggyakoribb beltéri szerelvénykábel; 5 eres változata sütő/főzőlap/motor.' },
                  { label: 'Lapos és fehér, csak vakolat alá', why: 'Nem: az a leírás az MM-falra illik. Az MBCu kör és világosszürke.' },
                  { label: 'Közvetlenül a földbe fektethető védőcső nélkül', why: 'Nem: földbe csak védőcsőben mehet. Közvetlen földi fektetésre az NYY való.' },
                  { label: 'Köpeny nélküli vezeték, ezért cső kell falba', why: 'Nem: az MBCu köpenyes (= kábel), a köpeny adja a védelmet.' }
                ]
              }]
            },
            { type: 'h3', text: 'Építsd fel az MBCu (NYM-J) keresztmetszetét — belülről kifelé!' },
            {
              type: 'builder', gate: true,
              intro: 'Koppints a rétegekre a helyes sorrendben, a vezetőtől a köpenyig. Minden helyes lépésnél nő a kábel.',
              layers: [
                { name: 'réz vezető', css: '#c8772f' },
                { name: 'PVC érszigetelés', css: '#6f421f' },
                { name: 'kitöltőanyag / övréteg', css: '#e9e3d4' },
                { name: 'világosszürke PVC köpeny', css: '#cbd0cc' }
              ]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'MBCu = ? és milyen a formája/színe?', options: [{ t: 'NYM-J — kör, világosszürke', correct: true }, { t: 'YDYt — lapos, fehér' }, { t: 'NYY — kör, fekete' }, { t: 'NAYY — alu' }], explain: 'MBCu = NYM-J, KÖR keresztmetszetű, világosszürke (RAL 7035) köpeny.' },
        { type: 'single', q: 'Hogyan mehet az MBCu a földbe?', options: [{ t: 'csak védőcsőben', correct: true }, { t: 'közvetlenül, homokágyba' }, { t: 'sehogy' }, { t: 'jelzőszalaggal, cső nélkül' }], explain: 'Beltéri kábel; földbe csak védőcsőben, kültéren napfénytől védve.' },
        { type: 'single', q: 'Mit jelent a -J az NYM-J-ben?', options: [{ t: 'van zöld-sárga védőér', correct: true }, { t: 'nincs védőér' }, { t: 'alumínium' }, { t: 'lapos' }], explain: 'NYM-J = van zöld-sárga, NYM-O = nincs.' },
        { type: 'single', q: 'Mire való az 5 eres NYM-J?', options: [{ t: 'sütő, főzőlap, motor fix bekötése', correct: true }, { t: 'csengő és kaputelefon jelei' }, { t: 'antenna és koax jel' }, { t: 'kerti földkábel-fektetés' }], explain: '5 ér = 3 fázis + nulla + védő → háromfázisú fogyasztók (sütő, főzőlap, motor) fix bekötése.' }
      ]
    },

    /* ---------------- 5.3 NYY-J ---------------- */
    {
      id: 'c3', code: '5.3', title: 'NYY-J — réz földkábel',
      blurb: 'Vastag fekete PVC köpeny, 0,6/1 kV. Földbe ~70–80 cm mélyre, homokágyba, jelzőszalaggal.',
      pages: [
        {
          kicker: '5.3 · NYY-J (réz földkábel)',
          blocks: [
            { type: 'lead', text: 'Az <em>NYY</em> a klasszikus réz földkábel: vastag fekete PVC köpeny, tartós fektetésre — földbe, vízbe, szabadba.' },
            {
              type: 'cable3d', h: '3D modell',
              spec: { sheath: '#1b1b1b', fill: true, layout: 'round', cores: [{ color: 'brown' }, { color: 'black' }, { color: 'grey' }, { color: 'blue' }, { color: 'pe' }] },
              caption: 'NYY-J 5×… — vastag fekete köpeny, kitöltőanyag, réz erek.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'réz földkábel (külön magyar betűjel nem terjedt el — mindenki NYY-nak hívja)'],
                ['Szabványos név', '<code>NYY-J</code> / <code>NYY-O</code> · VDE 0276 · 0,6/1 kV'],
                ['Felépítés', 'egy- vagy többeres, kerek vagy szektor alakú tömör/sodrott réz ér + PVC érszigetelés + vastag fekete PVC köpeny (típus- és méterjelzéssel)'],
                ['Hol használjuk', 'tartós fektetésű energiakábel bel- és kültéren, kábelcsatornában, <strong>FÖLDBEN</strong>, vízben, szabadban, ha későbbi sérülés nem várható; kerti világítás, kapumotor, melléképület betáp'],
                ['Extra infó', 'Földbe: kb. <strong>70–80 cm mélyre, homokágyba, fölé jelzőszalag</strong>! Tesztfeszültség 4 kV. Hőtartomány: −5…+50 °C mozgatva, −30…+70 °C rögzítve. NYY-J = van zöld-sárga, NYY-O = nincs.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=NYY-J+f%C3%B6ldk%C3%A1bel" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '5.3 · Fektetés',
          blocks: [
            { type: 'figure', img: 'images/nyy.png', caption: 'NYY-J keresztmetszete — vastag fekete köpeny, réz erek.', alt: 'NYY keresztmetszet' },
            { type: 'callout', variant: 'rule', title: 'Földbe fektetés', html: 'Kb. <strong>70–80 cm mély</strong>, homokágyba, fölé <strong>jelzőszalag</strong>. Így véd a későbbi ásás ellen.' },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ az NYY-ról?',
              items: [{
                q: 'Egy igaz állítás a réz földkábelről!',
                ctx: 'Köpeny, feszültség, fektetés.',
                options: [
                  { label: 'Vastag fekete PVC köpeny, 0,6/1 kV; földbe ~70–80 cm mély, homokágy + jelzőszalag', correct: true, why: 'Pontosan: tartós földi/kültéri energiakábel; a köpeny és a fektetés védi.' },
                  { label: 'Világosszürke köpeny, 300/500 V, beltéri szerelvénykábel', why: 'Nem: az az MBCu (NYM). Az NYY fekete, 0,6/1 kV, földkábel.' },
                  { label: 'Lapos, fehér, vakolat alá való', why: 'Nem: az az MM-fal. Az NYY kör, vastag fekete köpenyű földkábel.' },
                  { label: 'Hőálló +110 °C-ig, kazánhoz', why: 'Nem: az a H07G. Az NYY hőtartománya jóval szűkebb (rögzítve −30…+70 °C).' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Milyen mélyre fektetjük az NYY földkábelt?', options: [{ t: '~70–80 cm, homokágyba, jelzőszalaggal', correct: true }, { t: '~10 cm-re, közvetlenül a földbe' }, { t: 'a felszínre, takarás nélkül' }, { t: 'kb. 3 méter mélyre, betonba' }], explain: 'Kb. 70–80 cm mély, homokágy + jelzőszalag.' },
        { type: 'single', q: 'Mi az NYY névleges feszültsége?', options: [{ t: '0,6/1 kV', correct: true }, { t: '300/500 V' }, { t: '450/750 V' }, { t: '300/300 V' }], explain: 'A földkábelek (NYY, NAYY) 0,6/1 kV-osak.' },
        { type: 'tf', q: 'Az NYY-J tartalmaz zöld-sárga védőeret.', answer: true, explain: 'Igen, -J = van zöld-sárga; -O = nincs.' }
      ]
    },

    /* ---------------- 5.4 NYCY ---------------- */
    {
      id: 'c4', code: '5.4', title: 'NYCY — árnyékolt réz földkábel',
      blurb: 'A köpeny alatt koncentrikus rézréteg: egyszerre mechanikai ÉS elektromos (árnyékoló) védelem.',
      pages: [
        {
          kicker: '5.4 · NYCY (koncentrikus)',
          blocks: [
            { type: 'lead', text: 'Az <em>NYCY</em> az NYY árnyékolt változata: az erek köré a köpeny alatt koncentrikus rézréteg kerül.' },
            {
              type: 'cable3d', h: '3D modell', intro: 'A lépcsőzetes metszeten kívülről befelé: fekete köpeny → <strong>koncentrikus rézréteg</strong> (rézszínű gyűrű) → kitöltőanyag → 4 szigetelt ér.',
              spec: { sheath: '#1b1b1b', fill: true, armor: 'concentric', layout: 'round', cores: [{ color: 'brown' }, { color: 'black' }, { color: 'grey' }, { color: 'blue' }] },
              caption: 'NYCY — 4 réz ér + a köpeny alatt körben futó koncentrikus rézréteg (PEN/árnyékolás).'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'árnyékolt réz földkábel'],
                ['Szabványos név', '<code>NYCY</code> · VDE 0276 · 0,6/1 kV'],
                ['Felépítés', 'merev réz erek + PVC érszigetelés + övréteg + köpeny; az erek köré koncentrikusan rézszál/rézszalag réteg a köpeny alatt — egyszerre mechanikai ÉS elektromos (árnyékoló) védelem'],
                ['Hol használjuk', 'energiakábelként bel- és kültéren, FÖLDBEN, vízben, kábelcsatornában, szabadban; ott, ahol árnyékolás/védővezető-funkció is kell'],
                ['Extra infó', 'A koncentrikus rézréteg PEN/védő funkciót is elláthat, és véd a mechanikai sérülés ellen. Tesztfeszültség 4 kV. Különbség az NYCWY-tól: ott a koncentrikus vezető <strong>hullámosan</strong> fektetett (W = wellig), itt egyenletes.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=NYCY+k%C3%A1bel" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '5.4 · NYCY vs NYCWY',
          blocks: [
            { type: 'figure', img: 'images/nycy.png', caption: 'NYCY — koncentrikus rézréteg a köpeny alatt.', alt: 'NYCY keresztmetszet' },
            {
              type: 'match', gate: true, leftLabel: 'Jellemző', rightLabel: 'NYCY',
              pairs: [
                { left: 'Koncentrikus vezető fektetése', right: 'egyenletes (nem hullámos)' },
                { left: 'A rézréteg funkciója', right: 'mechanikai + elektromos (árnyékoló) védelem, PEN' },
                { left: 'Feszültség', right: '0,6/1 kV (VDE 0276)' }
              ]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mikor választanál NYCY-t a sima NYY földkábel helyett?', options: [{ t: 'ha árnyékolás / védő(PEN)-funkció is kell', correct: true }, { t: 'ha olcsóbb megoldás kell' }, { t: 'ha lapos kábel kell' }, { t: 'ha hőállóság kell +110 °C-ig' }], explain: 'Az NYCY koncentrikus rézrétege árnyékolást és PEN-funkciót ad — ezért választod, ha ez is követelmény. Egyébként a sima NYY elég és olcsóbb.' },
        { type: 'single', q: 'Mi a különbség az NYCY és az NYCWY között?', options: [{ t: 'a koncentrikus vezető: NYCWY-nál hullámos, NYCY-nál egyenletes', correct: true }, { t: 'NYCY alumínium, NYCWY réz erű' }, { t: 'semmi, csak a gyártó más' }, { t: 'NYCY beltéri, NYCWY gyengeáramú' }], explain: 'A W = wellig (hullámos) fektetést jelöl az NYCWY-nál.' }
      ]
    },

    /* ---------------- 5.5 NAYY ---------------- */
    {
      id: 'c5', code: '5.5', title: 'NAYY — alumínium földkábel (a klasszikus betáp)',
      blurb: 'Családi ház betáplálása az utcáról a mérőig — tipikusan NAYY-J 4×16. Az alu kúszik: kötéseket utánhúzni!',
      pages: [
        {
          kicker: '5.5 · NAYY (alu betáp)',
          blocks: [
            { type: 'lead', text: 'Az <em>NAYY</em> az NYY alumíniumos rokona — a klasszikus háztartási betápkábel az utcai hálózattól a mérőhelyig.' },
            {
              type: 'cable3d', h: '3D modell', intro: 'A nagyobb keresztmetszetű alumínium erek <strong>szektor (pizzaszelet) alakúak</strong> — így jobban kitöltik a kör keresztmetszetet. Ezüstös szín = alumínium.',
              spec: { sheath: '#1b1b1b', fill: true, coreShape: 'sector', layout: 'round', cores: [{ color: 'brown', conductor: 'al' }, { color: 'black', conductor: 'al' }, { color: 'grey', conductor: 'al' }, { color: 'blue', conductor: 'al' }] },
              caption: 'NAYY-J 4×16 — szektor alakú alumínium erek, fekete köpeny.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'alumínium földkábel (régi magyar jelölésben pl. AYY jellegű)'],
                ['Szabványos név', '<code>NAYY-J</code> / <code>NAYY-O</code> · VDE 0276 · 0,6/1 kV'],
                ['Felépítés', 'alumínium erek (nagyobb méretben szektor/cikk alakúak) + PVC + fekete köpeny'],
                ['Hol használjuk', 'családi ház betáplálása az utcai hálózatról a mérőhelyig: tipikusan <strong>NAYY-J 4×16</strong>; nagyobb teljesítményhez 4×25'],
                ['Extra infó', 'Az alumínium „<strong>kúszik</strong>”: a kötéseket idővel <strong>után kell húzni</strong>, réz–alu átmenethez bimetall saru / érintkezési paszta kell. Háztartási betápnál az alu minimum <strong>16 mm²</strong>. Olcsóbb, mint a réz — ezért szereti a szolgáltató.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=NAYY+alumínium+f%C3%B6ldk%C3%A1bel" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '5.5 · Az alumínium buktatói',
          blocks: [
            { type: 'figure', img: 'images/nayy.png', caption: 'NAYY keresztmetszete — alumínium (gyakran szektor alakú) erek.', alt: 'NAYY keresztmetszet' },
            { type: 'callout', variant: 'danger', title: 'Az alu kúszik!', html: 'Az alumíniumkötéseket idővel <strong>után kell húzni</strong>; réz–alu átmenethez bimetall saru / érintkezési paszta kell. Háztartási betápnál az alu min. 16 mm².' },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ a NAYY-ról?',
              items: [{
                q: 'Egy igaz állítás az alumínium betápkábelről!',
                ctx: 'Vezető, méret, karbantartás.',
                options: [
                  { label: 'Alumínium erű (kúszik → kötések utánhúzása); háztartási betápnál min. 16 mm²', correct: true, why: 'Pontosan: olcsó alu betáp (tipikusan NAYY-J 4×16), de a kötéseket után kell húzni.' },
                  { label: 'Réz erű, 300/500 V, beltéri szerelvénykábel', why: 'Nem: a NAYY alumínium, 0,6/1 kV, betápkábel. (A réz beltéri az MBCu.)' },
                  { label: 'Az alu kötések sosem igényelnek karbantartást', why: 'Nem: az alu kúszik, a kötéseket idővel utánhúzni kell, réz–alu átmenethez bimetall saru.' },
                  { label: '2,5 mm²-rel is jó háztartási betápnak', why: 'Nem: háztartási alu betáp minimum 16 mm²; a vékony alu tűzveszélyes.' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mi a tipikus háztartási alu betápkábel?', options: [{ t: 'NAYY-J 4×16', correct: true }, { t: 'NYM-J 3×1,5' }, { t: 'H05VV-F 3G1,5' }, { t: 'YSLY 4×0,75' }], explain: 'A klasszikus betáp NAYY-J 4×16 (nagyobb teljesítményhez 4×25).' },
        { type: 'single', q: 'Mit kell tenni az alumíniumkötésekkel idővel?', options: [{ t: 'utánhúzni (mert az alu kúszik)', correct: true }, { t: 'rendszeresen átfesteni őket' }, { t: 'nem kell velük semmit tenni' }, { t: 'folyamatosan hűteni a kötést' }], explain: 'Az alu kúszik, ezért a kötéseket után kell húzni; réz–alu átmenethez bimetall saru kell.' },
        { type: 'tf', q: 'Háztartási betápnál az alumínium minimum keresztmetszete 16 mm².', answer: true, explain: 'Igen, az alu betáp minimum 16 mm².' }
      ]
    },

    /* ---------------- 5.6 NYCWY ---------------- */
    {
      id: 'c6', code: '5.6', title: 'NYCWY / E-AYCWY — hullámos koncentrikus betáp',
      blurb: 'Méretlen fővezeték a mérőig. Hullámos koncentrikus vezető — fúrásnál a védővezető sérül először.',
      pages: [
        {
          kicker: '5.6 · NYCWY (betápkábel)',
          blocks: [
            { type: 'lead', text: 'Az <em>NYCWY</em> a méretlen fővezeték: a csatlakozási ponttól a fogyasztásmérőig — gyakran a szolgáltató írja elő. A koncentrikus vezető itt hullámosan fektetett (W = wellig).' },
            {
              type: 'cable3d', h: '3D modell', intro: 'Szektor (pizzaszelet) alakú fő erek + a köpeny alatt a koncentrikus rézréteg (rézszínű gyűrű). A „hullámos” fektetést a lenti ábrán nézd meg.',
              spec: { sheath: '#1b1b1b', fill: true, armor: 'concentric', coreShape: 'sector', layout: 'round', cores: [{ color: 'brown' }, { color: 'black' }, { color: 'grey' }] },
              caption: 'NYCWY — szektor alakú fő erek + koncentrikus rézvezető a köpeny alatt.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'koncentrikus (árnyékolt) betápkábel'],
                ['Szabványos név', '<code>NYCWY</code> (réz) / <code>E-AYCWY</code> (alumínium) · VDE 0276 · 0,6/1 kV'],
                ['Felépítés', 'merev réz erek + PVC érszigetelés + övréteg + köpeny; a köpeny alatt körben <strong>HULLÁMOSAN</strong> fektetett rézszál/rézszalag koncentrikus vezető (W = wellig)'],
                ['Hol használjuk', 'méretlen fővezeték (a csatlakozási ponttól a fogyasztásmérőig), társasházi és nagyobb betáplálások — gyakran a szolgáltató írja elő; földben, vízben, kábelcsatornában, szabadban'],
                ['Extra infó', 'A koncentrikus réteg miatt nem lehet észrevétlenül megfúrni/megcsapolni, és <strong>fúrásnál a védelmi vezető sérül először</strong>. Tesztfeszültség 4 kV. Jelölés: NYCWY 3×25/16 → a /16 a koncentrikus vezető keresztmetszete.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=NYCWY+bet%C3%A1pk%C3%A1bel" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '5.6 · Miért hullámos?',
          blocks: [
            { type: 'figure', img: 'images/nycwy.png', caption: 'NYCWY — hullámosan fektetett koncentrikus vezető a köpeny alatt.', alt: 'NYCWY keresztmetszet' },
            {
              type: 'p', text: '<div style="background:rgba(255,255,255,.03);border:1px solid var(--line);border-radius:14px;padding:16px;margin:10px 0">' +
                '<div style="font-weight:600;color:#eaf1ff;margin-bottom:10px">Egyenletes vs. hullámos (wellig) koncentrikus vezető — oldalnézet</div>' +
                '<svg viewBox="0 0 440 220" width="100%" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">' +
                '<text x="12" y="22" fill="#37d6ec" font-size="13" font-weight="700">NYCY — egyenletes</text>' +
                '<rect x="40" y="36" width="360" height="16" rx="3" fill="#c8772f"/>' +
                '<line x1="40" y1="60" x2="400" y2="60" stroke="#e0a766" stroke-width="2.5"/>' +
                '<line x1="40" y1="66" x2="400" y2="66" stroke="#e0a766" stroke-width="2.5"/>' +
                '<text x="408" y="55" fill="#7e8eac" font-size="10">fő ér</text>' +
                '<text x="12" y="118" fill="#54e6a0" font-size="13" font-weight="700">NYCWY — hullámos (wellig)</text>' +
                '<rect x="40" y="132" width="360" height="16" rx="3" fill="#c8772f"/>' +
                '<path d="M40 162 Q55 154 70 162 Q85 170 100 162 Q115 154 130 162 Q145 170 160 162 Q175 154 190 162 Q205 170 220 162 Q235 154 250 162 Q265 170 280 162 Q295 154 310 162 Q325 170 340 162 Q355 154 370 162 Q385 170 400 162" fill="none" stroke="#54e6a0" stroke-width="2.5"/>' +
                '<path d="M40 174 Q55 166 70 174 Q85 182 100 174 Q115 166 130 174 Q145 182 160 174 Q175 166 190 174 Q205 182 220 174 Q235 166 250 174 Q265 182 280 174 Q295 166 310 174 Q325 182 340 174 Q355 166 370 174 Q385 182 400 174" fill="none" stroke="#54e6a0" stroke-width="2.5"/>' +
                '<text x="408" y="170" fill="#7e8eac" font-size="10">koncentrikus</text>' +
                '</svg>' +
                '<div style="font-size:.86rem;color:var(--ink-soft);margin-top:8px">A <b>hullámos</b> fektetés miatt a koncentrikus vezető a kábel hajlításakor és vágásakor is mindenhol fed — a védelem nem szakad meg, és fúrásnál előbb sérül, mint a fő erek. Az egyenletes (NYCY) változatnál a vezetők párhuzamosak.</div></div>' },
            { type: 'callout', variant: 'info', title: 'Lopásgátlás is', html: 'A koncentrikus réteg miatt a kábelt nem lehet észrevétlenül megcsapolni, fúrásnál pedig a védővezető sérül először — ez biztonsági előny a méretlen fővezetéknél.' },
            {
              type: 'order', gate: true, h: 'Rakd kívülről befelé a rétegeket!',
              prompt: 'Mi a sorrend a köpenytől a vezető felé? (legkülső elöl)',
              items: ['PVC köpeny', 'hullámos koncentrikus rézvezető', 'övréteg', 'PVC érszigetelés', 'réz vezető (ér)']
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mire való az NYCWY?', options: [{ t: 'méretlen fővezeték a mérőig (betáp)', correct: true }, { t: 'beltéri világítási kör' }, { t: 'csengő bekötése' }, { t: 'kültéri hosszabbító' }], explain: 'A csatlakozási ponttól a fogyasztásmérőig vezető méretlen fővezeték — gyakran a szolgáltató írja elő.' },
        { type: 'single', q: 'Mit jelez a W az NYCWY-ban?', options: [{ t: 'hullámosan fektetett koncentrikus vezetőt', correct: true }, { t: 'fehér köpenyszínt' }, { t: 'fokozott vízállóságot' }, { t: 'kétszeres névleges feszültséget' }], explain: 'W = wellig = hullámos. Az NYCY-nál egyenletes a koncentrikus vezető.' },
        { type: 'single', q: 'NYCWY 3×25/16 — a /16 jelentése:', options: [{ t: 'a koncentrikus vezető keresztmetszete (16 mm²)', correct: true }, { t: 'a kábel külső átmérője mm-ben' }, { t: 'az erek száma (16 db)' }, { t: 'a névleges feszültség értéke' }], explain: 'A / utáni szám a koncentrikus vezető keresztmetszete.' }
      ]
    },

    /* ---------------- 5.7 SZAMKAM ---------------- */
    {
      id: 'c7', code: '5.7', title: 'SZAMKAM — alu kábel aluszalag-árnyékolással',
      blurb: 'Négyerű alumínium kábel tekercselt aluszalag árnyékolással. Ipar, erőmű, kapcsolóberendezés.',
      pages: [
        {
          kicker: '5.7 · SZAMKAM',
          blocks: [
            { type: 'lead', text: 'A <em>SZAMKAM</em> négyerű alumínium kábel, az erek köré tekercselt alumíniumszalag árnyékolással.' },
            {
              type: 'cable3d', h: '3D modell', intro: 'Négy <strong>szektor (pizzaszelet) alakú</strong> alumínium ér + a köpeny alatt az aluszalag árnyékolás (világosszürke gyűrű).',
              spec: { sheath: '#1b1b1b', fill: true, armor: 'tape', coreShape: 'sector', layout: 'round', cores: [{ color: 'brown', conductor: 'al' }, { color: 'black', conductor: 'al' }, { color: 'grey', conductor: 'al' }, { color: 'blue', conductor: 'al' }] },
              caption: 'SZAMKAM — szektor alakú alumínium erek + aluszalag árnyékolás.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'négyerű alumínium kábel aluszalag-árnyékolással'],
                ['Szabványos név', '<code>SZAMKAM</code> · MSZ IEC 502 · 0,6/1 kV'],
                ['Felépítés', 'tömör/sodrott alumínium erek (szektor alak) + PVC érszigetelés + övréteg + köpeny; tekercselt alumíniumszalag árnyékolás'],
                ['Hol használjuk', 'beltér, kábelcsatorna, szabadban; erőművek, ipari üzemek, kapcsolóberendezések — ahol mechanikai védelem nincs előírva és sérülés nem várható'],
                ['Extra infó', 'Az alumínium ér miatt olcsóbb, de a kötéseket után kell húzni (kúszás). Az aluszalag árnyékolás zavarvédelmet és <strong>részleges</strong> mechanikai védelmet ad. Hőtartomány −5…+70 °C.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=SZAMKAM+k%C3%A1bel" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '5.7 · Gyakorlat',
          blocks: [
            { type: 'figure', img: 'images/szamkam.png', caption: 'SZAMKAM — alu erek, aluszalag árnyékolás.', alt: 'SZAMKAM keresztmetszet' },
            {
              type: 'match', gate: true, leftLabel: 'Jellemző', rightLabel: 'SZAMKAM',
              pairs: [
                { left: 'Vezető anyaga', right: 'alumínium (szektor alak)' },
                { left: 'Árnyékolás', right: 'tekercselt alumíniumszalag' },
                { left: 'Tipikus hely', right: 'ipar, erőmű, kapcsolóberendezés' }
              ]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mivel van árnyékolva a SZAMKAM?', options: [{ t: 'tekercselt alumíniumszalaggal', correct: true }, { t: 'acélszalaggal' }, { t: 'rézharisnyával' }, { t: 'nincs árnyékolva' }], explain: 'Aluszalag árnyékolás — zavarvédelem + részleges mechanikai védelem.' },
        { type: 'single', q: 'Milyen a SZAMKAM vezetője?', options: [{ t: 'alumínium', correct: true }, { t: 'réz' }, { t: 'acél' }, { t: 'ón' }], explain: 'Alumínium erek — ezért olcsóbb, de a kötéseket utánhúzni kell.' }
      ]
    },

    /* ---------------- 5.8 SzRMKVM-J ---------------- */
    {
      id: 'c8', code: '5.8', title: 'SzRMKVM-J — páncélozott erősáramú jelzőkábel',
      blurb: 'ACÉLSZALAG páncél! 0,6/1 kV erősáramú jelző-/mérő-/vezérlőkábel. NE keverd a gyengeáramú csengővezetékkel!',
      pages: [
        {
          kicker: '5.8 · SzRMKVM-J (páncélos)',
          blocks: [
            { type: 'lead', text: 'A <em>SzRMKVM-J</em> acélszalag páncéllal ellátott, 0,6/1 kV-os erősáramú jelzőkábel — mechanikailag igénybevett, esetleg földbe kerülő nyomvonalakra.' },
            {
              type: 'cable3d', h: '3D modell', intro: 'A köpeny alatt szürke acélszalag páncél fut körbe.',
              spec: { sheath: '#1b1b1b', fill: true, armor: 'steel', layout: 'round', cores: [{ color: 'brown' }, { color: 'black' }, { color: 'grey' }, { color: 'blue' }, { color: 'pe' }] },
              caption: 'SzRMKVM-J — réz erek + acélszalag páncél + PVC köpeny.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'erősáramú jelzőkábel (acélszalag páncéllal)'],
                ['Szabványos név', '<code>SzRMKVM-J</code> · MSZ IEC 502 · 0,6/1 kV'],
                ['Felépítés', 'tömör réz erek + PVC érszigetelés + PVC szalag övszigetelés + <strong>ACÉLSZALAG páncélozás</strong> + PVC köpeny; -J = van zöld-sárga ér'],
                ['Hol használjuk', 'erősáramú berendezésekhez, energiaátviteli és elosztó hálózatban jelző-, mérő-, vezérlőkábel; rögzített elhelyezéssel; ahol mechanikai védelem (páncél) kell'],
                ['Extra infó', 'Az acélszalag páncél a mechanikailag igénybevett, esetleg földbe kerülő nyomvonalakra való. <strong>NE keverd a gyengeáramú csengő-jelkábellel</strong> — ez 0,6/1 kV-os, páncélozott erősáramú kábel! Hőtartomány −5…+70 °C.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=SzRMKVM+páncélozott+k%C3%A1bel" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '5.8 · Figyelem',
          blocks: [
            { type: 'figure', img: 'images/szrmkvm.png', caption: 'SzRMKVM-J — acélszalag páncél a köpeny alatt.', alt: 'SzRMKVM keresztmetszet' },
            { type: 'callout', variant: 'danger', title: 'Ne keverd össze!', html: 'A SzRMKVM-J <strong>0,6/1 kV-os, páncélozott erősáramú</strong> kábel — NEM a vékony, gyengeáramú „csengővezeték”! A névbeli hasonlóság megtéveszthet.' },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ a SzRMKVM-J-ről?',
              items: [{
                q: 'Egy igaz állítás a páncélos erősáramú jelzőkábelről!',
                ctx: 'Páncél, feszültség, erek.',
                options: [
                  { label: 'ACÉLSZALAG páncél, 0,6/1 kV erősáramú; SZÍNES erekkel (-J = van zöld-sárga)', correct: true, why: 'Pontosan: tömör réz, színes érszigetelés + acélszalag páncél; mechanikailag igénybevett, földbe kerülő nyomvonalakra.' },
                  { label: 'Ez a vékony, gyengeáramú „csengővezeték”', why: 'Nem: ez 0,6/1 kV-os, páncélozott ERŐSÁRAMÚ kábel — a névbeli hasonlóság félrevezet.' },
                  { label: 'Számozott erek, árnyékolt vezérlőkábel (mint az YSLY)', why: 'Nem: a SzRMKVM-J SZÍNES erű, acélpáncélos erősáramú kábel; a számozott erű az YSLY-család.' },
                  { label: 'Réz koncentrikus árnyékolás a köpeny alatt', why: 'Nem: az az NYCY/NYCWY. Itt acélszalag PÁNCÉL van (mechanikai védelem).' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mi a SzRMKVM-J páncélja?', options: [{ t: 'acélszalag', correct: true }, { t: 'alumíniumszalag' }, { t: 'rézharisnya' }, { t: 'nincs páncél' }], explain: 'Acélszalag páncél — mechanikailag igénybevett, földbe kerülő nyomvonalakra.' },
        { type: 'tf', q: 'A SzRMKVM-J a vékony, gyengeáramú csengővezetékkel azonos.', answer: false, explain: 'Nem! Ez 0,6/1 kV-os, páncélozott ERŐSÁRAMÚ kábel — ne keverd a gyengeáramú csengő-jelkábellel.' },
        { type: 'single', q: 'Mennyi a SzRMKVM-J feszültsége?', options: [{ t: '0,6/1 kV', correct: true }, { t: '24 V' }, { t: '300/500 V' }, { t: '450/750 V' }], explain: '0,6/1 kV — erősáramú kábel (MSZ IEC 502).' }
      ]
    },

    /* ---------------- 5.9 Vezérlőkábelek ---------------- */
    {
      id: 'c9', code: '5.9', title: 'Vezérlőkábelek: YSLY / YSLCY / YSLYQY',
      blurb: 'Hajlékony, számozott erű vezérlőkábelek. Alap (YSLY), árnyékolt (YSLCY), páncélos/erősített (YSLYQY).',
      pages: [
        {
          kicker: '5.9 · A vezérlőkábel-család',
          blocks: [
            { type: 'lead', text: 'Hajlékony, <em>számozott erű</em> vezérlőkábelek mérés-, vezérlés- és szabályozástechnikára (gépek, motorvezérlés, automatika, kapumozgatás). Az alapjuk azonos — a különbség a védelemben van.' },
            {
              type: 'cable3d', h: '3D modell — YSLY alap',
              spec: { sheath: '#9aa1a8', fill: true, layout: 'round', cores: [{ color: 'numbered' }, { color: 'numbered' }, { color: 'numbered' }, { color: 'numbered' }, { color: 'pe' }] },
              caption: 'YSLY — finomsodrott, számozott erek központi mag köré sodorva, PVC köpenyben.'
            },
            {
              type: 'table', h: 'A három változat',
              head: ['Típus', 'Védelem', 'Hol'],
              rows: [
                ['<code>YSLY-JZ / -OZ</code>', 'alap (nincs külön védelem)', 'mérés-, vezérlés-, szabályozástechnika, legfeljebb közepes mechanikai terhelés'],
                ['<code>YSLCY</code>', 'ónozott <strong>rézharisnya</strong> árnyékolás', 'EMC-zavaros környezet (pl. frekvenciaváltó mellé)'],
                ['<code>YSLYQY</code>', 'PVC/<strong>acélharisnya</strong> erősítés', 'nagy mechanikai terhelés: mozgó gépalkatrész, igénybevett nyomvonal']
              ],
              note: 'Mindhárom: VDE 0281 · 300/500 V (teszt 2000 V). JZ = van zöld-sárga + számozott erek · OZ = zöld-sárga nélkül; robbanásbiztos kivitel kék köpennyel.'
            }
          ]
        },
        {
          kicker: '5.9 · Melyik védelem mire?',
          blocks: [
            {
              type: 'vs',
              a: { title: 'YSLCY (árnyékolt)', items: ['ónozott rézharisnya', 'elektromágneses zavar ellen', 'pl. frekvenciaváltó közelébe', 'egyébként mint YSLY'] },
              b: { title: 'YSLYQY (erősített)', items: ['PVC/acélharisnya', 'nagy mechanikai terhelés', 'mozgó gép, igénybevett nyomvonal', 'egyébként mint YSLY'] }
            },
            {
              type: 'match', gate: true, leftLabel: 'Helyzet', rightLabel: 'Megfelelő típus',
              pairs: [
                { left: 'Általános motorvezérlés, automatika jelei', right: 'YSLY-JZ (alap)' },
                { left: 'Frekvenciaváltó mellett, EMC-zaj', right: 'YSLCY (rézharisnya árnyékolás)' },
                { left: 'Mozgó gépalkatrész, nagy mechanikai terhelés', right: 'YSLYQY (acélharisnya erősítés)' }
              ]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Melyik vezérlőkábelt használnád EMC-zavaros környezetben (frekvenciaváltó mellett)?', options: [{ t: 'YSLCY (rézharisnya árnyékolás)', correct: true }, { t: 'YSLY (alap)' }, { t: 'YSLYQY (acélharisnya)' }, { t: 'NYY' }], explain: 'Az YSLCY ónozott rézharisnya árnyékolása véd az elektromágneses zavartól.' },
        { type: 'single', q: 'Nagy mechanikai terhelés, mozgó gépalkatrész — melyik?', options: [{ t: 'YSLYQY (acélharisnya erősítés)', correct: true }, { t: 'YSLCY' }, { t: 'YSLY' }, { t: 'MM-fal' }], explain: 'Az YSLYQY PVC/acélharisnya erősítése bírja a nagy mechanikai igénybevételt.' },
        { type: 'single', q: 'Mi a vezérlőkábelek névleges feszültsége?', options: [{ t: '300/500 V (VDE 0281)', correct: true }, { t: '0,6/1 kV' }, { t: '450/750 V' }, { t: '24 V' }], explain: 'Mindhárom YSLY-változat 300/500 V.' }
      ]
    },

    /* ---------------- 5.10 Gyengeáram ---------------- */
    {
      id: 'c10', code: '5.10', title: 'Gyengeáram a házban (ismerd fel!)',
      blurb: 'Csengő-/kaputelefon-jelkábel, UTP/koax/riasztó, NHXMH halogénmentes, MTL/MZsl lapos zsinór.',
      pages: [
        {
          kicker: '5.10 · Jó, ha felismered',
          blocks: [
            { type: 'lead', text: 'Néhány típust nem szükséges fejből tudni, de jó felismerni — főleg, hogy a gyengeáramot ne keverd az erősárammal.' },
            {
              type: 'callout', variant: 'warn', title: 'Névhasználat — figyelem!',
              html: 'A <code>SzRMKVM-J</code> hivatalosan 0,6/1 kV-os, páncélos <strong>erősáramú</strong> jelzőkábel (lásd 5.8). A köznyelvben a „csengővezeték” gyűjtőnéven viszont vékony, kis keresztmetszetű <strong>gyengeáramú</strong> jelkábeleket is így emlegetnek — ezek a 230 V-os hálózatba nem valók.'
            },
            {
              type: 'list', items: [
                '<strong>Csengő-/kaputelefon-jelkábel</strong> (gyengeáram) — kis keresztmetszetű (0,5–0,8 mm²) jelkábel csengőhöz, kaputelefonhoz, termosztáthoz; 230 V-os áramkörbe <strong>TILOS</strong>.',
                '<strong>UTP (Cat5e/Cat6), koax, riasztókábel</strong> — hálózat, kamera, antenna, riasztó; kaputelefonhoz ma gyakran UTP-t húznak. Az erősáramtól lehetőleg külön nyomvonalon fusson.',
                '<strong>NHXMH</strong> — halogénmentes NYM: tűz esetén nem fejleszt mérgező, korrozív gázt; középületek, menekülési útvonalak.',
                '<strong>H03VVH2-F (MTL)</strong> és <strong>H03VH-H (MZsl)</strong> — lapos zsinórvezetékek lámpákhoz, kis háztartási készülékekhez.'
              ]
            }
          ]
        },
        {
          kicker: '5.10 · Rögzítsd',
          blocks: [
            {
              type: 'flashcards', gate: true,
              intro: 'Fordítsd meg a kártyákat — mire való?',
              cards: [
                { front: 'Csengő-jelkábel', back: 'gyengeáram, 0,5–0,8 mm²<br><b>230 V-ba TILOS</b>' },
                { front: 'UTP / koax', back: 'hálózat, kamera, antenna, kaputelefon<br>erősáramtól külön' },
                { front: 'NHXMH', back: 'halogénmentes NYM<br>tűznél nincs mérgező gáz · középület' },
                { front: 'MTL / MZsl', back: 'lapos zsinór<br>lámpa, kis készülék' }
              ]
            },
            {
              type: 'scenario', gate: true, h: 'Hova melyik?',
              items: [{
                q: 'Középület menekülési útvonalára kell kábel, ami tűz esetén nem fejleszt mérgező, korrozív gázt.',
                ctx: 'Tűzbiztonság a fő szempont.',
                options: [
                  { label: 'NHXMH (halogénmentes)', sub: '', correct: true, why: 'A halogénmentes NHXMH tűz esetén nem fejleszt mérgező/korrozív gázt — középületek, menekülési útvonalak.' },
                  { label: 'NYM-J (normál PVC)', sub: '', why: 'A PVC tűznél mérgező gázt fejleszthet; középület menekülési útvonalára halogénmentes (NHXMH) kell.' },
                  { label: 'Csengővezeték', sub: 'gyengeáram', why: 'Az gyengeáramú jelkábel, nem erre való.' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'tf', q: 'A gyengeáramú csengő-jelkábel beköthető a 230 V-os hálózatba.', answer: false, explain: 'TILOS! A vékony gyengeáramú jelkábel nem való 230 V-ra.' },
        { type: 'single', q: 'Melyik kábel halogénmentes (tűznél nincs mérgező gáz)?', options: [{ t: 'NHXMH', correct: true }, { t: 'NYM' }, { t: 'NYY' }, { t: 'H05VV-F' }], explain: 'Az NHXMH halogénmentes NYM — középületek, menekülési útvonalak.' },
        { type: 'single', q: 'Mire húznak ma gyakran UTP-t a háznál?', options: [{ t: 'hálózat, kamera, kaputelefon', correct: true }, { t: 'sütő és főzőlap bekötése' }, { t: 'kerti földkábel-fektetés' }, { t: 'fűtőtest tápellátása' }], explain: 'UTP: hálózat, kamera, és ma gyakran a kaputelefon is — erősáramtól külön nyomvonalon.' }
      ]
    }
  ],

  /* ---------------- MODULKVÍZ ---------------- */
  quiz: [
    { type: 'single', q: 'Vakolat alá, VÉDŐCSŐ NÉLKÜL, lapos kivitelben kifejezetten melyiket tervezték?', options: [{ t: 'MM-fal (MMCu)', correct: true }, { t: 'MBCu (NYM)' }, { t: 'NYY' }, { t: 'MCu' }], explain: 'Cső nélkül vakolat alá az MM-fal (lapos, fehér falkábel) való; az MCu csak csőben, az NYM inkább falon kívül/csatornában, az NYY a földbe.' },
    { type: 'single', q: 'A leggyakoribb beltéri szerelvénykábel (kör, világosszürke):', options: [{ t: 'MBCu = NYM-J', correct: true }, { t: 'MM-fal' }, { t: 'NYCWY' }, { t: 'YSLY' }], explain: 'MBCu = NYM-J, kör, világosszürke.' },
    { type: 'single', q: 'Kertbe, földbe, kapumotorhoz tartós tápkábel:', options: [{ t: 'NYY-J', correct: true }, { t: 'MT' }, { t: 'MM-fal' }, { t: 'YSLY' }], explain: 'NYY réz földkábel — 70–80 cm mély, homokágy + jelzőszalag.' },
    { type: 'single', q: 'Családi ház betáp az utcáról a mérőig (olcsó, alu):', options: [{ t: 'NAYY-J 4×16', correct: true }, { t: 'NYM-J 3×1,5' }, { t: 'YSLCY' }, { t: 'H07G' }], explain: 'NAYY alumínium betápkábel.' },
    { type: 'single', q: 'Méretlen fővezeték hullámos koncentrikus vezetővel:', options: [{ t: 'NYCWY', correct: true }, { t: 'NYCY' }, { t: 'SZAMKAM' }, { t: 'MBCu' }], explain: 'NYCWY — W = wellig (hullámos) koncentrikus vezető.' },
    { type: 'single', q: 'Acélszalag páncéllal, 0,6/1 kV erősáramú jelzőkábel:', options: [{ t: 'SzRMKVM-J', correct: true }, { t: 'csengővezeték' }, { t: 'YSLY' }, { t: 'NHXMH' }], explain: 'SzRMKVM-J — acélszalag páncél, NE keverd a gyengeáramú csengővel.' },
    { type: 'single', q: 'EMC-zavaros környezetbe (frekvenciaváltó) vezérlőkábel:', options: [{ t: 'YSLCY (rézharisnya)', correct: true }, { t: 'YSLY' }, { t: 'YSLYQY' }, { t: 'NYY' }], explain: 'YSLCY árnyékolt — rézharisnya az EMC-zaj ellen.' },
    { type: 'tf', q: 'Az NHXMH halogénmentes — tűz esetén nem fejleszt mérgező gázt.', answer: true, explain: 'Igen, középületek, menekülési útvonalak kábele.' },
    { type: 'single', q: 'Az alumínium kábelekre (NAYY, SZAMKAM) mi igaz?', options: [{ t: 'kúszik — a kötéseket utánhúzni kell', correct: true }, { t: 'hőálló +110 °C-ig' }, { t: 'gyengeáramú' }, { t: 'sosem kell karbantartani' }], explain: 'Az alu kúszik; a kötéseket utánhúzni, réz-alu átmenethez bimetall saru.' }
  ]
});
