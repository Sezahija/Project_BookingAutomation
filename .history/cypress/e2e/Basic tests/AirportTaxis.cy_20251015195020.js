describe('Airport Taxis button navigation', () => {
  it('Clicks Airport Taxis button', () => {
    cy.visit('https://www.booking.com/');

    // Verify homepage loaded
    cy.get('header').should('be.visible');

    // Click Airport Taxis button
    cy.get('#airport_taxis').should('be.visible').click();

    // Verify navigation to the correct page
    cy.get('.BSFM_cc0f38f1.undefined').should('be.visible');
  });