import data from '../fixtures/users.json'
import msg from '../fixtures/messages.json'
import ui from '../fixtures/selectors.json'

const WHITE_COLOR = 'rgb(255, 255, 255)';
const BLUE_COLOR = 'rgb(42, 108, 189)';

describe('Test set for role cloning verification', () => {
  beforeEach(() => {
    cy.visit("/login")
  })

  it('Verify the cloning of the Admin permission', () => {
    cy.login(data.userAdmin.email, data.userAdmin.password)
    cy.navigateToRoles()
    cy.get(ui.buttonClone).click()
    cy.get(ui.toastTitle).should('have.text', msg.success.title)
    cy.get(ui.toastDescription).invoke('text').should('match', new RegExp(msg.success.adminRoleCreated))

    //Validation: All checkboxes of the Admin role are selected.
    cy.get(ui.checkboxPermission).each(item  => {
    expect(item).to.have.css('background-color', BLUE_COLOR);
   })

   cy.deleteClonedRole()
  })

  it('Verify the cloning of the Sin privilegios permission', () => {
    cy.login(data.userAdmin.email, data.userAdmin.password)
    cy.navigateToRoles()
    cy.contains('No privileges').click();
    cy.get(ui.buttonClone).click()

    //Validation: Cloning fails due to missing settings and permissions assigned to the role
    cy.get(ui.toastTitle).should('have.text', msg.error.title)
    cy.get(ui.toastDescription).should('have.text', msg.error.roleWithoutAlertPermission)
   })

  it('Verify the cloning of the TestAdmin permission', () => {
    cy.login(data.userAdmin.email, data.userAdmin.password)
    cy.navigateToRoles()
    cy.contains('TestAdmin').click();
    cy.get(ui.buttonClone).click()
    cy.get(ui.toastTitle).should('have.text', msg.success.title)
    cy.get(ui.toastDescription).invoke('text').should('match',new RegExp(msg.success.testAdminRoleCreated))

    //Validation: The checkboxes are checked according to the copied role.
    cy.get(ui.checkboxPermission).then(items  => {
      expect(items[0]).to.have.css('background-color', WHITE_COLOR);
      expect(items[1]).to.have.css('background-color', BLUE_COLOR);
      expect(items[2]).to.have.css('background-color', WHITE_COLOR);
      expect(items[3]).to.have.css('background-color', BLUE_COLOR);
      expect(items[4]).to.have.css('background-color', WHITE_COLOR);
      expect(items[5]).to.have.css('background-color', WHITE_COLOR);
      expect(items[6]).to.have.css('background-color', WHITE_COLOR);
      expect(items[7]).to.have.css('background-color', WHITE_COLOR);
      expect(items[8]).to.have.css('background-color', BLUE_COLOR);
      expect(items[9]).to.have.css('background-color', BLUE_COLOR);
      expect(items[10]).to.have.css('background-color', WHITE_COLOR);
      expect(items[11]).to.have.css('background-color', WHITE_COLOR);

      cy.deleteClonedRole()
   })
  })
})
