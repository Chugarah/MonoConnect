import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
	experimental: {
		turbo: {
			rules: {
				"*.scss": {
					loaders: [
						{
							loader: "sass-loader",
							options: {
								sourceMap: true,
								sassOptions: {
									includePaths: [path.join(__dirname, "./app/scss")],
									quietDeps: false,
									verbose: true,
								},
							},
						},
					],
					as: "*.css",
				},
			},
		},
	},
	sassOptions: {
		outputStyle:
			process.env.NODE_ENV === "production" ? "compressed" : "expanded",
		quietDeps: false,
		sourceMap: true,
		logger: console,
	},
	productionBrowserSourceMaps: false,
	webpack: (config, { dev, isServer }) => {
		if (!dev && !isServer) {
			config.devtool = false;
		}
		return config;
	},
};

export default nextConfig;
