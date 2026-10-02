/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
	// output: "export", // Comment this line when not building the project
	reactStrictMode: true,
	trailingSlash: true,
	swcMinify: true,
	basePath: "",
	assetPrefix: "",
	images: {
		loader: "imgix",
		path: "/",
	},
};

module.exports = nextConfig;

