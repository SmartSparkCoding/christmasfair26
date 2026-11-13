/**
 * Map data for the 2026 fair.
 *
 * Everything here comes from the three PFA plans supplied for this year:
 *
 *  - "Harper Hall" plan: the numbered ring of stalls 1–22 with the stallholder
 *    table beside it.
 *  - Ground-floor plan: reception, tombolas, café, grotto, Christingle room,
 *    craft room, face painting, toilets and the Harper Hall entrance.
 *  - Outdoor plan: gazebos 25–27, the rides, the horse box, the choir gazebo,
 *    paths and parking.
 *
 * Coordinates are in the SVG viewBox space of each map, not real-world metres.
 * The site plan is a schematic: it keeps the relative position of each area but
 * is not to scale, and the page says so.
 */

export type StallKind = 'independent' | 'pfa';

export interface HarperHallStall {
  /** Stall number as printed on the PFA plan. */
  no: number;
  /** Trading name, matching `independentStalls` / `schoolPFASstalls` where possible. */
  name: string;
  kind: StallKind;
  /** Centre of the stall block in the Harper Hall viewBox. */
  cx: number;
  cy: number;
  w: number;
  h: number;
  /** Rotation in degrees, for the angled blocks around the ring. */
  rot?: number;
  /** Shown in the detail panel when the plan itself adds something. */
  note?: string;
}

/**
 * Stalls 1–22 sit in the ring inside Harper Hall. 23 and 24 are just outside the
 * hall (Home Plus by the entrance, the family photo room off the corridor), and
 * 25–27 are gazebos on the lawn, so they are drawn on the site plan instead.
 */
export const harperHallStalls: HarperHallStall[] = [
  { no: 1, name: 'The Granary Spa', kind: 'independent', cx: 405, cy: 55, w: 78, h: 34 },
  { no: 2, name: 'Hand Made in Hythe', kind: 'independent', cx: 519, cy: 55, w: 78, h: 34 },
  { no: 3, name: "Neal's Yard Remedies", kind: 'independent', cx: 634, cy: 55, w: 78, h: 34 },
  { no: 4, name: 'Simon James Home', kind: 'independent', cx: 746, cy: 55, w: 78, h: 34 },
  {
    no: 5,
    name: "Caroline's Crafty Crochet",
    kind: 'independent',
    cx: 830,
    cy: 110,
    w: 78,
    h: 34,
    rot: -45,
  },
  { no: 6, name: 'Pop Goes The Balloon', kind: 'independent', cx: 842, cy: 175, w: 34, h: 78 },
  { no: 7, name: 'Ivy & Rose Bloom Bar', kind: 'independent', cx: 842, cy: 260, w: 34, h: 78 },
  {
    no: 8,
    name: 'Warehorne Vineyard',
    kind: 'independent',
    cx: 805,
    cy: 327,
    w: 78,
    h: 34,
    rot: 45,
  },
  { no: 9, name: 'Season', kind: 'independent', cx: 709, cy: 372, w: 78, h: 34 },
  { no: 10, name: 'Fox & Bloom', kind: 'independent', cx: 594, cy: 372, w: 78, h: 34 },
  { no: 11, name: 'Woodchurch Vineyard', kind: 'independent', cx: 479, cy: 372, w: 78, h: 34 },
  { no: 12, name: 'By Wuzzie', kind: 'independent', cx: 357, cy: 302, w: 34, h: 78 },
  { no: 13, name: 'Zoe Robyn Jewellery', kind: 'independent', cx: 357, cy: 212, w: 34, h: 78 },
  { no: 14, name: 'Soulmate Spirits', kind: 'independent', cx: 357, cy: 122, w: 34, h: 78 },
  {
    no: 15,
    name: 'It has to be pretty',
    kind: 'independent',
    cx: 462,
    cy: 280,
    w: 78,
    h: 34,
    rot: 45,
  },
  {
    no: 16,
    name: 'It has to be pretty',
    kind: 'independent',
    cx: 462,
    cy: 190,
    w: 78,
    h: 34,
    rot: -45,
    note: 'The plan lists It has to be pretty twice, at stalls 15 and 16.',
  },
  { no: 17, name: 'Tina Laker', kind: 'independent', cx: 546, cy: 140, w: 78, h: 34 },
  { no: 18, name: 'Blue Farm Cottage Crafts', kind: 'independent', cx: 661, cy: 140, w: 78, h: 34 },
  {
    no: 19,
    name: 'The Small Batch Company',
    kind: 'independent',
    cx: 760,
    cy: 190,
    w: 78,
    h: 34,
    rot: 45,
  },
  {
    no: 20,
    name: 'Meander Jewellery',
    kind: 'independent',
    cx: 760,
    cy: 280,
    w: 78,
    h: 34,
    rot: -45,
  },
  { no: 21, name: 'PFA Kids', kind: 'pfa', cx: 649, cy: 297, w: 78, h: 34 },
  {
    no: 22,
    name: 'PFA Kids',
    kind: 'pfa',
    cx: 549,
    cy: 297,
    w: 78,
    h: 34,
    note: 'The plan lists PFA Kids twice, at stalls 21 and 22.',
  },
];

