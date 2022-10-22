//const {defineConfig } = require("cypress");

module.exports = {
  defaultCommandTimeout: 10000,
  modifyObstructiveCode: true,
  experimentalSourceRewriting: true,
  experimentalWebKitSupport: true,
  chromeWebSecurity: false,
  video: true,
  e2e: {
    experimentalSessionAndOrigin: true,
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
}