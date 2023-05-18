const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    "excludeSpecPattern": ['**/1-getting-started/*','**/2-advanced-examples/*'],
    "chromeWebSecurity": false,
    "watchForFileChanges": false,
    "exprimentalSessionSupport": true,
    testIsolation: false,
      setupNodeEvents(on, config) {
          // on('file:preprocessor', webpackPreprocessor);
          allureWriter(on, config);
          return config;
      }
  }
});
