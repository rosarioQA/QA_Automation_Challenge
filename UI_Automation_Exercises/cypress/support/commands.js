import login from '../fixtures/selectors.json'
import msg from '../fixtures/messages.json'
import ui from '../fixtures/selectors.json'

Cypress.Commands.add('login', (email, password, validcredentials = true) => {
    cy.get(login.typeEmail).type(email)
    cy.get(login.typePassword).type(password)
    cy.get(login.buttonSignIn).click()
    if(validcredentials){
        cy.wait('@homeInfo', { timeout: 10000 }).its('response.statusCode').should('eq', 200)
    }
})

Cypress.Commands.add('navigateToRoles', () => {
    cy.get(ui.sidebar).click()
    cy.get(ui.menuAdministration).click()
    cy.get(ui.menuRoles).click()
    cy.wait('@rolesPage').its('response.statusCode').should('eq', 200)
    cy.url().should('contain', '/#/admin/roles')
    cy.get(ui.labelRolePanel).trigger('mouseover').click() // Focus on Roles page
})

Cypress.Commands.add('deleteClonedRole', (email, password) => {
    cy.get(ui.buttonDeleteRole).click()
    cy.get(ui.buttonConfirm).click()
    cy.get(ui.toastTitle).should('have.text', msg.success.title)
    cy.get(ui.toastDescription).invoke('text').should('match', new RegExp(msg.success.roleDeleted))
})
