// app/characters/[slug]/page.tsx
import { getCharacterBySlug } from "@/data/getCharacters";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["400", "700"] });
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface CharacterPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { slug } = await params; 
  const character = getCharacterBySlug(slug);

  if (!character) return notFound();

  return (
    <section className="min-h-screen px-6 py-20 text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        <div className="relative w-72 h-96 rounded-2xl overflow-hidden border border-gray-800 shadow-lg">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-left">
          <h1
            className={`${orbitron.className} text-4xl md:text-6xl font-bold`}
          >
            {character.name}
          </h1>
          <h2
            className={`${barlow.className} text-purple-400 text-2xl mt-2 uppercase`}
          >
            {character.role}
          </h2>

          <p
            className={`${sourceSans.className} text-gray-300 text-lg mt-6 leading-relaxed`}
          >
            {character.description ||
              "No detailed description available yet. (But you know they’re awesome.)"}
          </p>

          <p className={`${sourceSans.className} text-purple-300 text-xl mt-6`}>
            <strong>Power:</strong> {character.power}
          </p>
        </div>
      </div>
    </section>
  );
}
