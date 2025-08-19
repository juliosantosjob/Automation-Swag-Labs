# language:en

@ui @regression
Feature: Funcionalidade Home
  Como um usuário
  Eu quero interagir com a Home
  Para adicionar produtos, finalizar compras e validar o fluxo

  Background:
    Given o login com o usuario "standard_user"

  @viewProducts
  Scenario: Visualiza lista de produtos apos login
    Then a lista de produtos e exibida corretamente

  @addProducts
  Scenario: Adicionar produto ao carrinho
    When ele adiciona o produto ao carrinho
    And vai para a tela do carrinho
    Then o produto aparece no carrinho

  @removeProducts
  Scenario: Remover produto do carrinho
    When ele adiciona o produto ao carrinho
    And vai para a tela do carrinho
    And remove o produto do carrinho
    Then o carrinho esta vazio

  @doPurchase
  Scenario: Finalizar compra com sucesso
    When ele adiciona o produto ao carrinho
    And vai para a tela do carrinho
    And faz o checkout
    And preenche o formulario de usuario
    And visualiza o resumo do pedido
    And finaliza a compra
    Then ele ve a mensagem "Thank you for your order!"