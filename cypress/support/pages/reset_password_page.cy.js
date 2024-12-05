import resetPassword from "../selectors/reset_password_element.js"

export class ResetPasswordPage{

    clickButtonResetPassword() {
        const buttonResetPassword = cy.get(resetPassword.btnResetPassword).as('buttonResetPassword')
        buttonResetPassword.click()
    }

    fillUsername(dataUsername) {
        const validateUsername = cy.get(resetPassword.fieldUsername).as('fieldUsername')
        validateUsername.type(dataUsername)
    } 

    validateResetPasswordSuccessMessage(successMessage) {
        cy.get(resetPassword.resetPasswordMessage).should('be.visible').contains(successMessage)
    }

    validateResetPasswordFailureMessage(failureMessage){
        cy.get(resetPassword.resetPasswordMessage).should('be.visible').contains(failureMessage)
    }

}