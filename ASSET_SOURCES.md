# Asset sources and licences

All third-party assets used by this site are listed here with their source and licence.
Anything not listed was created for this project.

## Ashford School brand assets

| File | Source | Notes |
| --- | --- | --- |
| `public/images/ashford-logo.png` | https://www.ashfordschool.co.uk/wp-content/themes/ashford-school/assets/src/img/ashford-logo.png | Official Ashford School logo, taken from the school's own website. Trademark of Ashford School. |
| `public/images/ashford-logo-footer.png` | https://www.ashfordschool.co.uk/wp-content/themes/ashford-school/assets/src/img/ashford-logo-footer.png | Official footer variant of the school logo. |
| `public/images/ashford-crest.png` | Derived from `ashford-logo.png` | Cropped to the crest only for the compact header lockup. No redrawing or recolouring of the mark. |

These are the school's own brand assets and are used to identify the school and its event. They
must not be reused outside this project without the school's permission.

No school crest, logo or emblem was invented or recreated for this site.

## Photography

Photographs are used to set a festive tone. None of them depict Ashford School, its grounds, its
pupils or staff, and the site does not present them as doing so.

| File | Source | Licence |
| --- | --- | --- |
| `public/images/hero-christmas.jpg` | https://images.unsplash.com/photo-1543589077-47d81606c1bf (Unsplash, photo ID `1543589077-47d81606c1bf`) | Unsplash License (free to use; attribution not required) |
| `public/images/gifts.jpg` | https://images.unsplash.com/photo-1513885535751-8b9238bd345a (Unsplash, photo ID `1513885535751-8b9238bd345a`) | Unsplash License (free to use; attribution not required) |

Both files were downloaded from `images.unsplash.com` (the free Unsplash library — Unsplash+ images
are served from `plus.unsplash.com`) and resized/compressed locally.

**Pre-launch item:** the individual photographers' names could not be resolved programmatically
(unsplash.com blocks automated requests). The Unsplash License does not require attribution, so this
does not block publication, but if the PFA wants a credit line the photographers should be looked up
manually on the photo pages above.

## Social media content

| Content | Source | Notes |
| --- | --- | --- |
| Instagram post embed | https://www.instagram.com/p/DRYDriljZGF/ by [@ashfordschool_pfa](https://www.instagram.com/ashfordschool_pfa) | Embedded with Instagram's official `embed.js`. The image and caption remain hosted by Instagram; nothing is downloaded or re-hosted. |

The Instagram embed is loaded lazily when it scrolls into view, and a styled link card is shown if the
embed script is blocked or unavailable.

## Iconography

The site icons (Instagram mark, external-link arrow) and the favicon are original SVG artwork created
for this project in the Brand palette. The favicon is a stylised Christmas tree and star, not a school
emblem.

## Fonts

| Font | Source | Licence |
| --- | --- | --- |
| Cormorant Garamond | Google Fonts | SIL Open Font License 1.1 |
| Inter | Google Fonts | SIL Open Font License 1.1 |

Fonts are loaded from Google Fonts with `preconnect` hints. Local fallbacks (`Georgia` / system sans)
are declared so the site stays readable if the font service is unavailable.
