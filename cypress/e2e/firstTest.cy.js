describe('First Test', () => {
  it('Contains correct header text', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="Recipeek-header"]').should('contain.text', 'Welcome to Recipeek')
  })
  it('Dark mode works correctly', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="Dark-mode"]').click()
  })
  it('Register page opens from homepage', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="register"]').click()
  })
  it('Login page opens from homepage', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-testid="login"]').click()
  })
})