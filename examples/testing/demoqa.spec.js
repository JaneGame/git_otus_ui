import { test, expect } from '@playwright/test';


    test.beforeEach(async ({ page }) => {
        await page.goto('https://demoqa.com/');
    })

    test('Зайти в набор "Text Box"', async ({ page }) => {    
        await page.getByText('Elements').click();
        await expect(page.locator('li').filter({ hasText: 'Text Box' })).toBeVisible();
      });
      
      
    test('Заполнить форму', async ({ page }) => {
        await page.locator('path').first().click();
        await expect(page.locator('li').filter({ hasText: 'Text Box' })).toBeVisible();
        await page.getByText('Text Box').click();
        await page.getByPlaceholder('Full Name').click();
        await page.getByPlaceholder('Full Name').fill('Jane');
        await page.getByPlaceholder('name@example.com').click();
        await page.getByPlaceholder('name@example.com').fill('ganefff@mail.ru');
        await page.getByPlaceholder('Current Address').click();
        await page.getByPlaceholder('Current Address').fill('Abrakadabra');
        await page.locator('#permanentAddress').click();
        await page.locator('#permanentAddress').fill('Abrakadabra2');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.getByText('Name:JaneEmail:ganefff@mail.')).toBeVisible();
        });
      
    test('Перейти в онлайн-тренинг', async ({ page }) => {
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Selenium Online Training' }).click();
        const page1 = await page1Promise;
        await expect(page1.getByText('Selenium Certification Training | Enroll Now | Study Online')).toBeVisible();
        });

    test('Найти книгу', async ({ page }) => {
        await page.getByRole('heading', { name: 'Book Store Application' }).click();
        await page.getByPlaceholder('Type to search').click();
        await page.getByPlaceholder('Type to search').fill('git');
        await expect(page.getByRole('gridcell', { name: 'Git Pocket Guide' }).first()).toBeVisible();
        });

    test('Перейти между вкладками с упражнениями', async ({ page }) => {
        await page.getByText('Elements').click();
        await page.locator('span').filter({ hasText: 'Forms' }).locator('div').first().click();
        await expect(page.locator('li').filter({ hasText: 'Practice Form' })).toBeVisible();
        });