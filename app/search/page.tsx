import SearchResults from "@/components/custom/search-results";

import { FC } from "react";

interface Props {
  searchParams: {
    q: string;
  };
}

export const generateMetadata = ({ searchParams }: Props) => ({
  title: `Search results for ${searchParams.q}`,
});

const Search: FC<Props> = ({ searchParams }) => {
  const { q } = searchParams;

  return (
    <div className="p-4 w-full space-y-4">
      <h1 className="font-bold text-3xl">🔍 Search</h1>
      <p>
        Results for: <i>{q}</i>
      </p>

      <SearchResults q={q} />
    </div>
  );
};

export default Search;
