describe('Login Functionality', () => {

  beforeEach(() => {
  cy.visit('https://www.saucedemo.com/')
})

  it('should login successfully with valid credentials', () => {

    cy.get('[data-test="username"]')
      .type('standard_user')

    cy.get('[data-test="password"]')
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .click()

    cy.url()
      .should('include', '/inventory.html')

  })

})


it('should display an error message with invalid password', () => {

  cy.get('[data-test="username"]')
    .type('standard_user')

  cy.get('[data-test="password"]')
    .type('wrong_password')

  cy.get('[data-test="login-button"]')
    .click()

  cy.get('[data-test="error"]')
    .should('be.visible')

})

it('should display an error when username is empty', () => {

  cy.get('[data-test="password"]')
    .type('secret_sauce')

  cy.get('[data-test="login-button"]')
    .click()

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Username and password do not match')

})

it('should display an error when password is empty', () => {

  cy.get('[data-test="username"]')
    .type('standard_user')

  cy.get('[data-test="login-button"]')
    .click()

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Username and password do not match')

})