describe('Verify that the Flights button navigates correctly to the Flights screen', () => {
  it('Opens Booking.com and verifies navigation to the Flights page', () => {
    // Visit the Booking.com homepage
    cy.visit('https://www.booking.com/index.en-gb.html?label=en-ba-booking-desktop-j6BeANydf3CdOz6*dx*ttAS652796016909%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9298294%3Ali%3Adec%3Adm&sid=ee46a4df59d963443d7d7395e18a4a15&aid=2311236&chal_t=1760268344022&force_referer=')

    // Verify that homepage is visible
    cy.title().should('include', 'Booking.com')
    cy.get('header').should('be.visible')

    // Click on the Flights button
    cy.get('#flights').should('be.visible').click()

    // Verify that user is redirected to the Flights screen
    cy.url().should('include', '/flights')

    // Verify that the Flights page content is visible
    cy.get('h1, h2, header, main').then(($elements) => {
      const combinedText = $elements.text().toLowerCase()
      expect(combinedText).to.include('flights')
    })
  })
})
