import { Expect, Page, test } from "@playwright/test"
import { openSitePage, openSearchSite, openDetailSite, openEditSite, openAddSite } from "./sitePage"

test.use({
  storageState: './storage/hotelbaru3.json',
});

test('Open Site Page and Search', async ({ page }) => {

    await openSitePage(page);
    console.log('Site page opened successfully.');

    await openSearchSite(page);
    console.log('Search site opened successfully.');

    await openDetailSite(page);

    await openEditSite(page);

    await openAddSite(page); 




    await page.context().storageState({ path: './storage/hotelbaru3.json' }); 


})
