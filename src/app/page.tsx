"use client";
import Link from "next/link";
import { FocusCards } from "@/components/ui/focus-cards";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import BlurText from "@/components/BlurText";

import Image from "next/image";

const spotlightCharacters = [
  {
    title: "Michael",
    description: "The reluctant leader, scarred by loss but driven by hope.",
    src: "/images/michael-poster.png",
  },
  {
    title: "Ben",
    description: "A powerhouse with strength that mirrors his loyalty.",
    src: "/images/ben-poster.png",
  },
  {
    title: "Cynthia",
    description: "The spark of rebellion, lightning in both word and deed.",
    src: "/images/cynthia-poster.png",
  },
];

const images = [
  "/images/djebi-abraham-philippe-e514SZzfpfM-unsplash.jpg",
  "/images/peter-burdon-HwFJlomisJ4-unsplash.jpg",
  "/images/mohamed-jamil-latrach-PEJQ3DOfBUg-unsplash.jpg",
  "/images/mina-rad-wmz8nNRNnJo-unsplash.jpg",
  "/images/kunal-kalra-1XVNuvBgVl0-unsplash.jpg",
  "/images/emmanuel-ben-paul-H40J2AESe-Q-unsplash.jpg",
  "/images/abdul-rauf-ES1e9eo38eo-unsplash.jpg",
  "/images/barry-talley-nP9dYKPlSl0-unsplash.jpg",
  "/images/tajmia-loiacono-od_kokVQ-O4-unsplash.jpg",
  "/images/hassan-kibwana-M8uKuPGETMg-unsplash.jpg",
  "/images/bryan-garcia-GVbnzwc9fVA-unsplash.jpg",
  "/images/the-new-york-public-library-pwoTQl2xuM8-unsplash.jpg",
  "/images/nupo-deyon-daniel-9ySEZ-ugtJA-unsplash.jpg",
  "/images/djebi-abraham-philippe-e514SZzfpfM-unsplash.jpg",
  "/images/peter-burdon-HwFJlomisJ4-unsplash.jpg",
  "/images/mohamed-jamil-latrach-PEJQ3DOfBUg-unsplash.jpg",
  "/images/mina-rad-wmz8nNRNnJo-unsplash.jpg",
  "/images/kunal-kalra-1XVNuvBgVl0-unsplash.jpg",
  "/images/emmanuel-ben-paul-H40J2AESe-Q-unsplash.jpg",
  "/images/abdul-rauf-ES1e9eo38eo-unsplash.jpg",
  "/images/barry-talley-nP9dYKPlSl0-unsplash.jpg",
  "/images/tajmia-loiacono-od_kokVQ-O4-unsplash.jpg",
  "/images/hassan-kibwana-M8uKuPGETMg-unsplash.jpg",
  "/images/bryan-garcia-GVbnzwc9fVA-unsplash.jpg",
  "/images/the-new-york-public-library-pwoTQl2xuM8-unsplash.jpg",
  "/images/nupo-deyon-daniel-9ySEZ-ugtJA-unsplash.jpg",
];

