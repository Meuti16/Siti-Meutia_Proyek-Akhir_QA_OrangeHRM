import { LoginPage } from "../../support/pages/login_page.cy.js"
import { ResetPasswordPage } from "../../support/pages/reset_password_page.cy.js"

let resetPasswordPage = new ResetPasswordPage()
let loginPage = new LoginPage()

beforeEach(() => {
    loginPage.navigateLoginPage()
})

describe('Reset Password', { testIsolation: true }, () => {
    it('Reset password with valid username (Positive)', () => {
            loginPage.clickTheForgotYourPasswordLink()
            resetPasswordPage.fillUsername(Cypress.env('orangehrm_username'))
            resetPasswordPage.clickButtonResetPassword()
            resetPasswordPage.validateResetPasswordSuccessMessage('Reset Password link sent successfully')
        })
    it('Reset password with invalid username (Negative)', () => {
            loginPage.clickTheForgotYourPasswordLink()
            resetPasswordPage.fillUsername(Cypress.env('orangehrm_invalid_username'))
            resetPasswordPage.clickButtonResetPassword()
            resetPasswordPage.validateResetPasswordSuccessMessage('Failed to send Reset Password link')
        })
})