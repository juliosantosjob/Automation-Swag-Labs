import "cypress-plugin-api";
import "@shelex/cypress-allure-plugin";
import chaiJsonSchema from "chai-json-schema";
import { Given, When, Then, Before } from "cypress-cucumber-preprocessor/steps";

import "./api.cmd";
import "./e2e.cmd";

chai.use(chaiJsonSchema);

Before(() => cy.task("deleteFolder", "cypress/screenshots"));

afterEach(() => {
    if (Cypress.spec.relative.includes("ui")) {
        cy.screenshot();
    }
});