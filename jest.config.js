// You can learn more about each option below in the Jest docs: https://jestjs.io/docs/configuration.

module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.d.ts",
        "!**/node_modules/**",
        "!**/index.*.{js,jsx,ts,tsx}",
        "!constants/**",
    ],
    moduleNameMapper: {
        // Handle CSS imports (with CSS modules)
        // https://jestjs.io/docs/webpack#mocking-css-modules
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

        // Handle CSS imports (without CSS modules)
        "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

        // Handle image imports
        // https://jestjs.io/docs/webpack#handling-static-assets
        "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$": `<rootDir>/__mocks__/fileMock.js`,

        // Handle module aliases
        "^@/components": "<rootDir>/components/index.js",
        "^@/constants": "<rootDir>/constants/index.js",
        "^@/helpers": "<rootDir>/helpers/index.js",
        "^@/lib/hooks": "<rootDir>/lib/hooks/index.js",
        "^@/components/(.*)$": "<rootDir>/components/$1",

        "^@/pages/(.*)$": "<rootDir>/pages/$1",
    },
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
        "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
        "/node_modules/",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    testEnvironment: "jest-environment-jsdom",
    "setupFilesAfterEnv": [
        "<rootDir>/jest.setup.ts"
    ],
    coverageThreshold: {
        global: {
            statements: 1, // Minimum statement coverage (percentage)
            branches: 0,   // Minimum branch coverage (percentage)
            functions: 0,  // Minimum function coverage (percentage)
            lines: 0,      // Minimum line coverage (percentage)
        },
    },
    coverageReporters: ["html"],
};
