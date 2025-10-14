const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.booking.com",
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      // Možeš dodati custom eventove ovdje ako zatreba
    },
    specPattern: "cypress/e2e/**/*.cy.js", // svi testovi u e2e folderu
    supportFile: "cypress/support/e2e.js", // ako koristiš support file
    defaultCommandTimeout: 10000, // timeout za cy.get() i slične komande
    pageLoadTimeout: 60000, // timeout za učitavanje stranica
    video: true, // snima video kada test padne
    screenshotOnRunFailure: true, // screenshot na fail
    retries: {
      runMode: 1, // retry failed test jednom kada pokrećeš CLI
      openMode: 0 // ne retry u GUI
    },
    reporter: "spec", // prikazuje rezultate u terminalu
  },
});


