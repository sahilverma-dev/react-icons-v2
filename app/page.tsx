/* eslint-disable @next/next/no-img-element */
import Code from "@/components/custom/code";
import { InfoIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { IconsManifest } from "react-icons";

// export const generateMetadata = () => ({
//   title: "Home",
// });

export const metadata: Metadata = {
  title: "Home - React Icons",
};

const icons = [...IconsManifest].sort((a, b) => a.name.localeCompare(b.name));

const Home = () => {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-4xl font-semibold">React Icons</h1>
      <div className="flex items-center gap-4">
        <a
          target="_blank"
          href="https://www.npmjs.com/package/react-icons"
          rel="nofollow"
        >
          <img
            src="https://img.shields.io/npm/v/react-icons.svg"
            alt="npm"
            height={20}
          />
        </a>

        <a
          target="_blank"
          href="https://github.com/react-icons/react-icons/actions"
          rel="nofollow"
        >
          <img
            src="https://github.com/react-icons/react-icons/actions/workflows/nodejs.yml/badge.svg"
            alt="GitHub Actions build status"
            height={20}
          />
        </a>
      </div>
      <div
        className="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-zinc-900 dark:text-red-400"
        role="alert"
      >
        <InfoIcon className="flex-shrink-0 hidden sm:inline w-4 h-4 me-3" />
        <span className="sr-only">Note</span>
        <div>
          <span className="font-medium">Note!</span> This is an unofficial
          website for{" "}
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            className="text-blue-600 font-medium"
          >
            react-icons
          </a>{" "}
          library.{" "}
          <Link href="/motivation" className="text-blue-600 font-medium">
            Click Here
          </Link>{" "}
          to read me motivation behind this website.
        </div>
      </div>

      <p>
        Include popular icons in your React projects easily with react-icons,
        which utilizes ES6 imports that allows you to include only the icons
        that your project is using.
      </p>

      <h2 className="text-xl font-medium">Include icon sets</h2>
      <div className="grid lg:grid-cols-3 gap-4">
        {icons.map((icon) => (
          <Link
            href={`/icons/${icon.id}`}
            key={icon.id}
            className="border p-4 rounded-lg hover:bg-secondary transition-all"
          >
            <h3 className="text-base font-semibold">{icon.name}</h3>
          </Link>
        ))}
      </div>

      <div className="w-full">
        <h2 className="text-xl font-medium">
          Installation (for standard modern project)
        </h2>
        <Code language="bash" code={`npm install react-icons`} />
      </div>
      <div className="w-full">
        <h2 className="text-xl font-medium">Usage</h2>
        <Code
          language="jsx"
          code={`import { FaBeer } from 'react-icons/fa';

const App = () => {
  return <h3> Lets go for a <FaBeer/>? </h3>;
};

export default App;
`}
        />
      </div>

      <h2 className="text-xl font-medium">
        Installation (for meteorjs, gatsbyjs, etc)
      </h2>
      <p>
        If your project grows in size, this option is available. This method has
        the trade-off that it takes a long time to install the package. Suitable
        for MeteorJS, Gatsbyjs etc.
      </p>
      <Code
        language="jsx"
        code={`import { FaBeer } from 'react-icons/fa';

const App = () => {
  return <h3> Lets go for a <FaBeer/>? </h3>;
};

export default App;
`}
      />
      <h2 className="text-xl font-medium">More info</h2>
      <a
        href="https://github.com/react-icons/react-icons"
        target="_blank"
        className="text-blue-500"
      >
        GitHub
      </a>
    </div>
  );
};

export default Home;
