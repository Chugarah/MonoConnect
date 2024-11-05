import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
	sassOptions: {
		additionalData: `
      @use "sass:map";
      @use "sass:math";
      @use "./app/scss/abstracts/abstracts" as a;
      @use "./app/scss/layout/layout" as l;
    `,
		includePaths: [path.join(__dirname, "./app/scss")],
		outputStyle:
			process.env.NODE_ENV === "production" ? "compressed" : "expanded",
	},
	// Add this to optimize static asset handling
	experimental: {
		optimizeFonts: true,
	},
};

export default nextConfig;
