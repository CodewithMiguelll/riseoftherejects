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
    <div className="flex justify-center my-6 text-[#e5e7e8] font-medium gap-8">
      {/* //TODO: CHANGE TEXT COLORS WHEN YOU SET UP THE ANIMATED GRADIENT BACKGROUND */}
      <NavigationMenu className="mx-4 flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`flex text-[16px] hover:bg-[#9233eac9] hover:text-[#e5e7e8] cursor-none ${sourceSans.className}`}
              href="/characters"
            >
              Characters
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`flex text-[16px] hover:bg-[#9233eac9] hover:text-[#e5e7e8] cursor-none ${sourceSans.className}`}
              href="/factions"
            >
              Factions
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`flex text-[16px] hover:bg-[#9233eac9] hover:text-[#e5e7e8] cursor-none ${sourceSans.className}`}
              href="/about"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className={`flex text-[16px] hover:bg-[#9233eac9] hover:text-[#e5e7e8] cursor-none ${sourceSans.className}`}
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
