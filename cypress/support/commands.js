Cypress.Commands.add('login', (username, password) => {

  cy.get('[id="user-name"]')
    .type(username)

  cy.get('[id="password"]')
    .type(password)

  cy.get('[id="login-button"]')
    .click()

})