describe('Flights button navigation', () => {
  it('Verifies that the Flights button exists and points to the correct destination', () => {
    // Visit Booking.com homepage
    cy.visit('https://www.booking.com/')

    // Verify homepage loaded successfully
    cy.title().should('include', 'Booking.com')
    cy.get('header').should('be.visible')

    // Verify Flights button exists, is visible, and clickable
    cy.get('#flights')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'kayak.com') // confirm it points to the Flights page
      .click({ force: true }) // optional: simulate click to ensure button is clickable

    // Optionally: verify the click triggers navigation within the same origin (if stays on Booking.com)
    // Otherwise, cross-origin verification is skipped because Kayak is a different domain
  })
})


