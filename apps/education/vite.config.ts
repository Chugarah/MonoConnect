import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({}),
		react(),
		viteTsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
	],
});
