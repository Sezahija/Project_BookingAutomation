import { homepage_locators } from '../locators/homepage_locators';

describe('Airport Taxis button navigation', () => {
  it('Clicks Airport Taxis button', () => {
    cy.visit('https://www.booking.com/');

    // Verify homepage loaded
    cy.get('header').should('be.visible');

    // Click Airport Taxis button and confirm navigation
    cy.get(homepage_locators.airportTaxisButton)
      .should('be.visible')
      .click({ force: true });

    // Verify we are on the correct page
    cy.get('.BSFM_cc0f38f1.undefined').should('be.visible');
  });
});
