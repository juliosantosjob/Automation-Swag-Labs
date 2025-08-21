const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      allureWriter(on, config);

      return config;
    },
    env: {
      allure: true
    },
    specPattern: "cypress/e2e/**/**/*.feature",
  },
});