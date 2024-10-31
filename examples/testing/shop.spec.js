import { test, expect } from '@playwright/test';
import { loginPage } from '../../framework/loginPage.page';

    test.beforeEach(async ({ page }) => {
        await loginPage(page).login('standard_user', 'secret_sauce');
    })

    test.only('Зайти на сайт', async ({ page }) => {
        await expect(page.locator('[data-test="title"]')).toBeVisible();
      });