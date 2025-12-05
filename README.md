# Negotiation App

A Vue 3 application for salary negotiation simulation between employers and employees.

## Tech Stack

- **Vue 3** with Composition API (`<script setup>`)
- **Vite** for development and build tooling
- **Vitest** for unit testing
- **Cypress** for E2E testing
- **Axios** for HTTP requests

## Prerequisites

- Node.js 18, 20, or 22+
- npm 8+

## Installation

```bash
npm install
```

## Development

```bash
# Start development server on port 8080
npm run dev
```

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

```bash
# Run unit tests
npm run test:unit

# Run unit tests in watch mode
npm run test:unit:watch

# Run E2E tests (requires dev server running)
npm run test:e2e

# Open Cypress test runner
npm run test:e2e:open
```

## Linting

```bash
npm run lint
```

## Features

- **Two-phase negotiation flow**: Employer submits maximum offer, then employee submits minimum salary
- **Real-time validation**: Validates offers before submission
- **Success/Failure Modal**: Shows negotiation outcome with current weather data
- **Tab-based UI**: Clean interface with employer/employee tabs
- **Modern animations**: Smooth transitions and micro-interactions

## Project Structure

```
src/
├── components/
│   ├── ButtonComp.vue     # Reusable button component
│   ├── InputComp.vue      # Number input with v-model
│   ├── Modal.vue          # Result modal with Teleport
│   ├── Notification.vue   # Warning notification
│   ├── Tab.vue            # Individual tab panel
│   ├── Tabs.vue           # Tab container with provide/inject
│   └── TabWrapper.vue     # Main application logic
├── services/
│   └── eventServices.js   # Weather API service
├── App.vue                # Root component
└── main.js                # Application entry point
```

## Security

This project has been updated to use modern dependencies with **0 known vulnerabilities**:
- Vue 3.5+ (migrated from Vue 2 which is EOL)
- Vite 6.3+ (modern build tool)
- Axios 1.7+ (latest secure version)
- All dependencies are kept up to date
