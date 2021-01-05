module.exports = {
  roots: ['<rootDir>/test'],
  preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.(t|j)sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
}
