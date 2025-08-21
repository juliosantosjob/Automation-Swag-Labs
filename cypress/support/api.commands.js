const { HOST_API } = Cypress.env();

/**
 * Comando exibir o conteúdo do campo “name” da estrutura “list”
 * 
 * @param {string} actionId 
 */

Cypress.Commands.add("getTrelloList", (actionId) => {
    cy.api({
        method: "GET",
        url: `${HOST_API}/1/actions/${actionId}`
    })
});