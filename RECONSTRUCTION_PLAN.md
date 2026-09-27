# Delmar Tour — reconstruction content inventory and plan

## Update 2026-09-27 — Joomla backup and implemented Astro site

After the original Wayback-based inventory was completed, a recent Joomla backup became available at `C:\OneDrive\Software\Weby\Delmartour\Backup 2026-09-27`. The backup is known to have been compromised, so no PHP, Joomla code, extensions or configuration were executed. Only the image/document files and the SQL export were read statically.

The production Astro project now lives at:

`C:\OneDrive\Software\Weby\Delmartour\astro-web`

The backup materially improves the reconstruction:

- `d38283_4pc4ot.sql` contains 13 published Joomla articles in `o1lo_content`. Their titles, aliases and bodies confirm the complete page structure and the archived wording recorded below.
- The SQL confirms galleries for Spain, Catalonia, Valencia, Andalusia, Madrid, Other Areas, Caribbean, Thailand and Lady Blue.
- The backup contains the full-size gallery originals that were unavailable as independent Wayback captures. Thirty-four original images were added to the Astro project from the backup, including the previously missing Thailand and Lady Blue galleries and page banners for Spain, Thailand, Lady Blue, Model Examples and Contact.
- The four PDF documents in the backup match the document set recovered from Wayback.
- The resulting project contains 64 image files in `public/images`; the newly added photographs retain the largest resolution found in the backup.
- The reconstructed text was compared with every row in the Joomla article export. No article or destination was missing, and no material archived content was removed.
- The Astro site builds all 13 confirmed public routes plus redirects from the legacy `/zajezdy/...` paths. Pages CMS exposes settings/contact data, singleton pages, destinations/galleries and sample itineraries.
- Final verification: the unchanged project source was staged outside OneDrive and `npm run build` completed with 0 errors, 0 warnings and 0 hints; `npm audit --omit=dev` reports 0 known vulnerabilities. Directly inside the synchronized OneDrive folder, Astro intermittently failed while atomically renaming `.astro/content-modules.mjs.tmp` (`ENOENT`). The generated `dist` has therefore been copied back to the project, and the workaround is documented in `README.md`.

The Wayback findings below remain useful for capture provenance and historical route verification. Statements below about media being unavailable are superseded where this update explicitly records recovery from the Joomla backup.

## Scope and evidence

This document inventories the archived public website before any implementation. It is intentionally a content and information-architecture plan, not a visual specification. The proposed rebuild should preserve useful information and provenance while replacing the obsolete Joomla-era presentation with a modern, responsive travel-agency site.

