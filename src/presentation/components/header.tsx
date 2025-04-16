"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Sheet, SheetTrigger, SheetContent } from "@/presentation";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#1A1A1A]
     text-primary-foreground"
    >
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.jpeg" alt="Blog R1" width={32} height={32} />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <form
            onSubmit={handleSearch}
            className="relative w-40 md:w-80 hidden md:block"
          >
            <Input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="shadow-none border-none rounded-none bg-white/15"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#2686EA] p-2"
            >
              <Search className="size-5" />
            </button>
          </form>

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
                      src="/logo.jpeg"
                      alt="Blog R1"
                      width={32}
                      height={32}
                    />
                  </Link>
                </div>

                <div className="p-4 border-t border-white/10">
                  <form onSubmit={handleSearch} className="relative w-full">
                    <Input
                      type="text"
                      placeholder="Buscar artigos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-[#1A1A3A] border-none shadow-none text-base py-6 pl-4 pr-12"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#2686EA] p-2 rounded"
                    >
                      <Search className="size-5" />
                    </button>
                  </form>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
