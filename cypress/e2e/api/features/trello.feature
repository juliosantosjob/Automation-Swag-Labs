# language: en

@api @regression
Feature: Validação da API do Trello
    Como um QA
    Quero realizar uma requisicao no endpoint api.trello
    Para validar a aplicacao

    @getList
    Scenario: Obter o nome da lista de uma acao
        Given que eu faca uma requisicao GET na api.trello passando o id "592f11060f95a3d3d46a987a"
        Then o status code da resposta deve ser 200
        And deve exibir o nome da lista no console
