//test/vlepoLogin.ts
//Description : Script untuk login sebagai superadmin di Vlepo 

import {test,expect} from '@playwright/test';

test('Vlepo Superadmin Login', async ({page}) => {
  // Navigate to Vlepo Staging URL
  await page.goto('https://staging.vlepo.id');

  // Input email and password
  await page.fill('input[name="email"]', 'ihwanu.thoriq@varnion.net.id')
  await page.fill('input[name="password"]', 'password');

  //Click login button
  await page.click('button[type="submit"]');
  
  // Wait for navigation to dashboard
  await page.waitForURL('https://staging.vlepo.id/home', {timeout: 10000});
  await page.waitForSelector('text=Dashboard', {timeout: 10000});

  // Save the session storage state
  await page.context().storageState({path: 'superadmin.json'}); 
});
