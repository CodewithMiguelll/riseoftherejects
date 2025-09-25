import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <div className="flex justify-center my-6 text-[#121212] font-medium gap-8">
      {/* //TODO: CHANGE TEXT COLORS WHEN YOU SET UP THE ANIMATED GRADIENT BACKGROUND */}
      <NavigationMenu className="mx-4 flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex text-[16px] hover:bg-[#f3f4f6]"
              href="/"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex text-[16px] hover:bg-[#f3f4f6]"
              href="/characters"
            >
              Characters
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex text-[16px] hover:bg-[#f3f4f6]"
              href="/factions"
            >
              Factions
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex text-[16px] hover:bg-[#f3f4f6]"
              href="/about"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex text-[16px] hover:bg-[#f3f4f6]"
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
