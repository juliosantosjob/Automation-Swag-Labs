import "./api.commands";
import "./e2e.commands";

import "cypress-plugin-api";
import "@shelex/cypress-allure-plugin";

afterEach(() => {
  if (Cypress.spec.relative.includes("ui")) {
    cy.screenshot();
    cy.allure().attachment("Screenshot", `screenshots/**.png`, "image/png");
  }
});