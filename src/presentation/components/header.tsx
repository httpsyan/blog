import Image from "next/image";
import Link from "next/link";
import {
  Input,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/presentation";
import { Search, Menu } from "lucide-react";
import {
  MAIN_NAVIGATION_ITEMS,
  SECONDARY_NAVIGATION_ITEMS,
} from "@/infrastructure";

export const Header = () => {
  return (
    <header
      className="sticky top-0 z-50 w-full  bg-[#1A1A1A]
     text-primary-foreground"
    >
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="FullStory" width={32} height={32} />
          </Link>

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {MAIN_NAVIGATION_ITEMS.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground focus:bg-primary-foreground/10 focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary-foreground/20 data-[state=open]:bg-primary-foreground/20">
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-40 md:w-80 hidden md:block">
            <Input
              type="text"
              placeholder="Buscar...."
              className="shadow-none border-none rounded-none bg-white/15"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2686EA] p-2">
              <Search className="size-5" />
            </button>
          </div>

          <Sheet>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-full text-white p-0 bg-[#1A1A1A]"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src="/logo.png"
                      alt="FullStory"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <nav className="flex flex-col">
                    {MAIN_NAVIGATION_ITEMS.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-6 py-4 text-xl font-normal hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="h-px bg-white/10 my-4" />
                    {SECONDARY_NAVIGATION_ITEMS.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="px-6 py-4 text-xl font-normal hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                <div className="p-4 border-t border-white/10">
                  <div className="relative w-full">
                    <Input
                      type="text"
                      placeholder="Search..."
                      className="w-full bg-[#1A1A3A] border-none shadow-none text-base py-6 pl-4 pr-12"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#2686EA] p-2 rounded">
                      <Search className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
