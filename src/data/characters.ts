

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
      image: "/images/sly-poster.png",
      description:
        "Cool, cunning, and always one step ahead, Sly thrives where light dares not linger. His mastery of shadows turns fear itself into an ally, but every time he slips into the dark, it takes a piece of him with it. Beneath his sarcasm lies a loyalty few will ever earn. To Sly, rebellion isn’t just war—it’s art.",
    },
    {
      name: "Benjamin Obiefuna",
      role: "Heart Of Omajiri",
      power: "Super strength",
      slug: "benjamin",
      faction: "rejects",
      image: "/images/ben-poster.png",
      description:
        "Ben’s strength could bring cities to their knees, but it’s his heart that holds the Rejects together. A former miner turned rebel brawler, he fights for every forgotten soul left to rot below. His laugh shakes walls, his fists break them—but both are driven by love, not rage. Where Michael burns and Sly shadows, Ben anchors them in hope.",
    },
    {
      name: "Nofisat Abdulahi",
      role: "The Ninefold Guard",
      power: "Ninefold Defense",
      slug: "nofisat",
      faction: "rejects",
      image: "/images/nofisat-poster.png",
      description:
        "They say she can’t be broken, not until her ninth fall. Nofisat’s defensive power makes her the team’s shield, but her real armor is her resolve. A woman of few words, she believes freedom is a duty, not a dream. When she moves, she moves like faith itself—silent, steady, and unshakable.",
    },
    {
      name: "Ayomide Darasimi",
      role: "Strategist",
      power: "Super Intellect, Wind Manipulation",
      slug: "ayomide",
      faction: "rejects",
      image: "/images/ayomide-poster.png",
      description:
        "A genius born in the ruins, Ayomide’s intellect cuts sharper than any blade. Her twin gifts—super intellect and control over the wind—make her both the brains and breath of Omajiri’s rebellion. Every plan she crafts flutters between madness and brilliance, but her true weapon is foresight. She doesn’t fight for victory—she fights to ensure the Rejects never lose again.",
    },
    {
      name: "Cynthia Uwakiwé",
      role: "Leader Of the Omajiri Resistance",
      power: "Electricity",
      slug: "cynthia",
      faction: "rejects",
      image: "/images/cynthia-poster.png",
      description:
        "Leader of the Omajiri resistance, Cynthia’s electricity mirrors her spirit—beautiful, dangerous, and impossible to contain. Her charisma draws people in, her lightning keeps them safe. She’s the voice that turns fear into defiance, the spark that reignites dead hope. And when she smiles, even the storm pauses to listen.",
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
      description:
        "A visionary or a tyrant, depending on which side of the wall you stand. Jide rebuilt Nigeria into the “Republic of Order,” but at the cost of freedom and compassion. To him, control is salvation—chaos the enemy. His true power isn’t his rumored gift, but the loyalty he commands through fear and faith alike.",
    },
    {
      name: "Alyssa Balogun",
      role: "Jide’s Daughter",
      power: "Super speed",
      slug: "alyssa",
      faction: "uppers",
      image: "/assets/characters/alyssa.jpg",
      description:
        "Born in privilege and trained for perfection, Alyssa runs faster than thought and sees the world in split-seconds. Her father’s daughter in name, but not in heart—she questions the price of their order even as she enforces it. Every mission she completes brings her closer to a truth she’s terrified to face: maybe the Rejects aren’t the villains after all.",
    },
    {
      name: "Sir Alex",
      role: "Master Lieutenant",
      power: "Earth Manipulation",
      slug: "sir-alex",
      faction: "uppers",
      image: "/assets/characters/sir-alex.jpg",
      description:
        "The iron pillar beneath Jide’s regime, Sir Alex commands both earth and soldiers with unyielding force. Once a farmer, now a war general, he believes discipline is mercy. His hands have built and buried empires, yet his loyalty remains unshaken—at least for now. Beneath the armor, a conscience rumbles, waiting for the right tremor to split it open.",
    },
  ],
};

export default characters;
