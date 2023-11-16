"use client";

import { cn } from "@/lib/utils";
import { ComponentType, FC, useEffect, useState } from "react";
// import { getIcons } from "virtual:react-icons-get-icons";

import { motion } from "framer-motion";

import { AiFillAmazonCircle } from "react-icons/ai";
import { buttonVariants } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { child, parent } from "@/constants/variants";

interface Props {
  id: string;
}

const IconsGrid: FC<Props> = ({ id }) => {
  const [icons, setIcons] = useState<{
    [name: string]: ComponentType;
  }>();

  useEffect(() => {
    // getIcons(id).then((icons) => {
    //   console.log(icons);
    // });
  }, []);

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4 w-full"
    >
      {/* {Object.keys(icons as []).map((name) => {
        const Component = icons[name];
        if (!Component) {
          return null;
        }
        return (
          <button
          key={i}
          onClick={() => setSelected(AiFillAmazonCircle)}
          className="border rounded-lg aspect-square hover:bg-secondary transition-all w-full flex flex-col items-center justify-center text-center gap-2"
          // className={cn([buttonVariants({ variant: "secondary" })])}
        >
          <AiFillAmazonCircle className="text-3xl" />
          <p className="text-xs font-medium">hello</p>
        </button>
        );
      })} */}
      {Array.from({ length: 100 }).map((_, i) => (
        <motion.button
          variants={child}
          key={i}
          onClick={() => setSelected(AiFillAmazonCircle)}
          className="border rounded-lg aspect-square hover:bg-secondary transition-all w-full flex flex-col items-center justify-center text-center gap-2"
          // className={cn([buttonVariants({ variant: "secondary" })])}
        >
          <AiFillAmazonCircle className="text-3xl" />
          <p className="text-xs font-medium">hello</p>
        </motion.button>
      ))}
      <Sheet open={selected !== null} onOpenChange={() => setSelected(null)}>
        <SheetContent overlay className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default IconsGrid;
