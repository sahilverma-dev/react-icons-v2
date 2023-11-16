import IconsGrid from "@/components/custom/icons-grid";
import { FC } from "react";
import { IconsManifest } from "react-icons";

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = ({ params }: Props) => {
  const icon = IconsManifest.find((i) => i.id === params.slug);
  return {
    title: icon?.name,
  };
};

const IconPage: FC<Props> = ({ params }) => {
  const icon = IconsManifest.find((i) => i.id === params.slug);
  return (
    <div className="p-4 w-full ">
      <h1 className="font-bold text-3xl">{icon?.name}</h1>
      <div className="my-4 sm:my-6 space-y-2">
        <div className="flex items-center gap-1">
          <b>License:</b>
          <a
            href={icon?.licenseUrl}
            target="_blank"
            className="text-blue-600 truncate"
          >
            {icon?.license}
          </a>
        </div>
        <div className="flex items-center gap-1 ">
          <b>Project:</b>
          <a
            href={icon?.projectUrl}
            target="_blank"
            className="text-blue-600 truncate"
          >
            {icon?.projectUrl}
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-2xl">Icons</h2>
        <IconsGrid id={icon?.id as string} />
      </div>
    </div>
  );
};

export default IconPage;
