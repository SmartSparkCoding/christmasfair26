/**
 * Map data for the 2026 fair.
 *
 * Everything here is traced from the four PFA plans supplied for this year:
 *
 *  - "Harper Hall" plan: the numbered ring of stalls 1-22 with the stallholder
 *    table beside it.
 *  - Ground-floor plan: reception, tombolas, cafe, grotto, Christingle room,
 *    craft room, face painting, toilets and the Harper Hall entrance.
 *  - Outdoor plan: gazebos 25-27, the rides, the horse box, the choir gazebo,
 *    paths and parking.
 *  - Christmas Cafe plan: the serving counter, till, seating and Year 5 stalls
 *    in Friars Hall.
 *
 * Coordinates are in the SVG viewBox space of each map, taken by measuring the
 * supplied drawings, so the relative positions and proportions match the plans.
 * They are not real-world metres, and the page says so.
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
 * Stalls 1-22 sit in the ring inside Harper Hall. 23 and 24 are just outside the
 * hall (Home Plus by the entrance, the family photo room off the corridor), and
 * 25-27 are gazebos on the lawn, so they are drawn on the other plans instead.
 *
 * Positions are measured off the PFA plan: 1-4 along the top, 5-8 down the right
 * side, 9-11 along the bottom, 12-14 down the left, with 15-20 angled in the
 * inner ring and 21/22 (PFA Kids) as the two pink blocks at the bottom centre.
 */
export const harperHallStalls: HarperHallStall[] = [
  { no: 1, name: 'The Granary Spa', kind: 'independent', cx: 406, cy: 185, w: 72, h: 30 },
  { no: 2, name: 'Hand Made in Hythe', kind: 'independent', cx: 519, cy: 185, w: 72, h: 30 },
  { no: 3, name: "Neal's Yard Remedies", kind: 'independent', cx: 634, cy: 185, w: 72, h: 30 },
  { no: 4, name: 'Simon James Home', kind: 'independent', cx: 746, cy: 185, w: 72, h: 30 },
  {
    no: 5,
    name: "Caroline's Crafty Crochet",
    kind: 'independent',
    cx: 830,
    cy: 225,
    w: 72,
    h: 30,
    rot: 45,
  },
  { no: 6, name: 'Pop Goes The Balloon', kind: 'independent', cx: 842, cy: 295, w: 30, h: 70 },
  { no: 7, name: 'Ivy & Rose Bloom Bar', kind: 'independent', cx: 842, cy: 380, w: 30, h: 70 },
  {
    no: 8,
    name: 'Warehorne Vineyard',
    kind: 'independent',
    cx: 810,
    cy: 450,
    w: 72,
    h: 30,
    rot: -45,
  },
  { no: 9, name: 'Season', kind: 'independent', cx: 709, cy: 502, w: 72, h: 30 },
  { no: 10, name: 'Fox & Bloom', kind: 'independent', cx: 594, cy: 502, w: 72, h: 30 },
  { no: 11, name: 'Woodchurch Vineyard', kind: 'independent', cx: 479, cy: 502, w: 72, h: 30 },
  { no: 12, name: 'By Wuzzie', kind: 'independent', cx: 360, cy: 435, w: 30, h: 70 },
  { no: 13, name: 'Zoe Robyn Jewellery', kind: 'independent', cx: 360, cy: 345, w: 30, h: 70 },
  { no: 14, name: 'Soulmate Spirits', kind: 'independent', cx: 360, cy: 255, w: 30, h: 70 },
  {
    no: 15,
    name: 'It has to be pretty',
    kind: 'independent',
    cx: 460,
    cy: 400,
    w: 72,
    h: 30,
    rot: -45,
    note: 'The plan lists It has to be pretty twice, at stalls 15 and 16.',
  },
  {
    no: 16,
    name: 'It has to be pretty',
    kind: 'independent',
    cx: 460,
    cy: 312,
    w: 72,
    h: 30,
    rot: -45,
    note: 'The plan lists It has to be pretty twice, at stalls 15 and 16.',
  },
  { no: 17, name: 'Tina Laker', kind: 'independent', cx: 546, cy: 270, w: 72, h: 30 },
  { no: 18, name: 'Blue Farm Cottage Crafts', kind: 'independent', cx: 661, cy: 270, w: 72, h: 30 },
  {
    no: 19,
    name: 'The Small Batch Company',
    kind: 'independent',
    cx: 762,
    cy: 312,
    w: 72,
    h: 30,
    rot: 45,
  },
  { no: 20, name: 'Meander Jewellery', kind: 'independent', cx: 762, cy: 400, w: 72, h: 30, rot: 45 },
  {
    no: 21,
    name: 'PFA Kids',
    kind: 'pfa',
    cx: 649,
    cy: 425,
    w: 72,
    h: 30,
    note: 'The plan lists PFA Kids twice, at stalls 21 and 22.',
  },
  {
    no: 22,
    name: 'PFA Kids',
    kind: 'pfa',
    cx: 549,
    cy: 425,
    w: 72,
    h: 30,
    note: 'The plan lists PFA Kids twice, at stalls 21 and 22.',
  },
];

