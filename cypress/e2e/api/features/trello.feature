# language:pt

    @api @regression
    Funcionalidade: Validação da API do Trello
        Como um QA
        Quero realizar uma requisicao no endpoint api.trello
        Para validar a aplicacao

        @getList
        Cenario: Obter o nome da lista de uma acao
            Dado que eu faca uma requisicao GET na api.trello passando o id "592f11060f95a3d3d46a987a"
            Entao o status code da resposta deve ser 200
            E deve exibir o nome da lista no console