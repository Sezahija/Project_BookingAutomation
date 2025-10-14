import { homepage_locators } from '../../support/locators';

describe('Flights button navigation', () => {
  it('should navigate to the Flights screen when user clicks the Flights button', () => {
    cy.visit('https://www.booking.com/');
    cy.get(homepage_locators.flightsButton).click();
    cy.url().should('include', '/flights');
  });
});