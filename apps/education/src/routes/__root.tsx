import { Outlet, createRootRoute } from "@tanstack/react-router";

// Define the root route component
export const Route = createRootRoute({
	component: RootComponent,
});

// Render the root route component
function RootComponent() {
	return (
		<>
			<Outlet />
		</>
	);
}
