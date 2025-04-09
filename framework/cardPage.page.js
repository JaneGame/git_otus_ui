import { expect } from "playwright/test";

export function cardPage ({ page }) {

    const selectors = {
        pageName: '[data-test="title"]',
        item: '[data-test="inventory-item-name"]',
        removeProduct: '[data-test="remove-sauce-labs-backpack"]',
        continue: '[data-test="continue-shopping"]',

    }


    const infoPage = page.locator(selectors.pageName, { hasText: 'Your Cart' });
    
    const removeProduct = page.locator(selectors.removeProduct);

    const continueButton = page.locator(selectors.continue);



    return {
        async waitCard() {
            await expect(infoPage).toBeVisible();
        },

        async viewItem(itemName) {
            const item = page.locator(selectors.item, { hasText: `${itemName}` });
            await expect(item).toBeVisible();
        },  

        async removeItem() {
            await removeProduct.click();
        },

        async counterItem(number = 1) {
            const item = page.locator(selectors.item);
            const cart = await item.all();
            await expect(cart.length).toBe(number);
        },

        async continueShopping() {
            await continueButton.click();
        }
    };
}