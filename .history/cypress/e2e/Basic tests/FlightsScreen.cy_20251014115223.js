describe('Flights button navigation', () => {
  it('Navigates to Flights page and verifies main content', () => {
    // Visit Booking.com homepage
    cy.visit('https://www.booking.com/')

    // Verify homepage loaded
    cy.get('header').should('be.visible')

    // Click Flights button
    cy.get('#flights').should('be.visible').click()

    // Handle new origin (Kayak)
    cy.origin('https://booking.kayak.com', () => {
      // Verify main content on Flights page
      cy.get('.E9x1-main-content', { timeout: 100 }).should('be.visible')
    })
  })
})

