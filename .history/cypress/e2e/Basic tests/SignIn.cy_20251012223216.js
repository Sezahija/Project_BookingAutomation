import { homepage_locators } from '../Locators/homepage_locators';

describe('Verify that User is able to complete Sign in flow (via SSO)', () => {
  it('Signs in user with valid data successfully', () => {
    cy.visit('/');

    // Click the header sign-in button on the main page
    cy.get(homepage_locators.signInButton).click();

    // Once redirected to account.booking.com
    cy.origin('https://account.booking.com', () => {
      // Now you are inside the new origin context
      cy.get('.access-panel__social-button-content').eq(0).click(); // or use homepage_locators.googleSignInButton if you imported it here
    });
  });
});
