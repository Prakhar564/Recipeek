describe('Registration', () => {
    it('Registration works correctly', () => {
      cy.visit('http://localhost:3000/register')
      cy.get(':nth-child(3) > #form2Example17').type('xyz@gmail.com')
      cy.get(':nth-child(4) > #form2Example17').type('xyz')
      cy.get(':nth-child(5) > #form2Example17').type('1234')
      cy.get('#form2Example27').type('1234')
      cy.get('.mb-5 > a').click()
      
    })
  })