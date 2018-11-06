module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/packages/cli/jest.transform.js',
  },
  rootDir: '../../',
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  setupFiles: [
    '<rootDir>/packages/cli/jest.setup.js',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
};
