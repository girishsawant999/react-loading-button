const config = {
  testRegex: '\\.test\\.js$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/__tests__/helpers/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};

module.exports = config;
