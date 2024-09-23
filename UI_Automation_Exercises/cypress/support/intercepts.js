Cypress.Commands.add("setupInterceptions", () => {
    cy.intercept('GET', '**/loxcope/static/ua/data/uainfo.ini').as('homeInfo')
    cy.intercept('GET', '**/devo/roles**').as('rolesPage')
});

beforeEach (()=> {
    cy.setupInterceptions();
});