describe('Car Rental button navigation', () => {
  it('Clicks Car Rental button and Verify that Car rental ', () => {
    cy.visit('https://www.booking.com/');

    // Verify homepage loaded
    cy.get('header').should('be.visible');

    // Click Car Rental button and confirm click does not error
    cy.get('#cars').should('be.visible').click({ force: true });

    // Verify that Car Rental page loaded successfully
    cy.get('[data-testid="supplier-list-logo"]').should('be.visible');
  });
});
