import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Navigation = () => {
  return (
    <div className="flex justify-center my-6 text-[#060506] font-medium gap-8">
      <NavigationMenu className="mx-4 flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`flex text-[16px] hover:bg-[#c4b6c1] text-[#efebee] hover:text-[#060506] cursor-none ${sourceSans.className}`}
              href="/characters"
            >
              Characters
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`flex text-[16px] hover:bg-[#c4b6c1] text-[#efebee] hover:text-[#060506] cursor-none ${sourceSans.className}`}
              href="/factions"
            >
              Factions
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`flex text-[16px] hover:bg-[#c4b6c1] text-[#efebee] hover:text-[#060506] cursor-none ${sourceSans.className}`}
              href="/about"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={`flex text-[16px] hover:bg-[#c4b6c1] text-[#efebee] hover:text-[#060506] cursor-none ${sourceSans.className}`}
              href="/timeline"
            >
              Timeline
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
