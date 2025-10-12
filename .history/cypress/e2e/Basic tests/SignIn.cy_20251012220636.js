import { homepage_locators } from '../Locators/homepage_locators';

describe('Verify that User is able to complete Sign in flow ()', () => {
  it('Sign in User with calid data sucessfully', () => {
    cy.visit('/');
    cy.get(homepage_locators.signInButton).click();
  });
});