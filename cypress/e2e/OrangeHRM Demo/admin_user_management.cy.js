import { LoginPage } from "../../support/pages/login_page.cy.js"
import { AdminPage } from "../../support/pages/admin_page.cy.js"
import { DashboardPage } from "../../support/pages/dashboard_page.cy.js"
import { AddUser } from "../../support/pages/add_user_page.cy.js"

let addUserPage = new AddUser()
let dashboardPage = new DashboardPage()
let adminPage = new AdminPage()
let loginPage = new LoginPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
    loginPage.fillUsername(Cypress.env('orangehrm_username'))
    loginPage.fillPassword(Cypress.env('orangehrm_password'))
    loginPage.clickButtonLogin()
    cy.wait(3000)
    loginPage.validateLoginSuccess('Dashboard')
})

describe('Admin-User Management', { testIsolation: true }, () => {
    it('Add New User with Complete and Valid Data (Positive)', () => { 
        dashboardPage.clickAdminMenuText()
        adminPage.clickButtonAddUser()
        addUserPage.selectUserRole()
        addUserPage.selectStatusAddUser()
        addUserPage.fillEmployeeName(Cypress.env('orangehrm_valid_employee_name'))
        addUserPage.fillAddUserUsername(Cypress.env('orangehrm_new_account_username'))
        addUserPage.fillPassword(Cypress.env('orangehrm_new_password'))
        addUserPage.fillConfirmPassword(Cypress.env('orangehrm_new_password'))
        addUserPage.clickButtonSave()
        cy.wait(6000)
        cy.scrollTo('bottom')
        addUserPage.validateAddNewUserSuccess(Cypress.env('orangehrm_new_account_username'))
    })

    it('Add New User with Duplicate Username (Negative)', () => { 
        dashboardPage.clickAdminMenuText()
        adminPage.clickButtonAddUser()
        addUserPage.selectUserRole()
        addUserPage.selectStatusAddUser()
        addUserPage.fillEmployeeName(Cypress.env('orangehrm_valid_employee_name'))
        addUserPage.fillAddUserUsername(Cypress.env('orangehrm_new_account_username'))
        addUserPage.fillPassword(Cypress.env('orangehrm_new_password'))
        addUserPage.fillConfirmPassword(Cypress.env('orangehrm_new_password'))
        addUserPage.clickButtonSave()
        addUserPage.validateUsernameExistsMessage('Already exists')
    })

    it('Search User with valid username (Positive)', () => { 
        dashboardPage.clickAdminMenuText()
        cy.scrollTo('top')
        adminPage.fillSearchUserUsername(Cypress.env('orangehrm_new_account_username'))
        addUserPage.selectUserRole()
        adminPage.fillEmployeeName(Cypress.env('orangehrm_valid_employee_name'))
        adminPage.selectStatusSearchUser()
        adminPage.clickButtonSearch()
        cy.wait(3000)
        adminPage.validateUsernameInTable(Cypress.env('orangehrm_new_account_username'))
    })

    it('Search User with invalid employee name (Negative)', () => { 
        dashboardPage.clickAdminMenuText()
        cy.scrollTo('top')
        adminPage.fillSearchUserUsername(Cypress.env('orangehrm_new_account_username'))
        addUserPage.selectUserRole()
        adminPage.fillInvalidEmployeeName(Cypress.env('orangehrm_invalid_employee_name'))
        adminPage.selectStatusSearchUser()
        adminPage.clickButtonSearch()
        cy.wait(3000)
        adminPage.validateErrorMessage('Invalid')
    })

    it('Delete a user based on a valid username (Positive)', () => { 
        dashboardPage.clickAdminMenuText()
        cy.scrollTo('bottom')
        adminPage.clickDeleteIconForTargetRow(Cypress.env('orangehrm_new_account_username'))
        adminPage.clickConfirmDeleteData()
        cy.wait(3000)
        adminPage.validateRowDoesNotContainUsername(Cypress.env('orangehrm_new_account_username'))
    })
})
 