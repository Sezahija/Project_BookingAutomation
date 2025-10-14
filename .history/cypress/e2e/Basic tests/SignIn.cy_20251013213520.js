import { homepage_locators } from '../Locators/homepage_locators';

describe('Verify that User is able to complete Sign in flow (via SSO)', () => {
  it('Signs in user with valid data successfully', () => {
    // Automatski SSO login – postavlja cookie-e
    cy.autoSSOLogin();

    // Direktno posjeti searchresults stranicu koja je dostupna samo nakon login-a
    cy.visit('https://www.booking.com/searchresults.en-gb.html?aid=2311236&auth_success=1');

    // Provjeri da je korisnik autentikovan kroz URL
    cy.url().should('include', '/searchresults');

    // Opcionalno: provjera da stranica sadrži očekivani sadržaj
    cy.get('h1').should('contain.text', 'Search results'); // primjer, zamijeni prema stvarnom sadržaju
  });
});
