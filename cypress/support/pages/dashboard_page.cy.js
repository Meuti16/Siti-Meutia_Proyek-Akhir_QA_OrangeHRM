import dashboard from "../selectors/dashboard_element.js"

export class DashboardPage {

    clickAdminMenuText() {
        const adminMenu = cy.get(dashboard.adminMenuText).as('adminMenu')
        adminMenu.click()
    }

    clickPimMenuText() {
        const pimMenu = cy.get(dashboard.pimMenuText).as('pimMenu')
        pimMenu.click()
    }
    
    validateProductDescription(){
        cy.get(product.product_description).should('be.visible')
    }

    clickIconSort(sortOptions) {
        const iconSort = cy.get(product.sort_icon).as('iconSort')
        iconSort.select(sortOptions)
    }

    clickButtonAddToCart() {
        const buttonAdd = cy.get(product.add_to_cart_button).as('buttonAdd')
        buttonAdd.click()
    }
}
