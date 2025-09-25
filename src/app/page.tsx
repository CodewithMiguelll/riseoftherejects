//import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Link from "next/link";
import { FocusCards } from "@/components/ui/focus-cards";
import { Button } from "@/components/ui/button";

const cards = [
  {
    title: "Uppers",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "The heights gleam bright, but shadows deepen at the base of every tower.",
  },
  {
    title: "Lowers",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "They carry the weight of a world not built for them, yet their hands keep it standing.",
  },
  {
    title: "Rejects",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <h1 className="text-2xl md:text-7xl font-bold">
            In a nation divided, rebellion ignites.
          </h1>
          <p className="text-lg md:text-xl mt-2.5 font-medium text-pretty">
            The Uppers rule, The Lowers endure... but the Rejects refuse to
            kneel.
          </p>
          <div className="flex flex-row items-center justify-center gap-3.5 mt-5">
            <Link href="/characters">
              <Button style={{ padding: "20px" }}>Meet The Characters</Button>
            </Link>
            <Link href="/factions">
              <Button variant={"outline"} style={{ padding: "20px" }}>
                Pick A Side
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FACTIONS SECTION */}
      <section className=" md:py-10 px-4">
        <h1 className="text-2xl md:text-4xl text-center font-bold">
          The Republic is divided... which side are you on?
        </h1>
        <p className="text-sm md:text-base text-center font-medium text-pretty mt-3.5">
          Choose wisely. Your fate depends on it.
        </p>
        <div className="mt-10 mb-12">
          <FocusCards cards={cards} />
        </div>
        <div className="flex justify-center">
          <Link href="/factions" className="w-full max-w-sm">
            <button className="w-full bg-[#121212] text-white font-bold py-3 rounded transition-all duration-100 ease-in-out hover:bg-[#f3f4f6] hover:text-[#121212]">
              Pick A Side
            </button>
          </Link>
        </div>
      </section>

      {/* BLOCKQUOTE */}
      <section className="py-16 px-6 ">
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-4xl font-semibold leading-snug">
            “We can't just sit and take it like good little boys, if not now,
            then when?”
          </p>
          <footer className="mt-4 text-sm text-[#121212] font-medium">
            — Omajiri Spokesperson
          </footer>
        </blockquote>
      </section>

      {/* CHARACTERS SPOTLIGHT */}
      <section>
        <h1>Meet Out Heroes</h1>
      </section>
    </>
  );
}
