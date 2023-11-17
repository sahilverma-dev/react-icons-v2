"use client";

import { FC, useCallback, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { Input } from "../ui/input";
import { debounce } from "@/lib/utils";
import Code from "../custom/code";

interface Props {
  selectedIcon: {
    icon: any;
    label: string;
    id: string;
  } | null;
  setSelectedIcon: any;
}

const SelectedIconSheet: FC<Props> = ({ selectedIcon, setSelectedIcon }) => {
  // colors
  const [color, setColor] = useState("#ffffff");
  const [backgroundColor, setBackgroundColor] = useState("#1c1c1c");

  const close = () => setSelectedIcon(null);

  const debouncedColorChange = useCallback(
    debounce((value) => {
      setColor(value);
    }, 300),
    []
  );

  const debouncedBackgroundColorChange = useCallback(
    debounce((value) => {
      setBackgroundColor(value);
    }, 300),
    []
  );

  return (
    <Sheet open={selectedIcon !== null} onOpenChange={close}>
      <SheetContent
        overlay
        className="w-full h-full overflow-y-scroll sm:max-w-lg"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl ">
            {selectedIcon?.id}/{selectedIcon?.label}
          </SheetTitle>
        </SheetHeader>
        <div className="w-full  my-4 space-y-2">
          <h2 className="text-xl font-bold">Preview</h2>
          <div
            className="w-full border rounded-lg h-[200px] flex items-center justify-center text-8xl"
            style={{
              color,
              backgroundColor,
            }}
          >
            {selectedIcon && <selectedIcon.icon />}
          </div>
          <div className="flex items-center gap-4 w-full">
            <div className="space-y-2 w-full">
              <p className="font-medium text-sm">Color</p>
              <Input
                type="color"
                value={color}
                onChange={({ target }) => debouncedColorChange(target.value)}
              />
            </div>
            <div className="space-y-2 w-full">
              <p className="font-medium text-sm">Background Color</p>
              <Input
                type="color"
                value={backgroundColor}
                onChange={({ target }) =>
                  debouncedBackgroundColorChange(target.value)
                }
              />
            </div>
          </div>
        </div>
        <div className="w-full my-4 space-y-4">
          <h2 className="text-xl font-bold">Code Snippets</h2>
          <div className="space-y-2">
            <h3 className="text-base font-medium">Import</h3>
            <Code
              code={`import { ${selectedIcon?.label} } from "react-icons/${selectedIcon?.id}";`}
              language="jsx"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-medium">Use</h3>
            <Code code={`<${selectedIcon?.label} />`} language="jsx" />
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-medium">Use (with colors)</h3>
            <Code
              code={`<div
  style={{
    backgroundColor: ${backgroundColor},
  }}
>
  <${selectedIcon?.label}
    style={{
      color: ${color},
    }}
  />
</div>`}
              language="jsx"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SelectedIconSheet;
