

export interface Character {
  name: string;
  slug: string;
  faction: "rejects" | "uppers"; // restricts values to valid factions
  image: string;
  description?: string; // optional since not all characters have it yet
  role: string;
  power: string;
}

export const characters: Record<"rejects" | "uppers", Character[]> = {
  rejects: [
    {
      name: "Michael Adesanya",
      role: "Leader of the Rejects",
      power: "Siphoning",
      slug: "michael",
      faction: "rejects",
      image: "/images/michael-poster.png",
      description:
        "Once a boy who lost everything in the flames, Michael carries the weight of a world that burned him first. His ability to drain energy—both power and life—makes him a weapon of last resort, and a symbol of fear to friend and foe alike. Despite the ghosts that follow him, his conviction to break the Upper’s hold burns brighter than any inferno. He doesn’t seek leadership—he’s just the only one still standing.",
    },
    {
      name: "Sylvester Thompson",
      role: "Shadow Wielder",
      power: "Shadow Manipulation",
      slug: "sylvester",
      faction: "rejects",
      image: "/assets/characters/sly.jpg",
      description:
        "Cool, cunning, and always one step ahead, Sly thrives where light dares not linger. His mastery of shadows turns fear itself into an ally, but every time he slips into the dark, it takes a piece of him with it. Beneath his sarcasm lies a loyalty few will ever earn. To Sly, rebellion isn’t just war—it’s art.",
    },
    {
      name: "Benjamin Obiefuna",
      role: "Heart Of Omajiri",
      power: "Super strength",
      slug: "benjamin",
      faction: "rejects",
      image: "/assets/characters/ben.jpg",
      description:
        "Ben’s strength could bring cities to their knees, but it’s his heart that holds the Rejects together. A former miner turned rebel brawler, he fights for every forgotten soul left to rot below. His laugh shakes walls, his fists break them—but both are driven by love, not rage. Where Michael burns and Sly shadows, Ben anchors them in hope.",
    },
    {
      name: "Nofisat Abdulahi",
      role: "The Ninefold Guard",
      power: "Ninefold Defense",
      slug: "nofisat",
      faction: "rejects",
      image: "/assets/characters/nofisat.jpg",
      description:
        "They say she can’t be broken, not until her ninth fall. Nofisat’s defensive power makes her the team’s shield, but her real armor is her resolve. A woman of few words, she believes freedom is a duty, not a dream. When she moves, she moves like faith itself—silent, steady, and unshakable.",
    },
    {
      name: "Ayomide Darasimi",
      role: "Strategist",
      power: "Super Intellect, Wind Manipulation",
      slug: "ayomide",
      faction: "rejects",
      image: "/assets/characters/ayomide.jpg",
      description:""
    },
    {
      name: "Cynthia Uwakiwé",
      role: "Leader Of the Omajiri Resistance",
      power: "Electricity",
      slug: "cynthia",
      faction: "rejects",
      image: "/assets/characters/cynthia.jpg",
    },
  ],
  uppers: [
    {
      name: "Jide Balogun",
      role: "Supreme Commander",
      power: "Unknown",
      slug: "jide",
      faction: "uppers",
      image: "/assets/characters/jide.jpg",
    },
    {
      name: "Alyssa Balogun",
      role: "Jide’s Daughter",
      power: "Super speed",
      slug: "alyssa",
      faction: "uppers",
      image: "/assets/characters/alyssa.jpg",
    },
    {
      name: "Sir Alex",
      role: "Master Lieutenant",
      power: "Earth Manipulation",
      slug: "sir-alex",
      faction: "uppers",
      image: "/assets/characters/sir-alex.jpg",
    },
  ],
};

export default characters;
