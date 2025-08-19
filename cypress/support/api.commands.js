/**
 * Comando exibir o conteúdo do campo “name” da estrutura “list”
 * 
 * @param {string} actionId 
 */

Cypress.Commands.add("getTrelloList", (actionId) => {
    cy.api({
        method: "GET",
        url: `https://api.trello.com/1/actions/${actionId}`
    })
});