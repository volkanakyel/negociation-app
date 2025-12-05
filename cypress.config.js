import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'tests/e2e/**/*.spec.js',
    supportFile: 'tests/support/e2e.js',
    fixturesFolder: 'tests/fixtures'
  }
})
