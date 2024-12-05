import addEmployee from "../selectors/add_employee_page_element.js"
import pim from "../selectors/pim_element.js"

export class AddEmployee{

    fillFirstname(dataFirstname) {
        const validateFirstname = cy.get(addEmployee.fieldFirstname).as('validateFirstname')
        validateFirstname.type(dataFirstname)
    }       

    fillLastname(dataLastname) {
        const validateLastname = cy.get(addEmployee.fieldLastname).as('validateLastname')
        validateLastname.type(dataLastname)
    }

    clickButtonSave() {
        const buttonSave = cy.get(addEmployee.btnSave).as('buttonSave')
        buttonSave.click()
    }

    uploadFoto() {
     cy.get(addEmployee.inputFile)
        .invoke('removeAttr', 'style') // Hapus style inline
        .selectFile('cypress/fixtures/image.jpeg', { force: true });
    }

    // Assertion 
    verifyEmployeeCreatedSuccessfully(dataEmployeeName) {
        cy.get(pim.profileNameHeader).should('be.visible').contains(dataEmployeeName)
    }  

    validateImageIsVisible(){
    cy.get(addEmployee.employeeImage) 
        .should('be.visible')
        
    }

    validateErrorMessageInFirstnameField(errorMessage) {
        cy.get(addEmployee.errorMessageFieldFirstname).should('be.visible').contains(errorMessage)
    }

    validateErrorMessageInLastnameField(errorMessage) {
        cy.get(addEmployee.errorMessageFieldLastname).should('be.visible').contains(errorMessage)
    }
}