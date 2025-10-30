"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Source_Sans_3 } from "next/font/google";
import { usePathname } from "next/navigation";
import clsx from "clsx"; // helper for conditional classes

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navLinks = [
  { name: "Characters", href: "/characters" },
  { name: "Factions", href: "/factions" },
  { name: "About", href: "/about" },
  { name: "Timeline", href: "/timeline" },
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center my-6 text-[#efebee] font-medium gap-8">
      <NavigationMenu className="mx-4.5 flex">
        <NavigationMenuList>
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink
                  href={link.href}
                  className={clsx(
                    `flex text-[16px] p-3 rounded-md transition-all duration-300 cursor-none ${sourceSans.className}`,
                    {
                      // Active state styles
                      "bg-[#c4b6c1] text-[#060506] shadow-sm":
                        isActive,
                      // Inactive state
                      "hover:bg-[#c4b6c1]/20 hover:text-[#c4b6c1]":
                        !isActive,
                    }
                  )}
                >
                  {link.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
