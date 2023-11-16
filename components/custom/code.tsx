"use client";

import { FC, useState } from "react";

// @ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
// @ts-ignore
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// icons
import {
  IoClipboardOutline as CopyIcon,
  IoCheckmark as CheckIcon,
} from "react-icons/io5";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  name?: string;
  language: string;
  code: string;
}

const Code: FC<Props> = ({ name, code, language }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied!");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="bg-zinc-900 rounded-md my-5 overflow-hidden">
      {name && (
        <div className="flex items-center justify-between">
          <p className="text-white px-6 text-sm font-medium">
            {name || "Example Code"}
          </p>
          <Button
            className={cn([
              "rounded-none",
              copied && "bg-green-600 text-white",
            ])}
            size={"icon"}
            onClick={copyToClipboard}
            disabled={copied}
          >
            {copied ? <CheckIcon color="green" /> : <CopyIcon />}
          </Button>
        </div>
      )}
      <div className="relative w-full flex items-center">
        <SyntaxHighlighter
          language={language}
          style={atomOneDark}
          customStyle={{
            width: "100%",
            padding: name?.length === 0 ? "25px" : "16px 20px",
          }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
        {!name && (
          <Button
            className={cn([
              "absolute bottom-2 right-2",
              copied && "bg-green-600 text-white",
            ])}
            size={"icon"}
            onClick={copyToClipboard}
            disabled={copied}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Code;
