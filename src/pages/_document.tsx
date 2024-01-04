import Document, { Head, Html, Main, NextScript } from "next/document";

import StyledComponentsRegistry from "~/lib/registry";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-BR">
				<Head />
				<body>
					<StyledComponentsRegistry>
						<Main />
						<NextScript />
					</StyledComponentsRegistry>
				</body>
			</Html>
		);
	}
}