Primary entry point inspected: [homepage capture, 2026-06-10 11:32:42](https://web.archive.org/web/20260610113242/http://www.delmartour.cz/).

Method:

- Followed every item in the archived navigation and checked the actual replayed page, rather than assuming that a `200` entry in the Wayback index was usable.
- Consulted the Wayback CDX index for HTML, images and downloadable documents.
- Used the newest capture that contains the intended page content. Some 2026-07 captures return a blank Wayback page and share the homepage digest; these are not usable page captures.
- Inspected an older `O nás` capture because the latest replay obscures the email address and omits links to four archived documents.
- Treated all business, legal, banking, itinerary and travel information as archival evidence only, not as confirmed current information.

## Confirmed navigation and page hierarchy

```text
Úvod                         /
├─ Španělsko                 /spanelsko
│  ├─ Katalánsko             /spanelsko/katalansko
│  ├─ Valencie               /spanelsko/valencie
│  ├─ Andalusie              /spanelsko/andalusie
│  ├─ Madrid                 /spanelsko/madrid
│  └─ Další oblasti          /spanelsko/dalsi-oblasti
├─ Karibik                   /karibik
│  └─ Okruh lodí             /karibik/okruh-lodi
├─ Thajsko                   /thajsko
├─ Modelové příklady         /modelove-priklady
├─ Praktické informace       /prakticke-informace
└─ O nás / Kontakt           /o-nas
```

No additional current public content pages were exposed by the site navigation or the CDX HTML inventory. The CDX index also contains older `/zajezdy/...` URLs from 2017; these are legacy aliases/previous routes, not additional content sections, and should redirect to the canonical routes above if historical inbound links matter.

## Page-by-page inventory and best usable captures

| Page | Best usable capture | Concise content inventory | Notes / decisions |
|---|---|---|---|
| Úvod | [2026-06-10 11:32:42](https://web.archive.org/web/20260610113242/http://www.delmartour.cz/) | Welcome to an agency specialising in active/educational trips to Spain, the Caribbean and Thailand; short promotional paragraph for each destination; parrot image. | Says both “cestovní agentura” and, elsewhere, “CK/cestovní kancelář”; legal status and correct regulated designation must be confirmed. |
| Španělsko | [2026-04-18 11:33:45](https://web.archive.org/web/20260418113345/http://delmartour.cz/spanelsko) | General introduction to Spain: Madrid, Barcelona, Gaudí, Dalí, Picasso, food, olives; invitation to request a custom itinerary. | Suitable as a destination landing page linking to five regions. |
| Katalánsko | [2026-04-17 00:30:51](https://web.archive.org/web/20260417003051/http://www.delmartour.cz/spanelsko/katalansko) | Barcelona and modernist architecture; Dalí museums; Girona (spelled “Gerona” in the archive), Cadaqués; recommends coach travel from the Czech Republic. | Transport recommendation needs fresh operational review. Three archived photos are available. |
| Valencie | [2026-04-17 00:01:53](https://web.archive.org/web/20260417000153/http://www.delmartour.cz/spanelsko/valencie) | Orange groves, festivals, City of Arts and Sciences, Marina d'Or, Oropesa del Mar beaches; recommends coach travel. | “Marina d'Or” and transport recommendation are time-sensitive; three archived photos are available. |
| Andalusie | [2026-04-17 00:12:38](https://web.archive.org/web/20260417001238/http://www.delmartour.cz/spanelsko/andalusie) | Córdoba, Granada, Málaga and Seville; beaches, multicultural heritage and nature; recommends flying, or a combined coach itinerary through another Spanish city. | The later [2026-07-10 08:29:10](https://web.archive.org/web/20260710082910/http://www.delmartour.cz/spanelsko/andalusie) record is blank and unusable. Four archived photos are available. |
| Madrid | [2026-04-18 11:13:00](https://web.archive.org/web/20260418111300/http://delmartour.cz/spanelsko/madrid) | Madrid centre and royal sites; Toledo, El Escorial, Segovia and Valle de los Caídos. | The later [2026-07-10 07:49:56](https://web.archive.org/web/20260710074956/http://www.delmartour.cz/spanelsko/madrid) record is blank. The wording around Franco and “Valle de los Caídos” is dated/sensitive and should be rewritten only after owner review; three archived photos are available. |
| Další oblasti | [2026-04-17 00:26:59](https://web.archive.org/web/20260417002659/http://www.delmartour.cz/spanelsko/dalsi-oblasti) | One-sentence offer to prepare trips to other parts of Spain on request. | The later [2026-07-10 08:42:52](https://web.archive.org/web/20260710084252/http://www.delmartour.cz/spanelsko/dalsi-oblasti) record is blank. This page needs owner-approved substance or should become a reusable custom-trip CTA rather than a thin standalone page. Two archived photos are available. |
| Karibik | [2026-04-18 11:19:13](https://web.archive.org/web/20260418111913/http://delmartour.cz/karibik) | Cuba (Havana, Trinidad, Santiago de Cuba) and the Lesser Antilles (Dominica, Grenada, Saint Vincent); beaches, music, cigars and local culture. | Generalisations about residents/culture should be editorially reviewed. Four archived photos are available. |
| Okruh lodí | [2026-04-18 11:08:16](https://web.archive.org/web/20260418110816/http://delmartour.cz/karibik/okruh-lodi) | “Okruh lodí Lady Blue”: Lesser Antilles sailing trip with an experienced captain, maximum eight-person crew. | Vessel name, ownership/availability, captain, capacity, insurance, route and commercial terms all require confirmation. The Joomla backup supplied the original Lady Blue banner and two gallery photographs. |
| Thajsko | [2026-04-18 11:06:39](https://web.archive.org/web/20260418110639/http://delmartour.cz/thajsko) | Food, massage, shopping and local culture; promises travel beyond a hotel-only experience. | Wording about “cheap shopping” and “real Asia” is dated/generalising. The Joomla backup supplied the original Thailand banner and five full-size gallery photographs. |
| Modelové příklady | [2026-04-16 23:11:58](https://web.archive.org/web/20260416231158/http://www.delmartour.cz/modelove-priklady) | Two sample itineraries: 9-day Catalonia coach trip and 18-day Thailand trip (Bangkok, Krabi, Ko Lanta, Phi Phi). | Examples contain obsolete or questionable details: 2-star hotels, overnight rail routing, motorcycle hire, elephant rides, an “erotic district” visit, and “Phi Phi Saladan” (likely a factual mix-up with Saladan on Ko Lanta). Treat as historical source material, not publish-ready products. |
| Praktické informace | [2026-06-10 13:08:19](https://web.archive.org/web/20260610130819/http://www.delmartour.cz/prakticke-informace) | Flexible trip length; three accompanying teachers for groups of at least 40 students; half board in Spain, full board for primary schools; custom catering in Thailand/Caribbean; coach/air transport; 2–3-star hotels/apartments; experienced guides/delegates. | Every service promise and threshold must be reconfirmed, especially school-group staffing, meals, accommodation standards and transport. |
| O nás / Kontakt | [2026-04-18 11:17:49](https://web.archive.org/web/20260418111749/http://delmartour.cz/o-nas); supplement: [2022-01-12 09:40:43](https://web.archive.org/web/20220112094043/http://delmartour.cz/o-nas) | Legal name, registered office, company IDs, register entry, phone, email, bank details; older capture exposes four document downloads. | Latest replay hides the email via broken anti-spam JavaScript. The 2022 capture confirms it. Legal, contact, bank and document validity must be checked before publication. |

## Recoverable media and downloadable files

### Brand assets

- Primary archived wordmark: [`/images/logo/delmar-tour-logo.png`](https://web.archive.org/web/20160808054409/http://www.delmartour.cz/images/logo/delmar-tour-logo.png), displayed at 416 × 80 in the newest site replay.
- Alternative/newer compact logo: [`/images/logo/logo.png`](https://web.archive.org/web/20220112112356/http://delmartour.cz/images/logo/logo.png), displayed at 210 × 40 in the 2021/2022 template.
- Legacy template logo: [`/templates/j51_oxygen/images/logo.png`](https://web.archive.org/web/20171105102443/http://www.delmartour.cz/templates/j51_oxygen/images/logo.png). This is probably template chrome rather than the preferred brand asset; inspect before reuse.
- Archived favicon: [`/templates/j51_oxygen/favicon.ico`](https://web.archive.org/web/20160808114413/http://www.delmartour.cz/templates/j51_oxygen/favicon.ico) and later [`/templates/revolab/favicon.ico`](https://web.archive.org/web/20220112112354/http://delmartour.cz/templates/revolab/favicon.ico).

### Content photographs confirmed in the Wayback index

Home:

- [`/images/articles/uvod/01-papouch.jpg`](https://web.archive.org/web/20160808120935/http://www.delmartour.cz/images/articles/uvod/01-papouch.jpg) — parrot used in the homepage body.
- [`/images/canvas/uvod/karibska-plaz.jpg`](https://web.archive.org/web/20160808060335/http://www.delmartour.cz/images/canvas/uvod/karibska-plaz.jpg) — Caribbean beach/banner.

Spain — Katalánsko:

- [`01-delfin-v-letu.jpg`](https://web.archive.org/web/20191106110748/http://www.delmartour.cz/images/articles/spanelsko/katalansko/01-delfin-v-letu.jpg)
- [`02-pobrezi.jpg`](https://web.archive.org/web/20191106110749/http://www.delmartour.cz/images/articles/spanelsko/katalansko/02-pobrezi.jpg)
- [`03-ovocny-trh.jpg`](https://web.archive.org/web/20191106110749/http://www.delmartour.cz/images/articles/spanelsko/katalansko/03-ovocny-trh.jpg)
- [`katalansko.jpg` banner](https://web.archive.org/web/20191106110749/http://www.delmartour.cz/images/canvas/spanelsko/katalansko/katalansko.jpg)

Spain — Valencie:

- [`01-architektonicky-skvost.jpg`](https://web.archive.org/web/20191106130810/http://www.delmartour.cz/images/articles/spanelsko/valencie/01-architektonicky-skvost.jpg)
- [`02-fasada-z-musli.jpg`](https://web.archive.org/web/20191106130813/http://www.delmartour.cz/images/articles/spanelsko/valencie/02-fasada-z-musli.jpg)
- [`03-morella.jpg`](https://web.archive.org/web/20191106130810/http://www.delmartour.cz/images/articles/spanelsko/valencie/03-morella.jpg)
- [`valencie.jpg` banner](https://web.archive.org/web/20191106130811/http://www.delmartour.cz/images/canvas/spanelsko/valencie/valencie.jpg)

Spain — Andalusie:

- [`01-zahrada.jpg`](https://web.archive.org/web/20191106131332/http://www.delmartour.cz/images/articles/spanelsko/andalusie/01-zahrada.jpg)
- [`02-museum.jpg`](https://web.archive.org/web/20191106131332/http://www.delmartour.cz/images/articles/spanelsko/andalusie/02-museum.jpg)
- [`03-palac.jpg`](https://web.archive.org/web/20191106131332/http://www.delmartour.cz/images/articles/spanelsko/andalusie/03-palac.jpg)
- [`04-mesto.jpg`](https://web.archive.org/web/20191106131332/http://www.delmartour.cz/images/articles/spanelsko/andalusie/04-mesto.jpg)
- [`andalusie.jpg` banner](https://web.archive.org/web/20191106131332/http://www.delmartour.cz/images/canvas/spanelsko/andalusie/andalusie.jpg)

Spain — Madrid:

- [`01-plaza-mayor.jpg`](https://web.archive.org/web/20191106131318/http://www.delmartour.cz/images/articles/spanelsko/madrid/01-plaza-mayor.jpg)
- [`02-nejakej-kriz.jpg`](https://web.archive.org/web/20191106131318/http://www.delmartour.cz/images/articles/spanelsko/madrid/02-nejakej-kriz.jpg) — filename is non-descriptive and should be visually identified before assigning alt text.
- [`03-akvadukt.jpg`](https://web.archive.org/web/20191106131318/http://www.delmartour.cz/images/articles/spanelsko/madrid/03-akvadukt.jpg)
- [`madrid.jpg` banner](https://web.archive.org/web/20191106131318/http://www.delmartour.cz/images/canvas/spanelsko/madrid/madrid.jpg)

Spain — Další oblasti:

- [`01-vejire.jpg`](https://web.archive.org/web/20191106131309/http://www.delmartour.cz/images/articles/spanelsko/dalsi-oblasti/01-vejire.jpg)
- [`02-corrida.jpg`](https://web.archive.org/web/20191106131309/http://www.delmartour.cz/images/articles/spanelsko/dalsi-oblasti/02-corrida.jpg) — bullfighting imagery may be unsuitable for the rebuilt brand and needs an explicit editorial decision.
- [`dalsi-oblasti.jpg` banner](https://web.archive.org/web/20191106131309/http://www.delmartour.cz/images/canvas/spanelsko/dalsi-oblasti/dalsi-oblasti.jpg)

Caribbean:

- [`01-pohled-na-vulkan.jpg`](https://web.archive.org/web/20191106130935/http://www.delmartour.cz/images/articles/karibik/01-pohled-na-vulkan.jpg)
- [`02-petule-ve-vode.jpg`](https://web.archive.org/web/20191106130933/http://www.delmartour.cz/images/articles/karibik/02-petule-ve-vode.jpg) — likely depicts an identifiable person; confirm consent/rights before reuse.
- [`03-lesni-vodopad.jpg`](https://web.archive.org/web/20191106130934/http://www.delmartour.cz/images/articles/karibik/03-lesni-vodopad.jpg)
- [`04-exoticky-plod.jpg`](https://web.archive.org/web/20191106130933/http://www.delmartour.cz/images/articles/karibik/04-exoticky-plod.jpg)
- [`karibik.jpg` banner](https://web.archive.org/web/20191106130934/http://www.delmartour.cz/images/canvas/karibik/karibik.jpg)

Other:

- [`prakticke-informace.jpg` banner](https://web.archive.org/web/20191106110920/http://www.delmartour.cz/images/canvas/prakticke-informace/prakticke-informace.jpg).
- [`Logo royal residence Ungelt.jpg`](https://web.archive.org/web/20160808114424/http://www.delmartour.cz/images/Logo%20royal%20residence%20Ungelt.jpg) — orphaned/unclear relationship to Delmar Tour; do not publish without owner confirmation.
- Five archived `/cache/preview/` JPEGs from 2022 are also recoverable, but their filenames are hashes and their relationship to the visible galleries is ambiguous. Prefer the semantically named originals above after visual inspection.

The 2026 raw HTML references newer original filenames (for example `IMG_1708.JPG`, `FIL22729.JPG`, `DSCF8193.JPG`, `DSCF8931.JPG` and `_DSC2516.JPG`) plus generated `administrator/cache/preview` files. Those exact full-size originals were not independently captured by Wayback, but they were recovered from the 2026-09-27 Joomla backup and are now used by the Astro galleries. Generated cache previews were not copied because the corresponding originals are available.

### Additional originals recovered from the Joomla backup

- Spain landing gallery: `DSCF8269.JPG`, `Fotografie0447 _ kopie.jpg`, `Fotografie0603.jpg`.
- Catalonia: `Fotografie0588.jpg`, `IMG_1708.JPG`, `Marineland 14.jpg`.
- Valencia: `FIL22729.JPG`, `FIL24304.JPG`, `Morella.jpg`.
- Andalusia: `DSCF8193.JPG`, `DSCF8216 II.JPG`, `DSCF8290.JPG`, `Fotografie0436.jpg`.
- Madrid: `DSCF8931.JPG`, `DSCF9017.JPG`, `DSCF9029.JPG`.
- Other Areas: `20130124_180044.jpg`, `DSCF8703.JPG`.
- Caribbean: `_DSC2516.JPG`, `IMG_2194.JPG`, `IMG_2308.JPG`, `IMG_2526.JPG`.
- Lady Blue: `1262714782.jpg`, `IMG_2707.JPG` and `okruh-karibikem.jpg` banner.
- Thailand: `IMG_2198.JPG`, `IMG_2220.JPG`, `IMG_2229.JPG`, `IMG_2259.JPG`, `IMG_2302.JPG` and `thajsko.jpg` banner.
- Additional banners: `spanelsko.jpg`, `modelove-priklady.jpg`, `kontakt.jpg`.

Joomla sample-data images, template graphics, cached thumbnails and unrelated advertising banners were intentionally excluded from the production project.

### Archived downloads from O nás

- [Pojistka k pojistné smlouvě (`pojistka.pdf`)](https://web.archive.org/web/20210117054911/http://delmartour.cz/images/articles/o-nas/pojistka.pdf)
- [Všeobecné podmínky CK DELMAR TOUR (`vp.pdf`)](https://web.archive.org/web/20210117061459/http://delmartour.cz/images/articles/o-nas/vp.pdf)
- [Výpis z obchodního rejstříku (`vypis-or.pdf`)](https://web.archive.org/web/20210117063239/http://delmartour.cz/images/articles/o-nas/vypis-or.pdf)
- [Výpis ze živnostenského rejstříku (`vypis-zr.pdf`)](https://web.archive.org/web/20210117051512/http://delmartour.cz/images/articles/o-nas/vypis-zr.pdf)

These are useful evidence, not publication-ready compliance documents. Their dates, validity, personal data and legal relevance must be reviewed; current replacements should be obtained from the owner.

## Contact and company details found in the archive

| Field | Archived value | Publication status |
|---|---|---|
| Company | Delmar tour s. r. o. | Confirm exact current styling/capitalisation. |
| Registered office | U smaltovny 1335/20e, Praha 7, 170 00 | Confirm against a current official register extract. |
| Company ID (IČ) | 28928466 | Confirm current registration/status. |
| VAT ID (DIČ) | CZ 28928466 | Formatting likely should be `CZ28928466`; confirm VAT status. |
| Register | Municipal Court in Prague, section C, insert 153697 | Archive contains typo “odddíl”; correct only after official verification. |
| Phone | +420 739 226 477 | Confirm it is active and approved for publication. |
| Email | delmar@delmartour.cz | Confirm mailbox and desired public address. The value is visible in the 2022 capture. |
| Bank | Československá obchodní banka, a.s., Radlická 333/150, 150 57 Praha 5 | Usually unnecessary on a public marketing page; confirm purpose. |
| Account | 256851810/0300 | Sensitive and high-risk if stale; omit by default unless the owner explicitly confirms publication. |

## Links, forms and functionality

- Hierarchical global navigation with dropdown-style children for Spain and the Caribbean.
- Logo links to the homepage.
- “Back to top” anchor on pages.
- Image galleries/lightbox behaviour was supported by the old Joomla `sigplus` assets; rebuild as an accessible gallery only where retained images justify it.
- `mailto:delmar@delmartour.cz` appears in the older `O nás` capture.
- Four direct PDF downloads appeared on `O nás` in the older template.
- A legacy RSS endpoint and Joomla search metadata exist in the archive, but no meaningful editorial feed or user-facing search content was found. Do not reproduce them unless the owner requests them.
- No booking engine, enquiry/contact form, newsletter form, user account, online payment or live availability functionality was found.
- The later site appears to rely on JavaScript email obfuscation; it fails in Wayback. Do not recreate that broken mechanism. A normal accessible email link is preferable, or a deliberately designed enquiry form if the owner requests and can operate one.

## Items requiring owner confirmation or editorial correction

### Business and legal

- Is Delmar Tour currently operating, and is it legally a travel agency (`cestovní agentura`) or tour operator (`cestovní kancelář`)? The archive uses both terms.
- Confirm company name, registered office, IČ, DIČ/VAT status, register entry, phone and email from a current authoritative source.
- Confirm whether a bank account should be public at all.
- Obtain current insolvency insurance/guarantee evidence, terms and register extracts; do not silently republish the 2021 PDFs.
- Confirm rights to the name, logos and every photograph, especially any identifiable person.

### Products and operations

- Confirm whether Spain, Caribbean and Thailand remain the offered destinations and whether school groups remain a target segment.
- Revalidate all transport, meal, accommodation, guide, teacher/chaperone and group-size promises.
- Confirm whether the sailing product and `Lady Blue` still exist, with current capacity and safety/commercial details.
- Decide whether sample itineraries are inspirational examples or actual bookable products. Add dates, duration, audience, inclusions/exclusions, price handling and enquiry CTA only from owner-supplied facts.
- Review animal-tourism references (elephant rides), motorcycle hire, nightlife/“erotic district”, bullfighting imagery and culturally reductive wording.
- Correct factual/geographic wording only from verified sources; specifically investigate “Phi Phi Saladan”.

### Content quality and gaps

- No prices, departure dates, cancellation rules, privacy policy, cookie information, accessibility statement or current statutory disclosures were found.
- Page-specific images for Thailand, `Okruh lodí`, `Modelové příklady` and `O nás` were recovered from the Joomla backup. Their copyright and consent status still needs owner confirmation before publication.
- `Další oblasti` is too thin to justify a standalone SEO page unless expanded.
- Image filenames are not reliable alt text. Every retained photo needs visual identification, rights metadata, focal point and editorial alt text.
- Preserve archive provenance in internal notes, but do not present archive capture dates to visitors as if they were current business facts.

## Proposed Astro + Pages CMS content model

The content model should separate stable business data, reusable destination data and owner-editable trip examples. Avoid embedding contact details or service promises directly in Astro components.

### Recommended collections and singleton files

```text
src/content/
├─ settings/
│  ├─ site.json                 # site name, tagline, locale, SEO defaults
│  ├─ navigation.json           # ordered navigation tree
│  ├─ company.json              # legal/contact details and verification dates
│  └─ services.json             # current cross-site practical promises
├─ pages/
│  ├─ home.md
│  ├─ practical-information.md
│  └─ about.md
├─ destinations/
│  ├─ spain.md
│  ├─ catalonia.md
│  ├─ valencia.md
│  ├─ andalusia.md
│  ├─ madrid.md
│  ├─ other-spain.md
│  ├─ caribbean.md
│  └─ thailand.md
├─ experiences/
│  └─ lady-blue-sailing.md
├─ itineraries/
│  ├─ catalonia-example.md
│  └─ thailand-example.md
├─ documents/
│  └─ *.json                    # owner-provided current PDFs + validity metadata
└─ media/
   └─ *.json                    # provenance, rights, alt text, focal point, archive source
```

### Suggested schemas

`destination`:

- `title`, `slug`, `parent`, `summary`, `body`
- `heroImage`, `gallery[]`, `highlights[]`
- `transportNotes`, `audiences[]`
- `relatedDestinations[]`, `relatedItineraries[]`
- `cta` reference
- `sourceUrl`, `sourceCapture`, `archivalNotes`
- `reviewStatus` (`archived`, `owner-confirmed`, `needs-review`), `reviewedAt`
- SEO fields: `seoTitle`, `seoDescription`, `noindex`

`itinerary`:

- `title`, `slug`, `destination`, `durationDays`, `audience`
- `status` (`example`, `available`, `retired`)
- `intro`, `days[]` with `day`, `title`, `description`, optional `meals` and `overnight`
- `transport`, `accommodation`, `included[]`, `excluded[]`
- `availabilityNote`, optional `priceNote`, `enquiryCta`
- `sourceUrl`, `sourceCapture`, `reviewStatus`, `reviewedAt`

`company` singleton:

- `legalName`, `brandName`, `businessType`
- `registrationNumber`, `vatNumber`, `registerText`
- structured address, `phone`, `email`
- optional bank details hidden from the public template by default
- `verifiedAt`, `verifiedBy`, `publicationApproved`

`document`:

- `title`, `file`, `documentType`, `issuedAt`, `validUntil`
- `public`, `ownerConfirmed`, `source`

`media`:

- `file`, `title`, `alt`, `caption`, `credit`
- `rightsStatus`, `ownerConfirmed`, `containsIdentifiablePeople`
- `archiveOriginalUrl`, `archiveCapture`, `focalPoint`

### Pages CMS editing approach

- Configure singleton forms for site settings, navigation, company/contact details and practical information.
- Configure collections for destinations, experiences, itineraries, documents and media metadata.
- Use select/relation fields for parent destinations, related itineraries and media; use list fields for itinerary days and galleries.
- Make `reviewStatus`, source URL/capture and rights fields visible in the CMS so archival text cannot be mistaken for verified current copy.
- Validate unique slugs and stable IDs. Navigation should reference content IDs, not duplicate URLs/titles.
- Keep PDFs and images in versioned repository storage only after rights/currentness review; preserve their original archive URL in metadata.

## Proposed implementation boundaries for the later phase

- Preserve the confirmed routes and hierarchy, with redirects from legacy `/zajezdy/...` paths.
- Modernise layout, typography, colour, responsive navigation, destination cards and calls to action; do not imitate the obsolete Joomla template pixel-for-pixel.
- Use semantic HTML, keyboard-accessible navigation and galleries, visible focus, responsive images, reduced-motion support and WCAG-conscious contrast.
- Build a static Astro site first. Do not add booking, payment or form backends until requirements, ownership and data-protection responsibilities are explicit.
- Show only owner-confirmed legal/business details and current documents. Keep unresolved archival content in draft or `needs-review` state.
- Before implementation, visually inspect and download the selected archive assets, deduplicate likely gallery variants, record dimensions/checksums, and obtain owner approval for rights-sensitive images.

## Recommended pre-build owner checklist

1. Confirm current business/legal identity and whether the company is operating as a travel agency or tour operator.
2. Approve the public contact data and decide whether to omit bank details.
3. Confirm active destinations/products, especially school travel and `Lady Blue`.
4. Mark each archived itinerary as retain/rewrite/retire.
5. Supply current insurance, terms, privacy/cookie texts and any mandatory statutory disclosures.
6. Confirm rights for the logo and shortlisted archive images; provide replacements where rights or subjects are uncertain.
7. Approve the proposed navigation and decide whether `Další oblasti` remains a page.
