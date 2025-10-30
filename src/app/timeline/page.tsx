import { Source_Sans_3 } from "next/font/google";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";


//Font Configuration 

// Body Font
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const data = [
  {
    title: "October 2nd, 2045",
    content: (
      <div>
        <p
          className={`${sourceSans.className} mb-8 text-xs font-normal text-[#e5e7e8] md:text-lg`}
        >
          Serum I-960 is launched, marking the dawn of a new age. Ordinary
          Nigerians awaken to extraordinary abilities—strength, speed,
          perception beyond human limits. At first, it is hailed as a miracle, a
          scientific leap forward that would propel the nation to greatness. But
          beneath the celebration lies unease. Questions of control, ethics, and
          power begin to emerge, sowing the seeds of future conflict.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/national-library-of-medicine-Os9brU_pif4-unsplash.jpg"
            alt="Serum experiment lab"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full"
          />
          <Image
            src="/images/malcolm-choong-h4l-G5-xzzU-unsplash.jpg"
            alt="Superhuman concept"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full saturate-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "May 7th, 2065",
    content: (
      <div>
        <p
          className={`${sourceSans.className} mb-8 text-xs font-normal text-[#e5e7e8] md:text-lg`}
        >
          Tensions between empowered individuals and those left behind finally
          ignite. Cities burn as factions rise, each fighting for dominance and
          survival. Families are torn apart, governments collapse under the
          pressure, and trust becomes a currency too rare to afford. By the time
          the fires dim, the world is forever reshaped—scarred both in land and
          in memory.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/patrick-perkins-DP4dLbZdybA-unsplash.jpg"
            alt="War aftermath"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full saturate-0"
          />
          <Image
            src="/images/thomas-de-luze-l-p8mZ-6h2Y-unsplash.jpg"
            alt="Conflict landscape"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full sepia"
          />
        </div>
      </div>
    ),
  },
  {
    title: "October 1st, 2068",
    content: (
      <div>
        <p
          className={`${sourceSans.className} mb-8 text-xs font-normal text-[#e5e7e8] md:text-lg `}
        >
          In the aftermath of chaos, one man emerges from the shadows: Jide. A
          charismatic leader with promises of rebuilding Nigeria into a shining
          utopia. He introduces the Faction System, organizing society into
          rigid classes to “preserve order.” For many, his words are salvation.
          For others, they are chains disguised as progress.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/unseen-histories-37tjLuKnBRs-unsplash.jpg"
            alt="Leader figure"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full sepia"
          />
          <Image
            src="/images/florian-olivo-r6KrYpCEAOU-unsplash.jpg"
            alt="Political rally"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full saturate-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "August 22nd, 2070",
    content: (
      <div>
        <p
          className={`${sourceSans.className} mb-8 text-xs font-normal text-[#e5e7e8] md:text-lg`}
        >
          Jide tightens his grip. Under the guise of national security, border
          checkpoints sprout across the nation—harmless at first glance, but
          designed to suppress powered individuals. Nullisyn, a
          government-sanctioned drug, is quietly distributed to weaken potential
          dissenters. Freedom becomes rationed, and paranoia becomes law.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/road-checkpoint.jpeg"
            alt="Checkpoint"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full sepia"
          />
          <Image
            src="/images/mika-baumeister-8Qi6Yn6qDyA-unsplash.jpg"
            alt="Pharmaceutical control"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full saturate-0"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Recently",
    content: (
      <div>
        <p
          className={`${sourceSans.className} mb-8 text-xs font-normal text-[#e5e7e8] md:text-lg `}
        >
          Nigeria now exists as a totalitarian state. Surveillance is constant,
          rebellion is crushed before it can form, and Nullisyn keeps the masses
          subdued. Yet, in the shadows of Lagos and beyond, whispers begin to
          grow louder. A resistance forms—united not by class or faction, but by
          the shared dream of reclaiming freedom. The storm is coming
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/images/ty-feague-4jqKDy_8QJM-unsplash.jpg"
            alt="Dystopian skyline"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full sepia"
          />
          <Image
            src="/images/children-group.jpeg"
            alt="Signs of rebellion"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-full"
          />
        </div>
      </div>
    ),
  },
];

const TimelinePage = () => {
  return (
    <>
      <Timeline data={data} />
    </>
  );
};

export default TimelinePage;
