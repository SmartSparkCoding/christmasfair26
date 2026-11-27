export const eventInfo = {
  name: "Ashford School Christmas Fair 2026",
  shortName: "Ashford School Christmas Fair",
  year: 2026,
  date: "Saturday 28th November",
  yearDate: "2026-11-28",
  time: "12:00pm – 4:00pm",
  startTime: "12:00",
  endTime: "16:00",
  location: "Ashford Prep School, Great Chart",
  addressLines: ["Ashford Prep School", "Great Chart", "Ashford, Kent", "TN23 3DJ"],
  addressOneLine: "Ashford Prep School, Great Chart, Ashford, Kent, TN23 3DJ",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ashford+Prep+School+Great+Chart+Ashford+Kent+TN23+3DJ",
  schoolName: "Ashford School",
  schoolUrl: "https://www.ashfordschool.co.uk/",
  pfaEmail: "ashfordschoolpfa@gmail.com",
  pfaInstagram: "@ashfordschool_pfa",
  instagramUrl: "https://www.instagram.com/ashfordschool_pfa/",
  instagramEmbedUrl: "https://www.instagram.com/p/DRYDriljZGF/",
  instagramTbd: false,
  welcomeMessage: `Welcome to our Christmas Fair! We’re delighted to have you join us for an afternoon filled with festive cheer, handmade gifts, and seasonal treats.

Every mince pie and raffle ticket helps support our school community. We will once again be funding a number of initiatives & projects in the coming year.

A huge thank you to all our volunteers, stallholders, and sponsors who make this event possible.

Wishing you a wonderful time,
Nina - Ashford School Parents & Friends Association (PFA) Chair`,
};

export const keyLocations = [
  { name: "Hall of Stalls", location: "Harper Hall" },
  { name: "Santa’s Grotto", location: "Down the stairs past the Friars Hall Entrance" },
  { name: "Our Nordic café", location: "Friars Hall Traditional Christmas Cafe" },
  { name: "Raffle & Tombola", location: "Main Reception" },
  { name: "Fairground Rides", location: "Front of school (drop off area)" },
  { name: "Christingle room with Reverend Bellamy", location: "Room TBC (proceeds to The Children's Society) - First room on right from main entrance" },
  { name: "Horse Box Mulled wine & Baileys Hot Chocolate", location: "TBC" },
];

export const programme = [
  {
    id: "choir-1",
    name: "School Choir",
    time: "12:00pm – 12:30pm",
    start: "12:00",
    end: "12:30",
    location: "Front of school (subject to weather, alternative location Friars Hall stage)",
    category: "Performance",
    description: "Festive songs performed by the School Choir.",
    confirmed: true,
  },
  {
    id: "choir-2",
    name: "School Choir – second set",
    time: "Time to be confirmed",
    start: null,
    end: null,
    location: "Front of school (subject to weather, alternative location Friars Hall stage)",
    category: "Performance",
    description:
      "An extra 15–20 minute set by the School Choir is being arranged. The time will be published once confirmed.",
    confirmed: false,
  },
  {
    id: "grotto",
    name: "Santa's Grotto",
    time: "12:00pm – 4:00pm",
    start: "12:00",
    end: "16:00",
    location: "Down the stairs past the Friars Hall entrance",
    category: "Attraction",
    description:
      "Visit Santa in his grotto. Slots run every half hour, and we will have limited places available to just turn up on the day. Please keep to your allocated pre-booked time.",
    confirmed: true,
  },
  {
    id: "fairground",
    name: "Fairground Rides",
    time: "12:00pm – 4:00pm",
    start: "12:00",
    end: "16:00",
    location: "Front of school (drop off area)",
    category: "Attraction",
    description:
      "Swing chairs, climbing wall and penalty shootout, plus a large covered bouncy castle, penalty shootout and Christmas toys funfair ride. Supplied and run by Ellis Amusements. Please observe safety instructions; children should have an adult present.",
    confirmed: true,
  },
  {
    id: "christingle",
    name: "Christingle Room",
    time: "12:00pm – 4:00pm",
    start: "12:00",
    end: "16:00",
    location: "First room on right from main entrance",
    category: "Activity",
    description:
      "Christingle room with Reverend Bellamy. Proceeds go to The Children's Society.",
    confirmed: true,
  },
  {
    id: "raffle-draw",
    name: "Raffle Draw",
    time: "3:15pm",
    start: "15:15",
    end: "15:15",
    location: "Main Reception",
    category: "Event",
    description: "Super Raffle followed by the Christmas Fair Raffle.",
    confirmed: true,
  },
];

