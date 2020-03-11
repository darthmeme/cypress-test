// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
  })

  context('when select 1 is truthy', () => {
    beforeEach(() => {
      cy.get('select:first').select('S')
    })

    it('should show select 2', () => {
      cy.get('label').contains('Select 2').then(el => {
        cy.get(`select#${el.attr('for')}`).select('2')
      })
    })
  })
})
