import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Import the generated route tree
import { routeTree } from "./routeTree.gen.js";

// Create the router instance with the route tree
const router = createRouter({ routeTree, defaultPreload: "intent" });

/// Import our custom CSS
import './scss/main.scss';

// Import Bootstrap's JS for side effects only
import 'bootstrap';

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

// Render the app
const rootElement = document.querySelector("#app");
if (rootElement) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
