describe('Registration', () => {
    it('Registration works correctly', () => {
      cy.visit('http://localhost:3000/login')
      cy.get('#form2Example17').type('xyz@gmail.com')
      cy.get('#form2Example27').type('1234')
      cy.get('[data-test="LoginSubmit"]').click();
    })
  })