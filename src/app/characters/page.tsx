import { Orbitron, Barlow_Condensed, Source_Sans_3 } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

// Subheading Font
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Body Font
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const CharactersPage = () => {
  return (
    <>
      <h1
        className={`${orbitron.className} text-2xl md:text-6xl font-bold`}
      >
        Mavericks Of The State
      </h1>
      <p
        className={`${sourceSans.className} text-lg md:text-xl mt-2.5 font-medium text-pretty`}
      >
        Meet the defiant Rejects, the resilient Lowers, and the authoritative
        Uppers in a world divided by power and rebellion.
      </p>
    </>
  );
};

export default CharactersPage;