/** The Harper Hall floor, in the same viewBox as the stalls above. */
export const harperHallFloor = { x: 330, y: 148, w: 540, h: 402 };

/** Stalls that are not in the ring, with where to find them. */
export const offHallStalls = [
  {
    no: 23,
    name: 'Homeplus Furniture',
    where: 'Just outside the Harper Hall entrance, next to the Impact Squad stall.',
  },
  {
    no: 24,
    name: 'Helen Tinner Photography',
    where: 'Family photo sessions, off the corridor by the disabled and baby changing room.',
  },
  { no: 25, name: 'Vintage Games', where: 'Gazebo on the lawn, left of the main entrance.' },
  {
    no: 26,
    name: 'Binks',
    where: 'Same gazebo as Vintage Games, on the lawn left of the main entrance.',
  },
  {
    no: 27,
    name: 'Baby Adore',
    where: 'Same gazebo as Vintage Games, on the lawn left of the main entrance.',
  },
];

export type ZoneKind = 'building' | 'stall' | 'facility' | 'outdoor' | 'path' | 'entrance';

export interface SiteZone {
  id: string;
  label: string;
  /** Shorter label drawn inside the SVG when the block is small. */
  short?: string;
  sub?: string;
  kind: ZoneKind;
  x: number;
  y: number;
  w: number;
  h: number;
  /** Rotation in degrees, for the angled blocks on the plans. */
  rot?: number;
  detail?: string;
}

/**
 * Ground floor of the main building, traced from the PFA ground-floor plan.
 * viewBox is "0 0 1000 707".
 */
