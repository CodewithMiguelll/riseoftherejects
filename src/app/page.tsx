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
          <div className="flex flex-row gap-3.5 mt-5">
            <Link href="/characters">
              <Button>Meet The Characters</Button>
            </Link>
            <Link href="/factions">
              <Button variant={"outline"}>Pick A Side</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FACTIONS SECTION */}
      <section className=" md:py-10 px-4">
        <div>
          <h1 className="text-2xl md:text-4xl text-center font-bold">
            The Republic is divided... which side are you on?
          </h1>
        </div>
        <div className="mt-10 mb-20">
          <FocusCards cards={cards} />
        </div>
      </section>
    </>
  );
}