/** Stalls that are numbered on the plan but sit outside the Harper Hall ring. */
export const offHallStalls = [
  {
    no: 23,
    name: 'Homeplus Furniture',
    where: 'Just outside the Harper Hall entrance, next to the Impact Squad stall',
  },
  {
    no: 24,
    name: 'Helen Tinner Photography',
    where: 'Family photo sessions, off the corridor by the disabled and baby changing room',
  },
  { no: 25, name: 'Vintage Games', where: 'Gazebo on the lawn, left of the main entrance' },
  { no: 26, name: 'Binks', where: 'Gazebo on the lawn, left of the main entrance' },
  { no: 27, name: 'Baby Adore', where: 'Gazebo on the lawn, left of the main entrance' },
];

export type ZoneKind = 'building' | 'stall' | 'facility' | 'outdoor' | 'path' | 'entrance';

export interface SiteZone {
  id: string;
  label: string;
  /** Optional second line, e.g. a stall number. */
  sub?: string;
  kind: ZoneKind;
  x: number;
  y: number;
  w: number;
  h: number;
  /** Longer text for the detail panel. */
  detail?: string;
}

/**
 * Schematic site plan. The main building runs across the top, the grounds and
 * car park below it, with the main entrance at the bottom centre, matching the
 * PFA's ground-floor and outdoor plans.
 */
