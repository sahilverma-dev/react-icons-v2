"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import ReduxProvider from "./redux-provider";

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
      <ReduxProvider>{children}</ReduxProvider>
    </ThemeProvider>
  );
};

export default Providers;
