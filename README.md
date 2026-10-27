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

All event facts come from the PFA's overview document. The document is last year's fair copied
forward, with **this year's edits written in blue**; unchanged text is black. Content was extracted
with colour information so the blue edits could be applied and last year's text treated as
carried-over rather than current.

### Facts taken from the document

1. **Date — Sunday 29th November 2026.** The document's date line is black (unedited) and reads
   "Saturday 29th November", which was true in 2025; in 2026 the 29th falls on a Sunday. The PFA
   confirmed the 2026 fair is **Sunday 29th November**. Times are unchanged: 12:00pm – 4:00pm.
2. **Location.** "Great Chart Site" plus the published address for the Prep School site: Ashford
   Prep School, Great Chart, Ashford, Kent, TN23 3DJ. Every location mention links to that address
   in Google Maps.
3. **Instagram handle.** The document lists `@ashfordschoolpfa (TBC)`, which does not exist. The
   PFA's real account is **[@ashfordschool_pfa](https://www.instagram.com/ashfordschool_pfa)**
   (underscore), confirmed from the oEmbed metadata of the PFA's own "welcome to our new PFA
   Instagram page" post, which the site embeds. `@ashfordschool` is the main school account and is
   not used for PFA updates.

### This year's (blue) changes applied

| Blue edit | What changed on the site |
| --- | --- |
| "Traditional Christmas Cafe" (Nordic café) | Kept as the café's descriptor |
| "First room on right from main entrance" (Christingle) | Christingle room location now reads that, dropping "Room TBC" |
| "Large covered bouncy castle, penalty shootout, Christmas toys funfair ride" | Added to the Fairground entry |
| "AYJO Cant do so need to see if choir can do another 15-20 min slot." | **Ashford Youth Jazz Orchestra removed from the 2026 programme**; a second School Choir set is listed as "To be confirmed" |
| Neptune bar £500, £150 PFA cash, £150 Champney's hamper, Boys Hall £100, Suzi Standen £102 | Applied to the super raffle prize list |
| Stall list on pages 3–4 (blue table) | Replaces last year's black list as the 2026 roster |

### Notes and judgement calls

- **Stall list.** The document carries two lists: last year's black list (page 2) and this year's
  blue table (pages 3–4). The blue roster is published, because blue marks this year's edits; the
  black list is treated as superseded. Duplicates were removed ("It has to be pretty" is listed
  twice) and obvious mis-spellings of trading names corrected (`Neal's Yard Remidies` →
  Neal's Yard Remedies, `Soul mates spirits` → Soulmate Spirits). **Ellis Amusements** is the
  fairground operator, not a stall, so it appears in the programme rather than the directory.
  **"Photo room - Senior school ?"** is still a question in the document and is not published as a
  confirmed stall. "Kids stall" is published as written. Current total: 36 listed stalls.
- **Super raffle cash prize.** The line reads "£200 Cash … PFA - 150 cash", with only "PFA - 150 cash"
  in blue. The site shows £150, since the blue text is this year's figure. Worth confirming.
- **Champney's hamper.** Reads "£120 … - £150 worth"; the blue "£150 worth" is used.
- **The jazz orchestra note** is an internal planning instruction, not public copy, so it is not
  published — but its consequence (no AYJO in 2026) is reflected in the programme.
- **No invented content.** No entry fee, parking charges, stall prices, trader categories, map
  coordinates or extra facilities have been added. Where the PFA has not published something
  (parking detail, accessibility statement, per-trader locations) the site says so.

### Stall website links

Seven of the 24 independent stallholders have a website linked from the directory. A link was only
added where the business could be positively identified as the same stallholder — location, product
and name all matched. Anything ambiguous was left unlinked rather than guessed.

| Stall | Website | How it was matched |
| --- | --- | --- |
| Fox & Bloom | https://www.foxandbloom.co.uk/ | Natural skincare made in Kent; same founder and product type |
| Warehorne Vineyard | https://www.warehornevineyard.co.uk/ | Family vineyard at Warehorne Road, Ashford (see note below) |
| Soulmate Spirits | https://www.soulmatespirits.co.uk/ | Soulmate Spirits Ltd, 134 Sandyhurst Lane, Ashford |
| The Granary Spa | https://www.thegranaryspa.co.uk/ | Award-winning spa at Worten Lower Yard, Great Chart, Ashford |
| Zoe Robyn Jewellery | https://www.zoerobynjewellery.com/ | Silversmith based near Ashford, Kent |
| Woodchurch Vineyard | https://woodchurchwine.co.uk/ | Woodchurch Wine Estate, near Ashford |
| Baby Adore | https://babyadore.co.uk/ | Hand-crocheted baby items, UK |

Deliberately **not** linked: Caroline's Crafty Crochet, Blue Farm Cottage Crafts, Meander Jewellery,
Hand Made in Hythe, Pop Goes The Balloon, It has to be pretty, By Wuzzie, Molly Bishop Art, Tina
Laker, Season, Ivy & Rose Bloom Bar, Kids stall, Homeplus Furniture, The Small Batch Company, Vintage
Games and Binks. Either no website could be found, or several same-name businesses exist and there
was no reliable way to tell which one is the stallholder. **Neal's Yard Remedies** is a national
brand but the stall is likely an independent consultant, so it is not linked to the corporate site.

**Warehorne spelling.** The PFA document lists "Warehore Vineyard". No such vineyard exists; the
family-run vineyard at Warehorne Road, Ashford is Warehorne Vineyard, so the directory uses the
correct spelling. Worth confirming with the PFA in case they meant a different trader.

PFA stalls are buttons rather than links: each opens a small in-site popup with the stall name, its
location where the document gives one, and a one-line description built only from documented facts.
Popup text is deliberately short and will need extending once the PFA supplies details for the
tombolas, sweet stall and kids stall.

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
