describe('Verify that the Flights button navigates correctly to the Flights screen', () => {
  it('Opens Booking.com and verifies that the Flights page loads', () => {
    // Visit the Booking.com homepage
    cy.visit('https://www.booking.com/index.en-gb.html')

    // Verify homepage loaded
    cy.title().should('include', 'Booking.com')
    cy.get('header').should('be.visible')

    // Click on the Flights button — triggers redirect to Kayak
    cy.get('#flights').should('be.visible').click()

    // Now handle the new origin
    cy.origin('https://booking.kayak.com', () => {
      // Verify that the main Flights content is visible on Kayak
      cy.get('.E9x1-main-content', { timeout: 10000 }).should('be.visible')
    })
  })
})
