describe('Airport Taxis button navigation', () => {
  // Ignoriši minified React greške tokom ovog testa
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Minified React error')) {
        return false; // ignorira React greške #418, #423, #425
      }
      return true; // ostale greške i dalje failaju test
    });
  });

  it('Clicks Airport Taxis button and verifies navigation', () => {
    cy.visit('https://www.booking.com/');

    // Provjera da je homepage učitan
    cy.get('header').should('be.visible');

    // Klik na Airport Taxis button
    cy.get('#airport_taxis')
      .should('be.visible')
      .click();

    // Provjera da se Genius banner pojavio
    cy.get('[data-testid="genius-banner"]').should('be.visible');
  });
});

