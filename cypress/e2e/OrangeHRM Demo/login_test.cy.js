import { LoginPage } from "../../support/pages/login_page.cy.js"

let loginPage = new LoginPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
})

describe('Login Page', { testIsolation: true }, () => {
    it('Login with valid credentials (Positive)', () => {
            loginPage.fillUsername(Cypress.env('orangehrm_username'))
            loginPage.fillPassword(Cypress.env('orangehrm_password'))
            loginPage.clickButtonLogin()
            cy.wait(3000)
            loginPage.validateLoginSuccess('Dashboard')
    })

    it('Login with invalid username (Negative)', () => {
            loginPage.fillUsername(Cypress.env('orangehrm_invalid_username'))
            loginPage.fillPassword(Cypress.env('orangehrm_password'))
            loginPage.clickButtonLogin()
            cy.wait(3000)
            loginPage.validateInvalidCredentialsError('Invalid credentials')
    })

    it('Login with invalid password (Negative)', () => {
            loginPage.fillUsername(Cypress.env('orangehrm_username'))
            loginPage.clickButtonLogin()
            loginPage.fillPassword(Cypress.env('orangehrm_invalid_password'))
            loginPage.clickButtonLogin()
            cy.wait(3000)
            loginPage.validateInvalidCredentialsError('Invalid credentials')
    })
        
    it('Login with invalid credentials (Negative)', () => {
            loginPage.fillUsername(Cypress.env('orangehrm_invalid_username'))
            loginPage.fillPassword(Cypress.env('orangehrm_invalid_password'))
            loginPage.clickButtonLogin()
            cy.wait(3000)
            loginPage.validateInvalidCredentialsError('Invalid credentials')
    })
})