export const buildingZones: SiteZone[] = [
  {
    id: 'reception',
    label: 'Reception',
    sub: 'Welcome Point',
    kind: 'building',
    x: 8,
    y: 262,
    w: 58,
    h: 220,
    detail:
      'The Welcome Point. Raffle tickets are sold here, and it is the place to ask if you cannot find something.',
  },
  {
    id: 'baby-changing',
    label: 'Baby changing',
    short: 'Baby changing',
    sub: 'Disabled & baby changing',
    kind: 'facility',
    x: 8,
    y: 128,
    w: 96,
    h: 46,
    detail:
      'Disabled toilet and baby changing room, off the corridor by the family photo sessions.',
  },
  {
    id: 'family-photo',
    label: 'Photo sessions',
    short: 'Photos',
    sub: 'Stall 24',
    kind: 'stall',
    x: 118,
    y: 4,
    w: 92,
    h: 34,
    detail: 'Helen Tinner Photography, family photo sessions, stall 24.',
  },
  {
    id: 'games-tombola',
    label: 'Games & teddy tombola',
    short: 'Games',
    kind: 'stall',
    x: 226,
    y: 4,
    w: 100,
    h: 40,
  },
  {
    id: 'harper-hall',
    label: 'Harper Hall',
    sub: 'Stalls 1-22',
    kind: 'building',
    x: 345,
    y: 24,
    w: 260,
    h: 58,
    detail:
      'The Hall of Stalls. Enter from the corridor below; Home Plus (23) and the Impact Squad stall are just outside the doors.',
  },
  {
    id: 'impact-squad',
    label: 'Impact Squad',
    short: 'Impact',
    kind: 'stall',
    x: 412,
    y: 100,
    w: 62,
    h: 30,
    detail: 'Senior school group selling things they have made, just outside Harper Hall.',
  },
  {
    id: 'home-plus',
    label: 'Home Plus',
    short: 'Home Plus',
    sub: 'Stall 23',
    kind: 'stall',
    x: 505,
    y: 100,
    w: 74,
    h: 30,
    detail: 'Homeplus Furniture, stall 23, just outside the Harper Hall doors.',
  },
  { id: 'toilets', label: 'Toilets', kind: 'facility', x: 922, y: 42, w: 58, h: 32 },
  {
    id: 'craft-room',
    label: 'Craft room',
    sub: 'Decoration painting',
    kind: 'facility',
    x: 248,
    y: 166,
    w: 152,
    h: 42,
    detail: 'Senior school craft room, decoration painting.',
  },
  {
    id: 'face-painting',
    label: 'Face painting',
    short: 'Face paint',
    kind: 'facility',
    x: 778,
    y: 218,
    w: 62,
    h: 32,
    rot: -22,
  },
  {
    id: 'cafe',
    label: 'Christmas Cafe',
    sub: 'Friars Hall',
    kind: 'building',
    x: 918,
    y: 266,
    w: 74,
    h: 192,
    detail:
      'Friars Hall. Hot food, homemade cakes and drinks. Performances move in here if the weather turns.',
  },
  {
    id: 'stairs',
    label: 'Stairs',
    sub: 'to the Grotto',
    kind: 'path',
    x: 800,
    y: 260,
    w: 106,
    h: 272,
    detail: "Santa's Grotto is down these stairs, past the Friars Hall entrance.",
  },
  { id: 'club-100', label: '100 club', kind: 'stall', x: 76, y: 214, w: 58, h: 30, rot: -35 },
  {
    id: 'bottle-tombola',
    label: 'Bottle tombola',
    short: 'Bottle',
    kind: 'stall',
    x: 116,
    y: 274,
    w: 34,
    h: 86,
  },
  {
    id: 'chocolate-tombola',
    label: 'Chocolate tombola',
    short: 'Chocolate',
    kind: 'stall',
    x: 116,
    y: 362,
    w: 34,
    h: 86,
  },
  {
    id: 'welcome',
    label: 'Welcome point',
    short: 'Welcome',
    sub: 'Information',
    kind: 'facility',
    x: 48,
    y: 466,
    w: 62,
    h: 32,
    rot: -35,
  },
  {
    id: 'raffle',
    label: 'Raffle',
    kind: 'stall',
    x: 104,
    y: 558,
    w: 114,
    h: 62,
    detail: 'Everyday and super raffle tickets. The draw is at 3:15pm in Main Reception.',
  },
  { id: 'main-entrance', label: 'Main entrance', kind: 'entrance', x: 278, y: 546, w: 120, h: 70 },
  { id: 'toys', label: 'Toys', kind: 'stall', x: 434, y: 484, w: 116, h: 32 },
  { id: 'books', label: 'Books', kind: 'stall', x: 616, y: 483, w: 88, h: 34 },
  {
    id: 'christingle',
    label: 'Christingle',
    sub: 'Reverend Bellamy',
    kind: 'facility',
    x: 562,
    y: 516,
    w: 102,
    h: 98,
    detail:
      'First room on the right from the main entrance. Christingle making with Reverend Bellamy, raising money for The Children\u2019s Society.',
  },
  {
    id: 'grotto',
    label: "Santa's Grotto",
    kind: 'facility',
    x: 856,
    y: 546,
    w: 140,
    h: 120,
    detail:
      'Down the stairs past the Friars Hall entrance. Open 12:00pm - 4:00pm, half-hour slots, limited walk-ups.',
  },
];

/**
 * The grounds outside, traced from the PFA outdoor plan.
 * viewBox is "0 0 1000 707".
 */
