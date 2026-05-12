# Angličtina s přehledem - demo web

Next.js demo redesign pro `anglictinasprehledem.cz`.

## Stav

Aktuální verze: `0.2.0`

Web je přestavěný z čistého Next starteru na single-page prezentační a prodejní demo:

- hero sekce inspirovaná strukturou osobního webu Ali Abdaala,
- český obsah podle služby Angličtina s přehledem,
- sekce kurzů a cenových balíčků,
- e-shop materiálů s filtrem kategorií,
- jednoduchý frontend košík,
- výhody online výuky,
- pravidla spolupráce,
- recenze,
- o mně,
- kontakt s telefonem, e-mailem, adresou a IČO.

Poznámka: dlouhé texty z referenčního webu jsou přeformulované pro nové demo. JSON ani backend tady nejsou potřeba; jde o statickou Next stránku s klientskou interaktivitou košíku a filtrů.

## Reference

- Design směr: https://aliabdaal.com/
- Obsahová reference: https://anglictinasprehledem.cz/

Do nové verze nebyl převzat podezřelý casino/spam odstavec, který se na referenční homepage objevuje ve zdrojovém textu.

## Lokální spuštění

Kvůli lokálnímu Windows PATH problému je nejjistější přidat Node do PATH v aktuálním PowerShellu:

```powershell
$env:Path = "C:\Program Files\nodejs;$env:Path"
npm run dev
```

Pak otevřít:

`http://localhost:3000`

## Ověření

```powershell
& "C:\Program Files\nodejs\node.exe" .\node_modules\typescript\bin\tsc --noEmit
& "C:\Program Files\nodejs\node.exe" .\node_modules\eslint\bin\eslint.js .
$env:Path = "C:\Program Files\nodejs;$env:Path"; & "C:\Program Files\nodejs\npm.cmd" run build
```

## GitHub

Cílový repozitář:

`https://github.com/iiikillikiii-tech/Anglictina-web`
