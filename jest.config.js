module.exports = {
  "preset": '@vue/cli-plugin-unit-jest/presets/no-babel',
  "moduleFileExtensions": [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  "transform": {
    // process `*.vue` files with `vue-jest`
    ".*\\.(vue)$": "vue-jest"
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  "setupFiles": ["<rootDir>/tests/unit/index.js"],
}
