//import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";

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
            <Button>Meet The Characters</Button>
            <Button variant={"outline"}>Pick A Side</Button>
          </div>
        </div>
      </section>

      {/* FACTIONS SECTION */}
      <section className=" md:py-10 px-4">
        <div>
          <h1 className="text-2xl md:text-6xl text-center font-bold">
            Factions
          </h1>
        </div>
      </section>
    </>
  );
}