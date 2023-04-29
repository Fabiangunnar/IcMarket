import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux-store/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}
