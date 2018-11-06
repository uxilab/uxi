module.exports = {
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/uxi-cli/jest.transform.js',
  },
  rootDir: '../../',
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  setupFiles: [
    '<rootDir>/node_modules/uxi-cli/jest.setup.js',
  ],
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
};
