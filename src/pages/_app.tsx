import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";

import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
	brand: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
	fonts: {
		heading: `'Open Sans', sans-serif`,
		body: `'Raleway', sans-serif`,
	},
	styles: {
		global: {
			"&::-webkit-scrollbar": {
				width: "4px",
			},
			"&::-webkit-scrollbar-track": {
				width: "6px",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "gray.600",
				borderRadius: "24px",
			},
		},
	},
};

const theme = extendTheme(colors);

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
