# Beach Star Hotel — weboldal

Statikus weboldal (HTML/CSS/JS), GitHub Pages-re optimalizálva. Nincs szükség szerverre vagy adatbázisra.

## 1. Feltöltés GitHub-ra

1. Hozz létre egy repót (pl. `beachstarhotel-site`).
2. Töltsd fel ennek a mappának a teljes tartalmát a repó gyökerébe.
3. A repó **Settings → Pages** menüjében válaszd a `main` branch-et, `/ (root)` mappát → Save.
4. Néhány percen belül él lesz: `https://<felhasznalonev>.github.io/beachstarhotel-site/`

### Saját domain (beachstarhotel.com) használata
1. Hozz létre egy `CNAME` nevű fájlt (kiterjesztés nélkül) a repó gyökerében, benne egyetlen sorral: `beachstarhotel.com`
2. A domain-szolgáltatódnál állíts be egy `A` rekordot a GitHub Pages IP-kre (185.199.108.153, .109.153, .110.153, .111.153), vagy egy `CNAME` rekordot a `www` aldomainnek `<felhasznalonev>.github.io`-ra.
3. GitHub Settings → Pages alatt add meg a custom domaint, és várd meg, míg a HTTPS tanúsítvány kiállításra kerül (ez akár 24 órát is igénybe vehet).

## 2. A foglalási űrlap bekötése (email-küldés)

Az űrlap a **Formspree** (formspree.io) ingyenes szolgáltatását használja — ez oldja meg, hogy a statikus oldalról is email érkezzen szerver nélkül.

1. Regisztrálj a https://formspree.io oldalon (ingyenes csomag: havi 50 beküldés).
2. Hozz létre egy új űrlapot (`New Form`), és add meg a fogadó email címet: `info@beachstarhotel.com`
3. Formspree emailt küld a megerősítéshez — erősítsd meg.
4. Másold ki a kapott form URL-t (valami ilyesmi: `https://formspree.io/f/xyzabcde`)
5. Nyisd meg a `contact.html` fájlt, és cseréld le ezt a sort:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   a saját azonosítódra, pl.:
   ```html
   action="https://formspree.io/f/xyzabcde"
   ```
6. Mentsd, töltsd fel GitHub-ra — kész, a foglalási kérések mostantól közvetlenül emailben érkeznek, külső foglalási oldal nélkül.

**Megjegyzés:** amíg a `YOUR_FORM_ID` helyén nem a saját azonosítód szerepel, az oldal figyelmeztető üzenetet mutat beküldéskor ahelyett, hogy elveszne az adat.

## 3. Saját fényképek

A `images/` mappa jelenleg üres — helykitöltők vannak a kódban (szürke minták a galérián, feliratozott dobozok a hero-nál és a szoba-kártyáknál). Tedd be a saját fotóidat ide, majd:

- `index.html`-ben a `.hero-art` div helyére tegyél egy `<img>`-et (pl. `images/hero.jpg`)
- a szoba-kártyák `.thumb` divjeit cseréld `<img>`-re
- a `gallery.html` `.gallery-item` divjeit cseréld `<img>`-re

## 4. Árak

A `rooms.html`-ben az árlistában `€—` helykitöltők szerepelnek — írd be a szezon aktuális árait.

## Fájlstruktúra

```
index.html      — kezdőlap
rooms.html       — szobák és árak
gallery.html     — fotógaléria
contact.html     — kapcsolat + foglalási űrlap
css/style.css    — stílusok
js/main.js       — navigáció, űrlap-logika
images/          — ide kerülnek a saját fotók
```
