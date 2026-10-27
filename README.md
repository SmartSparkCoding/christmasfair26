# Ashford School Christmas Fair 2026

Website and digital programme for the Ashford School Christmas Fair 2026, held on
**Saturday 29th November 2026, 12:00pm – 4:00pm** at **Ashford Prep School, Great Chart,
Ashford, Kent, TN23 3DJ**.

Built with [Astro](https://astro.build/) as a static site. No backend, database, tracking or
cookies.

## Pages

| Route | What it does |
| --- | --- |
| `/` | Hero with confirmed date/time/location, welcome from the PFA Chair, event highlights, programme preview, PFA Instagram post |
| `/programme` | Full programme with category filters, live result count, empty state, print stylesheet |
| `/stalls` | Stall directory (independent + school/PFA) with live search, empty state and "clear search" |
| `/visitor-info` | Getting here, key locations, food and drink, accessibility, safety, PFA contact |
| `/raffle` | Super and everyday raffle details plus every listed prize and donor |

## Content sources and editorial decisions

All event facts come from the PFA's Christmas Fair overview document. Where the document was
ambiguous or contained internal notes, the following decisions were made:

1. **Event name/year.** The overview document is headed "Christmas Fair 2025" but the site is the
   2026 fair, so the year reads 2026 throughout. The format and details (29 November, 12:00–4:00pm)
   are as supplied.
2. **Instagram handle.** The overview said `@ashfordschoolpfa (TBC)`. That handle does not exist.
   The PFA's real, verified account is **[@ashfordschool_pfa](https://www.instagram.com/ashfordschool_pfa)**
   (note the underscore), confirmed via Instagram's oEmbed metadata for the PFA's own "welcome to our
   new PFA Instagram page" post. The site uses that handle and embeds that post. The main school
   account, `@ashfordschool`, is a separate account and is not used for PFA updates.
3. **Location.** The overview says "Great Chart Site". The published address for the Prep School site
   is Ashford Prep School, Great Chart, Ashford, Kent, TN23 3DJ (from ashfordschool.co.uk). The header
   and every location mention link to that address in Google Maps.
4. **Removed internal note.** The overview's jazz orchestra entry contained the working note
   "AYJO Cant do so need to see if choir can do another 15-20 min slot". That is internal planning
   commentary, not public information, so it is not published. The entry keeps the two listed set
   times.
5. **Times normalised.** Times are displayed consistently (`12:00pm – 12:30pm`, `1:30pm & 2:45pm`,
   `3:15pm`). The two jazz orchestra sets are listed as `13:30` and `14:45` in the source and appear
   as 1:30pm and 2:45pm.
6. **Stall list reconciled.** The overview lists stallholders twice with overlapping and differently
   spelled entries. Obvious duplicates were merged so the directory does not show the same trader
   twice: `Warehore Vineyard` → `Warehorne Wines`, `Meander` → `Meander Jewellery`,
   `Neals Yard Remedies` → `Neal's Yard Remedies`, the two `Park House Petals (TBC)` entries, and
   `Impact squad` listed once (under School & PFA stalls). Source spellings such as
   "Laura's stationary stash" are otherwise preserved. Current total: 47 listed stalls.
7. **Not invented.** No entry fee, parking charges, stall prices, stallholder categories, map
   coordinates or additional facilities have been invented. Where the PFA has not published
   something (parking detail, accessibility statement, stall locations per trader), the site says so
   rather than guessing.
8. **Ambiguous stall location.** The overview gives "Room TBC" for the Christingle room and "TBC" for
   the horse box; both are shown as TBC.

## Design system

Tokens live in `src/styles/global.css`:

```
--ashford-navy #16294A   --christmas-burgundy #A11834   --evergreen #23634B
--warm-cream  #F8F5ED    --soft-gold #D4AD72            --pure-white #FFFFFF
--body-text   #252A32    --muted-text #626875           --border-subtle #E5E0D6
```

Type: **Cormorant Garamond** for headings and programme titles, **Inter** for interface and body copy.
Layout is a 1180px measure on a 4/8/16/24px spacing scale, with a single card style and hairline
dividers rather than a card per paragraph.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

There is no lint or test task configured in this repository; `npm run build` is the build/type gate
(Astro compiles the TypeScript in `.astro` files and fails the build on type errors).

## Deploying

The build is fully static. After `npm run build`, deploy the contents of `dist/` to any static host
(Netlify, Cloudflare Pages, GitHub Pages, Vercel, or a plain web server). No environment variables or
server runtime are required.

## Credits

Website designed and built by **[Jacob Navaratne](https://jacob.navaratne.uk/)**, Year 10 student at
Ashford School.

Event organised by the Ashford School Parents & Friends Association (PFA).
