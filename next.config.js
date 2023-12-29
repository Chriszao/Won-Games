const developmentOrTestOnly = process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"

/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: {
			displayName: developmentOrTestOnly,
		}
	},

}

module.exports = nextConfig
