import { selectors } from "@playwright/test";

export async function loginPage ({ page }) {

    const url = 'https://www.saucedemo.com/';

    const selectors = {
        username: '[data-test="username"]',
        password: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
    }

    const nameField = page.locator(selectors.username);
    const passwordField = page.locator(selectors.password);
    const loginInButton = page.locator(selectors.loginButton);

    return {
        async login(name, pass) {
            await page.goto(url);
            await nameField.fill(name);
            await passwordField.click();
            await passwordField.fill(pass);
            await loginInButton.click();
    }}

}