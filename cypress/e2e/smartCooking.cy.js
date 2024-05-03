describe('Smart Cooking', () => {
    it('Smart cooking works', () => {
      cy.visit('http://localhost:3000/Dashboard')
      cy.get('[data-testid="Smart-Cooking"]').click().type("chicken")
    })
  })