export const siteZones: SiteZone[] = [
  // ---- Main building ----
  {
    id: 'harper-hall',
    label: 'Harper Hall',
    sub: 'Stalls 1–22',
    kind: 'building',
    x: 300,
    y: 96,
    w: 400,
    h: 150,
    detail:
      'The main hall of stalls. Stalls 1–22 are laid out in a ring around the room, with the entrance at the top of the plan.',
  },
  {
    id: 'reception',
    label: 'Main Reception',
    sub: 'Welcome Point',
    kind: 'building',
    x: 40,
    y: 150,
    w: 110,
    h: 170,
    detail:
      'The Welcome Point and central hub for information, first aid and lost people. Raffle tickets are sold here.',
  },
  {
    id: 'info',
    label: 'Information / welcome point',
    kind: 'facility',
    x: 40,
    y: 330,
    w: 110,
    h: 40,
  },
  { id: 'raffle', label: 'Raffle', kind: 'stall', x: 40, y: 380, w: 110, h: 40 },
  { id: 'club-100', label: '100 club', kind: 'stall', x: 165, y: 60, w: 110, h: 34 },
  { id: 'bottle-tombola', label: 'Bottle tombola', kind: 'stall', x: 165, y: 104, w: 110, h: 34 },
  {
    id: 'chocolate-tombola',
    label: 'Chocolate tombola',
    kind: 'stall',
    x: 165,
    y: 148,
    w: 110,
    h: 34,
  },
  {
    id: 'family-photo',
    label: 'Family photo sessions',
    sub: 'Stall 24',
    kind: 'stall',
    x: 165,
    y: 12,
    w: 110,
    h: 34,
    detail: 'Helen Tinner Photography, stall 24.',
  },
  {
    id: 'games-tombola',
    label: 'Games & teddy tombola',
    kind: 'stall',
    x: 300,
    y: 12,
    w: 150,
    h: 34,
  },
  {
    id: 'craft-room',
    label: 'Senior school craft room',
    sub: 'Decoration painting',
    kind: 'facility',
    x: 300,
    y: 56,
    w: 150,
    h: 34,
  },
  {
    id: 'impact-squad',
    label: 'Impact Squad',
    kind: 'stall',
    x: 560,
    y: 256,
    w: 80,
    h: 34,
    detail: 'Senior school group selling items they have made for the PFA stall.',
  },
  {
    id: 'home-plus',
    label: 'Home Plus',
    sub: 'Stall 23',
    kind: 'stall',
    x: 650,
    y: 256,
    w: 80,
    h: 34,
    detail: 'Homeplus Furniture, stall 23, just outside the Harper Hall entrance.',
  },
  {
    id: 'face-painting',
    label: 'Face painting',
    kind: 'facility',
    x: 800,
    y: 300,
    w: 100,
    h: 34,
  },
  {
    id: 'cafe',
    label: 'Friars Hall',
    sub: 'Christmas Café',
    kind: 'building',
    x: 860,
    y: 150,
    w: 100,
    h: 140,
    detail:
      'The Nordic Café: hot food, homemade cakes and refreshments. Performances move here if the weather turns.',
  },
  {
    id: 'toilets',
    label: 'Toilets',
    kind: 'facility',
    x: 900,
    y: 60,
    w: 60,
    h: 34,
  },
  {
    id: 'accessible-toilet',
    label: 'Disabled & baby changing',
    kind: 'facility',
    x: 40,
    y: 60,
    w: 110,
    h: 34,
  },
  { id: 'toys', label: 'Toys', kind: 'stall', x: 470, y: 400, w: 80, h: 34 },
  { id: 'books', label: 'Books', kind: 'stall', x: 570, y: 400, w: 80, h: 34 },
  {
    id: 'christingle',
    label: 'Christingle making',
    sub: 'Reverend Bellamy',
    kind: 'facility',
    x: 600,
    y: 450,
    w: 130,
    h: 40,
    detail:
      'First room on the right from the main entrance. Proceeds go to The Children’s Society.',
  },
  {
    id: 'grotto',
    label: "Santa's Grotto",
    kind: 'facility',
    x: 800,
    y: 450,
    w: 160,
    h: 50,
    detail:
      'Down the stairs past the Friars Hall entrance. Open 12:00pm – 4:00pm, slots every half hour.',
  },
  {
    id: 'main-entrance',
    label: 'Main entrance',
    kind: 'entrance',
    x: 400,
    y: 480,
    w: 120,
    h: 40,
  },

  // ---- Grounds ----
  {
    id: 'choir-gazebo',
    label: 'Choir gazebo',
    kind: 'outdoor',
    x: 560,
    y: 580,
    w: 110,
    h: 40,
    detail: 'Moves to the café if the weather turns.',
  },
  {
    id: 'mulled-wine',
    label: 'Mulled wine horse box',
    kind: 'outdoor',
    x: 700,
    y: 580,
    w: 110,
    h: 40,
    detail: 'Mulled wine and Baileys hot chocolate.',
  },
  {
    id: 'popcorn',
    label: 'Popcorn & sweet treats',
    kind: 'outdoor',
    x: 840,
    y: 580,
    w: 110,
    h: 40,
  },
  {
    id: 'rides-1',
    label: 'Rides',
    sub: 'Ellis Amusements',
    kind: 'outdoor',
    x: 300,
    y: 620,
    w: 120,
    h: 40,
    detail:
      'Swing chairs, climbing wall, penalty shootout, covered bouncy castle and Christmas toys funfair ride.',
  },
  {
    id: 'rides-2',
    label: 'Rides',
    sub: 'Ellis Amusements',
    kind: 'outdoor',
    x: 840,
    y: 640,
    w: 120,
    h: 40,
  },
  {
    id: 'gazebo-25',
    label: '25',
    sub: 'Vintage Games',
    kind: 'stall',
    x: 60,
    y: 600,
    w: 90,
    h: 34,
  },
  { id: 'gazebo-26', label: '26', sub: 'Binks', kind: 'stall', x: 60, y: 644, w: 90, h: 34 },
  { id: 'gazebo-27', label: '27', sub: 'Baby Adore', kind: 'stall', x: 60, y: 688, w: 90, h: 34 },
  {
    id: 'car-park',
    label: 'Main car park',
    kind: 'path',
    x: 40,
    y: 740,
    w: 200,
    h: 40,
    detail: 'Path from the main car park leads up to the main entrance.',
  },
  {
    id: 'staff-parking',
    label: 'Staff & stallholder parking',
    kind: 'path',
    x: 800,
    y: 740,
    w: 160,
    h: 40,
  },
];

/** Stall number lookup by trading name, for the stalls directory. */
export const stallNumbers: Record<string, number[]> = harperHallStalls
  .concat(
    offHallStalls.map((stall) => ({
      no: stall.no,
      name: stall.name,
      kind: 'independent' as StallKind,
      cx: 0,
      cy: 0,
      w: 0,
      h: 0,
    })),
  )
  .reduce<Record<string, number[]>>((acc, stall) => {
    acc[stall.name] = [...(acc[stall.name] ?? []), stall.no];
    return acc;
  }, {});

/** The site's stall list calls the PFA kids stall "Kids stall"; the plan says "PFA Kids". */
stallNumbers['Kids stall'] = stallNumbers['PFA Kids'] ?? [];

export function stallNumberLabel(name: string): string | null {
  const numbers = stallNumbers[name];
  if (!numbers || numbers.length === 0) return null;
  return numbers.length === 1 ? `Stall ${numbers[0]}` : `Stalls ${numbers.join(' & ')}`;
}
