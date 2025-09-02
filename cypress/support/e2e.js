import "./api.cmd";
import "./e2e.cmd";

import "cypress-plugin-api";
import "@shelex/cypress-allure-plugin";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import chaiJsonSchema from "chai-json-schema";
chai.use(chaiJsonSchema);

before(() => cy.task("deleteFolder", "cypress/screenshots"));

afterEach(() => {
    if (Cypress.spec.relative.includes("ui")) {
        cy.screenshot();
    }
});