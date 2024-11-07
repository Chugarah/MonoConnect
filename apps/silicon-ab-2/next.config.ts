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
								sassOptions: {
									includePaths: [path.join(__dirname, "./app/scss")],
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
