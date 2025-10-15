import { homepage_locators } from '../../support/locators/homepage_locators';

describe('Car Rental button navigation', () => {
  it('Clicks Car Rental button and verifies page loads', () => {
    // Visit homepage
    cy.visit('https://www.booking.com/');

    // Verify homepage loaded
    cy.get('header').should('be.visible');

    // Click Car Rental button
    cy.get(homepage_locators.carsButton)
      .should('be.visible')
      .click({ force: true });

    // Verify the href attribute includes '/cars'
    cy.get(homepage_locators.carsButton)
      .invoke('attr', 'href')
      .should('include', '/cars');

    // Verify redirection URL contains '/cars'
    cy.url().should('include', '/cars');

    // ✅ Verify that Car Rental page loaded by checking logo visibility
    cy.get('[data-testid="supplier-list-logo"]').should('be.visible');
  });
});
