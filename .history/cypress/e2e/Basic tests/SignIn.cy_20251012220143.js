import { HomepageLocators } from '../Locators/HomepageLocators';

describe('Verify that User is able to complete Sign in flow', () => {
  it('Clicks on the Sign In button', () => {
    cy.visit('/');
    cy.get(HomepageLocators.signInButton).click();
  });
});