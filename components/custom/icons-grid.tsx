"use client";

import { FC, useState } from "react";
// import { getIcons } from "virtual:react-icons-get-icons";

import { motion } from "framer-motion";

import * as data from "react-icons/ai";

const icons = Object.keys(data).map((item, index) => ({
  label: item,
  // @ts-ignore
  icon: data[item],
}));

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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface Props {
  id: string;
}

const IconsGrid: FC<Props> = ({ id }) => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <motion.div
      variants={parent}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4 w-full"
    >
      <TooltipProvider>
        {/* {Array.from({ length: 100 }).map((_, i) => ( */}
        {icons.map((icon) => (
          <Tooltip key={icon.label}>
            <TooltipTrigger asChild>
              <motion.button
                variants={child}
                onClick={() => setSelected(AiFillAmazonCircle)}
                className="border rounded-lg aspect-square hover:bg-secondary transition-all w-full flex flex-col items-center justify-center text-center gap-2"
              >
                <icon.icon className="text-2xl" />
                <p className="text-xs font-medium w-[60%] truncate">
                  {icon.label}
                </p>
              </motion.button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{icon.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        {/* <Tooltip>
    <TooltipTrigger>Hover</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip> */}
      </TooltipProvider>
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
