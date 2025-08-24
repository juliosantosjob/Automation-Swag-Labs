import { ELM_LOGIN } from "../elements/login.elements.js";
const { HOST_WEB } = Cypress.env();

class LoginPage {

    openLoginPage() {
        cy.visit(HOST_WEB);
        cy.contains(ELM_LOGIN.field.loginLogo, ELM_LOGIN.text.title)
            .should("be.visible");
    }

    fillCredents(user) {
        Cypress.env("currentUser", user);
        cy.typeOrClear(ELM_LOGIN.input.username, user.username);
        cy.typeOrClear(ELM_LOGIN.input.password, user.password);
    }

    submit() {
        cy.get(ELM_LOGIN.button.submit).click();
    }

    doLogout() {
        cy.get(ELM_LOGIN.button.burgerMenu).click();
        cy.get(ELM_LOGIN.button.logout).click();
    }

    atHome() {
        cy.contains(ELM_LOGIN.field.titleProducts, ELM_LOGIN.text.products)
            .should("be.visible");
    }

    verifyError(message) {
        cy.contains(ELM_LOGIN.field.msgError, message)
            .should("be.visible");
    }
}

export default new LoginPage();