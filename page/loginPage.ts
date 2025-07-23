import { loginSelectors } from "../utils/selectors";
import { expect } from "@playwright/test";
import { Page } from "@playwright/test";
import { UserCredentials } from "../utils/defaultUser";

export async function superadminLogin(page : Page, credentials : UserCredentials) {
    await page.goto('');
    await expect(page).toHaveURL(' ');
    console.log('Navigated to Vlepo Staging URL...');
    
    await loginSelectors.email(page).fill(credentials.email);
    await loginSelectors.password(page).fill(credentials.password);
    await loginSelectors.loginButton(page).click();
    console.log('Login submitted...'); 
    
    await page.waitForURL('**/home', {timeout: 60000});
    // await expect(loginSelectors.dashboardTitle(page));
}

export async function selectSite(page : Page, siteName : string) {
    await loginSelectors.siteLogto(page).click();
    await page.waitForSelector('li.select2-results__option', {timeout: 60000});
    await loginSelectors.siteDropdown(page, siteName).click();
    await page.waitForURL('/home', {timeout: 60000}); 
}



