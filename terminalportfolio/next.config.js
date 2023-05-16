/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: { domains: ["media.tenor.com"] },
	basePath: "",
	// transpilePackages: ["three", "react-three-fiber", "drei"],
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(gltf)$/,
			type: "asset/resource",
			generator: {
				filename: "static/chunks/[path][name].[hash][ext]",
			},
		});

		return config;
	},
};

module.exports = nextConfig;
