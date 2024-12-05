const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    testIsolation: true,
    experimentalSessionAndOrigin: true,
    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    projectId: "tjrmxi",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        preserveCookies({ cookies }) {
          savedCookies = cookies;
          return null;
      },
      applySavedCookies() {
          return savedCookies || [];
      },
      preserveLocalStorage({ localStorageData }) {
          savedLocalStorage = localStorageData;
          return null;
      },
      applySavedLocalStorage() {
          return savedLocalStorage || {};
      },
        
        // chromeWebSecurity: false,

        /* A custom task to generate JWT token for overriding Unleash toggles.
         *
         * We decided to separate this function from overrideFeatureToggle
         * command because when we put the below code there it keeps failing.
         * It seems this is because the jwt generation feature is asynchronous,
         * so it conflicting with Cypress's async system. So to work around
         * the issue, we wrap this function into a custom task that could be
         * called from inside the overrideFeatureToggle custom command.
         *
         * More References:
         * - https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous : official documentation about how cypress asynchronous command worked
         * - https://stackoverflow.com/q/65736979 : Here the asker also use custom
         *   task to work around async code issue
         * - https://stackoverflow.com/questions/58680757/in-cypress-when-to-use-custom-command-vs-task : explanation regarding custom task vs custom command, and use cases for each of them
         */
                
      })
    },

    excludeSpecPattern: [
      // Prod Spec
      // 'cypress/e2e/daily_regression',
      
      // Stagging Spec
      // 'cypress/e2e/daily_regression',
    ],

    env: {
      base_url: process.env.BASE_URL,
      orangehrm_username: process.env.ORANGEHRM_USERNAME,
      orangehrm_password: process.env.ORANGEHRM_PASSWORD,
      orangehrm_invalid_username: process.env.ORANGEHRM_INVALID_USERNAME,
      orangehrm_invalid_password: process.env.ORANGEHRM_INVALID_PASSWORD,
      orangehrm_new_password: process.env.ORANGEHRM_NEW_PASSWORD,
      orangehrm_valid_employee_name: process.env.ORANGEHRM_VALID_EMPLOYEE_NAME,
      orangehrm_invalid_employee_name: process.env.ORANGEHRM_INVALID_EMPLOYEE_NAME,
      orangehrm_new_employee_name: process.env.ORANGEHRM_NEW_EMPLOYEE_NAME,
      orangehrm_new_account_username: process.env.ORANGEHRM_NEW_ACCOUNT_USERNAME,
      orangehrm_firstname: process.env.ORANGEHRM_FIRSTNAME,
      orangehrm_lastname: process.env.ORANGEHRM_LASTNAME,
      orangehrm_new_firstname: process.env.ORANGEHRM_NEW_FIRSTNAME,
      orangehrm_new_lastname: process.env.ORANGEHRM_NEW_LASTNAME,
      orangehrm_job_title_1: process.env.ORANGEHRM_JOB_TITLE_1,
      orangehrm_job_title_2: process.env.ORANGEHRM_JOB_TITLE_2
    },      // implement node event listeners here
    },
  },
);