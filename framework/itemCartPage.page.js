export function itemCartPage ({ page }) {

    const selectors = {
        add: '[data-test="add-to-cart"]',
        card: '[data-test="shopping-cart-link"]',
        backPage: '[data-test="back-to-products"]',
    }


    const addToCart = page.locator(selectors.add);
    const cardIcon = page.locator(selectors.card);
    const backPageButton = page.locator(selectors.backPage);

    return {
        async addToCartItem() {
            await addToCart.click();
        },

        async cardIcon() {
            await cardIcon.click();
        },  

        async backToProducts() {
            await backPageButton.click();
        }
        
    };
}