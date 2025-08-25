import "./api.cmd";
import "./e2e.cmd";

import "cypress-plugin-api";
import "@shelex/cypress-allure-plugin";

afterEach(() => {
    if (Cypress.spec.relative.includes("ui")) {
        cy.screenshot();
    }
});