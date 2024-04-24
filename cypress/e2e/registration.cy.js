describe('Registration', () => {
    it('Registration works correctly', () => {
      cy.visit('http://localhost:3000/register')
      cy.get('[data-test="Recipeek-header"]').should('contain.text', 'Welcome to Recipeek')
    })
  })