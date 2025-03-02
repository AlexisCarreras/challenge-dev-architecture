/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/routes/',
    '/src/controllers/',
  ],
  coverageReporters: ["json", "lcov", "text", "clover"],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/index.ts",
    "!src/**/*.d.ts"
  ],
  testMatch: [
    "**/test/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ]
};
