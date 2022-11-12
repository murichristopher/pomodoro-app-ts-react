export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
