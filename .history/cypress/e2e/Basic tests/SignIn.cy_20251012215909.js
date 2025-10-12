import { homepageLocators } from '../Locators/HomepageLocators';

describe('Homepage Tests', () => {
  it('Clicks on the Sign In button', () => {
    cy.visit('/');
    cy.get(HomepageLocators.signInButton).click();
  });
});