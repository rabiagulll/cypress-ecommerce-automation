describe('Login Functionality', () => {

  let loginData

  beforeEach(() => {

    cy.fixture('loginData').then((data) => {
      loginData = data
    })

    cy.visit('https://www.saucedemo.com/')

  })


  it('should login successfully with valid credentials', () => {

    cy.login(
      loginData.validUsername,
      loginData.validPassword
    )

    cy.url()
      .should('include', '/inventory.html')

  })


  it('should display an error message with invalid password', () => {

    cy.login(
      loginData.validUsername,
      loginData.invalidPassword
    )

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')

  })


  it('should display an error when username is empty', () => {

    cy.get('[id="password"]')
      .type(loginData.validPassword)

    cy.get('[id="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username is required')

  })


  it('should display an error when password is empty', () => {

    cy.get('[id="user-name"]')
      .type(loginData.validUsername)

    cy.get('[id="login-button"]')
      .click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Password is required')

  })

})