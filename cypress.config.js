const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vnjtzx',
  e2e: {
    projectId: "Pusher",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


