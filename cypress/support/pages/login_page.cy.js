import login from "../selectors/login_element.js"
import dashboard from "../selectors/dashboard_element.js";

export class LoginPage {
    navigateLoginPage() {
        cy.visit('https://opensource-demo.orangehrmlive.com');
    }

    fillUsername(dataUsername) {
        const validateUsername = cy.get(login.fieldUsername).as('fieldUsername')
        validateUsername.type(dataUsername)
    }       

    fillPassword(dataPassword) {
        const validatePassword = cy.get(login.fieldPassword).as('fieldPassword')
        validatePassword.type(dataPassword)
    }

    clickButtonLogin() {
        const buttonLogin = cy.get(login.btnLogin).as('buttonLogin')
        buttonLogin.click()
    }

    clickTheForgotYourPasswordLink() {
        const resetPassword = cy.get(login.forgotYourPassword).as('resetPassword')
        resetPassword.click()
    }

    validateLoginSuccess(dashboardHeading) {
        cy.url().should('include', '/web/index.php/dashboard/index');
        cy.get(dashboard.dashboardHeading).should('be.visible').contains(dashboardHeading)
    }   

    validateInvalidCredentialsError(pesanError){
        cy.url().should('eq', `${Cypress.env('base_url')}/web/index.php/auth/login`)
        cy.get(login.alertError).should('be.visible').contains(pesanError)
    }
}