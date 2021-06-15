/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['./**/*.js(x)?'],
  testEnvironment: 'jsdom',
  presets: [['@babel/preset-env', { targets: { node: 'current' } }, '@babel/preset-react']],
  modulePathIgnorePatterns: ['<rootDir>/.eslintrc.js', '<rootDir>/jest.config.js', '<rootDir>/node_modules', '<rootDir>/.next', '<rootDir>/.git', '<rootDir>/coverage'],
  moduleDirectories: ['node_modules', '.'],
};
