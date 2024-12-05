import pim from "../selectors/pim_element.js"

export class PimPage{

    clickAddEmployeeTab() {
        const addEmployeeTab = cy.get(pim.addEmployeeTab).as('addEmployeeTab')
        addEmployeeTab.click()
    }
}