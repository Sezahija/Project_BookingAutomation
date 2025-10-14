import { homepage_locators } from '../Locators/homepage_locators';

describe('Verify that User is able to complete Sign in flow (via SSO)', () => {
  it('Signs in user with valid data successfully', () => {
    // Koristi custom command za automatski SSO login
    cy.autoSSOLogin();

    // Nakon što je cookie postavljen, posjeti homepage
    cy.visit('/');

    // Provjeri da je korisnik autentikovan (možeš mijenjati selector prema headeru)
    cy.get(homepage_locators.userProfileIcon).should('be.visible');

    // Ako želiš ipak simulirati klik na Google login:
    cy.get(homepage_locators.signInButton).click();

    cy.origin('https://account.booking.com', () => {
      cy.get('.access-panel__social-button-content').eq(0).click();
    });

    // Opcionalno: provjeri da si na searchresults stranici
    cy.url().should('include', '/searchresults');
  });
});

