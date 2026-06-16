/* =====================================================================
   8. MODUL — TANULÁSI ÖSSZEFOGLALÓ + ZÁRÓVIZSGA
   ===================================================================== */
COURSE.addModule({
  id: 'm8',
  title: 'Összefoglaló és önellenőrzés',
  subtitle: 'Memóriafogasok, önellenőrző kártyák és a validált források — a nagy záróvizsga előtti utolsó ismétlés.',
  icon: 'scroll',
  intro: 'Itt egy helyen találod a legfontosabb „memóriafogasokat”, önellenőrző kártyákat és a forrásokat. Ha ezeken átmész, készen állsz a Nagy Záróvizsgára.',
  badge: { id: 'm8', name: 'A Nagy Összegző', desc: 'Átismételted a teljes tananyagot.', icon: 'scroll' },

  chapters: [
    /* ---------------- 8.1 ---------------- */
    {
      id: 'c1', code: '8.1', title: 'Memóriafogasok',
      blurb: 'A nyolc legfontosabb tétel, amit zsigerből tudni kell.',
      pages: [
        {
          kicker: '8.1 · A nyolc fogas',
          blocks: [
            { type: 'lead', text: 'Ha ezt a nyolcat tudod, a többi ráépül. Olvasd át, majd lent rögzítsd a kártyákkal.' },
            {
              type: 'list', items: [
                '<strong>Vezeték</strong> = 1 szigetelt ér, köpeny nélkül → csőbe. <strong>Kábel</strong> = erek + köpeny → falba/földbe.',
                'Magyar betűk: <strong>M</strong>űanyag, <strong>B</strong>urkolt, <strong>Cu</strong> réz, <strong>T</strong>ömlő, <strong>KH</strong> különösen hajlékony, <strong>G</strong> gumi, <strong>MM</strong> dupla műanyag.',
                '<strong>MM-fal = LAPOS, fehér</strong> · <strong>MBCu = KÖR, világosszürke</strong> (= NYM-J). Ne keverd! (Mindkettő kábel.)',
                'Harmonizált: H + feszültség (05/07) + anyagok (V=PVC, R=gumi, N=neoprén) + kötőjel után az ér (U tömör, R sodrott, K/F hajlékony).',
                'VDE: N + (A=alu) + Y=PVC + M=köpenyes / C=koncentrikus / W=hullámos; -J = van zöld-sárga, -O = nincs.',
                'A nagy ötös: <strong>MCu</strong> csőbe · <strong>MM-fal/MBCu</strong> falba · <strong>MT</strong> a géphez · <strong>GT</strong> kültérre · <strong>NYY/NAYY</strong> a földbe.',
                'Terhelhetőség: 1,5 → 10 A világítás · 2,5 → 16 A dugalj · 6 → 32 A sütő · 16 → ház betáp.',
                'Minden <strong>elemi szálakból álló (nem tömör)</strong> érre érvéghüvely · kék = N · zöld-sárga = PE · alu egy mérettel lejjebb.'
              ]
            }
          ]
        },
        {
          kicker: '8.1 · Rögzítsd',
          blocks: [
            {
              type: 'flashcards', gate: true,
              intro: 'Önellenőrző kártyák — előbb gondold végig a választ, aztán fordítsd meg!',
              cards: [
                { front: 'MBCu betűnként?', back: '<b>M</b>űanyag + <b>B</b>urkolt (köpeny) + <b>Cu</b> réz<br>= NYM-J, KÖR, világosszürke' },
                { front: 'H05VV-F betűnként?', back: 'H · 05=300/500V · V=PVC szig. · V=PVC köpeny · F=hajlékony<br>= MT' },
                { front: 'H07V-U vs H07V-K?', back: 'U = tömör (merev) · K = finomsodrott (hajlékony)<br>K-nál kell érvéghüvely' },
                { front: 'NYCWY 3×25/16 — a /16?', back: 'a koncentrikus (hullámos) vezető keresztmetszete: 16 mm²' },
                { front: 'MM-fal vs MBCu?', back: 'MM-fal: LAPOS, fehér · MBCu: KÖR, világosszürke<br>(mindkettő kábel)' },
                { front: '2,5 mm² réz dugaljkör?', back: '16 A kismegszakító (a vezeték ~21–24 A-t bír)' },
                { front: '16 mm² alu kb.?', back: '≈ 10 mm² réz (~50 A) — egy mérettel lejjebb' }
              ]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Az „elemi szálakból álló” (nem tömör) érre mi kell csavaros kötésbe?', options: [{ t: 'érvéghüvely', correct: true }, { t: 'semmi' }, { t: 'forrasztás' }, { t: 'nagyobb csavar' }], explain: 'Minden nem tömör (sodrott/finomsodrott) érre érvéghüvely kell csavaros kötésbe; WAGO rugós szorítóba nem.' },
        { type: 'single', q: 'Melyik a helyes pár?', options: [{ t: 'MM-fal = LAPOS, fehér', correct: true }, { t: 'MM-fal = KÖR, fekete' }, { t: 'MBCu = LAPOS, fehér' }, { t: 'MBCu = lapos zsinór' }], explain: 'MM-fal lapos+fehér; MBCu kör+világosszürke. Mindkettő kábel.' },
        { type: 'single', q: 'A „nagy ötös”-ben mi megy a földbe?', options: [{ t: 'NYY / NAYY', correct: true }, { t: 'MCu' }, { t: 'MT' }, { t: 'MM-fal' }], explain: 'NYY (réz) / NAYY (alu) földkábel a földbe; MCu csőbe, MT géphez, GT kültérre.' }
      ]
    },

    /* ---------------- 8.2 ---------------- */
    {
      id: 'c2', code: '8.2', title: 'Önellenőrző helyzetek',
      blurb: 'Néhány klasszikus döntés és csapda — utolsó próba a vizsga előtt.',
      pages: [
        {
          kicker: '8.2 · Próbatétel',
          blocks: [
            {
              type: 'scenario', gate: true, h: 'Döntsd el!',
              items: [
                {
                  q: 'A kerti kapumotorhoz a háztól tartós tápot fektetsz a FÖLDBE. Mit és hogyan?',
                  ctx: 'Föld, tartós, sima eset.',
                  options: [
                    { label: 'NYY-J, ~70–80 cm mély, homokágy + jelzőszalag', sub: '', correct: true, why: 'A földkábel NYY-J; homokágyba, jelzőszalaggal, megfelelő mélységbe.' },
                    { label: 'MBCu közvetlenül a földbe', sub: '', why: 'Az NYM földbe csak védőcsőben mehet; közvetlen földi fektetésre az NYY való.' },
                    { label: 'MT a fűbe lefektetve', sub: '', why: 'Beltéri tömlővezeték — kültérre/földbe nem alkalmas.' }
                  ]
                },
                {
                  q: 'Egy kötéshez finomsodrott eret kötsz csavaros sorkapocsba. Mi a helyes?',
                  ctx: 'Bontható csavaros kötés.',
                  options: [
                    { label: 'Érvéghüvely a szál végére, úgy a sorkapocsba', sub: '', correct: true, why: 'A finomsodrott (elemi szálakból álló) eret érvéghüvellyel kell csavaros kötésbe kötni.' },
                    { label: 'Csupaszon, jó erősen meghúzva', sub: '', why: 'A szálak szétnyomódnak, a kötés melegszik — érvéghüvely kell.' },
                    { label: 'Forrasztva ónozni a véget', sub: '', why: 'Csavaros kötésbe a forrasztott vég „kúszik”, idővel meglazul — érvéghüvely a helyes.' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Hogyan fektetsz NYY földkábelt a kertben?', options: [{ t: '~70–80 cm mély, homokágy + jelzőszalag', correct: true }, { t: 'a felszínre kiterítve' }, { t: '5 cm mélyre' }, { t: 'vízvezetékhez kötözve' }], explain: 'Homokágy, megfelelő mélység, fölé jelzőszalag.' },
        { type: 'single', q: 'Finomsodrott ér bontható csavaros kötésbe:', options: [{ t: 'érvéghüvellyel', correct: true }, { t: 'csupaszon' }, { t: 'forrasztva' }, { t: 'sehogy' }], explain: 'Érvéghüvely; forrasztott vég kúszik, csupasz szál szétnyomódik.' }
      ]
    },

    /* ---------------- 8.3 ---------------- */
    {
      id: 'c3', code: '8.3', title: 'Validált források és jogi megjegyzés',
      blurb: 'Mire épül a tananyag — és mit jelent a tanulási cél.',
      pages: [
        {
          kicker: '8.3 · Honnan',
          blocks: [
            { type: 'lead', text: 'A tananyag állításait gyártói/kereskedői katalógusok és szakmai szabványhivatkozások alapján állítottuk össze.' },
            {
              type: 'list', items: [
                'Vezeték vs kábel definíció (köpeny-alapú elhatárolás) — IEC 60050-461 Nemzetközi Elektrotechnikai Szótár, „Electric cables”',
                'Vezető-osztályok (tömör / több elemi szálból sodrott / hajlékony) — IEC 60228 (class 1 / 2 / 5 / 6)',
                'Szabványhivatkozásos típusok (VDE 0250/0276/0281/0282, MSZ IEC 502): H07V-U/R, H05V-K, H07V-K, MT, NYM, NYY, NYCY, NYCWY, SZAMKAM, SzRMKVM-J, YSLY-család, H07G, H05RR-F, H07RN-F',
                'MBCu (NYM-J): VDE 0250-204, RAL 7035 világosszürke köpeny, re/rm erek',
                'MM-fal (MMCu): lapos, fehér, vakolat alá; YDYt/NYIFY jellegű installációs (köpenyes) kábel',
                'Terhelhetőség és méretezés — MSZ HD 60364-5-52',
                'Magyar–szabványos megfeleltetések (MCu=H07V-U, MKH=H07V-K, MT=H05VV-F, MTL=H03VVH2-F, GT=H05RR-F/H07RN-F)'
              ]
            },
            {
              type: 'callout', variant: 'warn', title: 'Jogi megjegyzés',
              html: 'A tananyag <strong>oktatási célú</strong>. Hálózati munkát csak szakképzett villanyszerelő végezhet; a betáp és a mérőhely kialakítása a szolgáltató előírásai szerint történik. A terhelhetőségi értékek tájékoztató jellegűek.'
            }
          ]
        }
      ],
      quiz: [
        { type: 'single', q: 'Mire épül a vezeték/kábel elhatárolás definíciója?', options: [{ t: 'IEC 60050-461 (a köpeny megléte)', correct: true }, { t: 'a gyártó saját besorolása' }, { t: 'a kábel ára és színe' }, { t: 'az erek száma a kötegben' }], explain: 'Az IEC 60050-461 a köpeny-alapú elhatárolást rögzíti.' },
        { type: 'tf', q: 'A tananyag oktatási célú; hálózati munkát csak szakképzett villanyszerelő végezhet.', answer: true, explain: 'Így van — a gyakorlati munka szakember és a szolgáltató előírásai szerint történik.' }
      ]
    }
  ],

  /* ---------------- MODULKVÍZ ---------------- */
  quiz: [
    { type: 'single', q: 'Melyik IGAZ?', options: [{ t: 'MM-fal és MBCu egyaránt kábel (van köpenyük)', correct: true }, { t: 'MM-fal vezeték, MBCu kábel' }, { t: 'egyik sem kábel' }, { t: 'mindkettő gyengeáram' }], explain: 'Mindkettőnek van köpenye → szerkezetileg kábel.' },
    { type: 'single', q: 'Az érvéghüvely mely erekhez kell csavaros kötésbe?', options: [{ t: 'minden nem tömör (elemi szálakból álló) érhez', correct: true }, { t: 'csak a finomsodrotthoz' }, { t: 'csak az alumíniumhoz' }, { t: 'egyikhez sem' }], explain: 'Minden sodrott/finomsodrott (több elemi szálú) érhez — a rugós WAGO kivételével.' },
    { type: 'single', q: 'NYM-J köpeny színe:', options: [{ t: 'világosszürke (RAL 7035)', correct: true }, { t: 'fekete' }, { t: 'fehér' }, { t: 'piros' }], explain: 'Az NYM/MBCu világosszürke (RAL 7035).' },
    { type: 'single', q: 'Mit jelent a „nagy ötös” MT eleme?', options: [{ t: 'beltéri gép, hosszabbító', correct: true }, { t: 'földkábel' }, { t: 'ház betáp' }, { t: 'kültéri mozgó gép' }], explain: 'MT = a géphez (beltér); GT a kültéri mozgó.' }
  ]
});

/* =====================================================================
   NAGY ZÁRÓVIZSGA — a teljes tananyagot átfogó kérdéssor
   ===================================================================== */
COURSE.setFinalExam([
  { type: 'single', q: 'Mi dönti el szerkezetileg, hogy vezeték vagy kábel?', options: [{ t: 'a külső köpeny megléte', correct: true }, { t: 'az erek száma' }, { t: 'a vezető anyaga' }, { t: 'a feszültség' }], explain: 'Egy szigetelőréteg → vezeték; érszigetelés + köpeny → kábel (IEC 60050-461).' },
  { type: 'single', q: 'MBCu betűnként?', options: [{ t: 'Műanyag + Burkolt (köpeny) + réz', correct: true }, { t: 'Merev + Bevont + réz' }, { t: 'Műanyag + Barna + Cu' }, { t: 'Mantel + Bel + Cu' }], explain: 'M=műanyag, B=burkolt (van köpeny), Cu=réz → NYM-J.' },
  { type: 'single', q: 'H05VV-F — mit jelent a két V?', options: [{ t: 'PVC érszigetelés és PVC köpeny', correct: true }, { t: 'a két fázisvezető anyaga' }, { t: 'kétszeres névleges feszültség' }, { t: 'két párhuzamos ér' }], explain: '3. poz. érszigetelés (V=PVC), 4. poz. köpeny (V=PVC).' },
  { type: 'single', q: 'A kötőjel utáni -K a harmonizált kódban:', options: [{ t: 'finomsodrott (fix szereléshez)', correct: true }, { t: 'tömör, egyhuzalú vezető' }, { t: 'a köpeny anyaga' }, { t: 'a köpenyes kábel jele' }], explain: '-K finomsodrott (fix), -F hajlékony (mozgó), -U tömör, -R sodrott.' },
  { type: 'single', q: 'NYCWY 3×25/16 — a /16:', options: [{ t: 'a koncentrikus vezető keresztmetszete', correct: true }, { t: 'a kábel teljes hossza' }, { t: 'az erek száma (16)' }, { t: 'a névleges feszültség' }], explain: 'A / utáni szám a koncentrikus vezetőé.' },
  { type: 'single', q: 'Melyik LAPOS, fehér kábel, vakolat alá?', options: [{ t: 'MM-fal (MMCu)', correct: true }, { t: 'MBCu (NYM-J)' }, { t: 'NYY-J' }, { t: 'GT' }], explain: 'MM-fal lapos+fehér; MBCu kör+világosszürke.' },
  { type: 'single', q: 'NYM-J köpeny színe?', options: [{ t: 'világosszürke (RAL 7035)', correct: true }, { t: 'fekete' }, { t: 'fehér' }, { t: 'kék' }], explain: 'Világosszürke (RAL 7035).' },
  { type: 'single', q: 'Kültéri, mozgatott gép tápja:', options: [{ t: 'GT (H07RN-F) gumikábel', correct: true }, { t: 'MT (H05VV-F)' }, { t: 'MCu' }, { t: 'MM-fal' }], explain: 'GT — UV-/időjárásálló, hajlékony. Az MT PVC köpenye kültéren ridegül.' },
  { type: 'single', q: 'Beltéri hosszabbító, lámpa, kis gép:', options: [{ t: 'MT (H05VV-F)', correct: true }, { t: 'GT' }, { t: 'NYY' }, { t: 'H07G' }], explain: 'Az MT beltéri tömlővezeték.' },
  { type: 'single', q: 'Kazán/szauna, tartós ~100 °C:', options: [{ t: 'H07G szilikongumi (+110 °C)', correct: true }, { t: 'MT (PVC)' }, { t: 'MCu (PVC)' }, { t: 'MM-fal' }], explain: 'A PVC ~70 °C felett öregszik; hőálló szilikon (H07G) kell.' },
  { type: 'single', q: 'Kertbe, földbe, tartós táp (árnyékolás nem kell):', options: [{ t: 'NYY-J', correct: true }, { t: 'NYCY' }, { t: 'MBCu' }, { t: 'MT' }], explain: 'Sima földi fektetés → NYY; az NYCY csak árnyékolás-igénynél indokolt.' },
  { type: 'single', q: 'Családi ház betáp az utcáról a mérőig (olcsó, alu):', options: [{ t: 'NAYY-J 4×16', correct: true }, { t: 'NYM-J 3×1,5' }, { t: 'YSLY' }, { t: 'H07G' }], explain: 'NAYY alumínium betápkábel; mindig a szolgáltató előírása szerint.' },
  { type: 'single', q: '2,5 mm² réz dugaljkör kismegszakítója:', options: [{ t: '16 A', correct: true }, { t: '40 A' }, { t: '6 A' }, { t: '63 A' }], explain: '2,5 mm² ~21–24 A → 16 A.' },
  { type: 'single', q: '6 mm² réz tipikus köre:', options: [{ t: 'sütő + főzőlap, 32 A', correct: true }, { t: 'világítás, 10 A' }, { t: 'csengő' }, { t: 'ház betáp 63 A' }], explain: '6 mm² ~36–41 A → 32 A, sütő/főzőlap.' },
  { type: 'single', q: 'Az alumínium azonos terheléshez a rézhez képest:', options: [{ t: '~1,6× nagyobb keresztmetszet', correct: true }, { t: 'ugyanakkora' }, { t: 'feleakkora' }, { t: 'nem használható' }], explain: 'Alu ~61% vezetőképesség → ~1,6× keresztmetszet, „egy mérettel lejjebb”.' },
  { type: 'multi', q: 'Mely erekhez kell érvéghüvely csavaros kötésbe? (több is)', options: [{ t: 'sodrott (-R)', correct: true }, { t: 'finomsodrott (-K/-F)', correct: true }, { t: 'tömör (-U)' }], explain: 'Minden nem tömör (elemi szálakból álló) érhez; a tömörhöz nem.' },
  { type: 'single', q: 'A zöld-sárga ér:', options: [{ t: 'KIZÁRÓLAG védővezető (PE)', correct: true }, { t: 'lehet fázis is' }, { t: 'mindig nulla' }, { t: 'vezérlőjel' }], explain: 'Zöld-sárga = PE, soha nem fázis vagy nulla.' },
  { type: 'tf', q: 'A kék ér átjelölés mellett fázisként is használható, ha az áramkörben nincs nulla.', answer: true, explain: 'Igen — ha nincs nulla és a végeken egyértelműen átjelölik. Alapból azonban a kék a nulla.' },
  { type: 'single', q: 'A GT besorolása szerkezetileg és szabvány szerint:', options: [{ t: 'gumikábel (VDE 0282)', correct: true }, { t: 'köpeny nélküli vezeték' }, { t: 'gyengeáramú jelkábel' }, { t: 'földkábel' }], explain: 'Gumi szigetelés + gumiköpeny → kábel; a köznyelv „gumikábelnek” hívja.' },
  { type: 'single', q: 'EMC-zavaros vezérlőkör (frekvenciaváltó):', options: [{ t: 'YSLCY (rézharisnya árnyékolás)', correct: true }, { t: 'YSLY (alap)' }, { t: 'YSLYQY (acélharisnya)' }, { t: 'NYY' }], explain: 'Árnyékolt YSLCY az EMC-zaj ellen; az acélharisnya (YSLYQY) mechanikai védelem.' }
]);