const cards = [
  {
    title: "Uppers",
    src: "/images/uppers-logo.png",
    description:
      "The heights gleam bright, but shadows deepen at the base of every tower.",
  },
  {
    title: "Lowers",
    src: "/images/lowers-logo.png",
    description:
      "They carry the weight of a world not built for them, yet their hands keep it standing.",
  },
  {
    title: "Rejects",
    src: "/images/rejects-logo.png",
    description:
      "Cast out, unseen, unwanted — but in the cracks, a fire waits to rise.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="py-24 md:py-36 px-5 text-center">
        <div className="flex flex-col items-center justify-center">
          <BlurText
            text="In a nation divided, rebellion ignites."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-4xl md:text-6xl font-bold font-family-heading"
          />

          <p className="text-lg md:text-xl font-medium text-pretty font-family-body mt-5">
            The Uppers rule, The Lowers endure... but the Rejects refuse to
            kneel.
          </p>
          <div className="flex flex-row items-center justify-center gap-4.5 mt-5">
            <Link href="/characters">
              <button className="transition-all bg-[#314062] hover:bg-[#c4b6c1cc] text-[#ebeef1] p-4 rounded-md hover:-translate-y-1 cursor-none font-family-body">
                Meet The Characters
              </button>
            </Link>
            <Link href="/factions">
              <button className="transition-all bg-[#5d4b51] hover:bg-[#5d4b51cc] p-4 rounded-md hover:-translate-y-1 cursor-none font-family-body">
                Pick A Side
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FACTIONS SECTION */}
      <section className=" md:py-10 px-4">
        <h1 className="text-2xl md:text-5xl font-family-subheading text-center font-bold font-heading">
          The Republic is divided... which side are you on?
        </h1>
        <p className="text-sm md:text-base text-center font-medium font-family-body text-pretty mt-3.5 font-body">
          Choose wisely. Your fate depends on it.
        </p>
        <div className="mt-10 mb-12">
          <FocusCards cards={cards} />
        </div>
        <div className="flex justify-center">
          <Link href="/factions" className="w-full max-w-sm">
            <button className="w-full bg-[#c4b6c1] hover:bg-[#c4b6c1cc] text-[#060506] font-bold py-3 rounded hover:transition-all font-family-body cursor-none">
              Pick A Side
            </button>
          </Link>
        </div>
      </section>

      {/* BLOCKQUOTE */}
      <section className="py-16 px-6 ">
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-semibold leading-snug font-family-subheading">
            "We can't just sit and take it like good little boys, if not now,
            then when?"
          </p>
          <footer className="mt-4 text-sm text-[#060506] font-medium font-family-body">
            — Omajiri Spokesperson
          </footer>
        </blockquote>
      </section>

      {/* CHARACTERS SPOTLIGHT */}
      <section className="py-10 px-4">
        <h1 className="text-2xl md:text-5xl text-center font-bold font-family-subheading">
          Faces Of The Rebellion
        </h1>
        <p className="text-sm md:text-base text-center font-medium text-pretty mt-3.5 font-family-body">
          Meet the souls defying the order.
        </p>
        <div className="mt-10 mb-12">
          <FocusCards cards={spotlightCharacters} />
        </div>
        <div className="flex justify-center items-center text-center">
          <Link href="/characters" className="w-full max-w-sm">
            <button className="w-full bg-[#c4b6c1] hover:bg-[#c4b6c1cc] text-[#060506] font-bold py-3 rounded transition-all duration-100 ease-in-out cursor-none">
              Meet The Characters
            </button>
          </Link>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-16 px-6">
        <h2 className="text-2xl md:text-5xl text-center font-bold font-family-subheading">
          A History Written in Ashes
        </h2>
        <div className="max-w-3xl mx-auto mt-5 text-[#060506]">
          <ol className="relative border-l border-[#998185]">
            {/* Event 1 */}
            <li className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-[#121212] rounded-full -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none font-family-body">
                October 2nd, 2045
              </time>
              <h3 className="text-lg font-semibold font-family-subheading">
                SERUM I-960 is launched, first Nigerians with superpowers
                emerge.
              </h3>
              <p className="text-base font-normal font-family-body">
                The first Nigerians awaken extraordinary abilities. For a
                fleeting moment, hope blooms — before power is claimed by those
                who would cage it.
              </p>
            </li>

            {/* Event 2 */}
            <li className="mb-10 ml-6">
              <div className="absolute w-3 h-3 rounded-full -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none font-family-body">
                May 7th, 2065
              </time>
              <h3 className="text-lg font-semibold font-family-subheading">
                The Great War
              </h3>
              <p className="text-base font-normal font-family-body">
                A nation splinters under the weight of fear and ambition. Cities
                burn, alliances fracture, and the dream of equality is buried
                beneath rubble.
              </p>
            </li>

            {/* Event 3 */}
            <li className="mb-10 ml-6">
              <div className="absolute w-3 h-3 bg-[#121212] rounded-full -left-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none font-family-body">
                Recently
              </time>
              <h3 className="text-lg font-semibold font-family-subheading">
                The Republic Of Order
              </h3>
              <p className="text-base font-normal font-family-body">
                The Uppers tighten their grip — Nullisyn protocols, border
                dampeners, surveillance everywhere. Yet in the shadows, the
                whispers of rebellion refuse to die.
              </p>
            </li>
          </ol>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/timeline"
            className="inline-block cursor-none bg-[#c4b6c1] hover:bg-[#c4b6c1cc] text-[#060506] font-bold py-3 px-6 rounded transition-all duration-150 ease-in-out"
          >
            Explore the Full Timeline
          </Link>
        </div>
      </section>

      {/* PARALLAX SECTION */}
      <section className="py-24 md:py-36 px-5 text-[#e5e7e8]">
        <h1 className="text-2xl md:text-5xl text-center font-bold text-[#060506] font-family-subheading">
          Step Into The Republic
        </h1>
        <p className="text-lg md:text-xl mt-2.5 font-medium text-pretty text-center font-family-body text-[#060506]">
          The Uppers built walls and checkpoints, but every barrier tells a
          story. This is the Republic they claim. Will you accept it?
        </p>
        <div className="mt-5">
          <ParallaxScroll images={images} />
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-10 px-4 text-center bg-[#998185] text-[#e5e7e8] rounded-lg mx-4 md:mx-20 mb-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#ebeef1] font-family-subheading">
          This Is Just The Beginning
        </h2>
        <p className="mb-8 text-xs font-normal text-[#ebeef1] md:text-lg font-family-body">
          The story of the Rejects is still being written. Step inside, and be
          part of the legend.
        </p>
        <div className="flex justify-center items-center text-center gap-3.5">
          <Link href="https://www.wattpad.com/story/407399764?utm_source=android&utm_medium=link&utm_content=share_writing&wp_page=create&wp_uname=Chikaimaaa_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#c4b6c1] hover:bg-[#c4b6c1cc] text-[#060506] cursor-none font-bold py-3 px-6 rounded transition-all">
              Read the Book
            </button>
          </Link>

          <Link
            href={"https://stage32.com/miguelwrites"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-[#5d4b51] hover:bg-[#5d4b51cc] cursor-none text-[#efebee] font-bold py-3 px-6 rounded transition-all">
              Follow The Author
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
