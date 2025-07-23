import { Page } from "@playwright/test" 

export const loginSelectors = {
    email : (page : Page) => page.locator('input[name="email"]'), 
    password : (page : Page) => page.locator('input[name="password"]'),
    loginButton : (page : Page) => page.locator('button[type="submit"]'),
    dashboardTitle : (page : Page) => page.waitForSelector('text=Dashboard'),
    siteLogto : (page : Page) => page.getByRole('textbox', {name: 'Original Account'}),
    siteDropdown : (page : Page, name : string) => page.getByRole('option', {name}), 
}

export const liveTvChannelSelectors = {
    liveTvPage : (page : Page) => page.getByRole('heading', {name:'Live TV'}),
    searchButton : (page : Page) => page.locator('button.btn.search-toolbar-button'),
    titleInput : (page : Page) => page.locator('input[name ="Title"]'),
    categoryInput : (page : Page) => page.getByLabel('Category'),
    searchSubmitButton : (page : Page) => page.getByRole('link', {name: 'Search'}),
    liveTvMenu : (page : Page) => page.getByText('Live TV Channel')
}

export const paginationSelectors = {
    paginationContainer : (page : Page) => page.locator('#list-pagination'),
    paginationFirst : (page : Page) => page.locator('#list-pagination').getByRole('link',{name : 'First'}),
    paginationLast : (page : Page) => page.locator('#list-pagination').getByRole('link',{name : 'Last'}),
    paginationBefore : (page : Page) => page.locator('#list-pagination').getByRole('link',{name : '<'}),
    paginationNext : (page : Page) => page.locator('#list-pagination').getByRole('link',{name : '>'}),
    pageNumber : (page : Page, number : string | number) => page.locator('#list-pagination').getByRole('link', {name : `${number}`}),  
}

export const liveTvDetailsSelectors = {
    detailButton : (page : Page, title : string) => page.locator('btn.btn-sm.btn-success').filter({ hasText: title }), 
}