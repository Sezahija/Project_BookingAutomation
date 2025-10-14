import { homepage_locators } from '../Locators/homepage_locators';

describe('Verify that User is able to complete Sign in flow (via SSO)', () => {
  it('Signs in user with valid data successfully', () => {
    cy.autoSSOLogin(); // postavi cookie-e i posjeti searchresults

    cy.visit('/');

    // Provjeri da je korisnik autentikovan preko stvarnog elementa
    cy.get(homepage_locators.userProfileMenu).should('be.visible');

    // Ako želiš, klikni sign-in i Google login
    cy.get(homepage_locators.signInButton).click();

    cy.origin('https://account.booking.com', () => {
      cy.get(homepage_locators.googleButtonContent).eq(0).click();
    });

    cy.url().should('include', '/searchresults');
  });
});
