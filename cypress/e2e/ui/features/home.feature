# language:pt

  @ui @regression
  Funcionalidade: Funcionalidade Home
    Como um usuário
    Eu quero interagir com a Home
    Para adicionar produtos, finalizar compras e validar o fluxo

    Contexto:
      Dado o login com o usuario "standard_user"

    @viewProducts
    Cenario: Visualiza lista de produtos apos login
      Entao a lista de produtos e exibida corretamente

    @addProducts
    Cenario: Adicionar produto ao carrinho
      Quando ele adiciona o produto ao carrinho
      E vai para a tela do carrinho
      Entao o produto aparece no carrinho

    @removeProducts
    Cenario: Remover produto do carrinho
      Quando ele adiciona o produto ao carrinho
      E vai para a tela do carrinho
      E remove o produto do carrinho
      Entao o carrinho esta vazio

    @doPurchase
    Cenario: Finalizar compra com sucesso
      Quando ele adiciona o produto ao carrinho
      E vai para a tela do carrinho
      E faz o checkout
      E preenche o formulario de usuario
      E visualiza o resumo do pedido
      E finaliza a compra
      Entao ele ve a mensagem "Thank you for your order!"