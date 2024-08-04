"use client";

import { Provider } from "react-redux";
import store from "../redux/store";
import { Toaster, toast } from "sonner";
import { ReactNode } from "react";

const ProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      {children} <Toaster position="top-center" expand={false} />
    </Provider>
  );
};

export default ProviderWrapper;
