"use client";

import { data } from "@/constants/data";
import { FC } from "react";
import IconsGrid from "./icons-grid";

interface Props {
  id: string;
}

const Icons: FC<Props> = ({ id }) => {
  // @ts-ignore
  const icons = data[id];

  if (!icons) return <p>No Icons</p>;
  else return <IconsGrid icons={icons} />;
};

export default Icons;
