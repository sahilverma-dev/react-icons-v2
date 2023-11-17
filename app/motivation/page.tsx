export const metadata = {
  title: "Motivation",
};

const Motivation = () => {
  return (
    <div className="p-4 h-full min-h-screen w-full max-w-5xl mx-auto flex items-center">
      <div>
        <h1 className="text-3xl font-bold mb-6">
          My motivations behind this Website
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Hi, I&apos;m{" "}
          <a
            href="https://sahilverma.dev/"
            target="_blank"
            className="font-bold text-orange-600"
          >
            Sahil Verma
          </a>
          , and I created this website to provide a more modern and visually
          appealing experience for users interested in React Icons.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          The motivation behind building this site was to offer a fresh and
          updated look compared to the official website, which I found lacking
          in terms of aesthetics and modern design principles.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          For the development, I chose Next.js for its server-side rendering
          capabilities, Tailwind CSS for a utility-first styling approach,
          Shandn for a sleek design, and, of course,{" "}
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            className="font-medium text-primary"
          >
            react-icons
          </a>{" "}
          to showcase a wide variety of icons.
        </p>
        <p className="text-red-600 font-medium mb-4">
          Please note that this is not the official{" "}
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            className="font-medium text-blue-600"
          >
            React Icons
          </a>{" "}
          website, and I do not own the{" "}
          <a
            href="https://react-icons.github.io/react-icons/"
            target="_blank"
            className="font-medium text-blue-600"
          >
            React Icons
          </a>{" "}
          repository. All credits for the fantastic React Icons library go to
          the original creators and contributors.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to explore and enjoy the collection of{" "}
          <a
            href="https://github.com/react-icons/react-icons"
            target="_blank"
            className="font-medium text-primary"
          >
            React Icons
          </a>{" "}
          on this website!
        </p>
      </div>
    </div>
  );
};

export default Motivation;
