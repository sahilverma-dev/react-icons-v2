import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ReduxProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
