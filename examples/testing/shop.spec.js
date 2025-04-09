import { test } from '@playwright/test';
import { loginPage } from '../../framework/loginPage.page';
import { startPage } from '../../framework/startPage.page';
import { itemCartPage } from '../../framework/itemCartPage.page';
import { cardPage } from '../../framework/cardPage.page';

    test.beforeEach(async ({ page }) => {
        await loginPage({ page }).login('standard_user', 'secret_sauce');
    })

    test('Зайти на сайт', async ({ page }) => {
        await startPage({ page }).expextPage();
      });

    test('Положить товар в корзину', async ({ page }) => {
        await startPage({ page }).openItemInfo('Sauce Labs Backpack');
        await itemCartPage({ page }).addToCartItem();
        await itemCartPage({ page }).cardIcon();
        await cardPage({ page }).waitCard();
        await cardPage({ page }).viewItem('Sauce Labs Backpack');
    });

    test('Выложить товар из корзины', async ({ page }) => {
        await startPage({ page }).openItemInfo('Sauce Labs Backpack');
        await itemCartPage({ page }).addToCartItem();
        await itemCartPage({ page }).backToProducts();
        await startPage({ page }).openItemInfo('Sauce Labs Bike Light');
        await itemCartPage({ page }).addToCartItem();
        await itemCartPage({ page }).cardIcon();
        await cardPage({ page }).waitCard();
        await cardPage({ page }).viewItem('Sauce Labs Backpack');
        await cardPage({ page }).removeItem();
        await cardPage({ page }).counterItem(1);
    });

    test('Продолжить оформлять заказ в магазине', async ({ page }) => {
        await startPage({ page }).openItemInfo('Sauce Labs Backpack');
        await itemCartPage({ page }).addToCartItem();
        await itemCartPage({ page }).cardIcon();
        await cardPage({ page }).waitCard();
        await cardPage({ page }).viewItem('Sauce Labs Backpack');
        await cardPage({ page }).continueShopping();
        await startPage({ page }).expextPage();
    });

    test('Выйти из магазина', async ({ page }) => {
        await startPage({ page }).exitShop();

        await loginPage({ page }).waitLoginInButton();
    });
