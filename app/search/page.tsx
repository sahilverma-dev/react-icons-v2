import SearchResults from "@/components/custom/search-results";
import { InfoIcon } from "lucide-react";
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
      <div className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-zinc-900 dark:text-red-400">
        <InfoIcon className="flex-shrink-0 hidden sm:inline w-4 h-4 me-3" />
        The search feature is currently not functioning.
      </div>
      {/* <h1 className="font-bold text-3xl">🔍 Search</h1>
      <p>
        Results for: <i>{q}</i>
      </p>
      <SearchResults q={q} /> */}
    </div>
  );
};

export default Search;
