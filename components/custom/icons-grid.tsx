"use client";

import { FC, useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import SelectedIconSheet from "./selected-icon-sheet";

import { data } from "@/constants/data";
import { Skeleton } from "../ui/skeleton";

interface Props {
  id: string;
}

const IconsGrid: FC<Props> = ({ id }) => {
  const [icons, setIcons] = useState<
    {
      id: string;
      label: string;
      icon: any;
    }[]
  >([]);

  const [selectedIcon, setSelectedIcon] = useState<null | {
    id: string;
    label: string;
    icon: any;
  }>(null);

  useEffect(() => {
    // @ts-ignore
    setIcons(data[id]);
  }, []);

  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4 w-full">
        <TooltipProvider>
          {icons.length === 0
            ? Array.from({ length: 50 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-full w-full rounded-lg aspect-square"
                />
              ))
            : icons.map((icon) => (
                <Tooltip key={icon.label}>
                  <TooltipTrigger asChild>
                    <button
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
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{icon.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
        </TooltipProvider>
      </div>
      <SelectedIconSheet
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
    </>
  );
};

export default IconsGrid;
