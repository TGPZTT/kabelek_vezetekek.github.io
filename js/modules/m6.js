/* =====================================================================
   6. MODUL — MELYIKET MIRE? (gyorsválasztó + szituációs kihívások)
   ===================================================================== */
COURSE.addModule({
  id: 'm6',
  title: 'Melyiket mire?',
  subtitle: 'A gyorsválasztó és valódi döntési helyzetek — itt a felépítés és felhasználás ismeretét kell összerakni.',
  icon: 'target',
  intro: 'Itt nem új típusokat tanulsz, hanem <em>döntened</em> kell. A helyzet adott (környezet, terhelés, mozgatás), neked kell kiválasztani a megfelelő kábelt — gyakran több is majdnem jó, a részleteken múlik.',
  badge: { id: 'm6', name: 'A Helyes Választás', desc: 'Valódi helyzetekben is eltaláltad a megfelelő kábelt.', icon: 'target' },

  chapters: [
    /* ---------------- 6.1 ---------------- */
    {
      id: 'c1', code: '6.1', title: 'A gyorsválasztó táblázat',
      blurb: 'Feladat → ajánlott típus. A „nagy ötös” és a teljes referencia egy helyen.',
      pages: [
        {
          kicker: '6.1 · Referencia',
          blocks: [
            { type: 'lead', text: 'Ez a táblázat a leggyakoribb helyzeteket köti a megfelelő típushoz. Nem kell bemagolni — a logikát már tudod, ez csak összefoglal.' },
            {
              type: 'table', h: 'Melyiket mire?',
              head: ['Feladat / helyzet', 'Ezt használd', 'Megjegyzés'],
              rows: [
                ['Lakás, falba védőcsőben', '<code>MCu</code> (H07V-U)', 'korszerű, cserélhető'],
                ['Vakolat alá, cső nélkül — LAPOS', '<code>MM-fal</code> (MMCu)', 'fehér; panel/betonfalnál sekély horony elég'],
                ['Vakolat alá vagy falon kívül — KÖR', '<code>MBCu</code> = NYM-J', '3×1,5 világítás · 3×2,5 dugalj'],
                ['Falon kívül: pince, garázs, műhely', '<code>MBCu</code> / NYM-J', 'bilincsekkel vagy kábelcsatornában'],
                ['Elosztószekrény belső huzalozás', '<code>MKH</code> (H07V-K)', 'érvéghüvellyel!'],
                ['Sütő, főzőlap, 3 fázisú gép, motor fix', '<code>NYM-J 5×2,5</code> (v. MCu csőben)', 'teljesítménytől függő keresztmetszet'],
                ['Hosszabbító, lámpa, gép (beltér)', '<code>MT</code> (H05VV-F)', 'beltérre'],
                ['Lámpa zsinórja, kis készülék', '<code>MTL</code> (H03VVH2-F)', 'lapos zsinór'],
                ['Kültéri hosszabbító, építkezés, szivattyú', '<code>GT</code> (H07RN-F)', 'gumikábel — UV- és strapabíró'],
                ['Magas hőmérséklet (kazán, szauna)', '<code>H07G-U/-K</code>', 'szilikongumi, +110 °C-ig'],
                ['Kert, földbe: világítás, kapumotor', '<code>NYY-J</code>', 'homokágy + jelzőszalag'],
                ['Földbe, ahol árnyékolás is kell', '<code>NYCY</code>', 'koncentrikus rézréteg'],
                ['Ház betáp a mérőig', '<code>NAYY 4×16</code> / NYCWY', 'MINDIG a szolgáltató előírása szerint!'],
                ['Csengő, kaputelefon, termosztát', 'csengő-jelkábel / UTP', 'gyengeáram — 230 V-ra tilos'],
                ['Motorvezérlés, automatika jelei', '<code>YSLY-JZ</code>', 'számozott erek'],
                ['Vezérlőkábel zavaros (EMC) környezetben', '<code>YSLCY</code>', 'rézharisnya árnyékolás'],
                ['Vezérlőkábel nagy mechanikai terhelésnél', '<code>YSLYQY</code>', 'acélharisnya erősítés']
              ]
            }
          ]
        },
        {
          kicker: '6.1 · A „nagy ötös”',
          blocks: [
            { type: 'p', text: 'A gyakorlatban öt típus fedi le az esetek nagy részét. Fordítsd meg a kártyákat!' },
            {
              type: 'flashcards', gate: true,
              cards: [
                { front: 'MCu', back: '<b>csőbe</b><br>falba, védőcsőben (cserélhető)' },
                { front: 'MM-fal / MBCu', back: '<b>falba</b><br>lapos (MM-fal) / kör (MBCu) kábel' },
                { front: 'MT', back: '<b>a géphez</b><br>beltéri hosszabbító, készülék' },
                { front: 'GT', back: '<b>kültérre</b><br>mozgó, UV-álló gumikábel' },
                { front: 'NYY / NAYY', back: '<b>a földbe</b><br>réz / alumínium földkábel' }
              ]
            },
            { type: 'h3', text: 'Kábelválasztó döntési fa — kövesd a környezetet!' },
            {
              type: 'tree', gate: true,
              intro: 'Lépésről lépésre szűkítsd a választást a környezet és a feladat alapján. Próbáld ki több úton is!',
              start: 'env',
              nodes: {
                env: { q: 'Hol lesz a kábel?', options: [
                  { label: 'Beltérben, falon/falban', go: 'wall' },
                  { label: 'Kültéren / mozgó gépen', result: 'GT (H07RN-F) — UV-/időjárásálló gumikábel a kültéri, mozgatott alkalmazáshoz.' },
                  { label: 'Földbe fektetve', go: 'ground' }
                ] },
                wall: { q: 'Hogyan a falban?', options: [
                  { label: 'Vakolat alá, cső nélkül, lapos', result: 'MM-fal (MMCu) — lapos, fehér falkábel, sekély horonyba.' },
                  { label: 'Falon kívül / csatornában, kör', result: 'MBCu = NYM-J — a leggyakoribb szerelvénykábel.' },
                  { label: 'Védőcsőben, cserélhetően', result: 'MCu (H07V-U) — védőcsőben, később cserélhető.' }
                ] },
                ground: { q: 'Kell-e árnyékolás / fémvédelem?', options: [
                  { label: 'Nem, sima eset', result: 'NYY-J (réz) vagy NAYY (alu betáp) — földkábel homokágyba, jelzőszalaggal.' },
                  { label: 'Igen, árnyékolás is', result: 'NYCY — koncentrikus rézréteggel (árnyékolás + mechanikai védelem).' }
                ] }
              }
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Panel-/betonfalba, sekély horonyba, cső nélkül, lapos kivitelben:', options: [{ t: 'MM-fal (MMCu)', correct: true }, { t: 'MBCu (NYM-J)' }, { t: 'MCu védőcsőben' }, { t: 'NYY-J' }], explain: 'A lapos MM-fal kell a sekély horonyhoz; az MBCu kör (mélyebb horony), az MCu csövet igényel.' },
        { type: 'single', q: 'Elosztószekrény belső, hajlékony huzalozása:', options: [{ t: 'MKH (H07V-K) érvéghüvellyel', correct: true }, { t: 'MM-fal' }, { t: 'NYY-J' }, { t: 'GT' }], explain: 'Finomsodrott MKH a szekrénybe, érvéghüvellyel.' },
        { type: 'single', q: 'Földbe, kerti kapumotorhoz, ahol árnyékolás/védelem is kell:', options: [{ t: 'NYCY (koncentrikus)', correct: true }, { t: 'NYY-J' }, { t: 'MBCu' }, { t: 'MT' }], explain: 'Ha árnyékolás is kell, az NYCY koncentrikus rézrétege a megoldás; sima esetben NYY elég.' }
      ]
    },

    /* ---------------- 6.2 ---------------- */
    {
      id: 'c2', code: '6.2', title: 'Szituációs kihívások',
      blurb: 'Több típus is majdnem jó — a környezet, terhelés és mozgatás dönt. Találd ki a részletekből!',
      pages: [
        {
          kicker: '6.2 · Döntéskihívás I.',
          blocks: [
            { type: 'lead', text: 'Minden helyzetnél a környezetből és a követelményekből kell kikövetkeztetned a típust. Vigyázz: a tévút-opciók is hihetők!' },
            {
              type: 'scenario', gate: true, h: 'Helyzetek',
              items: [
                {
                  q: 'Egy nyári lakot a kertkapuig: tartós, FÖLDBE fektetett táp, ahol a fémvédelem (árnyékolás) NEM követelmény.',
                  ctx: 'Föld, tartós, sima eset.',
                  options: [
                    { label: 'NYY-J', sub: 'réz földkábel', correct: true, why: 'Sima földi fektetéshez az NYY elég; az NYCY akkor kell, ha árnyékolás is követelmény (itt nem).' },
                    { label: 'NYCY', sub: 'koncentrikus', why: 'Túl sok: a koncentrikus rézréteg csak akkor indokolt, ha árnyékolás/PEN is kell. Itt felesleges költség.' },
                    { label: 'MBCu (NYM-J)', sub: 'beltéri', why: 'Földbe csak védőcsőben mehetne — közvetlen földi fektetésre az NYY való.' }
                  ]
                },
                {
                  q: 'Műhelyben egy hordozható köszörűhöz kell tartós, gyakran mozgatott táp — a gépet kültérre is kiviszik néha.',
                  ctx: 'Mozgatás, alkalmi kültér, mechanikai igénybevétel.',
                  options: [
                    { label: 'GT (H07RN-F)', sub: 'gumikábel', correct: true, why: 'Mozgatás + alkalmi kültér + strapa → gumikábel. UV- és időjárásálló, hajlékony.' },
                    { label: 'MT (H05VV-F)', sub: 'tömlővezeték', why: 'Beltéri; a PVC köpenyt a kültéri UV ridegíti, repeszti — nem mozgó/kültéri gépre való.' },
                    { label: 'MCu (H07V-U)', sub: 'merev', why: 'Merev, fix szerelésre — mozgatott géphez alkalmatlan.' }
                  ]
                }
              ]
            }
          ]
        },
        {
          kicker: '6.2 · Döntéskihívás II.',
          blocks: [
            {
              type: 'scenario', gate: true, h: 'Helyzetek',
              items: [
                {
                  q: 'Beépített kandalló-ventilátor bekötése, ahol a vezeték tartósan ~95 °C-os környezetben fut.',
                  ctx: 'Magas, tartós hőmérséklet.',
                  options: [
                    { label: 'H07G (szilikongumi)', sub: '+110 °C', correct: true, why: 'A PVC ~70 °C felett lágyul/öregszik; tartós forró helyre a szilikongumi H07G való.' },
                    { label: 'MT (H05VV-F)', sub: 'PVC', why: 'A PVC szigetelés forró helyen megolvad/öregszik — nem hőálló.' },
                    { label: 'GT (H07RN-F)', sub: 'gumi', why: 'A gumi jobb a PVC-nél, de a tartós +95 °C-hoz a szilikon (H07G) a biztos választás.' }
                  ]
                },
                {
                  q: 'Frekvenciaváltóval hajtott motor jelvezetéke, erős elektromágneses zaj mellett.',
                  ctx: 'Vezérlőjel, EMC-zavar.',
                  options: [
                    { label: 'YSLCY', sub: 'rézharisnya árnyékolás', correct: true, why: 'EMC-zavar ellen árnyékolt vezérlőkábel kell — az YSLCY ónozott rézharisnyája.' },
                    { label: 'YSLY-JZ', sub: 'alap', why: 'Nincs árnyékolása — frekvenciaváltó mellett a zaj bezavarna a jelbe.' },
                    { label: 'YSLYQY', sub: 'acélharisnya', why: 'Az acélharisnya mechanikai védelem, nem EMC-árnyékolás. Itt a rézharisnyás YSLCY kell.' }
                  ]
                },
                {
                  q: 'Társasház méretlen fővezetéke a csatlakozási ponttól a fogyasztásmérőig.',
                  ctx: 'Betáp a mérőig — biztonsági szempont is.',
                  options: [
                    { label: 'NYCWY / E-AYCWY', sub: 'koncentrikus betáp', correct: true, why: 'A méretlen fővezetékhez a koncentrikus (hullámos) betápkábel való — nem csapolható észrevétlenül; gyakran a szolgáltató írja elő.' },
                    { label: 'NYM-J 5×6', sub: 'beltéri', why: 'Szerelvénykábel, nem méretlen fővezeték; a szolgáltató koncentrikus betápot ír elő.' },
                    { label: 'MT 5×2,5', sub: 'tömlő', why: 'Csatlakozóvezeték, nem fővezeték — teljesen más kategória.' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Kültéri, mozgatott gép tápja — miért NEM az MT?', options: [{ t: 'mert a PVC köpenyt a kültéri UV ridegíti/repeszti, és nem mozgásra tervezett', correct: true }, { t: 'mert túl drága' }, { t: 'mert nincs benne védőér' }, { t: 'mert lapos' }], explain: 'Az MT PVC köpenye nem UV-stabilizált; kültéren a nap ridegíti, a víz/UV tönkreteszi. Kültérre/mozgásra a GT való.' },
        { type: 'single', q: 'Sima földi fektetés árnyékolás NÉLKÜL — melyik a felesleges túlzás?', options: [{ t: 'NYCY (koncentrikus) — itt nem kell árnyékolás', correct: true }, { t: 'NYY-J' }, { t: 'NYY-O' }, { t: 'NAYY (ha alu betáp)' }], explain: 'Az NYCY koncentrikus rétege csak akkor indokolt, ha árnyékolás/PEN is kell; sima esetben az NYY elég.' },
        { type: 'single', q: 'Mechanikai védelem (nem EMC) kell a mozgó vezérlőkábelhez:', options: [{ t: 'YSLYQY (acélharisnya)', correct: true }, { t: 'YSLCY (rézharisnya)' }, { t: 'YSLY (alap)' }, { t: 'NYCY' }], explain: 'Az acélharisnyás YSLYQY ad mechanikai erősítést; a rézharisnyás YSLCY EMC-árnyékolás.' }
      ]
    }
  ],

  /* ---------------- MODULKVÍZ ---------------- */
  quiz: [
    { type: 'single', q: 'Lakásfelújítás, falba, később bővíthető/cserélhető legyen:', options: [{ t: 'MCu védőcsőben', correct: true }, { t: 'MM-fal vakolat alá' }, { t: 'MBCu vakolat alá' }, { t: 'NYY' }], explain: 'A védőcső + MCu utólag is cserélhető/bővíthető — a többi beépítve marad.' },
    { type: 'single', q: 'Beltéri hosszabbító kontra kültéri hosszabbító:', options: [{ t: 'beltér: MT · kültér: GT', correct: true }, { t: 'beltér: GT · kültér: MT' }, { t: 'mindkettő MM-fal' }, { t: 'mindkettő NYY' }], explain: 'MT beltérre, GT (UV-/időjárásálló gumi) kültérre.' },
    { type: 'single', q: 'Ház betáp a mérőig — ki dönt a típusról?', options: [{ t: 'a szolgáltató előírása', correct: true }, { t: 'a lakó ízlése' }, { t: 'a legolcsóbb bolt' }, { t: 'mindegy' }], explain: 'A betáp és a mérőhely a szolgáltató előírásai szerint készül (NAYY 4×16 / NYCWY stb.).' },
    { type: 'single', q: 'Csengő, kaputelefon, termosztát jelvezetéke:', options: [{ t: 'gyengeáramú jelkábel vagy UTP', correct: true }, { t: 'erősáramú NYM-J 3×1,5' }, { t: 'kültéri GT gumikábel' }, { t: 'NYY réz földkábel' }], explain: 'Gyengeáram; vékony jelkábel vagy UTP, az erősáramtól külön nyomvonalon. 230 V-ra tilos.' },
    { type: 'multi', q: 'Mely helyzetekben jó a GT? (több is)', options: [{ t: 'kültéri építkezés tápja', correct: true }, { t: 'mozgatott szivattyú/gép', correct: true }, { t: 'falba süllyesztett fix világítás' }, { t: 'tartós földi fektetés a kertben' }], explain: 'GT: kültér + mozgatás. Fix falba az MCu/MBCu, földbe az NYY való.' }
  ]
});
