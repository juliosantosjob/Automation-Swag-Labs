import trelloSchemas from "../schemas/trello-schema";

Given("que eu faca uma requisicao GET na api.trello passando o id {string}", (actionId) => {
    cy.getTrelloList(actionId).then((res) => {
        cy.wrap(res).as("response");
    });
});

Then("o status code da resposta deve ser {int}", (statusCode) => {
    cy.get("@response").then((res) => {
        expect(res.status).to.equal(statusCode);
    });
});

And("a resposta deve seguir o schema {string}", (schemaName) => {
    cy.get("@response").then((res) => {
        expect(res.body).to.be.jsonSchema(trelloSchemas[schemaName]);
    });
});

And("deve exibir o nome da lista no console", () => {
    cy.get("@response").then((res) => {
        cy.log(`Nome da lista: ${res.body.data.list.name}`);
        console.log(`Nome da lista: ${res.body.data.list.name}`);
    });
});