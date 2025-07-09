import {test,expect} from '@playwright/test';

test.describe('Vlepo Login Tests', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('https://staging.vlepo.id');
  });
}); 

//   test('should display login form', async ({page}) => {
//     await expect(page.locator('form#loginForm')).toBeVisible();
//     await expect(page.locator('input[name="email"]')).toBeVisible();
//     await expect(page.locator('input[name="password"]')).toBeVisible();
//   });

//   test('should login with valid credentials', async ({page}) => {
//     await page.fill('input[name="email"]', '

//     }); 