module.exports = {
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/", "/.next/"],
	collectCoverage: true,
	collectCoverageFrom: [
		"src/**/*.ts(x)?",
		"!src/app/**", // should be tested in E2E
		"!src/lib/registry.tsx",
		"!src/@types/**",
		"!src/**/stories.tsx",
		"!src/styles/**",
	],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
	modulePaths: ["<rootDir>/src/", "<rootDir>/.jest"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "@swc/jest",
	},
	prettierPath: require.resolve("prettier-2"),
	moduleNameMapper: {
		"~/(.*)": "<rootDir>/src/$1",
		"^styled-components":
			"styled-components/dist/styled-components.browser.cjs.js",
	},
};
