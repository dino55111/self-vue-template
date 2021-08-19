module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: ['**/?(*.)test.[jt]s?(x)'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/', '/.vscode/'],
  collectCoverage: true
}