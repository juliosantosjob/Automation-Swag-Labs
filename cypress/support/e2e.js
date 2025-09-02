import "./api.cmd";
import "./e2e.cmd";

import "cypress-plugin-api";
import "@shelex/cypress-allure-plugin";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import chaiJsonSchema from "chai-json-schema";
chai.use(chaiJsonSchema);

const isUiSpec = Cypress.spec.relative.includes("ui");

before(() => {
  if (isUiSpec) {
    cy.task("deleteFolder", "cypress/screenshots");
  }
});

afterEach(() => {
  if (isUiSpec) {
    cy.screenshot();
  }
});