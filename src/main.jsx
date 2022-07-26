import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";

const myThemes = {
	colorScheme: "dark",
	primaryColor: "orange",
	lineHeight: 1.2,
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<MantineProvider withNormalizeCSS withGlobalStyles theme={myThemes}>
			<App />
		</MantineProvider>
	</React.StrictMode>
);
