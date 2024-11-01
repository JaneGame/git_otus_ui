import { expect } from "playwright/test";

export function startPage ({ page }) {

    const selectors = {
        namePage: '[data-test="title"]',
        item: '[data-test="inventory-item-name"]',
        logout: '[data-test="logout-sidebar-link"]',
    }


    const nameField = page.locator(selectors.namePage, { hasText: 'Products' });
    const logoutButton = page.locator(selectors.logout);
    const menu = page.getByRole('button', { name: 'Open Menu' });

    return {
        async expextPage() {
            await expect(nameField).toBeVisible();
        },

        async openItemInfo(itemName) {
            await page.locator(selectors.item, { hasText: `${itemName}` }).click();
        }, 

        async exitShop() {
            await menu.click();
            await logoutButton.click();
        }
    };
}