/**
 * The 2026 stall list, from the blue table in the PFA document.
 *
 * `url` is only set where a website could be positively identified as belonging
 * to that stallholder (checked against location and product, not just a name
 * match). Stalls without a confirmed site have no `url` and are shown as plain
 * text rather than linking somewhere wrong.
 *
 * "Warehore Vineyard" is corrected to Warehorne Vineyard: that is the name of
 * the vineyard at Warehorne Road, Ashford, and no "Warehore Vineyard" exists.
 */
export const independentStalls = [
  { name: "Caroline's Crafty Crochet" },
  { name: "Blue Farm Cottage Crafts" },
  { name: "Meander Jewellery" },
  { name: "Fox & Bloom", url: "https://www.foxandbloom.co.uk/" },
  { name: "Hand Made in Hythe" },
  { name: "Neal's Yard Remedies" },
  { name: "Pop Goes The Balloon" },
  { name: "Warehorne Vineyard", url: "https://www.warehornevineyard.co.uk/" },
  { name: "It has to be pretty" },
  { name: "Soulmate Spirits", url: "https://www.soulmatespirits.co.uk/" },
  { name: "The Granary Spa", url: "https://www.thegranaryspa.co.uk/" },
  { name: "By Wuzzie" },
  { name: "Zoe Robyn Jewellery", url: "https://www.zoerobynjewellery.com/" },
  { name: "Molly Bishop Art" },
  { name: "Tina Laker" },
  { name: "Season" },
  { name: "Ivy & Rose Bloom Bar" },
  { name: "Kids stall" },
  { name: "Woodchurch Vineyard", url: "https://woodchurchwine.co.uk/" },
  { name: "Homeplus Furniture" },
  { name: "The Small Batch Company" },
  { name: "Vintage Games" },
  { name: "Baby Adore", url: "https://babyadore.co.uk/" },
  { name: "Binks" },
];

/** A school or PFA stall and the information shown in its in-site popup. */
export type SchoolPFASstall = {
  name: string;
  location?: string;
  detail?: string;
  badge?: string;
  points?: string[];
  note?: string;
  hashtag?: string;
};

/**
 * School & PFA stalls. Each one opens a short in-site popup. `detail` and
 * `location` only contain what the PFA document actually states; anything it
 * does not describe is left out rather than invented.
 *
 * The Impact Squad copy comes from their Community Club poster in the PFA
 * assets folder. The wording has only been condensed into list form, not
 * changed.
 */
export const schoolPFASstalls: SchoolPFASstall[] = [
  {
    name: "Raffle",
    location: "Main Reception",
    detail:
      "Tickets are £1 each for the Christmas Fair Raffle and £5 each for the Super Raffle, available from reception on the day. Both raffles are drawn at 3:15pm.",
  },
  {
    name: "Chocolate tombola",
    detail: "A tombola stall run by the PFA, with chocolate prizes.",
  },
  {
    name: "Bottle tombola",
    detail: "A tombola stall run by the PFA, with bottles as prizes.",
  },
  {
    name: "Games / Teddy tombola",
    detail: "Games and a teddy tombola run by the PFA.",
  },
  {
    name: "Toys & Books",
    detail: "A PFA stall selling toys and books.",
  },
  {
    name: "Cafe",
    location: "Friars Hall",
    detail:
      "The Nordic Café is a traditional Christmas café serving hot food, homemade cakes and refreshments. Take a break and enjoy a selection of festive treats.",
  },
  {
    name: "100 club",
    detail:
      "The PFA's 100 Club, a private lottery open to parents, staff and friends of the school.",
  },
  {
    name: "Impact Squad (Senior School)",
    badge: "Student community club",
    detail:
      "A team of passionate Ashford School students dedicated to making a positive impact on our school and community.",
    points: [
      "Brainstorm: we come up with innovative fundraising ideas.",
      "Create: we design and produce amazing products.",
      "Learn: we develop essential teamwork and entrepreneurial skills.",
    ],
    note:
      "All proceeds from our sales directly support the Ashford School Foundation's Bursary Awards, providing opportunities for even more talented students from diverse backgrounds to study here.",
    hashtag: "#MakingAnImpact",
  },
  {
    name: "Horsebox / Mulled wine",
    detail:
      "Mulled wine and Baileys hot chocolate served from the horse box. The document does not yet confirm where it will be sited.",
  },
  {
    name: "Santa's Grotto",
    location: "Down the stairs past the Friars Hall entrance",
    detail:
      "Open 12:00pm – 4:00pm. Slots run every half an hour, and limited places are available to turn up on the day. Please keep to your allocated pre-booked time.",
  },
  {
    name: "Popcorn & sweet treats",
    detail: "A PFA stall with popcorn and sweet treats.",
  },
  {
    name: "PFA Kids",
    detail: "A PFA stall aimed at younger visitors.",
  },
];

