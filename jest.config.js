module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "js",
    "json"
  ],
  testMatch: [
    '**/tests/**/*.(ts|tsx)',
    '**/?(*.)+(spec|test).(ts|tsx)',
  ],
  coverageDirectory: '.coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx,js,jsx}',
    '!src/**/*.d.ts',
  ],
  reporters: [
    "default",
    ["jest-stare", {resultDir: "./.test-results/jest-stare", coverageLink: "../../.coverage/lcov-report/index.html"}],
    ["jest-junit", { outputDirectory: "./.test-results/jest", outputName: "./js-test-results.xml" } ]
  ]
};