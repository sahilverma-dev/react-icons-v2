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

import { child, parent } from "@/constants/variants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import SelectedIconSheet from "./selected-icon-sheet";

interface Props {
  id: string;
}

const IconsGrid: FC<Props> = ({ id }) => {
  const [selectedIcon, setSelectedIcon] = useState<null | {
    id: string;
    label: string;
    icon: any;
  }>(null);

  return (
    <>
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
                  onClick={() => {
                    setSelectedIcon({
                      icon: icon.icon,
                      id,
                      label: icon.label,
                    });
                  }}
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
        </TooltipProvider>
      </motion.div>
      <SelectedIconSheet
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
    </>
  );
};

export default IconsGrid;
