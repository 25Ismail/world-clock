# 🌍 World Clock – React + TypeScript

Jag har byggt en responsiv World Clock-app där man kan hålla reda på lokal tid i olika städer runt om i världen.  
Appen är byggd med **React, TypeScript och React Router**, sparar valda städer i **localStorage**, och kan visa både **digital** och **analog** klocka.

---

## ✨ Funktioner

- Lägg till egna städer/tidszoner via formulär
- Förifylld lista av ca 20 storstäder (IANA-tidszoner)
- Detaljsida per stad (egen route via React Router)
- Digital **och** analog klocka
- Inställningar sparas i `localStorage`
- Responsiv design (mobil → desktop)

---

## 🚀 Installation & körning

```bash
# 1) Klona repo
git clone <https://github.com/25Ismail/world-clock>
cd world-clock

# 2) Installera paket
npm install

# 3) Starta dev-server (Vite)
npm run dev

# 4) (valfritt) Bygg för produktion
npm run build
npm run preview

--

## 🧰 Tekniker

- **React 18** (funktionella komponenter + hooks)
- **TypeScript** (interfaces, generics, utility types, type guards)
- **React Router** (routing för detaljerade sidor)
- **Vite** (dev-server och build)
- **localStorage** (sparade städer)
- **CSS** (responsiv styling i neon/cyberpunk-tema)

---

src/
  components/
    AddCityForm.tsx
    AnalogClock.tsx
    Clock.tsx
    List.tsx
  data/
    cities.tsx
  pages/
    CityDetailPage.tsx
    CityListPage.tsx
  types/
    City.ts
  utils/
    guards.ts
    storage.ts
  App.tsx
  main.tsx
  index.css


## ✅ Kravuppfyllelse

### G-krav
- React + TypeScript med hooks ✅
- Interfaces och korrekt typning ✅
- Lägga till egna städer + välja från lista ✅
- Detaljvy per stad (React Router) ✅
- Digital och analog klocka ✅
- Sparas i localStorage ✅
- Responsiv design ✅
- Loggbok och Git ✅

### VG-krav
- Välorganiserad komponentstruktur ✅
- Typade props mellan komponenter ✅
- Minst 20 städer ✅
- Avancerad TypeScript (generics, utility types, type guards) ✅
- Möjlighet till vidare utveckling:
  - Flytta städer till `cities.json`
  - Använd `enum` för tidszoner
  - Lägg till `imageUrl` för bakgrundsbilder på detaljsidor

---
```
