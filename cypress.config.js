const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  modifyObstructiveCode: true,
  experimentalSourceRewriting: true,
  experimentalWebKitSupport: true,
  chromeWebSecurity: false,
  video: true,
  e2e: {
    async setupNodeEvents(on, config) {
   
      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    experimentalSessionAndOrigin: true,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
})
