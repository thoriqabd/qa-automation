import { expect, test } from "@playwright/test";
import { superadminLogin, selectSite } from "../../page/loginPage";
import { getUserRole } from "../../utils/userRole";

test('Vlepo Superadmin Login', async ({ page }) => {
    const superadmin = getUserRole('superadmin');

    await superadminLogin(page, superadmin);
    console.log('Login submitted...');

    await selectSite(page, 'HOTEL BARU 3');
    console.log('Selected Hotel Baru 3 from the dropdown...');

    await page.context().storageState({ path: './storage/hotelbaru3.json' }); 
})