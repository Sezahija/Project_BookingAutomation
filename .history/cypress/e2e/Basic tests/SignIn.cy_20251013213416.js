import { homepage_locators } from '../Locators/homepage_locators';

describe('Verify that User is able to complete Sign in flow (via SSO)', () => {
  it('Signs in user with valid data successfully', () => {
    // Automatski SSO login – postavlja cookie-e i otvara searchresults stranicu
    cy.autoSSOLogin();

    // Posjeti homepage nakon što je sesija postavljena
    cy.visit('/');

    // Provjeri da je korisnik autentikovan preko URL-a
    cy.url().should('include', '/searchresults');

    // Opcionalno: klikni SignIn ako želiš simulirati UI flow
    cy.get(homepage_locators.signInButton).click();

    // Ako želiš, još uvijek možeš kliknuti Google login
    cy.origin('https://account.booking.com', () => {
      cy.get(homepage_locators.googleButtonContent).eq(0).click();
    });

    // Konačna provjera da je korisnik na searchresults stranici
    cy.url().should('include', '/searchresults');
  });
});
