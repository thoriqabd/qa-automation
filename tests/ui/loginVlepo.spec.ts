import { expect, test } from "@playwright/test";
import { superadminLogin, selectSite } from "../../page/loginPage";
import { getUserRole } from "../../utils/userRole";

test('Vlepo Superadmin Login', async ({ page }) => {
    // declare superadmin / admin 
    const superadmin = getUserRole('superadmin');
    // const admin = getUserRole('admin');

    // declare superadmin / admin credentials 
    await superadminLogin(page, superadmin);
    // await superadminLogin(page, admin);
    console.log('Login submitted...');

    // Command this if you want to use admin role 
    await selectSite(page, 'HOTEL BARU 3');
    console.log('Selected Hotel Baru 3 from the dropdown...');

    await page.context().storageState({ path: './storage/hotelbaru3.json' }); 
})