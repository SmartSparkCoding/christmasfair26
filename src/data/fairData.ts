export const eventInfo = {
  name: "Ashford School Christmas Fair 2026",
  shortName: "Ashford School Christmas Fair",
  year: 2026,
  date: "Sunday 29th November",
  yearDate: "2026-11-29",
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
    description: "Super raffle followed by the everyday raffle.",
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

/**
 * School & PFA stalls. Each one opens a short in-site popup. `detail` and
 * `location` only contain what the PFA document actually states; anything it
 * does not describe is left out rather than invented.
 */
export const schoolPFASstalls = [
  {
    name: "Raffle",
    location: "Main Reception",
    detail:
      "Tickets are £1 each for the everyday raffle and £5 each for the super raffle, available from reception on the day. Both raffles are drawn at 3:15pm.",
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
    detail:
      "A senior school group. The Impact Squad has been making items to sell on the PFA Christmas Fair stall.",
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
    everyday: { price: "£1 each" },
    super: { price: "£5 each", limit: 200 }
  },
  purchase: "Tickets can be purchased from reception on the day.",
  drawTime: "3:15 pm (Main reception)",
  drawDescription: "Super raffle followed by everyday raffle."
};

/**
 * 2026 super raffle prizes. Blue edits in the PFA document add the Neptune bar,
 * change the PFA cash prize to £150, put the Champney's hamper at £150, and add
 * the Boys Hall and Suzi Standen vouchers.
 */
export const superRafflePrizes = [
  { item: "Neptune bar set up, worth £500", donor: "Matt from Neptune Bars" },
  { item: "£150 cash", donor: "Ashford School PFA" },
  { item: "£160 Kent Cookery voucher", donor: "Autumn from Kent Cookery School" },
  { item: "£150 JET Aesthetics microneedling voucher", donor: "Jemma from Jet Aesthetics" },
  { item: "£150 Champney's hamper", donor: "Eastwell Manor" },
  { item: "Hogwarts Lego", donor: "Alanna from Maebil Lettings" },
  { item: "Abbey Road exclusive visitor experience", donor: "Rebecca Hodges" },
  { item: "£100 Boys Hall voucher", donor: null },
  { item: "£102 Suzi Standen Pilates voucher", donor: null },
];

export const everydayRafflePrizes = [
  "Spazio Doors",
  "PFA Coffee box",
  "Kent & East Sussex Railway",
  "School Colours",
  "Leas cliff Hall",
  "Charing point to point races",
  "Wildwood family ticket",
  "Stubbs restaurant",
  "Biddenden Vineyard",
  "Action Watersports",
  "Neptune Bars",
  "ELT Dynamics",
  "Granary Spa",
  "Port Lympne",
  "Kind Planet Company",
  "Westwell Wines",
  "Cake Box - 8\" Cake voucher - Nina to collect",
  "Docker Bakery",
  "Godinton House",
  "Wayfarer Wines",
  "Kent Crisps - box",
  "McCanns Brewery",
  "Imagine Play centre",
  "It has to be pretty",
  "Kent Hampers",
  "PrettyLittleSoaps",
  "Season",
  "Caroline's Crafty Crochet",
  "Zoe Robyn Jewellery",
  "Park House Petals (TBC)",
  "Happy Days Crafts",
  "Warehorne Wines",
  "Noble & Page",
  "Blue Farm Cottage Crafts",
  "Fox & Bloom",
  "Laura's stationary stash",
  "Create Alchemy",
  "Soulmate Spirits Ltd",
  "Neals Yard Remedies",
  "MoreThanBalloons",
  "The Small Batch Company",
  "Bowjangles",
  "The Boot Room Company",
  "Meander",
  "Nine Oaks Vineyard",
  "Vintage games",
  "The Yoga Man",
];

export const safetyInfo = {
  title: "First Aid, Safety & Security",
  content: "Your safety is our top priority throughout the Christmas Fair. Our Welcome Point, located at Main Reception, will serve as the central hub for information and assistance on the day. If you need first aid, have any safety concerns, or require help locating someone, please visit the Welcome Point or speak to a member of school or PFA staff. We’re here to ensure everyone enjoys a safe and happy festive day!"
};

export const thankYou = "Our heartfelt thanks to all volunteers, staff, stallholders, and sponsors. Your kindness and support make this event truly special!";
