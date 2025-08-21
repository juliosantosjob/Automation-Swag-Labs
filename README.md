# Projeto de automação de testes com cypress para a aplicação Swag Labs


Este projeto tem como objetivo demonstrar minhas habilidades em automação de testes utilizando Cypress. O projeto contem testes validando a camada frontend e backend. Os testes estão localizados em `cypress/e2e`. 


- Os testes de API estão localizados no caminho `cypress/e2e/api`. 

- Os testes de ui estão localizados no caminho `cypress/e2e/ui`.


Para executar o projeto, siga atentamente as instruções a seguir:


## Instalação das dependências

Tenha instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/pt) <br>
- [Visual Studio Code](https://code.visualstudio.com/download) <br>
- [Git](https://git-scm.com/downloads) <br>
- [Allure Report](https://allurereport.org/)

## Instalação

1. Clone o repositório do projeto utilizando o comando a baixo:

```
git clone https://github.com/juliosantosjob/Automation-Swag-Labs.git
```

2. Acesse a pasta do projeto:

```
cd Automation-Swag-Labs
```

3. Estando no diretório `Automation-Swag-Labs`, instale as dependências executando o comando:

```
npm install
```

## Execução dos testes

Antes de executar os testes, crie um arquivo `.env` na raiz do projeto.
- Na variável `HOST_WEB`, coloque a URL da aplicação [Sauce Demo](https://www.saucedemo.com)
- Na variável `HOST_API`, coloque a URL da [API Trello](https://api.trello.com)
Você pode usar o arquivo `.env.example`, que está na raiz do projeto, como referência.

<br>

Para executar os testes basta rodar o seguinte comando:

```
npm run test
```

## Relatório de testes

Foi integrado ao projeto o Allure Report para gerar o relatório das execuções. Se quiser visualizar os testes executados na pipeline pode acessar este [link](https://juliosantosjob.github.io/Automation-Swag-Labs). Para gerar o relatório de testes localmente basta rodar o seguinte comando:

```
npm run allure:test
```

## Considerações finais

O projeto demonstra minhas habilidades em automação de testes com Cypress e pode ser expandido conforme a necessidade.

## Contato

Qualquer dúvida sobre o projeto, estou à disposição:


[![Email](https://img.shields.io/badge/Email-%23D14836.svg?logo=gmail&logoColor=white)](mailto:julio958214@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/julio-santos-43428019b)