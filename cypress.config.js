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
    experimentalSessionAndOrigin: true,
  },
  retries: {
    runMode: 0,
    openMode: 0,
  },
})
