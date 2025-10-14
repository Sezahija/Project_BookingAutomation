describe('Flights button navigation', () => {
  it('Opens Booking.com and verifies Flights page on Kayak', () => {
    // Visit Booking.com
    cy.visit('https://www.booking.com/')

    // Verify homepage loaded
    cy.get('header').should('be.visible')

    // Click Flights button
    cy.get('#flights').click()

    // Handle new origin (Kayak)
    cy.origin('https://booking.kayak.com', () => {
      cy.get('.E9x1-main-content', { timeout: 10000 }).should('be.visible')
    })
  })
})

