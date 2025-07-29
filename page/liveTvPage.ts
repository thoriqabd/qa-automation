import {liveTvChannelSelectors, 
    paginationSelectors, 
    liveTvDetailsSelectors,
    siteSelectors,
    addChannelSelectors} from "../selector/selectors";
import {expect, Page} from "@playwright/test";
import {randomItem} from "../utils/data/randomData";
import { time } from "console";


export async function openDashboard (page : Page){
    await page.goto ('/home');
    await expect(page).toHaveURL('/home', {timeout: 10000});
}

export async function openLiveTvChannel (page : Page){
    await liveTvChannelSelectors.liveTvMenu(page).click();
    await expect(page).toHaveURL('/live/toggle', {timeout: 10000});
}

export async function openSearchField (page : Page){
    await liveTvChannelSelectors.searchButton(page).click();
    await expect(liveTvChannelSelectors.titleInput(page)).toBeVisible();
}

export async function paginationTest (page : Page) {
    await expect (paginationSelectors.paginationContainer(page)).toBeVisible();

    await expect (paginationSelectors.paginationFirst(page)).toBeVisible();
    await expect (paginationSelectors.paginationLast(page)).toBeVisible();

    const nextButton = paginationSelectors.paginationNext(page);
    const beforeButton = paginationSelectors.paginationBefore(page);
    await expect(nextButton).toBeEnabled();
    await nextButton.click(); 

    const response = await page.waitForResponse(response => 
        response.url().includes('/live/all') && response.status() === 200
    )
    const json = await response.json();

    expect(json.data.current_page).toBe(2);
    expect(json.data.data.length).toBeGreaterThanOrEqual(10);

    // await paginationSelectors.paginationFirst(page).click();
    // await paginationSelectors.paginationLast(page).click();
    // await paginationSelectors.paginationBefore(page).click();
    // await paginationSelectors.paginationNext(page).click(); 
}

export async function detailButton (page : Page, title : string){
    await liveTvDetailsSelectors.detailButton(page).nth(0).click();
    await siteSelectors.siteBack(page).click();
    
    await liveTvDetailsSelectors.editButton(page).nth(0).click();
    await siteSelectors.siteBack(page).click();

    await liveTvDetailsSelectors.editCategoryButton(page).nth(0).click();
    await siteSelectors.siteBack(page).click();
     
}

export async function addChannel (page: Page){
    await addChannelSelectors.addChannelButton(page).click();
    await addChannelSelectors.inputName(page).fill(randomItem(['Channel A', 'Channel B', 'Channel C']));
    await page.waitForTimeout(1000); // Wait for the input to be filled
    await addChannelSelectors.inputCategory(page).fill(randomItem(['News', 'Sports', 'Entertainment']));
    await page.waitForTimeout(1000); // Wait for the input to be filled
    await addChannelSelectors.logoUpload(page).setInputFiles('./assets/peng.png'); 
}

    

