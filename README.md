# Delmar Tour

Moderní statický web cestovní agentury Delmar Tour postavený v Astro. Obsah vychází z doložených snímků původního webu v Internet Archive a z novější staticky analyzované Joomla zálohy. Inventář zdrojů, porovnání a otevřené otázky jsou v `RECONSTRUCTION_PLAN.md`.

## Vývoj

```sh
npm install
npm run dev
npm run build
```

Výstup statického buildu vzniká ve složce `dist/`.

Projekt je uložen v synchronizované složce OneDrive. Při ověření 27. 9. 2026
OneDrive zablokoval atomické přejmenování dočasného souboru v adresáři `.astro`
(`ENOENT ... content-modules.mjs.tmp`). Zdrojový kód proto byl beze změn
sestaven z lokální pracovní kopie; výsledný adresář `dist` je uložen u projektu.
Pokud se chyba při místním sestavení opakuje, zkopírujte projekt mimo OneDrive,
spusťte tam `npm ci` a `npm run build` a vraťte pouze výsledný `dist`.

## Editace obsahu

Pages CMS používá konfiguraci `.pages.yml`. Majitel může editovat:

- kontaktní a firemní údaje v `src/content/settings/site.json`,
- hlavní stránky v `src/content/pages/`,
- destinace a galerie v `src/content/destinations/`,
- modelové programy v `src/content/itineraries/`,
- obrázky v `public/images/`.

Při změnách dodržujte označení „cestovní agentura“. Před veřejným nasazením je nutné ověřit aktuálnost firemních údajů, služeb, programů a dokumentů uvedených v `RECONSTRUCTION_PLAN.md`.

## Archivní média

Použité logo a první sada fotografií byly obnoveny z Wayback Machine. Největší dostupné originály a dříve chybějící galerie byly následně doplněny z `C:\OneDrive\Software\Weby\Delmartour\Backup 2026-09-27`.

Joomla záloha je napadená a slouží pouze jako statický zdroj dat. Nespouštějte z ní PHP, Joomla instalaci, rozšíření ani konfigurační soubory. Do Astro projektu byly převzaty pouze ověřené obrázky, dokumenty a textový obsah článků z SQL exportu.

Než bude web zveřejněn, má vlastník potvrdit autorská práva a souhlasy zachycených osob.
