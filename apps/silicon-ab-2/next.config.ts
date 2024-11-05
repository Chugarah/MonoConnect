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
};

export default nextConfig;
