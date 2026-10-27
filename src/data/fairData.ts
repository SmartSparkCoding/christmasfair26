export const eventInfo = {
  name: "Ashford School Christmas Fair 2026",
  shortName: "Ashford School Christmas Fair",
  year: 2026,
  date: "Saturday 29th November",
  yearDate: "2026-11-29",
  time: "12:00 pm – 4:00 pm",
  startTime: "12:00",
  endTime: "16:00",
  location: "Great Chart Site",
  schoolName: "Ashford School",
  schoolUrl: "https://www.ashfordschool.co.uk/",
  pfaEmail: "ashfordschoolpfa@gmail.com",
  pfaInstagram: "@ashfordschoolpfa",
  instagramUrl: "https://www.instagram.com/ashfordschoolpfa/",
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
    time: "12:00 pm - 12:30 pm",
    start: "12:00",
    end: "12:30",
    location: "Front of school (subject to weather, alternative location Friars Hall stage)",
    category: "Performance",
    description: "Festive songs performed by the School Choir."
  },
  {
    id: "ayjo-1",
    name: "Ashford Youth Jazz Orchestra",
    time: "13:30 pm & 14:45 pm",
    start: "13:30",
    end: "14:45",
    location: "Front of school (subject to weather, alternative location Friars Hall stage)",
    category: "Performance",
    description: "Live jazz performance by the Ashford Youth Jazz Orchestra. (AYJO Cant do so need to see if choir can do another 15-20 min slot.)"
  },
  {
    id: "grotto",
    name: "Santa’s Grotto",
    time: "12:00 pm – 4:00 pm",
    start: "12:00",
    end: "16:00",
    location: "Down the stairs past the Friars Hall Entrance",
    category: "Attraction",
    description: "Visit Santa! Grotto slots are every half an hour. We will have limited places available to just turn up on the day. Please keep to your allocated pre-booked time."
  },
  {
    id: "fairground",
    name: "Fairground Rides",
    time: "12:00 pm – 4:00 pm",
    start: "12:00",
    end: "16:00",
    location: "Front of school (drop off area)",
    category: "Attraction",
    description: "Swing Chairs, Climbing Wall & Penalty Shootout. Large covered bouncy castle, penalty shootout, Christmas toys funfair ride. Supplied & run by Ellis Amusements. Please observe safety instructions, children should have an adult present."
  },
  {
    id: "christingle",
    name: "Christingle Room",
    time: "12:00 pm – 4:00 pm",
    start: "12:00",
    end: "16:00",
    location: "First room on right from main entrance (Room TBC)",
    category: "Activity",
    description: "Christingle room with Reverend Bellamy. Proceeds to The Children's Society."
  },
  {
    id: "raffle-draw",
    name: "Raffle Draw",
    time: "3:15 pm",
    start: "15:15",
    end: "15:15",
    location: "Main Reception",
    category: "Event",
    description: "Super raffle followed by everyday raffle."
  }
];

export const independentStalls = [
  "It has to be pretty",
  "Kent Hampers",
  "PrettyLittleSoaps",
  "Season",
  "Caroline's Crafty Crochet",
  "Zoe Robyn Jewellery",
  "Happy Days Crafts",
  "Warehorne Wines",
  "Noble & Page",
  "Blue Farm Cottage Crafts",
  "Fox & Bloom",
  "Laura's stationary stash",
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
  "Create Alchemy",
  "Park House Petals- TBC",
  "Hand Made in Hythe",
  "Pop Goes The Balloon",
  "Warehore Vineyard",
  "The Granary Spa",
  "By Wuzzie",
  "Molly Bishop Art",
  "Tina Laker",
  "Ivy & Rose Bloom Bar",
  "Woodchurch Vineyard",
  "Homeplus Furniture",
  "Baby Adore",
  "Binks",
];

export const schoolPFASstalls = [
  "Raffle",
  "Chocolate tombola",
  "Bottle tombola",
  "Games / Teddy tombola",
  "Toys & Books",
  "Cafe",
  "100 club",
  "Impact squad",
  "Horsebox / Mulled wine",
  "Santa's Grotto",
  "Popcorn & sweet treats",
  "PFA Kids",
];

export const allStalls = Array.from(new Set([...independentStalls, ...schoolPFASstalls]));

export const raffleInfo = {
  tickets: {
    everyday: { price: "£1 each" },
    super: { price: "£5 each", limit: 200 }
  },
  purchase: "Tickets can be purchased from reception on the day.",
  drawTime: "3:15 pm (Main reception)",
  drawDescription: "Super raffle followed by everyday raffle."
};

export const superRafflePrizes = [
  "Neptune Bar set up with £500 - Donated by Matt from Neptune Bars",
  "£200 Cash - Donated by Ashford School PFA",
  "£160 Kent Cookery Voucher - Donated by Autumn from Kent Cookery School",
  "£150 JET Aesthetics Microneedling voucher - Donated by Jemma from Jet Aesthetics",
  "£120 Champney’s Hamper - Donated by Eastwell Manor",
  "Hogwarts Lego - Donated by Alanna from Maebil Lettings",
  "Abbey Road Exclusive Visitor Experience - Donated by Rebecca Hodges",
  "£100 Boys Hall voucher",
  "£102 Suzi Standen Pilates voucher",
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
