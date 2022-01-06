module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/App.tsx',
    '!src/index.tsx',
    '!src/pages/**/*.tsx',
    '!src/pages/Edit/style.ts',
    '!src/styles/**/*.ts',
    '!src/utils/dbActions.ts',
    '!src/utils/apollo.ts',
    '!src/utils/apolloCache.ts',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
    '!src/**/mock.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components':
      '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
