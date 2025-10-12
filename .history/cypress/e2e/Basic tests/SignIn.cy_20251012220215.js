import { HomepageLocators } from '../Locators/HomepageLocators';

describe('Verify that User is able to complete Sign in flow', () => {
  it('Sign in ', () => {
    cy.visit('/');
    cy.get(HomepageLocators.signInButton).click();
  });
});