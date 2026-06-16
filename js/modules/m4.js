/* =====================================================================
   4. MODUL — VEZETÉKEK (a leggyakoribb típusok)
   ===================================================================== */
COURSE.addModule({
  id: 'm4',
  title: 'Vezetékek',
  subtitle: 'A köpeny nélküli (vagy a nevük szerint ide sorolt) típusok: MCu, H05V-K, MKH, MT, GT és a hőálló H07G.',
  icon: 'bolt',
  intro: 'Ezek a köpeny nélküli — vagy könnyű tömlőköpenyes — típusok: PVC-szigetelésű merev és hajlékony vezetékek, a hajlékony MT és GT tömlővezetékek, valamint a hőálló szilikonos H07G. A valódi köpeny nélküliek (MCu, H05V-K, MKH) önállóan nem valók falba — védőcső, kábelcsatorna vagy készülékház kell köréjük.',
  badge: { id: 'm4', name: 'A Vezetékek Ismerője', desc: 'Megismerted a hat fő vezetéktípust.', icon: 'bolt' },

  chapters: [
    /* ---------------- 4.1 MCu ---------------- */
    {
      id: 'c1', code: '4.1', title: 'MCu — H07V-U / H07V-R',
      blurb: 'Merev rézvezeték, PVC szigetelés, köpeny nélkül. A korszerű lakásszerelés alapja: védőcsőben.',
      pages: [
        {
          kicker: '4.1 · MCu (merev rézvezeték)',
          blocks: [
            { type: 'lead', text: 'Az <em>MCu</em> a legegyszerűbb vezeték: egyetlen PVC-szigetelésű, merev rézvezető. Köpenye nincs — ezért védőcsőbe való.' },
            {
              type: 'cable3d', h: '3D modell', intro: 'Forgasd meg! Egyetlen tömör rézvezető (a kibújó réz vég) + PVC érszigetelés. Nincs köpeny.',
              spec: { sheath: null, layout: 'single', cores: [{ color: 'brown', conductor: 'cu' }] },
              caption: 'MCu — egyetlen tömör réz ér PVC szigeteléssel (itt barna; minden érszínben kapható).'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'MCu (Mcu) — műanyag (PVC) szigetelésű merev rézvezeték'],
                ['Szabványos név', '<code>H07V-U</code> (tömör) / <code>H07V-R</code> (többszálú merev) · VDE 0281 · 450/750 V'],
                ['Felépítés', '1 db tömör (H07V-U) vagy többszálú merev (H07V-R) réz ér + PVC érszigetelés, minden érszínben kapható'],
                ['Hol használjuk', 'falba süllyesztett <strong>VÉDŐCSŐBEN</strong>, vakolat alatt és kívül; készülékek, világítótestek összekötő vezetéke; üzemi kapcsoló- és elosztószekrényekben, száraz helyiségben'],
                ['Extra infó', 'Ma a javasolt korszerű megoldás lakásfelújításnál: <strong>védőcső + MCu = később cserélhető, bővíthető</strong>. Tesztfeszültség 2500 V; üzemi hőmérséklet −5…+70 °C. Jellemző méretek: 1,5 / 2,5 / 4 / 6 / 10 mm²'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=H07V-U+MCu+vezet%C3%A9k" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '4.1 · Keresztmetszet és gyakorlat',
          blocks: [
            {
              type: 'xsec', gate: true, img: 'images/mcu.png',
              intro: 'Fedezd fel a keresztmetszetet — kattints a rétegekre.',
              layers: [
                { name: 'Réz vezető (tömör)', desc: 'Egyetlen vastag rézszál — merev, formatartó.', color: '#c07a37', hot: { x: 50, y: 50, r: 11 } },
                { name: 'PVC érszigetelés', desc: 'A vezetőt körülvevő egyetlen szigetelőréteg. Nincs fölötte köpeny → vezeték!', color: '#6f421f', hot: { x: 50, y: 24, r: 7 } }
              ]
            },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ az MCu-ról?',
              items: [{
                q: 'Olvasd el a tulajdonságokat — csak EGY igaz az MCu-ra!',
                ctx: 'Gondolj a felépítésre és a helyes beépítésre.',
                options: [
                  { label: 'Tömör réz ér, PVC szigetelés, KÖPENY NÉLKÜL — védőcsőbe való', correct: true, why: 'Pontosan: egyetlen szigetelőréteg, köpeny nélkül → vezeték, ezért védőcső kell köré (cserélhető marad).' },
                  { label: 'Van köpenye, ezért közvetlenül a földbe fektethető', why: 'Nem: az MCu-nak nincs köpenye. Közvetlen földi fektetésre a köpenyes NYY/NAYY való.' },
                  { label: 'Finomsodrott és hajlékony, hosszabbítónak ideális', why: 'Nem: az MCu tömör és merev (fix szerelés). A hajlékony hosszabbító az MT/GT.' },
                  { label: 'Hőálló +110 °C-ig, kazánhoz is jó', why: 'Nem: PVC szigetelés (~70 °C). A +110 °C-os hőálló a szilikonos H07G.' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Hogyan helyezzük falba az MCu vezetéket?', options: [{ t: 'védőcsőben', correct: true }, { t: 'közvetlenül vakolat alá' }, { t: 'homokágyban a földbe' }, { t: 'sehogy, csak falon kívül' }], explain: 'Az MCu köpeny nélküli vezeték → védőcsőbe való. Ez teszi cserélhetővé/bővíthetővé.' },
        { type: 'single', q: 'Mi az MCu szabványos neve és feszültsége?', options: [{ t: 'H07V-U / H07V-R · 450/750 V', correct: true }, { t: 'H05VV-F · 300/500 V' }, { t: 'NYY · 0,6/1 kV' }, { t: 'H07RN-F · 450/750 V' }], explain: 'MCu = H07V-U (tömör) / H07V-R (többszálú merev), 450/750 V, VDE 0281.' },
        { type: 'tf', q: 'A védőcső + MCu kombináció később cserélhető és bővíthető.', answer: true, explain: 'Épp ezért ajánlott korszerű lakásszereléshez.' }
      ]
    },

    /* ---------------- 4.2 H05V-K ---------------- */
    {
      id: 'c2', code: '4.2', title: 'H05V-K (MCSKH) — finomsodrott jelvezeték',
      blurb: 'A H07V-K 300/500 V-os, vékonyabb kistestvére — jel- és vezérlőkörökhöz, szekrényhuzalozáshoz.',
      pages: [
        {
          kicker: '4.2 · H05V-K (MCSKH)',
          blocks: [
            { type: 'lead', text: 'A <em>H05V-K</em> finomsodratú, hajlékony rézvezeték — kisebb feszültségű, jeltovábbító körökhöz.' },
            { type: 'callout', variant: 'info', title: 'Mit jelent az „MCSKH”?', html: 'Ez a H05V-K <strong>régi magyar neve</strong> (a katalógusokban „MCs.Kh” alakban is): <strong>M</strong> = műanyag szigetelés, <strong>Cs/Kh</strong> = a sok vékony elemi szálból álló, „csökkentett” átmérőjű, <strong>különösen hajlékony</strong> kivitelre utaló régi jelölés. Ma egyszerűen H05V-K-ként keresd.' },
            {
              type: 'cable3d', h: '3D modell',
              spec: { sheath: null, layout: 'single', cores: [{ color: 'blue', conductor: 'cu' }] },
              caption: 'H05V-K — egyetlen finomsodrott réz ér, vékonyabb PVC szigeteléssel.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'MCSKH — műanyag (PVC) szigetelésű, finomsodratú rézvezeték'],
                ['Szabványos név', '<code>H05V-K</code> · VDE 0281 · 300/500 V'],
                ['Felépítés', '1 ér, finomsodratú réz + PVC érszigetelés (vékonyabb, mint a H07V-K)'],
                ['Hol használjuk', 'készülékek, világítótestek összekötő vezetéke; szignál- és jeláramkörök; elosztószekrények belső huzalozása; védőcsőben, vakolat alatt és felett'],
                ['Extra infó', 'A H07V-K (MKH) 300/500 V-os, vékonyabb kistestvére — kisebb feszültségű, jeltovábbító körökhöz. Tesztfeszültség 2000 V. Csavaros kötésbe itt is érvéghüvely kell.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=H05V-K+vezet%C3%A9k" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '4.2 · A két testvér',
          blocks: [
            { type: 'p', text: 'Könnyű összekeverni a H05V-K-t és a H07V-K-t (MKH). Fordítsd meg a kártyákat a különbségért!' },
            {
              type: 'flashcards', gate: true,
              cards: [
                { front: 'H05V-K (MCSKH)', back: '<b>300/500 V</b>, vékonyabb<br>jel- és vezérlőkörök, szekrényhuzalozás' },
                { front: 'H07V-K (MKH)', back: '<b>450/750 V</b>, vastagabb<br>erősáramú belső huzalozás, gépek' },
                { front: 'Közös bennük', back: 'finomsodrott réz + PVC<br>csavaros kötésbe érvéghüvely kell!' }
              ]
            },
            { type: 'callout', variant: 'rule', title: 'Érvéghüvely', html: 'Finomsodrott lévén a H05V-K-t is <strong>érvéghüvellyel</strong> kötjük csavaros kötésbe.' }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mi a H05V-K fő szerepe?', options: [{ t: 'jel- és vezérlőkörök, készülék-összekötés, szekrényhuzalozás', correct: true }, { t: 'földkábel a kertbe' }, { t: 'kültéri hosszabbító' }, { t: 'ház betáp' }], explain: 'A H05V-K finomsodrott, 300/500 V — jeltovábbító és belső huzalozási körökhöz.' },
        { type: 'single', q: 'Mennyi a H05V-K névleges feszültsége?', options: [{ t: '300/500 V', correct: true }, { t: '450/750 V' }, { t: '0,6/1 kV' }, { t: '300/300 V' }], explain: 'A H05V-K 300/500 V — a H07V-K (450/750 V) vékonyabb kistestvére.' },
        { type: 'tf', q: 'A H05V-K finomsodrott, ezért csavaros kötésbe érvéghüvely kell.', answer: true, explain: 'Igen, mint minden finomsodrott érnél.' }
      ]
    },

    /* ---------------- 4.3 MKH ---------------- */
    {
      id: 'c3', code: '4.3', title: 'MKH — H07V-K (különösen hajlékony)',
      blurb: 'Finomsodrott, nagyon hajlékony vezeték elosztószekrények huzalozásához. Csavaros kötésbe érvéghüvely!',
      pages: [
        {
          kicker: '4.3 · MKH (H07V-K)',
          blocks: [
            { type: 'lead', text: 'Az <em>MKH</em> sok vékony rézszálból finomsodorva — nagyon hajlékony, ezért szűk dobozokban, rázkódó helyeken kényelmes.' },
            {
              type: 'cable3d', h: '3D modell',
              spec: { sheath: null, layout: 'single', cores: [{ color: 'black', conductor: 'cu' }] },
              caption: 'MKH — egyetlen finomsodrott (sok vékony szálból álló) réz ér, PVC szigeteléssel.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'MKH (Mkh) — műanyag szigetelésű, különösen hajlékony (sodrott) vezeték'],
                ['Szabványos név', '<code>H07V-K</code> · VDE 0281 · 450/750 V'],
                ['Felépítés', '1 ér, sok vékony rézszálból finomsodorva + PVC szigetelés'],
                ['Hol használjuk', 'elosztószekrények belső huzalozása, gépek, rázkódó/mozgó helyek, szűk dobozokban kényelmesebb szerelés'],
                ['Extra infó', 'Csavaros kötésbe <strong>CSAK érvéghüvellyel</strong>! Rugós (WAGO) szorítóba a megfelelő típus (pl. 221) bemehet hüvely nélkül. Nagyobb keresztmetszetben létezik a H07V-R (durvábban sodrott) is, pl. betáp fővezetéknek csőbe.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=H07V-K+MKH+vezet%C3%A9k" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '4.3 · Gyakorlat',
          blocks: [
            { type: 'callout', variant: 'danger', title: 'Csavaros kötés = érvéghüvely!', html: 'A finomsodrott szálak csavaros kötésben szétnyomódnak. <strong>Mindig érvéghüvely</strong> — kivéve a rá tervezett rugós (WAGO) szorítót.' },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ az MKH-ról?',
              items: [{
                q: 'Egy igaz, három téves — találd meg a helyeset!',
                ctx: 'Felépítés és bekötés.',
                options: [
                  { label: 'Sok elemi szálból álló, nagyon hajlékony; csavaros kötésbe érvéghüvellyel', correct: true, why: 'Pontosan: finomsodrott (sok elemi szál) → hajlékony, és érvéghüvely kell a csavaros kötésbe.' },
                  { label: 'Tömör, merev ér — fix falba, cső nélkül is mehet', why: 'Nem: az MKH finomsodrott (hajlékony). A tömör/merev az MCu, és az is csak csőben mehet falba.' },
                  { label: 'Köpenyes földkábel, 0,6/1 kV', why: 'Nem: az MKH köpeny nélküli vezeték, 450/750 V. A földkábel az NYY/NAYY.' },
                  { label: 'Csavaros kötésbe csupaszon is köthető', why: 'Nem: elemi szálas érhez érvéghüvely kell, különben a szálak szétnyomódnak és melegszik a kötés.' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mi az MKH tipikus felhasználása?', options: [{ t: 'elosztószekrény belső huzalozása, gépek, rázkódó helyek', correct: true }, { t: 'földbe fektetett betáp' }, { t: 'kültéri hosszabbító' }, { t: 'magas hőmérsékletű kazánbekötés' }], explain: 'Finomsodrott, hajlékony → szekrényhuzalozás, mozgó/rázkódó helyek.' },
        { type: 'single', q: 'Csavaros kötésbe hogyan kötjük az MKH-t?', options: [{ t: 'érvéghüvellyel', correct: true }, { t: 'csupaszon, csavarral' }, { t: 'forrasztva mindig' }, { t: 'sehogy, tilos' }], explain: 'Érvéghüvellyel — különben a szálak szétnyomódnak, a kötés melegszik.' },
        { type: 'tf', q: 'Az MKH 450/750 V-os (H07V-K), a H05V-K-nál vastagabb testvér.', answer: true, explain: 'Igen: MKH = H07V-K, 450/750 V.' }
      ]
    },

    /* ---------------- 4.4 MT ---------------- */
    {
      id: 'c4', code: '4.4', title: 'MT — H05VV-F (tömlővezeték)',
      blurb: 'Fehér, hajlékony tömlővezeték hosszabbítóhoz, lámpához, háztartási géphez. NEM falba, NEM kültérre.',
      pages: [
        {
          kicker: '4.4 · MT (tömlővezeték)',
          blocks: [
            { type: 'lead', text: 'Az <em>MT</em> 2–5 finomsodrott eret fog össze egy könnyű PVC köpenyben — jellemzően fehér. Hajlékony csatlakozóvezeték beltérre. <em>(Van könnyű köpenye, így szerkezetileg kábel; a neve és csatlakozó-funkciója miatt a vezetékek között tárgyaljuk — lásd 3. modul.)</em>' },
            {
              type: 'cable3d', h: '3D modell', intro: 'Itt már van köpeny (fehér), alatta a színes, hajlékony erekkel.',
              spec: { sheath: '#eef0f2', layout: 'round', cores: [{ color: 'brown' }, { color: 'blue' }, { color: 'pe' }] },
              caption: 'MT — 3 finomsodrott ér (barna/kék/zöld-sárga) fehér PVC köpenyben.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'MT — műanyag (PVC) tömlővezeték / installációs kábel'],
                ['Szabványos név', '<code>H05VV-F</code> · 300/500 V · VDE 0281 (könnyű kivitel: <code>H03VV-F</code> · 300/300 V)'],
                ['Felépítés', '2–5 finomsodrott réz ér + PVC érszigetelés ÉS PVC köpeny; az erek színezve, a köpeny jellemzően fehér'],
                ['Hol használjuk', 'kisebb fogyasztók, háztartási gépek bekötése száraz és nedves környezetben, kis-közepes mechanikai terhelésnél; falban védőcsőben, bútorok belsejében, előre gyártott elemekben'],
                ['Extra infó', '<strong>NEM való közvetlenül kültérre, és ipari gépekhez sem javasolt!</strong> Hőforrásra csak akkor köthető, ha a kábelt nem éri közvetlen hőhatás. Tesztfeszültség 2000 V. Lapos zsinór-rokonai: MTL (H03VVH2-F) és MZsl (H03VH-H) — lámpákhoz, kis készülékekhez.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=H05VV-F+MT+vezet%C3%A9k" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '4.4 · Hol NE használd',
          blocks: [
            { type: 'callout', variant: 'warn', title: 'Miért nem való kültérre?', html: 'Az MT PVC köpenye <strong>nem UV-stabilizált</strong>: a napsugárzás (UV) idővel <strong>ridegíti, repeszti</strong>, a tartós nedvesség pedig károsítja — a szigetelés megbízhatatlanná válik. Ezért az MT <strong>nem való közvetlenül kültérre</strong> és ipari gépekhez. A GT gumi (neoprén) köpenye viszont ózon-, UV- és időjárásálló — kültéri hosszabbítóhoz az kell.' },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ az MT-ről?',
              items: [{
                q: 'Csak egy állítás igaz az MT-re (H05VV-F)!',
                ctx: 'Köpeny, környezet, korlátok.',
                options: [
                  { label: 'Van könnyű PVC köpenye; beltéri csatlakozóvezeték kis-közepes terhelésre', correct: true, why: 'Pontosan: finomsodrott erek + könnyű PVC köpeny, beltérre (hosszabbító, háztartási gép).' },
                  { label: 'UV-álló, kültéri hosszabbítónak ideális', why: 'Nem: a PVC köpeny nem UV-stabilizált — kültéren ridegül. Kültérre a GT való.' },
                  { label: 'Köpeny nélküli vezeték, ezért csak védőcsőben mehet', why: 'Nem: az MT-nek VAN könnyű köpenye. (A köpeny nélküli pl. az MCu/MKH.)' },
                  { label: 'Hőálló +110 °C-ig, fűtőtesthez is jó', why: 'Nem: PVC szigetelés. A hőálló (+110 °C) a szilikonos H07G.' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mire való az MT (H05VV-F)?', options: [{ t: 'beltéri hosszabbító, lámpa, háztartási gép bekötése', correct: true }, { t: 'földbe fektetés' }, { t: 'kültéri építkezés tápja' }, { t: 'ház betáp a mérőig' }], explain: 'Beltéri, kis-közepes terhelésű csatlakozóvezeték.' },
        { type: 'tf', q: 'Az MT alkalmas közvetlen kültéri használatra.', answer: false, explain: 'Nem! Kültérre a GT (gumikábel) való; az MT beltéri.' },
        { type: 'single', q: 'Melyik az MT lapos zsinór-rokona?', options: [{ t: 'MTL (H03VVH2-F)', correct: true }, { t: 'NYY' }, { t: 'NAYY' }, { t: 'H07G-U' }], explain: 'Az MTL (H03VVH2-F) lapos zsinór lámpákhoz, kis készülékekhez.' }
      ]
    },

    /* ---------------- 4.5 GT ---------------- */
    {
      id: 'c5', code: '4.5', title: 'GT — H07RN-F (gumikábel)',
      blurb: 'Fekete gumiköpeny, UV- és időjárásálló. Kültér, építkezés, szivattyú, mozgó motor. A kültéri hosszabbító alapja.',
      pages: [
        {
          kicker: '4.5 · GT (gumikábel)',
          blocks: [
            { type: 'lead', text: 'A <em>GT</em> finomsodrott rézerei gumi érszigetelést és strapabíró neoprén gumiköpenyt kapnak — feketét. Ózon-, UV- és időjárásálló.' },
            {
              type: 'cable3d', h: '3D modell',
              spec: { sheath: '#1b1b1b', layout: 'round', cores: [{ color: 'brown' }, { color: 'blue' }, { color: 'pe' }] },
              caption: 'GT — hajlékony erek fekete, strapabíró gumiköpenyben.'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'GT — Gumiszigetelésű Tömlővezeték (köznyelvben: gumikábel)'],
                ['Szabványos név', '<code>H07RN-F</code> · 450/750 V (közepes terhelés) · VDE 0282 — könnyű: <code>H05RR-F</code> · 300/500 V'],
                ['Felépítés', 'finomsodratú réz erek + gumi érszigetelés + strapabíró (neoprén) gumiköpeny, fekete'],
                ['Hol használjuk', '<strong>H07RN-F</strong>: száraz, nedves, vizes helyiség és kültér; gépek, daruk, szivattyú, hegesztő, mobil MOTOR-bekötés, tűz- és robbanásveszélyes helyek. <strong>H05RR-F</strong>: kisebb háztartási gépek hálózati kábele, kis-közepes terhelés, rövid ideig kültéren is.'],
                ['Extra infó', 'Ózon-, UV- és időjárásálló, hidegben is hajlékony. <strong>Kültéri hosszabbítót ebből vegyél/készíts, ne MT-ből!</strong> H07RN-F tesztfeszültség 2500 V; H05RR-F hőtartomány −30…+60 °C.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=H07RN-F+gumik%C3%A1bel" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '4.5 · MT vagy GT?',
          blocks: [
            {
              type: 'vs',
              a: { title: 'MT (H05VV-F)', items: ['PVC köpeny, fehér', 'BELTÉR', 'kis-közepes terhelés', 'NEM közvetlen kültérre'] },
              b: { title: 'GT (H07RN-F)', items: ['gumi köpeny, fekete', 'KÜLTÉR is, mozgó/ipari', 'UV-, ózon-, időjárásálló', 'kültéri hosszabbító ebből!'] }
            },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ a GT-ről?',
              items: [{
                q: 'Egy igaz állítás a GT (H07RN-F) gumikábelről!',
                ctx: 'Anyag, időjárásállóság, felhasználás.',
                options: [
                  { label: 'Gumi szigetelés + neoprén gumiköpeny; UV-/ózon-/időjárásálló, mozgó és kültéri', correct: true, why: 'Pontosan: ezért alkalmas kültéri, mozgatott gépekhez, szivattyúhoz, építkezésre.' },
                  { label: 'PVC köpeny, ezért csak száraz beltérbe való', why: 'Nem: az a leírás az MT-re illik. A GT gumiköpenyes, kültéri.' },
                  { label: 'Tömör, merev ér — fix falba süllyesztésre', why: 'Nem: a GT finomsodrott és hajlékony (mozgó alkalmazás), nem falba való.' },
                  { label: 'Köznyelvben „vezeték”, valójában is köpeny nélküli', why: 'Nem: a GT gumiköpenyes, szerkezetileg és szabvány szerint (VDE 0282) is KÁBEL.' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Miből készíts kültéri hosszabbítót?', options: [{ t: 'GT (H07RN-F) gumikábelből', correct: true }, { t: 'MT (H05VV-F) tömlővezetékből' }, { t: 'MCu vezetékből' }, { t: 'MM-fal vezetékből' }], explain: 'A GT UV-, ózon- és időjárásálló — kültéri hosszabbítóhoz ez való, nem az MT.' },
        { type: 'single', q: 'Milyen a GT köpenye?', options: [{ t: 'fekete, strapabíró neoprén gumi', correct: true }, { t: 'fehér PVC' }, { t: 'szürke PVC' }, { t: 'nincs köpenye' }], explain: 'Gumi (neoprén) köpeny, fekete — innen a „gumikábel” név.' },
        { type: 'tf', q: 'A GT alkalmas mozgó motor, daru, szivattyú bekötésére kültéren.', answer: true, explain: 'Igen, a H07RN-F épp ilyen ipari/kültéri mozgó alkalmazásokra való.' }
      ]
    },

    /* ---------------- 4.6 H07G ---------------- */
    {
      id: 'c6', code: '4.6', title: 'H07G — hőálló szilikongumi vezeték',
      blurb: 'Szilikongumi szigetelés +110 °C-ig. Kazán, szauna, fűtőtest, lámpatest — ahol a PVC már megolvadna.',
      pages: [
        {
          kicker: '4.6 · H07G (hőálló)',
          blocks: [
            { type: 'lead', text: 'A <em>H07G</em> egyeres réz vezetékre hőálló szilikongumi szigetelés kerül — ott használd, ahol a PVC már nem bírná a hőt.' },
            {
              type: 'cable3d', h: '3D modell',
              spec: { sheath: null, layout: 'single', cores: [{ color: 'brown', conductor: 'cu' }] },
              caption: 'H07G — egyetlen réz ér hőálló szilikongumi szigeteléssel (H07G-U tömör / H07G-K sodrott).'
            },
            {
              type: 'spec', h: 'Műszaki adatlap',
              rows: [
                ['Magyar név', 'hőálló szilikongumi vezeték (egyeres)'],
                ['Szabványos név', '<code>H07G-U</code> (tömör) / <code>H07G-K</code> (sodrott) · VDE 0282 · 450/750 V'],
                ['Felépítés', '1 réz ér + hőálló szilikongumi érszigetelés'],
                ['Hol használjuk', 'magas hőmérsékletű helyek: kazánok, szauna, fűtőtestek, lámpatestek bekötése; készülékek, kapcsoló- és elosztószekrények, védőcsőben, vakolat alatt/felett'],
                ['Extra infó', 'Kiemelkedő hőtűrés: <strong>−25…+110 °C</strong> (mozgatva), −40…+110 °C (rögzítve) — ott használd, ahol a PVC már megolvadna! Tesztfeszültség 2500 V.'],
                ['Valódi fotók', '<a href="https://www.google.com/search?tbm=isch&q=H07G+szilikon+vezet%C3%A9k" target="_blank" rel="noopener">▶ Megtekintés (Google képek)</a>']
              ]
            }
          ]
        },
        {
          kicker: '4.6 · Gyakorlat',
          blocks: [
            { type: 'callout', variant: 'danger', title: 'Hő ellen', html: 'A H07G ott a befutó, ahol a PVC megolvadna: <strong>+110 °C</strong>-ig használható.' },
            {
              type: 'scenario', gate: true, h: 'Melyik állítás IGAZ a H07G-ről?',
              items: [{
                q: 'Egy igaz állítás a hőálló H07G-ről!',
                ctx: 'Szigetelőanyag és hőtűrés.',
                options: [
                  { label: 'Szilikongumi szigetelés, +110 °C-ig hőálló — ott, ahol a PVC megolvadna', correct: true, why: 'Pontosan: kazán, szauna, fűtőtest, lámpatest — magas hőmérséklet.' },
                  { label: 'PVC szigetelés, kb. +70 °C-ig terhelhető', why: 'Nem: a H07G épp a PVC-nél jóval hőállóbb szilikongumi (+110 °C).' },
                  { label: 'Koncentrikus árnyékolású földkábel', why: 'Nem: az a leírás az NYCY-ra illik. A H07G egyeres hőálló vezeték.' },
                  { label: 'Gumiköpenyes kültéri mozgó kábel', why: 'Nem: az a GT. A H07G a magas hőmérséklethez, nem a mozgáshoz/kültérhez optimalizált.' }
                ]
              }]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Hol használjuk a H07G vezetéket?', options: [{ t: 'magas hőmérsékletű helyeken (kazán, szauna, fűtőtest, lámpatest)', correct: true }, { t: 'földbe fektetve' }, { t: 'kültéri hosszabbítóként' }, { t: 'gyengeáramú jelkábelként' }], explain: 'A szilikongumi szigetelés +110 °C-ig bírja — forró helyekre való.' },
        { type: 'single', q: 'Meddig hőálló a H07G (rögzítve)?', options: [{ t: '+110 °C-ig', correct: true }, { t: '+70 °C-ig' }, { t: '+50 °C-ig' }, { t: '+200 °C-ig' }], explain: 'Rögzítve −40…+110 °C, mozgatva −25…+110 °C.' },
        { type: 'tf', q: 'A H07G ott jó választás, ahol a PVC szigetelés már megolvadna.', answer: true, explain: 'Pontosan ez a lényege — hőálló szilikongumi.' }
      ]
    }
  ],

  /* ---------------- MODULKVÍZ ---------------- */
  quiz: [
    { type: 'single', q: 'Falba süllyesztve, később cserélhetően — melyik vezeték védőcsőben?', options: [{ t: 'MCu (H07V-U)', correct: true }, { t: 'GT' }, { t: 'MT' }, { t: 'H07G' }], explain: 'MCu + védőcső = korszerű, cserélhető lakásszerelés.' },
    { type: 'single', q: 'Kültéri, mozgó, strapabíró tápkábel:', options: [{ t: 'GT (H07RN-F)', correct: true }, { t: 'MT (H05VV-F)' }, { t: 'MCu' }, { t: 'H05V-K' }], explain: 'A gumikábel UV-/időjárásálló — kültérre, mozgó gépekhez.' },
    { type: 'single', q: 'Beltéri hosszabbító, lámpa, kis háztartási gép:', options: [{ t: 'MT (H05VV-F)', correct: true }, { t: 'GT' }, { t: 'NYY' }, { t: 'H07G' }], explain: 'Az MT beltéri tömlővezeték — pont erre való.' },
    { type: 'single', q: 'Kazán, szauna, +110 °C-ig:', options: [{ t: 'H07G szilikongumi', correct: true }, { t: 'MT' }, { t: 'MCu' }, { t: 'MKH' }], explain: 'A hőálló szilikongumi H07G bírja a magas hőmérsékletet.' },
    { type: 'single', q: 'Elosztószekrény belső, hajlékony huzalozása érvéghüvellyel:', options: [{ t: 'MKH (H07V-K)', correct: true }, { t: 'MCu tömör' }, { t: 'NYY' }, { t: 'GT' }], explain: 'A finomsodrott MKH hajlékony — érvéghüvellyel kötve.' },
    { type: 'multi', q: 'Mely típusoknál finomsodrott a vezető (érvéghüvely csavaros kötéshez)? (több is)', options: [{ t: 'MKH (H07V-K)', correct: true }, { t: 'H05V-K', correct: true }, { t: 'MCu (H07V-U)' }], explain: 'Az MKH és a H05V-K finomsodrott. Az MCu tömör (merev).' },
    { type: 'tf', q: 'Az MT (H05VV-F) közvetlenül kültérre is használható.', answer: false, explain: 'Nem — kültérre a GT való. Az MT beltéri.' }
  ]
});
