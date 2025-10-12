import { homepageLocators } from '../Locators/HomepageLocatorsomepageLocators';

describe('Homepage Tests', () => {
  it('Clicks on the Sign In button', () => {
    cy.visit('/');
    cy.get(homepageLocators.signInButton).click();
  });
});