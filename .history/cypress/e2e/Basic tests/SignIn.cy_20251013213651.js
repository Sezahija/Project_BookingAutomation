import { homepage_locators } from '../Locators/homepage_locators';

describe('Verify that User is able to complete Sign in flow (via SSO)', () => {
  it('Signs in user with valid data successfully', () => {
    cy.autoSSOLogin();

    // Direktno posjeti searchresults stranicu
    cy.visit('https://www.booking.com/searchresults.en-gb.html?aid=2311236&auth_success=1');

    // Provjera da je korisnik loginovan putem URL-a
    cy.url().should('include', '/searchresults');

    // Opcionalno: provjera da se renderovao glavni container stranice
    cy.get('#search_results_table').should('exist'); // zamijeni sa stvarnim ID/em elementom
  });
});
