describe('Attractions button navigation', () => {
  it('Clicks Attractions button ', () => {
    cy.visit('https://www.booking.com/')

    // Verify homepage loaded
    cy.get('header').should('be.visible')

    // Click Attractions button and confirm click does not error
    cy.get('#attractions').should('be.visible').click({ force: true })

    // Verify that the Attractions page loaded by checking for class "css-7tlp7m"
    cy.get('.css-7tlp7m').should('be.visible')
  })
})
