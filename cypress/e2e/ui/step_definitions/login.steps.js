import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

import page from "../../../../pages-instance";
import users from "../../../fixtures/users";

Given("que o usuario esta na pagina de login", () => {
    page.login.openLoginPage();
});

When("informa credenciais validas", () => {
    page.login.fillCredents(users.standard_user);
    page.login.submit();
});

When("ele informa o {string} e {string}", (user, senha) => {
    page.login.fillCredents({ username: user, password: senha });
    page.login.submit();
});

When("o login com o usuario {string}", (nomeUsuario) => {
    page.login.openLoginPage();
    page.login.fillCredents(users[nomeUsuario]);
    page.login.submit();
});

Then("deve visualizar a pagina inicial logado", () => {
    page.login.atHome();
});

Then("ele visualiza a seguinte mensagem de erro: {string}", (mensagem) => {
    page.login.verifyError(mensagem);
});

