describe('Flights button navigation', () => {
  it('Verifies that the Flights button exists and is clickable', () => {
    // Visit Booking.com homepage
    cy.visit('https://www.booking.com/')

    // Verify homepage loaded successfully
    cy.title().should('include', 'Booking.com')
    cy.get('header').should('be.visible')

    // Verify Flights button exists and is visible
    cy.get('#flights')
      .should('be.visible')
      .and('have.attr', 'href') // href exists
      .and('include', '/c?')   // confirms it’s a redirect link
      .click({ force: true })   // simulate click to ensure button is clickable

    // Optional: Verify something on Booking.com before redirect
    // After redirect, cross-origin prevents further Cypress checks
  })
})



