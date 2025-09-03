import page from "../../../../pages-instance";
import items from "../../../fixtures/itens";

let randomProduct;

const getRandomProduct = () => {
    const randomIndex = Math.floor(Math.random() * items.productList.length);
    return items.productList[randomIndex];
};

before(() => randomProduct = getRandomProduct());

Then("exibe a lista de produtos na home do site", () => {
    items.productList.forEach((item) => page.home.displayProductList(item));
});

When("ele adiciona o produto ao carrinho", () => {
    page.home.addProductToCart(randomProduct);
});

When("vai para a tela do carrinho", () => {
    page.home.goToCart();
});

When("remove o produto do carrinho", () => {
    page.home.removeProductFromCart(randomProduct);
});

When("o produto aparece no carrinho", () => {
    page.home.productsOnCart(randomProduct);
});

Then("o carrinho esta vazio", () => {
    page.home.cartIsEmpty();
});

When("faz o checkout", () => {
    page.home.doCheckout();
});

When("preenche o formulario de usuario", () => {
    page.home.formUser(Cypress.env("currentUser"));
});

When("visualiza o resumo do pedido", () => {
    page.home.validadeCheckoutOverview(randomProduct);
});

When("optar por continuar comprando", () => {
    page.home.continueShopping();
});

Then("finaliza a compra", () => {
    page.home.finishPurchase();
});

Then("ele ve a mensagem {string}", (mensagem) => {
    page.home.validateMessage(mensagem);
});