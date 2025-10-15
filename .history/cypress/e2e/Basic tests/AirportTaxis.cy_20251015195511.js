describe('Airport Taxis button navigation', () => {
  it('Clicks Airport Taxis button', () => {
    cy.visit('https://www.booking.com/');

    // Verify homepage loaded
    cy.get('header').should('be.visible');

    // Click Airport Taxis button
    cy.get('#airport_taxis').should('be.visible').click();

    // Verify navigation to the correct page using data-testid
    cy.get('[data-testid="genius-banner"]').should('be.visible');
  });
});
