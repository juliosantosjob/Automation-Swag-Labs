require("dotenv").config();

const { defineConfig } = require("cypress");
const { tasksRegistry } = require("./cypress/utils/tasksRegistry");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on("file:preprocessor", cucumber());
            allureWriter(on, config);
            tasksRegistry(on);

            return config;
        },
        env: { 
            allure: true,
            HOST_WEB: process.env.HOST_WEB,
            HOST_API: process.env.HOST_API
        },
        supportFile: "cypress/support/e2e.js",
        specPattern: "cypress/e2e/**/**/*.feature",
    },
});