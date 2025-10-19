

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
        "Once powerless, Michael rose from the ashes of tragedy to lead the Rejects against the oppressive Uppers.",
    },
    {
      name: "Sylvester Thompson",
      role: "Shadow Wielder",
      power: "Shadow Manipulation",
      slug: "sylvester",
      faction: "rejects",
      image: "/assets/characters/sly.jpg",
    },
    {
      name: "Benjamin Obiefuna",
      role: "Heart Of Omajiri",
      power: "Super strength",
      slug: "benjamin",
      faction: "rejects",
      image: "/assets/characters/ben.jpg",
    },
    {
      name: "Nofisat Abdulahi",
      role: "The Ninefold Guard",
      power: "Ninefold Defense",
      slug: "nofisat",
      faction: "rejects",
      image: "/assets/characters/nofisat.jpg",
    },
    {
      name: "Ayomide Darasimi",
      role: "Strategist",
      power: "Super Intellect, Wind Manipulation",
      slug: "ayomide",
      faction: "rejects",
      image: "/assets/characters/ayomide.jpg",
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