export const groundZones: SiteZone[] = [
  { id: 'main-entrance', label: 'Main entrance', kind: 'entrance', x: 294, y: 6, w: 118, h: 64 },
  {
    id: 'choir-gazebo',
    label: 'Choir gazebo',
    kind: 'outdoor',
    x: 564,
    y: 10,
    w: 62,
    h: 60,
    detail: 'The school choir sings here. Moves into the cafe if the weather turns.',
  },
  {
    id: 'path-car-park',
    label: 'Path from main car park',
    kind: 'path',
    x: 0,
    y: 146,
    w: 148,
    h: 68,
  },
  {
    id: 'gazebo-25',
    label: '25',
    sub: 'Vintage Games',
    kind: 'stall',
    x: 198,
    y: 236,
    w: 64,
    h: 74,
    detail: 'Vintage Games, stall 25, in a gazebo on the lawn left of the main entrance.',
  },
  {
    id: 'gazebo-26',
    label: '26',
    sub: 'Binks',
    kind: 'stall',
    x: 148,
    y: 336,
    w: 64,
    h: 74,
    detail: 'Binks, stall 26, in the next gazebo down.',
  },
  {
    id: 'gazebo-27',
    label: '27',
    sub: 'Baby Adore',
    kind: 'stall',
    x: 76,
    y: 422,
    w: 64,
    h: 74,
    detail: 'Baby Adore, stall 27, in the last gazebo on the lawn.',
  },
  {
    id: 'mulled-wine',
    label: 'Mulled wine horse box',
    short: 'Mulled wine',
    kind: 'outdoor',
    x: 630,
    y: 156,
    w: 80,
    h: 90,
    rot: -35,
    detail: 'Mulled wine and Baileys hot chocolate.',
  },
  {
    id: 'popcorn',
    label: 'Popcorn & sweet treats',
    short: 'Popcorn',
    kind: 'outdoor',
    x: 696,
    y: 246,
    w: 54,
    h: 84,
    rot: -35,
  },
  {
    id: 'rides-1',
    label: 'Rides',
    sub: 'Ellis Amusements',
    kind: 'outdoor',
    x: 302,
    y: 416,
    w: 100,
    h: 44,
    detail:
      'Swing chairs, climbing wall, penalty shootout, covered bouncy castle and the Christmas toys funfair ride.',
  },
  {
    id: 'rides-2',
    label: 'Rides',
    sub: 'Ellis Amusements',
    kind: 'outdoor',
    x: 762,
    y: 366,
    w: 84,
    h: 34,
    detail: 'The second group of Ellis Amusements rides, further along the path.',
  },
  {
    id: 'no-parking-1',
    label: 'No parking',
    sub: 'Loading only',
    kind: 'path',
    x: 628,
    y: 388,
    w: 90,
    h: 60,
  },
  {
    id: 'no-parking-2',
    label: 'No parking',
    sub: 'Loading only',
    kind: 'path',
    x: 894,
    y: 306,
    w: 90,
    h: 60,
  },
  { id: 'path-right', label: 'Path', kind: 'path', x: 900, y: 220, w: 86, h: 48, rot: -20 },
  { id: 'path-bottom', label: 'Path', kind: 'path', x: 0, y: 546, w: 94, h: 38 },
  {
    id: 'staff-parking',
    label: 'Staff & stallholder parking',
    kind: 'path',
    x: 826,
    y: 476,
    w: 124,
    h: 64,
  },
  {
    id: 'stables',
    label: 'Stables Nursery',
    kind: 'building',
    x: 946,
    y: 546,
    w: 50,
    h: 154,
  },
  {
    id: 'road',
    label: 'Road from main car park to exit',
    kind: 'path',
    x: 0,
    y: 620,
    w: 638,
    h: 58,
  },
  { id: 'car-park-exit', label: 'Car park exit', kind: 'path', x: 662, y: 646, w: 144, h: 54 },
];

/** Stall number(s) for a stallholder name, e.g. `{ 'fox & bloom': [10] }`. */
export const stallNumbers: Record<string, number[]> = (() => {
  const map: Record<string, number[]> = {};
  for (const stall of [...harperHallStalls, ...offHallStalls]) {
    const key = stall.name.toLowerCase();
    map[key] = [...(map[key] ?? []), stall.no];
  }
  // The site's stall list calls the PFA Kids stall "Kids stall".
  map['kids stall'] = map['pfa kids'] ?? [];
  return map;
})();

/** "Stall 10" or "Stalls 15 & 16", or null when a stall has no number. */
export function stallNumberLabel(name: string): string | null {
  const numbers = stallNumbers[name.toLowerCase()];
  if (!numbers || numbers.length === 0) return null;
  return numbers.length === 1 ? `Stall ${numbers[0]}` : `Stalls ${numbers.join(' & ')}`;
}
