# 📓 Loggbok – World Clock

## Arbetsprocess

Jag började med att planera projektet genom att skriva user stories och göra skisser för både mobil och dator.  
Sedan satte jag upp projektet i React + TypeScript och delade upp koden i flera små komponenter:

- Clock för digital tid
- AnalogClock för analog tid
- AddCityForm för att lägga till städer
- List för att visa städer

Jag sparade alla ändringar i GitHub under arbetets gång.

---

## User stories

- Som användare vill jag kunna se tiden i olika städer.
- Som användare vill jag kunna lägga till egna städer.
- Som användare vill jag kunna klicka på en stad och se mer detaljer.
- Som användare vill jag att mina val sparas så de finns kvar nästa gång.

---

## TypeScript – varför det är bra

- Jag kan använda **interfaces** (t.ex. City) för att undvika fel.
- Jag kan använda **Omit** för att återanvända kod utan att skriva om allt.
- Jag kan använda **generics** (t.ex. i List<T>) så att komponenter fungerar för flera typer.

---

## TypeScript till JavaScript

När jag kör projektet så tar Vite bort alla typer och gör om TypeScript till vanligt JavaScript som webbläsaren kan köra.

---

## Responsiv design

- På **dator**: flera kolumner med städer.
- På **mobil**: en kolumn, fullbredd på formulär och knappar.
- Klockorna blir mindre på mobil så allt får plats.

---

## Testning

Jag testade min kod med **Vitest**:

- Testade att `isCity` bara godkänner riktiga City-objekt.
- Testade att `nextId` alltid ger nästa lediga ID.
- Testade att `Clock`-komponenten visar tid i digitalt format.

---

## Slutsats

Jag har byggt en app i React + TypeScript som visar både digital och analog tid, sparar städer i localStorage, fungerar på både mobil och dator och har tester.  
Mitt mål var att uppfylla både G- och VG-kraven, och jag tror att jag har lyckats med det
