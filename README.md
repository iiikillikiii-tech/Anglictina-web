# Angličtina s přehledem - demo web

Next.js demo redesign pro `anglictinasprehledem.cz`.

## Stav

Aktuální verze: `0.3.0`

Web je přestavěný na vícestránkovou prezentaci a jednoduchý prodejní demo web:

- domovská stránka ve stylu osobního vzdělávacího webu,
- samostatná stránka kurzů a ceníku,
- e-shop rozdělený do kategorií a podstránek,
- sdílený frontend košík napříč stránkami,
- stránka O mně,
- stránka Kontakt,
- stránka Pravidla spolupráce,
- český obsah podle služby Angličtina s přehledem.

Poznámka: dlouhé texty z referenčního webu jsou přeformulované pro nové demo. JSON ani backend tady nejsou potřeba; jde o statickou Next aplikaci s klientskou interaktivitou košíku.

## Routy

- `/`
- `/kurzy`
- `/eshop`
- `/eshop/gramatika-cviceni`
- `/eshop/slovicka`
- `/eshop/maturita-cambridge`
- `/eshop/cestovani`
- `/eshop/business`
- `/o-mne`
- `/kontakt`
- `/pravidla`

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
