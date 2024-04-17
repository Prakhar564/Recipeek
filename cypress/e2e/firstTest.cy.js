describe('First Test', () => {
  it('Contains correct header text', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="Recipeek-header"]').should('contain.text', 'Welcome to Recipeek')
  })
})