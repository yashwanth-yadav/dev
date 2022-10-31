export default {
  transform: {
    '.+\\.(css|scss|png|jpg|svg|webp)$': 'jest-transform-stub'
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/__mocks__/fileMock.ts'
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/setupTests.ts',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/themes.tsx',
    '!src/App.tsx',
    '!src/index.tsx',
    '!src/utils/**/*.{ts,tsx}',
    '!src/ApiService/**/*.{ts,tsx}',
    '!src/pages/**/*.{ts,tsx}'
  ]
};
