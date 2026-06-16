/* =====================================================================
   3. MODUL — VEZETÉK VAGY KÁBEL? A BESOROLÁS LOGIKÁJA
   ===================================================================== */
COURSE.addModule({
  id: 'm3',
  title: 'A besorolás logikája',
  subtitle: 'Miért kábel a GT, ha a neve „vezeték”? A köpeny dönt — de a magyar nevek néha félrevezetnek.',
  icon: 'compass',
  intro: 'A következő modulokban előbb a vezetékek, majd a kábelek jönnek. Itt tisztázzuk, mi alapján kerül egy termék az egyik vagy a másik csoportba — és miért okoz ez néha fejtörést.',
  badge: { id: 'm3', name: 'A Besorolás Mestere', desc: 'Átlátod a vezeték/kábel besorolás logikáját és buktatóit.', icon: 'compass' },

  chapters: [
    /* ---------------- 3.1 ---------------- */
    {
      id: 'c1', code: '3.1', title: 'A fő szabály: a köpenyen múlik',
      blurb: 'IEC 60050-461: egy szigetelőréteg → vezeték; érszigetelés + köpeny → kábel. Nem az érszám dönt!',
      pages: [
        {
          kicker: '3.1 · A nemzetközi definíció',
          blocks: [
            { type: 'lead', text: 'A nemzetközi szabvány (IEC 60050-461, „Electric cables”) és a gyártói szakmai anyagok egybehangzó meghatározása egyszerű — és csak egyetlen dologra figyel: <em>van-e külső köpeny?</em>' },
            {
              type: 'callout', variant: 'info', title: 'VEZETÉK',
              html: 'Ha a fémvezetőn <strong>csak egyetlen szigetelőréteg</strong> van (az érszigetelés), külső köpeny nélkül. Pl. <code>MCu</code>, <code>MKH</code>.'
            },
            {
              type: 'callout', variant: 'rule', title: 'KÁBEL',
              html: 'Ha a vezető(kö)n van érszigetelés, és afölött még <strong>legalább egy külső köpeny</strong> (esetleg kitöltőanyag, övréteg). Pl. <code>NYM</code>, <code>NYY</code>, <code>MBCu</code>.'
            },
            {
              type: 'callout', variant: 'warn', title: 'Nem az érszám dönt!',
              html: 'A köpeny dönt, nem az érszám. Létezik <strong>egyeres kábel</strong> (pl. <code>NYY 1×16</code> — egyetlen ér, de van köpenye), és a köznyelvi <strong>zsinórvezetékek</strong> (pl. lámpazsinór) többeresek, mégis „vezetéknek” hívjuk. A szabály: egy szigetelőréteg → vezeték; érszigetelés + köpeny → kábel.'
            },
            {
              type: 'callout', variant: 'info', title: 'Vakolat alá — mi a valóság?',
              html: 'A „mehet vakolat alá” nem egységes! Védőcső <strong>nélkül</strong> kifejezetten az <strong>MM-fal</strong> való vakolat alá. Az <strong>MCu</strong> csak védőcsőben. Az <strong>NYM (MBCu)</strong> jellemzően falon kívül / kábelcsatornában megy, de vakolatba ágyazva is használják. Az <strong>MT</strong> közvetlenül NEM vakolat alá. A pontos szabály a fektetési módtól és a termék minősítésétől függ (MSZ HD 60364-5-52).'
            }
          ]
        },
        {
          kicker: '3.1 · Gyakorold',
          blocks: [
            {
              type: 'vs',
              a: { title: 'Vezeték (köpeny nélkül)', items: ['1 szigetelőréteg az éren', 'Önállóan NEM mehet falba/földbe', 'Védőcső, csatorna, készülék kell köré', 'Pl. MCu, MKH, H05V-K'] },
              b: { title: 'Kábel (van köpeny)', items: ['Érszigetelés + külső köpeny', 'Falra, csatornába; típustól függően vakolat alá / földbe', 'A köpeny véd a sérüléstől és nedvességtől', 'Pl. NYM (MBCu), NYY, NYCY'] }
            },
            { type: 'h3', text: 'Sorold be szerkezet alapján!' },
            {
              type: 'match', gate: true, leftLabel: 'Termék', rightLabel: 'Szerkezeti besorolás',
              pairs: [
                { left: 'MCu (1 szigetelt rézszál)', right: 'Vezeték — nincs köpeny, cső kell' },
                { left: 'MKH (finomsodrott, 1 réteg)', right: 'Vezeték — nincs köpeny' },
                { left: 'NYM / MBCu (köpenyes)', right: 'Kábel — van külső köpeny' },
                { left: 'NYY (földkábel)', right: 'Kábel — vastag köpeny, földbe is' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          type: 'single', q: 'Az IEC 60050-461 szerint mi a vezeték/kábel határvonal?',
          options: [{ t: 'a külső köpeny megléte', correct: true }, { t: 'az erek száma' }, { t: 'a réz vagy alumínium vezető' }, { t: 'a feszültség nagysága' }],
          explain: 'Egyetlen szigetelőréteg → vezeték; érszigetelés + külső köpeny → kábel.'
        },
        {
          type: 'tf', q: 'Létezik többeres vezeték és egyeres kábel is — tehát nem az érszám dönt.', answer: true,
          explain: 'Pontosan. A besorolást a köpeny léte dönti el, nem az erek száma.'
        },
        {
          type: 'single', q: 'Miért nem mehet az MCu önmagában a falba?',
          options: [{ t: 'Mert nincs köpenye — védőcső kell köré', correct: true }, { t: 'Mert alumínium' }, { t: 'Mert túl vastag' }, { t: 'Mert gyengeáramú' }],
          explain: 'Az MCu vezeték (egy szigetelőréteg), nincs mechanikai/nedvesség elleni köpenye, ezért védőcsőbe való.'
        }
      ]
    },

    /* ---------------- 3.2 ---------------- */
    {
      id: 'c2', code: '3.2', title: 'A buktató: a név néha „hazudik”',
      blurb: 'Az MT, GT és MBCu neve „vezeték”, pedig van köpenyük. A GT hivatalosan is gumikábel.',
      pages: [
        {
          kicker: '3.2 · Amikor a név félrevezet',
          blocks: [
            { type: 'lead', text: 'Néhány terméknek szerkezetileg <strong>van köpenye</strong> (tehát a szabály szerint kábel lenne), a neve mégis „vezeték” — történeti, hagyományból ragadt okból.' },
            {
              type: 'table', h: 'A három klasszikus csapda',
              head: ['Termék', 'Van köpenye?', 'Hivatalos neve', 'Hova soroltuk és miért'],
              rows: [
                ['<code>MT</code>', 'igen (könnyű PVC tömlőköpeny)', 'tömlővezeték / installációs kábel', 'a Vezetékek közé — a neve „vezeték”, könnyű, hajlékony csatlakozó-funkciója is ehhez áll közelebb'],
                ['<code>GT</code>', 'igen (gumiköpeny)', 'gumikábel (H05RR-F / H07RN-F)', 'a Vezetékek közé — a használata (mozgó, dugaszolható) az MT-hez köti; de szerkezetileg ÉS hivatalosan is KÁBEL (VDE 0282)'],
                ['<code>MBCu</code>', 'igen (PVC köpeny + övréteg)', 'NYM installációs kábel', 'a Kábelek közé — bár a magyar név vezetékre utal, ez köpenyes installációs kábel, a szabvány is NYM-ként kezeli']
              ]
            },
            { type: 'p', text: 'Röviden a GT-ről (és nem többször): a neve „gumitömlő-vezeték”, de szerkezetileg és szabvány szerint (VDE 0282) is <strong>gumikábel</strong>. A szakmában mindenki „gumikábelnek” hívja — ennyi, ezt jegyezd meg, és lépjünk tovább.' }
          ]
        },
        {
          kicker: '3.2 · Gyakorlati fogódzó',
          blocks: [
            { type: 'p', text: 'Ha valaki kételkedne, két kérdés szinte mindig eldönti. Próbáld ki a helyzeteket!' },
            {
              type: 'scenario', gate: true, h: 'Döntsd el a helyzeteket!',
              items: [
                {
                  q: 'Az erek körül egy közös külső burkolat (köpeny) fut. Szerkezetileg mi ez?',
                  ctx: '1. fogódzó: van-e közös külső burkolat az ereken?',
                  options: [
                    { label: 'Kábel', sub: 'van köpeny', correct: true, why: 'Ha van közös burkolat (köpeny) az erek körül, az szerkezetileg kábel.' },
                    { label: 'Vezeték', sub: 'nincs köpeny', why: 'A közös burkolat megléte épp a köpenyt jelzi → kábel.' },
                    { label: 'Nem eldönthető', sub: '', why: 'De igen: a köpeny megléte eldönti — kábel.' }
                  ]
                },
                {
                  q: 'Az MCu (egy szigetelt rézszál) mehet-e önmagában, védelem nélkül a falba?',
                  ctx: '2. fogódzó kérdés: mehet-e önállóan falba/földbe?',
                  options: [
                    { label: 'Nem — cső kell neki', sub: 'tehát vezeték', correct: true, why: 'A vezeték (MCu, MKH) önállóan nem mehet falba — védőcső kell. Ez árulja el, hogy vezeték.' },
                    { label: 'Igen, simán', sub: '', why: 'Vezetéket önállóan nem szabad vakolat alá tenni — védőcső kell.' }
                  ]
                }
              ]
            },
            {
              type: 'callout', variant: 'rule', title: 'A lényeg a vizsgán és a boltban',
              html: 'Ne a <strong>néven</strong>, hanem a <strong>szerkezeten</strong> és a <strong>felhasználáson</strong> gondolkodj. A régi magyar nevek néha félrevezetnek: a „GT-vezeték” valójában gumikábel; az „MBCu vezeték” valójában köpenyes NYM-kábel.'
            }
          ]
        }
      ],
      quiz: [
        {
          type: 'single', q: 'A GT szerkezetileg és szabvány szerint (VDE 0282) valójában:',
          options: [{ t: 'gumikábel (gumi szigetelés + gumiköpeny)', correct: true }, { t: 'köpeny nélküli vezeték' }, { t: 'földkábel' }, { t: 'gyengeáramú jelkábel' }],
          explain: 'A GT finomsodrott rézvezető + gumi érszigetelés + gumiköpeny → szerkezetileg és hivatalosan is gumikábel. A neve vezet félre.'
        },
        {
          type: 'multi', q: 'Mely termékeknek van köpenye, a nevük ellenére? (több is)',
          options: [{ t: 'MT', correct: true }, { t: 'GT', correct: true }, { t: 'MBCu', correct: true }, { t: 'MCu' }],
          explain: 'Az MT, GT és MBCu mind köpenyes, bár a nevük „vezetékre” utalhat. Az MCu valóban köpeny nélküli vezeték.'
        },
        {
          type: 'tf', q: 'A besorolásnál a névre kell hagyatkozni, nem a szerkezetre.', answer: false,
          explain: 'Fordítva: a szerkezetre és a felhasználásra figyelj, mert a régi magyar nevek félrevezethetnek.'
        },
        {
          type: 'single', q: 'Két gyakorlati fogódzó kérdés a besoroláshoz. Melyik az egyik?',
          options: [
            { t: '„Van-e közös burkolat az erek körül (nem a vakolat)?”', correct: true },
            { t: '„Hány fillérbe kerül méterenként?”' },
            { t: '„Milyen színű a köpeny?”' },
            { t: '„Hány éves a kábel?”' }
          ],
          explain: 'A két fogódzó: (1) van-e közös burkolat? → kábel; (2) mehet-e önállóan falba/földbe? Vezeték nem (cső kell), köpenyes kábel igen.'
        }
      ]
    }
  ],

  /* ---------------- MODULKVÍZ ---------------- */
  quiz: [
    { type: 'single', q: 'Mi a vezeték és kábel közti elhatárolás alapja (IEC 60050-461)?', options: [{ t: 'a külső köpeny megléte', correct: true }, { t: 'az érszám' }, { t: 'a vezető anyaga' }, { t: 'a gyártó' }], explain: 'A köpeny: egy réteg → vezeték, érszigetelés + köpeny → kábel.' },
    { type: 'tf', q: 'A GT a neve ellenére szerkezetileg és szabvány szerint is kábel.', answer: true, explain: 'GT = gumikábel (VDE 0282): gumi szigetelés + gumiköpeny.' },
    { type: 'single', q: 'Melyik valóban köpeny nélküli VEZETÉK?', options: [{ t: 'MCu', correct: true }, { t: 'NYM' }, { t: 'GT' }, { t: 'NYY' }], explain: 'Az MCu egy szigetelt ér köpeny nélkül. A többi köpenyes.' },
    { type: 'single', q: 'Az MBCu a magyar neve ellenére valójában:', options: [{ t: 'köpenyes installációs kábel (NYM)', correct: true }, { t: 'köpeny nélküli vezeték' }, { t: 'gyengeáramú kábel' }, { t: 'alumínium földkábel' }], explain: 'MBCu = NYM, köpenyes installációs kábel — a szabvány is így kezeli.' },
    { type: 'single', q: 'Egy köpeny nélküli vezeték (pl. MKH) hogyan mehet vakolat alá?', options: [{ t: 'csak védőcsőben / csatornában', correct: true }, { t: 'közvetlenül, ahogy van' }, { t: 'homokágyban' }, { t: 'sehogy, tilos beltérben' }], explain: 'Köpeny nélküli vezetéknek védőcső vagy kábelcsatorna kell.' }
  ]
});
