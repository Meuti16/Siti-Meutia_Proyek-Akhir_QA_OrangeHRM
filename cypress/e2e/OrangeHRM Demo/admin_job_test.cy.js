import { LoginPage } from "../../support/pages/login_page.cy.js"
import { AdminPage } from "../../support/pages/admin_page.cy.js"
import { DashboardPage } from "../../support/pages/dashboard_page.cy.js"
import { AddJobTitlePage } from "../../support/pages/add_job_title_page.cy.js"

let dashboardPage = new DashboardPage()
let adminPage = new AdminPage()
let loginPage = new LoginPage()
let addJobTitlePage = new AddJobTitlePage()

beforeEach(() => {
    loginPage.navigateLoginPage()
    loginPage.fillUsername(Cypress.env('orangehrm_username'))
    loginPage.fillPassword(Cypress.env('orangehrm_password'))
    loginPage.clickButtonLogin()
    cy.wait(3000)
    loginPage.validateLoginSuccess('Dashboard')
})

describe('Admin-Job', { testIsolation: true }, () => {
    it('Add Job Title with Required Fields Only (Positive)', () => { 
        dashboardPage.clickAdminMenuText()
        adminPage.selectJobOption()
        adminPage.clickButtonAddJob()
        addJobTitlePage.fillJobTitle(Cypress.env('orangehrm_job_title_1'))
        addJobTitlePage.clickButtonSave()
        cy.wait(3000)
        addJobTitlePage.validateAddNewJobTitleSuccess(Cypress.env('orangehrm_job_title_1'))
    })
    it('Add Job Title with Existing Name (Negative)', () => { 
        dashboardPage.clickAdminMenuText()
        adminPage.selectJobOption()
        adminPage.clickButtonAddJob()
        addJobTitlePage.fillJobTitle(Cypress.env('orangehrm_job_title_1'))
        addJobTitlePage.clickButtonSave()
        cy.wait(1000)
        cy.scrollTo('top')
        addJobTitlePage.validateErrorMessageInJobTitleField('Already exists')
    })
})