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
    detailButton : (page : Page) => page.getByRole('link', {name: 'Detail'}),
    editButton : (page : Page) => page.getByRole('link', {name: 'Edit'}),
    deleteButton : (page : Page) => page.getByRole('link', {name: 'Delete'}),
    editCategoryButton : (page : Page) => page.getByRole('link', {name: 'Edit Category'}),   
}

export const addChannelSelectors = {
    addChannelButton : (page : Page) => page.getByRole('link', {name: 'Add Channel'}),
    logoUpload : (page : Page) => page.locator("input[type='file'][name='icon']"),
    inputName : (page : Page) => page.locator('input[name="name"]'),
    inputCategory : (page : Page) => page.locator('input[name="category"]'),
    sourceDropdown : (page : Page) => page.locator('input[name="source"]'),
    inputUrl : (page : Page) => page.locator('input[name="url"]'),
    submitData : (page : Page) => page.getByRole('button', {name: 'Submit'}),  
}

export const siteSelectors = {
    searchButton : (page : Page) => page.getByRole('button', {name: 'Search'}),
    siteName : (page : Page) => page.getByRole('textbox', {name: 'Site Name'}),
    companyName : (page : Page) => page.getByRole('textbox', {name: 'Company Name'}),
    companyCode : (page : Page) => page.getByRole('textbox', {name: 'Company Code'}),
    siteDetail : (page : Page) => page.getByRole('link', {name: 'Detail'}),
    siteBack : (page : Page) => page.getByRole('link', {name: 'Back'}),
    siteEdit : (page : Page) => page.getByRole('link', {name: 'Edit'}),
    siteAdd : (page : Page) => page.getByRole('link', {name: 'Add Site'}),    
}
