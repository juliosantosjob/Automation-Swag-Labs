# language:en

@ui @regression
Feature: Login de usuario
    Como um usuario
    Eu quero fazer login no sistema
    Para acessar minhas funcionalidades

    Background:
        Given que o usuario esta na pagina de login

    @loginSuccess
    Scenario: Login com sucesso
        When informa credenciais validas
        Then deve visualizar a pagina inicial logado

    @invalidLogin
    Scenario Outline: Login com dados invalidos
        When ele informa o "<username>" e "<senha>"
        Then ele visualiza a seguinte mensagem de erro: "<mensagem>"

        Examples:
            | username        | senha        | mensagem                                                                  |
            | invalid_user    | test_psw     | Epic sadface: Username and password do not match any user in this service |
            | valid_user      | invalid_psw  | Epic sadface: Username and password do not match any user in this service |
            |                 | test_psw     | Epic sadface: Username is required                                        |
            | valid_user      |              | Epic sadface: Password is required                                        |
            |                 |              | Epic sadface: Username is required                                        |
            | locked_out_user | secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |

    Scenario: Steps de suporte a autenticacao
        Given o login com o usuario "standard_user"