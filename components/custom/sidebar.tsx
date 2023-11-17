"use client";

import Link from "next/link";
import React, { FormEvent, useState } from "react";
import ThemeToggle from "./theme-toggle";
import { Button, buttonVariants } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { MenuIcon, Search, X } from "lucide-react";
import SpinningIcon from "./spinning-icon";

import { IconsManifest } from "react-icons";
import { toast } from "sonner";

const sortedManifest = IconsManifest.sort((a, b) =>
  a.name.localeCompare(b.name)
);

const routes = [
  {
    label: "Home",
    route: "/",
  },
  ...sortedManifest.map((item) => ({
    label: item.name,
    route: `/icons/${item.id}`,
  })),
];

const Sidebar = () => {
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMenu(false);
    if (query.length < 3) {
      toast.error("Query should've at least 3 letters");
    } else {
      router.push(
        `/search?q=${query.replaceAll(" ", "-").toLocaleLowerCase()}`
      );
    }
  };
  return (
    <div className="w-full sm:w-96 sm:h-screen border border-l flex flex-col divide-y">
      <div className=" flex w-full items-center justify-between py-3 px-4">
        <Link href={"/"} className="flex items-center gap-1">
          <SpinningIcon />
          <p className="text-primary text-xl font-semibold">react-icons</p>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            className="sm:hidden"
            size="icon"
            onClick={() => setShowMenu((state) => !state)}
          >
            {showMenu ? (
              <X className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            ) : (
              <MenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "w-full h-full overflow-y-scroll md:block",
          showMenu ? "block" : "hidden"
        )}
      >
        <form
          onSubmit={handleSubmit}
          className="flex w-full items-center gap-2  py-3 px-4"
        >
          <Input
            placeholder="🔍 Search Icons"
            className="w-full"
            value={query}
            onChange={({ target }) => setQuery(target.value)}
          />
          <Button
            type="submit"
            variant={"secondary"}
            size={"icon"}
            disabled={query.length < 3}
            className="aspect-square "
          >
            <Search size={16} />
          </Button>
        </form>
        <div className=" py-3 px-4 flex flex-col gap-2">
          {routes.map((route) => (
            <Link
              key={route.route}
              href={route.route}
              className={cn(
                buttonVariants({
                  variant: pathname === route.route ? "default" : "ghost",
                }),
                "py-6 justify-start"
              )}
              onClick={() => {
                window.scrollY = 0;
                setShowMenu(false);
              }}
            >
              {route.label}
            </Link>
          ))}
        </div>
        {/* <div className="w-full flex items-center justify-between py-3 px-4">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/brand-icon.svg"}
              height={50}
              width={50}
              className="h-10 aspect-square  "
              alt="react icons"
            />
            <p className="text-primary text-lg font-medium">react-icons</p>
          </Link>
          <ThemeToggle />
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
