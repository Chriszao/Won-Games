import { type AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "~/styles/global";
import { theme } from "~/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>Won Games</title>
				<link rel="shortcut icon" href="/img/logo.ico" />
				<link rel="apple-touch-icon" href="/img/logo.ico" />
				<link rel="shortcut icon" href="/img/logo.ico" type="image/x-icon" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="description" content="The best Game Stores in the world!" />
			</Head>

			<GlobalStyles />

			<Component {...pageProps} />
		</ThemeProvider>
	);
}
