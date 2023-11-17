"use client";

import { FC, ReactNode } from "react";

// providers
import { ThemeProvider } from "./theme-provider";
import ReduxProvider from "./redux-provider";

// toast
import { Toaster } from "sonner";

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ReduxProvider>
        {children}
        <Toaster richColors />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default Providers;
