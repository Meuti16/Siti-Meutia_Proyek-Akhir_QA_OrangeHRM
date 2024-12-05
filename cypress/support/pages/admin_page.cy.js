import admin from "../selectors/admin_page_elemen.js"
import addUser from "../selectors/add_user_page_element.js"

export class AdminPage{

    clickButtonAddUser() {
        const buttonAddUser = cy.get(admin.btnAddUser).as('buttonAddUser')
        buttonAddUser.click()
    }

    selectStatusSearchUser(){
        cy.get(admin.selectStatusSearchUser).first().click({ force: true });
        cy.get(admin.optionEnabled).should('be.visible');
        cy.contains('Enabled').click({ force: true });
    }
    
    fillSearchUserUsername(dataUsername){
        const validateUsername = cy.get(admin.fieldUsernameSearchUser).as('validateUsername')
        validateUsername.type(dataUsername)
    }

    clickButtonSearch() {
        const buttonSearch = cy.get(admin.btnSearch).as('buttonSearch')
        buttonSearch.click()
    }

    selectUserRole() {
        cy.get(admin.userRoleSelect).first().click({ force: true });
        cy.contains(admin.selectDropdown, 'Admin')
            .should('be.visible') 
            .click();
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

    fillInvalidEmployeeName(dataEmployeeName){
        cy.get(addUser.fieldEmployeeName)
            .type(dataEmployeeName) 
    }

    selectJobOption(){
        cy.get(admin.jobMenu).first().click({ force: true });
        cy.get(admin.jobDropdown).should('be.visible');
        cy.contains('Job Titles').click({ force: true });
    }

    clickButtonAddJob() {
        const buttonAddJob = cy.get(admin.btnAddJob).as('buttonAddJob')
        buttonAddJob.click()
    }

    validateUsernameInTable(dataUsername) {
        cy.get('.oxd-table-row')
            .should('be.visible')
            .contains(dataUsername)
    } 

    clickDeleteIconForTargetRow(dataUsername){
        cy.get(admin.tableRow) 
            .contains(dataUsername) 
            .parents(admin.usernameTableCell) 
            .within(() => {
        cy.get(admin.iconDelete)
            .click();
        });
    }

    clickConfirmDeleteData() {
        const confirmDelete = cy.get(admin.confirmDeleteData).as('confirmDelete')
        confirmDelete.click()
    }

    validateRowDoesNotContainUsername(dataUsername){
        cy.get('.oxd-table-row').should('not.contain', dataUsername);
    }

    validateErrorMessage(errorMessage) {
       // cy.get(admin.employeeDropdown).should('be.visible').contains('Record Not Found')
        cy.get(admin.errorMessage).should('be.visible').contains(errorMessage)
    }
}