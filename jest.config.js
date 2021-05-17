module.exports = {
  roots: ['<rootDir>'],
  preset: '@shelf/jest-mongodb',
  testRegex: '(/__tests__/.*(\\.|/)(spec))\\.js?$',
  moduleDirectories: ['node_modules', './src'],
  moduleFileExtensions: ['js', 'json', 'node'],
  // setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js']
  testPathIgnorePatterns: ['./node_modules/'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
//  "setupFiles": [
//    "<rootDir>/jest.init.js"
//   ],
};
