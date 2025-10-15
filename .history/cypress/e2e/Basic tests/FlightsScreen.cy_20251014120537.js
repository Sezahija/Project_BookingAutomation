describe('Flights button navigation', () => {
  it('Clicks Flights button', () => {
    cy.visit('https://www.booking.com/')

    // Verify homepage loaded
    cy.get('header').should('be.visible')

    // Click Flights button and confirm click does not error
    cy.get('#flights').should('be.visible').click({ force: true })
    
    // Optional: verify the href exists (redirect URL)
    cy.get('#flights').invoke('attr', 'href').should('include', '/c?')
  })
})

