import {expect, Page} from "@playwright/test"
import { siteSelectors } from "../../selector/selectors";


export async function openSitePage(page: Page) {
    await page.goto('/site');
    await expect(page).toHaveURL('/site', { timeout: 10000 });
}

export async function openSearchSite(page: Page) {
    await siteSelectors.searchButton(page).click();
    await expect(siteSelectors.siteName(page)).toBeVisible();
}

export async function openDetailSite(page: Page) {
    await siteSelectors.siteDetail(page).click();
    await siteSelectors.siteBack(page).click(); 
}

export async function openEditSite(page: Page) {
    await siteSelectors.siteEdit(page).click();
    await siteSelectors.siteBack(page).click(); 
}

export async function openAddSite(page: Page) {
    await siteSelectors.siteAdd(page).click();
    await siteSelectors.siteBack(page).click(); 
}