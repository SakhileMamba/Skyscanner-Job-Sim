module.exports = {
    transform: {},
    transformIgnorePatterns: [
        '/node_modules/(?!(BpkCalendar)/)'
    ],
    moduleNameMapper: {},
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
  };