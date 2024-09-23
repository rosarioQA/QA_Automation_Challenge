import data from '../fixtures/users.json'
import login from '../fixtures/selectors.json'
import msg from '../fixtures/messages.json'
import { faker } from '@faker-js/faker';

describe('Set of access tests and validation of credentials', () => {
  beforeEach(() => {
    cy.visit("/login")
  })

  it('Login with valid credentials', () => {
    cy.get(login.typeEmail).type(data.userAdmin.email).invoke('val').should('contain', data.userAdmin.email)
    cy.get(login.typePassword).type(data.userAdmin.password) 
    cy.get(login.buttonSignIn).click()
    cy.wait('@homeInfo', { timeout: 10000 }).its('response.statusCode').should('eq', 200)
    cy.url().should('contain', '/#/home')
  })

  it('Login with invalid credentials - incorrect password', () => {
    cy.login(data.userAdmin.email, faker.internet.password(), false)
    cy.get(login.toastTitle).should('have.text', msg.error.spanishtitle)
    cy.get(login.toastDescription).should('have.text', msg.error.wrongPassword)
  })

  it('Login with invalid credentials - incorrect e-mail', () => {
    cy.login(faker.internet.email(), data.userAdmin.password, false)
    cy.get(login.toastTitle).should('have.text', msg.error.spanishtitle)
    cy.get(login.toastDescription).should('have.text', msg.error.wrongEmail)
  })
})
