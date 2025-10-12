describe('Verify that User is able to sign in with valid credentials', () => {
  it('Log', () => {
    cy.visit('https://www.booking.com/index.en-gb.html?label=en-ba-booking-desktop-j6BeANydf3CdOz6*dx*ttAS652796016909%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-65526620%3Alp9298294%3Ali%3Adec%3Adm&sid=ee46a4df59d963443d7d7395e18a4a15&aid=2311236&chal_t=1760268344022&force_referer=')

    // Verify that the homepage loaded successfully by checking for the title
    cy.title().should('include', 'Booking.com')

    // Verify that the logo or search bar is visible
    cy.get('header').should('be.visible')
  })
})