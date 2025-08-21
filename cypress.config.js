const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");
const { tasksRegistry } = require("./cypress/utils/tasksRegistry");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      allureWriter(on, config);
      tasksRegistry(on); 

      return config;
    },
    env: {
      allure: true
    },
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/**/*.feature",
  },
});