import addUser from "../selectors/add_user_page_element.js"
import admin from "../selectors/admin_page_elemen.js"

export class AddUser{

    selectUserRole() {
        cy.get(addUser.userRoleSelect).first().click({ force: true });
        cy.contains(addUser.selectDropdown, 'Admin')
            .should('be.visible') 
            .click();
    }

    selectStatusAddUser(){
        cy.get(addUser.selectStatusAddUser).first().click({ force: true });
        cy.get(addUser.optionEnabled).should('be.visible');
        cy.contains('Enabled').click({ force: true });
    }

    fillAddUserUsername(dataUsername) {
        const validateUsername = cy.get(addUser.fieldUsernameAddUser).as('validateUsername')
        validateUsername.type(dataUsername)
    }

    fillPassword(dataPassword) {
        const validatePassword = cy.get(addUser.fieldPassword).as('validatePassword')
        validatePassword.type(dataPassword)
    }

    fillConfirmPassword(dataConfirmPassword) {
        const validateConfirmPassword = cy.get(addUser.fieldConfirmPassword).as('validateConfirmPassword')
        validateConfirmPassword.type(dataConfirmPassword)
    }

    clickButtonSave() {
        const buttonSave = cy.get(addUser.btnSave).as('buttonSave')
        buttonSave.click()
    }

    validateAddNewUserSuccess(dataUsername) {
        cy.get(admin.tableRow).contains(dataUsername)
    }

    validateUsernameExistsMessage(usernameExistsMessage){
        cy.get(addUser.usernameExistsMessage).should('be.visible').contains(usernameExistsMessage)
    }

    fillEmployeeName(dataEmployeeName) {
        cy.get(addUser.fieldEmployeeName)
            .type(dataEmployeeName) 
            .should('have.value', dataEmployeeName); 

        cy.get(addUser.employeeNameSuggestionsDropdown) 
            .should('be.visible') 
            .contains(dataEmployeeName) 
            .should('be.visible') 
            .click({ force: true }); 
    }
    
}