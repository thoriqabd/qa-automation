import { test, expect } from '@playwright/test';
import { openDashboard, openLiveTvChannel, openSearchField, paginationTest, detailButton } from './liveTvPage';
import { randomItem, randomsTitle } from './randomData';
import { liveTvChannelSelectors } from "../../utils/selectors"
import { title } from 'process';

test.use({
  storageState: './storage/hotelbaru3.json',
});

test('open Live TV Channel', async ({page})=> {
    await openDashboard(page);
    await openLiveTvChannel(page);
    await page.waitForTimeout(1000); // Wait for the page to load
    await openSearchField(page);
    await expect(liveTvChannelSelectors.titleInput(page)).toBeVisible();

    for (let i = 0; i < 3; i++) {
      const title = randomItem(randomsTitle);
    // const title = 'Elshinta'; // Example title, replace with randomItem(randomsTitle) if needed

      const responsePromise = page.context().waitForEvent('response', res =>
        res.url().includes('/live/all') && res.status() === 200);

      await Promise.all([
        liveTvChannelSelectors.titleInput(page).fill(title),
        liveTvChannelSelectors.searchSubmitButton(page).click(),
        responsePromise
      ]);
    
      const response = await responsePromise;
      const json = await response.json();
      console.log(`Loop #${i + 1} — Judul "${title}" → Result:`, json);

      await liveTvChannelSelectors.titleInput(page).fill('');
      await liveTvChannelSelectors.searchSubmitButton(page).click() // Clear the input for the next iteration
      await page.waitForTimeout(1000); // Wait for the search results to update      
} 
  
    await paginationTest(page);
    console.log('Pagination test completed successfully.');

    await detailButton(page, 'Detail'); 





    await page.context().storageState({path: './storage/hotelbaru3.json'}); 
});