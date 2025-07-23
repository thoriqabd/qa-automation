// Script for Switching Site in Vlepo
import {Page, expect } from '@playwright/test';

/**
 * Switch active site in Vlepo
 * 
 * @param page - Playwright page object
 * @param siteName - Name of the site to switch to
 */ 

// export as a function to be used in other tests
export async function switchSite(page : Page, siteName: string) {
    // Click on the site selection dropdown
    await page.locator('span.select2-selection__rendered[role="textbox"]').nth(0).click();
    const options = page.locator('li.select2-results__option').filter({ hasText: siteName });
    await options.waitFor({ state: 'visible', timeout: 100000 });
    await options.click();
    await expect(page).toHaveURL(/.*\/home/, {timeout: 5000});
    console.log(`Switched to site: ${siteName}`); 

    // Optionally, you can verify that the site has been switched successfully
    // await expect(page).toHaveURL(/.*\/home/, {timeout: 5000});
} 