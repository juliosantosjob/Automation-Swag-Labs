import page from "../../../../pages-instance";
import items from "../../../fixtures/itens";

Then("a lista de produtos e exibida corretamente", () => {
    items.productList.forEach((item) => page.home.displayProductList(item));
});

When("ele adiciona o produto ao carrinho", () => {
    page.home.addProductToCart(items.productList[0]);
});

And("vai para a tela do carrinho", () => {
    page.home.goToCart();
});

And("remove o produto do carrinho", () => {
    page.home.removeProductFromCart(items.productList[0]);
});

And("o produto aparece no carrinho", () => {
    page.home.productsOnCart(items.productList[0]);
});

And("o carrinho esta vazio", () => {
    page.home.cartIsEmpty();
});

And("faz o checkout", () => {
    page.home.doCheckout();
});

And("preenche o formulario de usuario", () => {
    page.home.formUser(Cypress.env("currentUser"));
});

And("visualiza o resumo do pedido", () => {
    page.home.validadeCheckoutOverview(items.productList[0]);
});

And("finaliza a compra", () => {
    page.home.finishPurchase();
});

Then("ele ve a mensagem {string}", (mensagem) => {
    page.home.validateMessage(mensagem);
});