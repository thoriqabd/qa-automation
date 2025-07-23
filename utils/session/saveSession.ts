// Function for saving the session state
import { Page } from "@playwright/test";
import fs from 'fs';
import path from 'path';

/**
 * save the current session to a JSON file
 * @param page - Playwright page object
 * @param siteName - Name of the site to save the session
 * @returns fill path of the saved session file
 */ 

export async function saveSession(page: Page, siteName: string){
    const storageDir = path.resolve(__dirname,'../../storage'); 
    const filename = siteName.replace(/\s+/g, '').toLowerCase();
    const filepath =path.join(storageDir, `${filename}.json`);
    await page.context().storageState({path: filepath});

    // Ensure the storage directory exists
    if (!fs.existsSync(storageDir)) {
        fs.mkdirSync(storageDir, {recursive: true}); 
    }

    await page.context().storageState({path: filepath});
    console.log(`Session saved to: ${filepath}`);

    return filepath;
}