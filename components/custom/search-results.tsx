"use client";

import { FC } from "react";

import IconsGrid from "./icons-grid";
import { searchIcon } from "@/lib/utils";

interface Props {
  q: string;
}

const SearchResults: FC<Props> = ({ q }) => {
  const icons = searchIcon(q);
  return (
    <div>
      {icons.length === 0 ? <p>No icons</p> : <IconsGrid icons={icons} />}
    </div>
  );
};

export default SearchResults;
