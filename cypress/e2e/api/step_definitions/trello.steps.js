import trelloSchemas from "../schemas/trello-schema";

Given("que eu faca uma requisicao GET na api.trello passando o id {string}", function (actionId) {
    cy.getTrelloList(actionId).then((res) => cy.wrap(res).as("response"));
});

Then("o status code da resposta deve ser {int}", function (statusCode) {
    expect(this.response.status).to.equal(statusCode);
});

Then("a resposta deve seguir o schema {string}", function (schemaName) {
    expect(this.response.body).to.be.jsonSchema(trelloSchemas[schemaName]);
});

Then("deve exibir o nome da lista no console", function () {
    cy.log(`Nome da lista: ${this.response.body.data.list.name}`);
});