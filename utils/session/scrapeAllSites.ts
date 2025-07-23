// Script to scrape all sites in Vlepo

import {chromium, expect} from '@playwright/test';
import * as dotenv from 'dotenv';
import {saveSession} from './saveSession';
import {getUserRole} from '../../utils/userRole';
import {switchSite} from './switchSite'; 

dotenv.config();

(async () => {
    // Launch browser
    console.log('Launching browser...'); 
    const browser = await chromium.launch({
        channel: 'chrome',
        headless: true,
    });
    console.log('opening new browser context...'); 
    const context = await browser.newContext();
    const page = await context.newPage();


    // Login to Vlepo using superadmin credentials 
    console.log('Navigating to Vlepo...'); 
    const baseUrl = process.env.BASE_URL || 'https://staging.vlepo.id/';
    await page.goto(baseUrl);
    
    const superadmin = getUserRole('superadmin'); 
    if (!superadmin.email || !superadmin.password) {
        throw new Error('Superadmin Tidak ditemukan');
    }
    console.log('Credentials Loaded:', superadmin);
    
    await page.fill('input[name="email"]', superadmin.email);
    await page.fill('input[name="password"]', superadmin.password);
    await page.click('button[type="submit"]');
    console.log('login submitted..');
    
    await page.waitForURL('**/home', {timeout: 60000});
    console.log('Login successful, waiting for dashboard...');
    
    await page.waitForSelector('text=Dashboard', {timeout: 60000});
    console.log('Dashboard Loaded.');

    // Get all site names from the dropdown 
    await page.getByRole('textbox', { name: 'Original Account' }).click();
    await page.waitForSelector('li.select2-results__option', {timeout: 60000});
    console.log('Opened Site dropdown...');

    const siteToSkip = [
        'Original Account',
        'Varnion Hotel',
        'VLEPO',
        'Jangan Dihapus',
        'sssssss',
        '──────────',
        'Love hotel'
    ];

    const siteNames = await page.$$eval(
        'li.select2-results__option',
        (options, skip) =>
            options
                .map(option => option.textContent?.trim() || '')
                .filter(text => text && !skip.includes(text)),
        siteToSkip 
    );

    console.log(`Available Sites ${siteNames.length} site(s):`, siteNames);

    for (const site of siteNames) {
        if (site === 'Original Account') {
            console.log(`Skipping Site: ${site}`);
            continue; // Skip the 'Original Account' site
        }
        
        try {
            // Select the site from the dropdown
            await switchSite(page, site);
            await saveSession(page, site);
            console.log(`Saved session for site: ${site}`);
            
            }catch (error) {
                console.warn(`Failed to scrape site ${site}:`, error);
            }
        }

        await browser.close(); 
})(); 