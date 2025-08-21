# language:pt

@ui @regression
Funcionalidade: Login de usuario
    Como um usuario
    Eu quero fazer login no sistema
    Para acessar minhas funcionalidades

    Contexto:
        Dado que o usuario esta na pagina de login

    @loginSuccess
    Cenario: Login com sucesso
        Quando informa credenciais validas
        Entao deve visualizar a pagina inicial logado

    # @invalidLogin
    # Esquema do Cenario: Login com dados invalidos
    #     Quando ele informa o "<username>" e "<senha>"
    #     Entao ele visualiza a seguinte mensagem de erro: "<mensagem>"

    #     Exemplos:
    #         | username        | senha        | mensagem                                                                  |
    #         | invalid_user    | test_psw     | Epic sadface: Username and password do not match any user in this service |
    #         | valid_user      | invalid_psw  | Epic sadface: Username and password do not match any user in this service |
    #         |                 | test_psw     | Epic sadface: Username is required                                        |
    #         | valid_user      |              | Epic sadface: Password is required                                        |
    #         |                 |              | Epic sadface: Username is required                                        |
    #         | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |

    # Cenario: Steps de suporte a autenticacao
    #     Dado o login com o usuario "standard_user"