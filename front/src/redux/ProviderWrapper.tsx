"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "../redux/store";
import { Toaster, toast } from "sonner";

const ProviderWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<Provider store={store}>
			{children} <Toaster position="top-right" expand={false} />
		</Provider>
	);
};

export default ProviderWrapper;
