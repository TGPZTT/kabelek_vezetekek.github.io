/* =========================test
=======================================
   2. MODUL — A JELÖLÉSEK MEGFEJTÉSE
   ===================================================================== */
COURSE.addModule({
  id: 'm2',
  title: 'A jelölések megfejtése',
  subtitle: 'Három rendszer él egymás mellett: magyar (MSZ), harmonizált (CENELEC) és német (VDE). Ha a logikát érted, bármit elolvasol.',
  icon: 'key',
  intro: 'Magyarországon ugyanarra a termékre háromféle megnevezést látsz: régi magyar betűjel (<code>MCu</code>), ' +
    'európai harmonizált kód (<code>H07V-U</code>) és német VDE-típusjel (<code>NYM-J</code>). ' +
    'A katalógusok együtt írják: „MCu (H07V-U)”. Itt megtanulod mindhármat <em>pozíciónként</em> olvasni.',
  badge: { id: 'm2', name: 'A Jelek Megfejtője', desc: 'Megfejtetted mindhárom jelölésrendszert.', icon: 'key' },

  chapters: [
    /* ---------------- 2.1 Magyar ---------------- */
    {
      id: 'c1', code: '2.1', title: 'Magyar (MSZ) betűjelek',
      blurb: 'M = műanyag, B = burkolt (köpenyes), Cu = réz, T = tömlő, KH = különösen hajlékony, G = gumi, MM = dupla műanyag.',
      pages: [
        {
          kicker: '2.1 · Három rendszer',
          blocks: [
            { type: 'lead', text: 'A régi magyar (MSZ) betűjelek szinte mindig az <em>M</em> betűvel kezdődnek (= műanyag szigetelés). A többi betű a felépítést, az anyagot és az ér fajtáját kódolja.' },
            { type: 'p', text: 'A katalógusok gyakran együtt írják a magyar és a nemzetközi nevet: „<strong>MCu (H07V-U)</strong>”. Ha a betűk logikáját egyszer megérted, bármilyen hosszú jelölést el tudsz olvasni.' }
          ]
        },
        {
          kicker: '2.1 · A betűk jelentése',
          blocks: [
            {
              type: 'table', h: 'A magyar (MSZ) betűjelek',
              head: ['Betű', 'Jelentés', 'Megjegyzés'],
              rows: [
                ['<code>M</code>', 'Műanyag (PVC) szigetelés', 'szinte minden régi magyar jel ezzel kezdődik'],
                ['<code>B</code>', 'Burkolt = van külső köpeny', 'MBCu → köpenyes, falba vakolható'],
                ['<code>Cu</code>', 'réz vezető', 'Cuprum'],
                ['<code>A / Al</code>', 'alumínium vezető', 'pl. régi MBAl, alumínium földkábelek'],
                ['<code>T</code>', 'Tömlővezeték (hajlékony, könnyű köpeny)', 'MT, MTK (K = könnyű kivitel)'],
                ['<code>kh / KH</code>', 'Különösen Hajlékony (finomsodrott) ér', 'MKH = műanyag szigetelésű, különösen hajlékony'],
                ['<code>G</code>', 'Gumi szigetelés', 'GT = gumiszigetelésű tömlővezeték · Gkh = gumi, különösen hajlékony'],
                ['<code>MM</code>', 'dupla Műanyag réteg (érszigetelés + külső réteg)', 'MM-fal / MMCu = LAPOS, fehér falvezeték'],
                ['<code>fal</code>', 'falba (vakolat alá) helyezhető', 'MM-fal: vakolat alá, védőcső nélkül'],
                ['<code>L / Zs</code>', 'Lapos · Zsinór', 'MTL = lapos tömlőzsinór · MZsl = lapos zsinórvezeték']
              ]
            }
          ]
        },
        {
          kicker: '2.1 · Dekódolj!',
          blocks: [
            { type: 'p', text: 'Most fejtsük meg a leggyakoribb szerelvénykábel magyar nevét. Kattints sorban a betűkre!' },
            {
              type: 'decoder', gate: true, code: 'MBCu', title: 'Fejtsd meg: ',
              parts: [
                { glyph: 'M', label: 'Műanyag', html: 'PVC <strong>érszigetelés</strong>.' },
                { glyph: 'B', label: 'Burkolt', html: 'van külső <strong>köpeny</strong> → vakolat alá vakolható.' },
                { glyph: 'Cu', label: 'Réz', html: 'a vezető anyaga réz.' }
              ],
              result: '<code>MBCu</code> = KÖR keresztmetszetű, szürke szerelvénykábel = <code>NYM-J</code>. A boltok így írják: „MBCu (NYM-J)”.'
            }
          ]
        },
        {
          kicker: '2.1 · Példák és csapda',
          blocks: [
            { type: 'h', text: 'További megfejtett példák' },
            {
              type: 'list', items: [
                '<code>MCu</code> = Műanyag + Cu (réz) → tömör rézvezeték = <code>H07V-U</code>',
                '<code>MKH</code> = Műanyag + Különösen Hajlékony → finomsodrott vezeték = <code>H07V-K</code>',
                '<code>MT</code> = Műanyag + Tömlő → hajlékony tömlővezeték = <code>H05VV-F</code>',
                '<code>MM-fal (MMCu)</code> = dupla Műanyag réteg + falba → LAPOS, fehér falvezeték (YDYt / YMSteg / NYIFY jelleg)'
              ]
            },
            {
              type: 'callout', variant: 'warn', title: 'Gyakori tévesztés!',
              html: 'Az <strong>MM-fal a LAPOS</strong>, az <strong>MBCu a KÖR</strong> keresztmetszetű! Mindkettő mehet vakolat alá, de nem ugyanaz a termék.'
            },
            { type: 'h3', text: 'Párosítsd a magyar jelet a jelentésével!' },
            {
              type: 'match', gate: true, leftLabel: 'Magyar jel', rightLabel: 'Mit jelent?',
              pairs: [
                { left: 'MBCu', right: 'köpenyes, KÖR, szürke = NYM-J' },
                { left: 'MM-fal', right: 'dupla műanyag réteg, LAPOS, fehér' },
                { left: 'MKH', right: 'különösen hajlékony (finomsodrott) = H07V-K' },
                { left: 'GT', right: 'gumiszigetelésű tömlővezeték' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          type: 'single', q: 'Mit jelent a B betű az MBCu jelölésben?',
          options: [{ t: 'Burkolt = van külső köpeny', correct: true }, { t: 'Barna ér' }, { t: 'Bevont alumínium' }, { t: 'Beltéri' }],
          explain: 'B = Burkolt, azaz van külső köpeny — ezért vakolható falba. MBCu = NYM-J.'
        },
        {
          type: 'single', q: 'Melyik LAPOS, fehér, falba vakolható vezeték?',
          options: [{ t: 'MM-fal (MMCu)', correct: true }, { t: 'MBCu' }, { t: 'MKH' }, { t: 'MT' }],
          explain: 'MM = dupla műanyag réteg, „fal” = falba helyezhető → LAPOS, fehér. Az MBCu ezzel szemben KÖR és szürke.'
        },
        {
          type: 'single', q: 'Mit kódol a KH a magyar jelölésben (pl. MKH)?',
          options: [{ t: 'Különösen Hajlékony (finomsodrott) ér', correct: true }, { t: 'Köpeny + ház' }, { t: 'Kis Hőmérséklet' }, { t: 'Kettős Hüvely' }],
          explain: 'KH = Különösen Hajlékony, finomsodrott ér. MKH = H07V-K.'
        },
        {
          type: 'multi', q: 'Mely betűk jelentését kötötted helyesen? (több is)',
          options: [
            { t: 'M = Műanyag (PVC) szigetelés', correct: true },
            { t: 'G = Gumi szigetelés', correct: true },
            { t: 'T = Tömlővezeték', correct: true },
            { t: 'Cu = alumínium' }
          ],
          explain: 'Cu = réz (Cuprum); az alumínium jele A/Al. A többi helyes.'
        }
      ]
    },

    /* ---------------- 2.2 Harmonizált ---------------- */
    {
      id: 'c2', code: '2.2', title: 'Harmonizált (CENELEC) jelölés',
      blurb: 'A HD 361 kód minden jele meghatározott pozícióban áll, és mindig ugyanazt jelenti.',
      pages: [
        {
          kicker: '2.2 · Pozíciónként olvasd',
          blocks: [
            { type: 'lead', text: 'A harmonizált (CENELEC, HD 361) kód olyan, mint egy <em>rögzített szótagsor</em>: minden betű/szám a saját helyén áll, és mindig ugyanazt jelenti.' },
            {
              type: 'table', h: 'A pozíciók és jelentésük',
              head: ['Pozíció', 'Lehetséges jelek', 'Jelentés'],
              rows: [
                ['1. szabvány', 'H / A', 'H = harmonizált (európai) · A = nemzeti elismert típus'],
                ['2. feszültség', '03 / 05 / 07', '03 = 300/300 V · 05 = 300/500 V · 07 = 450/750 V'],
                ['3. érszigetelés', 'V / R / N / Z', 'V = PVC · R = gumi · N = neoprén · Z = halogénmentes térhálós'],
                ['4. köpeny (ha van)', 'V / R / N', 'ugyanazok az anyagjelek, második helyen = köpeny'],
                ['5. különlegesség', 'H / H2', 'H = lapos, szétválasztható erek · H2 = lapos, nem szétválasztható'],
                ['6. vezető (kötőjel után)', '-U / -R / -K / -F / -H', 'U = tömör · R = sodrott · K = finomsodrott (fix) · F = hajlékony (mozgó) · H = legfinomabb'],
                ['7. erek × mm²', 'pl. 3G1,5 / 3×2,5', 'G = van zöld-sárga ér · × = nincs zöld-sárga ér']
              ]
            }
          ]
        },
        {
          kicker: '2.2 · Dekódolj!',
          blocks: [
            { type: 'p', text: 'Fejtsük meg pozíciónként a hajlékony tömlővezeték kódját:' },
            {
              type: 'decoder', gate: true, code: 'H05VV-F 3G1,5', title: 'Fejtsd meg: ',
              parts: [
                { glyph: 'H', label: 'Harmonizált', html: 'európai harmonizált típus.' },
                { glyph: '05', label: '300/500 V', html: 'névleges feszültség.' },
                { glyph: 'V', label: 'PVC szigetelés', html: 'az <strong>érszigetelés</strong> anyaga (3. pozíció).' },
                { glyph: 'V', label: 'PVC köpeny', html: 'a <strong>köpeny</strong> anyaga (4. pozíció).' },
                { glyph: '-F', label: 'Hajlékony erek', html: 'finomsodrott, mozgó alkalmazáshoz.' },
                { glyph: '3G1,5', label: '3 ér, van zöld-sárga', html: 'G = tartalmaz zöld-sárga védőeret; 3 × 1,5 mm².' }
              ],
              result: '<code>H05VV-F 3G1,5</code> = <strong>MT</strong> tömlővezeték.'
            }
          ]
        },
        {
          kicker: '2.2 · Példák és párosító',
          blocks: [
            { type: 'h', text: 'További megfejtések' },
            {
              type: 'list', items: [
                '<code>H07V-U 1×2,5</code> → 450/750 V, PVC, tömör ér → <strong>MCu</strong>',
                '<code>H07V-K 1×16</code> → ugyanaz, de finomsodrott → <strong>MKH</strong>',
                '<code>H07RN-F 3G2,5</code> → 450/750 V, gumi szigetelés + neoprén köpeny, hajlékony → <strong>GT</strong> gumikábel'
              ]
            },
            { type: 'h3', text: 'Párosítsd a harmonizált kódot a magyar névvel!' },
            {
              type: 'match', gate: true, leftLabel: 'Harmonizált kód', rightLabel: 'Magyar név',
              pairs: [
                { left: 'H07V-U', right: 'MCu (tömör rézvezeték)' },
                { left: 'H07V-K', right: 'MKH (finomsodrott)' },
                { left: 'H05VV-F', right: 'MT (tömlővezeték)' },
                { left: 'H07RN-F', right: 'GT (gumikábel)' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          type: 'single', q: 'A harmonizált kódban a 2. pozíció „07” mit jelent?',
          options: [{ t: '450/750 V névleges feszültség', correct: true }, { t: '7 eret' }, { t: '0,7 mm² keresztmetszet' }, { t: '7 réteg szigetelés' }],
          explain: '07 = 450/750 V. (03 = 300/300 V, 05 = 300/500 V.)'
        },
        {
          type: 'single', q: 'A H05VV-F kódban a két V egymás után mit jelent?',
          options: [
            { t: 'PVC érszigetelés (3. poz.) és PVC köpeny (4. poz.)', correct: true },
            { t: 'Kétszeres feszültség' }, { t: 'Két eret' }, { t: 'Két réteg gumit' }
          ],
          explain: 'Az első V (3. pozíció) az érszigetelés, a második V (4. pozíció) a köpeny anyaga — mindkettő PVC.'
        },
        {
          type: 'single', q: 'A kötőjel utáni -U mit jelez?',
          options: [{ t: 'tömör vezető', correct: true }, { t: 'finomsodrott' }, { t: 'sodrott' }, { t: 'hajlékony' }],
          explain: '-U = tömör. (-R sodrott, -K finomsodrott fixhez, -F hajlékony mozgóhoz.)'
        },
        {
          type: 'single', q: 'Mi a különbség a 3G1,5 és a 3×1,5 jelölés között?',
          options: [
            { t: 'G = van zöld-sárga védőér; × = nincs zöld-sárga ér', correct: true },
            { t: 'G = gumi, × = PVC' }, { t: 'Semmi, ugyanaz' }, { t: 'G = 3 fázis, × = 1 fázis' }
          ],
          explain: 'A G azt jelzi, hogy van zöld-sárga (PE) ér; a × azt, hogy nincs zöld-sárga ér a kötegben.'
        },
        {
          type: 'tf', q: 'A H07RN-F gumi érszigetelésű, neoprén köpenyű, hajlékony kábel.', answer: true,
          explain: 'Igen: R = gumi érszigetelés, N = neoprén köpeny, -F = hajlékony. Ez a GT gumikábel.'
        }
      ]
    },

    /* ---------------- 2.3 VDE ---------------- */
    {
      id: 'c3', code: '2.3', title: 'Német (VDE) típusjelek',
      blurb: 'N-nel kezdődnek. Y = PVC, M = köpenyes (Mantel), C = koncentrikus, W = hullámos, -J/-O = van/nincs zöld-sárga.',
      pages: [
        {
          kicker: '2.3 · A VDE-betűk',
          blocks: [
            { type: 'lead', text: 'A német VDE-eredetű típusjelek mindig <em>N</em>-nel kezdődnek (Norm = szabvány). Innen pozíciónként épülnek fel.' },
            {
              type: 'table', h: 'A VDE típusjelek',
              head: ['Jel', 'Jelentés', 'Megjegyzés'],
              rows: [
                ['<code>N</code>', 'VDE szabvány szerinti típus (Norm)', 'minden ilyen jel ezzel kezdődik'],
                ['<code>A</code> (N után)', 'alumínium vezető', 'NAYY = alumínium; ha nincs A → réz'],
                ['<code>Y</code>', 'PVC', '1. Y = érszigetelés, 2. Y = köpeny (NYY = PVC+PVC)'],
                ['<code>M</code>', 'köpenyes szerelvényvezeték (Mantel)', 'NYM = PVC szigetelés + köpeny, beltéri'],
                ['<code>C</code>', 'koncentrikus réz vezető a köpeny alatt', 'NYCY, NYCWY — betápkábelek'],
                ['<code>W</code>', 'hullámosan fektetett koncentrikus vezető', 'NYCWY — vágáskor is megmarad a kontaktus'],
                ['<code>H</code> (pl. NHXMH)', 'halogénmentes', 'középületek, menekülési útvonalak'],
                ['<code>-J / -O</code>', 'J = van zöld-sárga · O = nincs', 'NYM-J: van védőér · NYM-O: nincs'],
                ['<code>re/rm/se/sm</code>', 'ér alakja és sodrása', 'r = kör, s = szektor · e = tömör, m = sodrott'],
                ['<code>0,6/1 kV</code>', 'névleges feszültség (fázis–föld / fázis–fázis)', 'a földkábelek (NYY, NAYY) 1 kV-osak']
              ]
            }
          ]
        },
        {
          kicker: '2.3 · Dekódolj!',
          blocks: [
            { type: 'p', text: 'Fejtsük meg a leggyakoribb szerelvénykábelt VDE-jelöléssel:' },
            {
              type: 'decoder', gate: true, code: 'NYM-J 3×1,5', title: 'Fejtsd meg: ',
              parts: [
                { glyph: 'N', label: 'VDE típus', html: 'szabvány szerinti típus (Norm).' },
                { glyph: 'Y', label: 'PVC szigetelés', html: 'az érszigetelés anyaga.' },
                { glyph: 'M', label: 'Köpenyes (Mantel)', html: 'köpenyes szerelvényvezeték.' },
                { glyph: '-J', label: 'Van zöld-sárga', html: 'tartalmaz védőeret (PE).' },
                { glyph: '3×1,5', label: '3 ér × 1,5 mm²', html: 'érszám és keresztmetszet.' }
              ],
              result: '<code>NYM-J 3×1,5</code> = az <strong>MBCu</strong> — KÖR, szürke szerelvénykábel.'
            }
          ]
        },
        {
          kicker: '2.3 · A trükkös /16',
          blocks: [
            { type: 'p', text: 'A koncentrikus betápkábelnél egy plusz szám is megjelenik. Fejtsük meg:' },
            {
              type: 'decoder', gate: true, code: 'NYCWY 3×25/16', title: 'Fejtsd meg: ',
              parts: [
                { glyph: 'N', label: 'VDE típus', html: 'szabvány szerinti típus.' },
                { glyph: 'Y', label: 'PVC szigetelés', html: 'érszigetelés anyaga.' },
                { glyph: 'C', label: 'Koncentrikus vezető', html: 'a köpeny alatt körben futó rézvezető.' },
                { glyph: 'W', label: 'Hullámos (wellig)', html: 'a koncentrikus vezető hullámosan fektetett.' },
                { glyph: 'Y', label: 'PVC köpeny', html: 'külső köpeny anyaga.' },
                { glyph: '3×25', label: '3 fő ér × 25 mm²', html: 'a fő erek keresztmetszete.' },
                { glyph: '/16', label: 'koncentrikus vezető', html: 'a koncentrikus vezető keresztmetszete <strong>16 mm²</strong>.' }
              ],
              result: '<code>NYCWY 3×25/16</code> → 3 ér 25 mm² + hullámos koncentrikus vezető 16 mm². A <strong>/16</strong> a koncentrikus vezetőé!'
            },
            {
              type: 'list', items: [
                '<code>NYY-J 5×2,5 re</code> → PVC+PVC földkábel, zöld-sárgával, 5×2,5 mm², kör tömör erek',
                '<code>NAYY-J 4×16 re 0,6/1 kV</code> → alumínium földkábel, 4×16 mm², tömör kör erek, 1 kV'
              ]
            }
          ]
        },
        {
          kicker: '2.3 · Párosító',
          blocks: [
            { type: 'h', text: 'Párosítsd a VDE-jelet a jelentésével!' },
            {
              type: 'match', gate: true, leftLabel: 'VDE jel', rightLabel: 'Jelentés',
              pairs: [
                { left: 'M (NYM)', right: 'köpenyes szerelvényvezeték (Mantel)' },
                { left: 'A (NAYY)', right: 'alumínium vezető' },
                { left: 'C / W', right: 'koncentrikus / hullámos vezető' },
                { left: '-J', right: 'van zöld-sárga védőér' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          type: 'single', q: 'Mit jelez az M betű az NYM jelölésben?',
          options: [{ t: 'köpenyes szerelvényvezeték (Mantel)', correct: true }, { t: 'alumínium' }, { t: 'merev ér' }, { t: 'mérőkábel' }],
          explain: 'M = Mantel = köpenyes szerelvényvezeték. Innen ered a magyar „M” is.'
        },
        {
          type: 'single', q: 'A NYCWY 3×25/16 jelölésben a /16 mit jelent?',
          options: [
            { t: 'a koncentrikus vezető keresztmetszete (16 mm²)', correct: true },
            { t: 'a kábel hossza' }, { t: '16 eret' }, { t: 'a feszültséget' }
          ],
          explain: 'A / utáni szám a koncentrikus (hullámos) vezető keresztmetszete: itt 16 mm².'
        },
        {
          type: 'single', q: 'Mit jelez az A betű az NAYY-ban (az N után)?',
          options: [{ t: 'alumínium vezető', correct: true }, { t: 'árnyékolás' }, { t: 'acélpáncél' }, { t: 'automata' }],
          explain: 'N + A → alumínium vezető. Ha nincs A, a vezető réz.'
        },
        {
          type: 'tf', q: 'Az NYM-O jelölés azt jelenti, hogy NINCS benne zöld-sárga védőér.', answer: true,
          explain: 'Igen: -J = van zöld-sárga, -O = nincs (ohne).'
        },
        {
          type: 'single', q: 'A C és W betűk együtt (NYCWY) mit kódolnak?',
          options: [
            { t: 'hullámosan fektetett koncentrikus rézvezetőt', correct: true },
            { t: 'kettős köpenyt' }, { t: 'két fázist' }, { t: 'hőálló kivitelt' }
          ],
          explain: 'C = koncentrikus vezető, W = wellig (hullámos). Együtt: hullámos koncentrikus vezető a köpeny alatt.'
        }
      ]
    },

    /* ---------------- 2.4 Teljes megnevezés ---------------- */
    {
      id: 'c4', code: '2.4', title: 'A teljes katalógus-megnevezés',
      blurb: 'Magyar név + zárójelben a nemzetközi megfelelő + a feszültség. Egy termék, több név.',
      pages: [
        {
          kicker: '2.4 · Összeáll a kép',
          blocks: [
            { type: 'lead', text: 'Egy bolti megnevezés gyakran mindhárom információt egyben hozza. Fejtsük meg a teljes sort!' },
            {
              type: 'decoder', gate: true, code: 'MBCu 3×2,5 (NYM-J 3×2,5) 300/500 V', title: 'Fejtsd meg a teljes nevet: ',
              parts: [
                { glyph: 'MBCu', label: 'Magyar név', html: 'Műanyag + Burkolt + réz = köpenyes szerelvénykábel.' },
                { glyph: '3×2,5', label: 'Erek × mm²', html: '3 ér, egyenként 2,5 mm².' },
                { glyph: '(NYM-J 3×2,5)', label: 'Nemzetközi megfelelő', html: 'ugyanaz a termék VDE-jelöléssel; a J = van zöld-sárga ér.' },
                { glyph: '300/500 V', label: 'Névleges feszültség', html: 'a kábel feszültség-osztálya.' }
              ],
              result: 'Elöl a magyar név, zárójelben a nemzetközi megfelelő, végén a feszültség — <strong>ugyanazt a terméket</strong> jelöli két rendszerben.'
            },
            {
              type: 'callout', variant: 'tip', title: 'A lényeg',
              html: 'Ha bármelyik nevet felismered, tudod, mit fogsz a kezedben. Nem kell fejből tudni minden megfeleltetést — elég a logikát olvasni.'
            }
          ]
        },
        {
          kicker: '2.4 · Rögzítsd a megfeleléseket',
          blocks: [
            { type: 'h', text: 'Tanulókártyák — fordítsd meg mindet!' },
            {
              type: 'flashcards', gate: true,
              intro: 'A leggyakoribb magyar ↔ nemzetközi megfelelők. Kattints a kártyákra a megfejtéshez.',
              cards: [
                { front: 'MCu', back: '<b>H07V-U</b><br>tömör rézvezeték' },
                { front: 'MKH', back: '<b>H07V-K</b><br>finomsodrott vezeték' },
                { front: 'MT', back: '<b>H05VV-F</b><br>tömlővezeték' },
                { front: 'MBCu', back: '<b>NYM-J</b><br>KÖR, szürke szerelvénykábel' },
                { front: 'GT', back: '<b>H07RN-F</b> / H05RR-F<br>gumikábel' },
                { front: 'MM-fal', back: 'YDYt / NYIFY jelleg<br>LAPOS, fehér falvezeték' }
              ]
            }
          ]
        }
      ],
      quiz: [
        {
          type: 'single', q: 'A „MBCu 3×2,5 (NYM-J 3×2,5) 300/500 V” megnevezésben mi a zárójeles rész?',
          options: [
            { t: 'a nemzetközi (VDE) megfelelő — ugyanaz a termék', correct: true },
            { t: 'egy másik, gyengébb kábel' }, { t: 'a gyártó neve' }, { t: 'a szín' }
          ],
          explain: 'A zárójelben a nemzetközi megfelelő szerepel; a magyar és a nemzetközi név ugyanazt a terméket jelöli.'
        },
        {
          type: 'single', q: 'Melyik a helyes megfeleltetés?',
          options: [
            { t: 'MT = H05VV-F', correct: true },
            { t: 'MT = H07V-U' }, { t: 'MT = NYY-J' }, { t: 'MT = NAYY' }
          ],
          explain: 'MT (tömlővezeték) = H05VV-F.'
        },
        {
          type: 'text', q: 'Írd be a MBCu nemzetközi (VDE) megfelelőjét! (pl. NYM-J)',
          accept: ['NYM-J', 'NYMJ', 'NYM'],
          explain: 'MBCu = NYM-J — a KÖR keresztmetszetű, szürke szerelvénykábel.'
        }
      ]
    }
  ],

  /* ---------------- MODULKVÍZ ---------------- */
  quiz: [
    { type: 'single', q: 'Hány jelölésrendszer él párhuzamosan ugyanarra a termékre Magyarországon?', options: [{ t: 'Három (magyar MSZ, harmonizált CENELEC, német VDE)', correct: true }, { t: 'Egy' }, { t: 'Kettő' }, { t: 'Négy' }], explain: 'Magyar (MSZ), harmonizált (CENELEC/HD 361) és német (VDE) — három rendszer.' },
    { type: 'single', q: 'MBCu = ?', options: [{ t: 'NYM-J', correct: true }, { t: 'H07V-U' }, { t: 'NYY-J' }, { t: 'NAYY' }], explain: 'MBCu = NYM-J, a KÖR, szürke szerelvénykábel.' },
    { type: 'single', q: 'A harmonizált kód 3. pozíciója (pl. V) mit ad meg?', options: [{ t: 'az érszigetelés anyagát', correct: true }, { t: 'a feszültséget' }, { t: 'az erek számát' }, { t: 'a vezető alakját' }], explain: '3. pozíció = érszigetelés (V=PVC, R=gumi, N=neoprén, Z=halogénmentes).' },
    { type: 'single', q: 'NYCWY 3×25/16 — a /16 micsoda?', options: [{ t: 'a koncentrikus vezető keresztmetszete', correct: true }, { t: 'a kábel hossza' }, { t: 'a feszültség' }, { t: 'az erek száma' }], explain: 'A koncentrikus (hullámos) vezető keresztmetszete 16 mm².' },
    { type: 'single', q: 'H07V-K = ?', options: [{ t: 'MKH', correct: true }, { t: 'MCu' }, { t: 'MT' }, { t: 'GT' }], explain: 'H07V-K (finomsodrott) = MKH.' },
    { type: 'tf', q: 'Az NYM-O jelölésben nincs zöld-sárga védőér.', answer: true, explain: '-O = ohne (nincs); -J = van zöld-sárga.' },
    { type: 'single', q: 'Mit jelöl az „A” az NAYY elején (N után)?', options: [{ t: 'alumínium vezető', correct: true }, { t: 'acélpáncél' }, { t: 'árnyékolás' }, { t: 'antisztatikus' }], explain: 'N + A → alumínium vezető.' },
    { type: 'multi', q: 'Mely megfeleltetések helyesek? (több is)', options: [{ t: 'MCu = H07V-U', correct: true }, { t: 'GT = H07RN-F', correct: true }, { t: 'MBCu = NYM-J', correct: true }, { t: 'MT = NAYY' }], explain: 'MT = H05VV-F, nem NAYY. A többi helyes.' }
  ]
});
