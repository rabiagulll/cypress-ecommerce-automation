describe('Login Functionality', () => {

 beforeEach(() => {
  cy.visit('https://www.saucedemo.com/')
})

  it('should login successfully with valid credentials', () => {

    cy.get('[id="user-name"]')
      .type('standard_user')

    cy.get('[id="password"]')
      .type('secret_sauce')

    cy.get('[id="login-button"]')
      .click()

    cy.url()
      .should('include', '/inventory.html')

  })


it('should display an error message with invalid password', () => {

  cy.get('[id="user-name"]')
    .type('standard_user')

  cy.get('[id="password"]')
    .type('wrong_password')

  cy.get('[id="login-button"]')
    .click()

  cy.get('[data-test="error"]')
    .should('be.visible')

})

it('should display an error when username is empty', () => {

  cy.get('[id="password"]')
    .type('secret_sauce')

  cy.get('[id="login-button"]')
    .click()

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', ' Username is required')

})

it('should display an error when password is empty', () => {

  cy.get('[id="user-name"]')
    .type('standard_user')

  cy.get('[id="login-button"]')
    .click()

  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('contain', 'Password is required')
  })

})

