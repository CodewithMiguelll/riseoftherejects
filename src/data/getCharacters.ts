import characters, { Character } from "./characters";

export function getCharacterBySlug(slug: string): Character | undefined {
  const allCharacters = Object.values(characters).flat();
  return allCharacters.find((char) => char.slug === slug);
}
export default getCharacterBySlug;