export const allStalls = [
  ...independentStalls.map((stall) => stall.name),
  ...schoolPFASstalls.map((stall) => stall.name),
];

export const raffleInfo = {
  tickets: {
    everyday: { name: "Christmas Fair Raffle", price: "£1 each" },
    super: { name: "Super Raffle", price: "£5 each", limit: 200 }
  },
  purchase: "Tickets can be purchased from reception on the day, or online in advance.",
  books: {
    everyday: "book of 5 for £5.00",
    super: "book of 5 for £25.00"
  },
  onlineUrl: "https://www.pta-events.co.uk/ashfordschoolpfa/index.cfm",
  drawDate: "Saturday 28th November 2026, at Ashford Prep School",
  drawTime: "3:15 pm (Main reception)",
  drawDescription: "Super Raffle followed by the Christmas Fair Raffle."
};

export interface RafflePrize {
  item: string;
  value: string | null;
  donor: string | null;
  raffle: "super" | "everyday";
}

/**
 * Headline prizes from the 2026 raffle poster. The five Super Raffle prizes are
 * the ones printed on the Super Raffle ticket stub; the other two are the top
 * prizes in the £1 Christmas Fair Raffle.
 */
export const topPrizes: RafflePrize[] = [
  { item: "Neptune Bars set up", value: "£500", donor: "Matt from Neptune Bars", raffle: "super" },
  { item: "James Carey PT sessions", value: "£200", donor: null, raffle: "everyday" },
  { item: "PFA cash prize", value: "£150", donor: "Ashford School PFA", raffle: "super" },
  { item: "Champneys hamper", value: "£150", donor: "Eastwell Manor", raffle: "super" },
  { item: "Suzi Standen Pilates voucher", value: "£102", donor: null, raffle: "super" },
  { item: "Boys Hall voucher", value: "£100", donor: null, raffle: "super" },
  { item: "School Colours voucher", value: "£100", donor: null, raffle: "everyday" },
];

/** What the £1 Christmas Fair Raffle ticket stub promises, in the PFA's words. */
export const everydayRaffleCategories = [
  "Spa & beauty vouchers",
  "Restaurant vouchers",
  "School Colours voucher",
  "Wine tours & tasting",
  "Retail vouchers",
  "Family days out",
  "Hampers",
  "Lego City Airport",
];

/** The rest of the prizes on the 2026 poster, listed as the PFA printed them. */
export const otherRafflePrizes = [
  "Caroline's Crafty Crochet",
  "Blue Farm Cottage Crafts",
  "Meander Jewellery",
  "Fox & Bloom",
  "Hand Made in Hythe",
  "Neal's Yard Remedies",
  "Pop Goes The Balloon",
  "Warehorne Vineyard",
  "It Has To Be Pretty",
  "Soul Mates Spirits",
  "The Granary Spa",
  "By Wuzzie",
  "Zoe Robyn Jewellery",
  "Simon James Home",
  "Tina's Gnomes & Bags",
  "Season",
  "Ivy & Rose Bloom Bar",
  "Woodchurch Vineyard",
  "Homeplus Furniture",
  "The Small Batch Company",
  "Vintage Games",
  "Baby Adore",
  "Binks",
  "PFA Hamper",
  "PFA Hamper",
  "PFA Hamper",
  "PFA – 10 Hot Drinks Vouchers",
  "Spazio Doors – £50 John Lewis Voucher",
  "Pluckley Tea & Coffee Hamper",
  "McArthurGlen Outlet – £20 Voucher",
  "Matches Sports Bar Package",
  "Gusbourne Flight Tasting Voucher",
  "KESR Family Ticket",
  "Stubbs Restaurant – £20 Voucher",
  "Kind Planet Company Gift",
  "Biddenden Vineyards Voucher",
  "Wildwood Family Ticket",
  "Maebil Lettings Ltd – Lego Set",
  "Wye Beauty Voucher",
  "Action Watersports Voucher",
  "Harrisons Hair Voucher",
  "Rare Breeds Family Day Ticket",
  "Tickety Boo Gift",
];

export const safetyInfo = {
  title: "First Aid, Safety & Security",
  content: "Your safety is our top priority throughout the Christmas Fair. Our Welcome Point, located at Main Reception, will serve as the central hub for information and assistance on the day. If you need first aid, have any safety concerns, or require help locating someone, please visit the Welcome Point or speak to a member of school or PFA staff. We’re here to ensure everyone enjoys a safe and happy festive day!"
};

export const thankYou = "Our heartfelt thanks to all volunteers, staff, stallholders, and sponsors. Your kindness and support make this event truly special!";
