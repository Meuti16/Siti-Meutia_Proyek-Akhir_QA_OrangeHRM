import addJobTitle from "../selectors/add_job_title_element.js"

export class AddJobTitlePage{

    fillJobTitle(jobTitle) {
        const validateJobTitle = cy.get(addJobTitle.fieldJobTitle).as('validateJobTitle')
        validateJobTitle.type(jobTitle)
    }   

    clickButtonSave() {
        const buttonSave = cy.get(addJobTitle.btnSave).as('buttonSave')
        buttonSave.click()
    }

    validateAddNewJobTitleSuccess(jobTitle) {
        cy.get(addJobTitle.jobTitleTable).contains(jobTitle)
    }

    validateErrorMessageInJobTitleField(errorMessage) {
        cy.get(addJobTitle.messageError).should('be.visible').contains(errorMessage)
    }
}