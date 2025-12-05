<template>
  <div class="app">
    <header class="app-header">
      <div class="logo">
        <div class="logo-mark"></div>
        <span>Negotiation</span>
      </div>
    </header>
    <main class="app-main">
      <div class="container">
        <div class="hero-text">
          <h1>Salary Negotiation</h1>
          <p>Find common ground between employer offers and employee expectations.</p>
        </div>
        <TabWrapper />
      </div>
    </main>
    <footer class="app-footer">
      <span>Built for fair negotiations</span>
    </footer>
  </div>
</template>

<script setup>
import TabWrapper from './components/TabWrapper.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

:root {
  --bg-primary: #f8f9fa;
  --bg-secondary: #ffffff;
  --bg-tertiary: #f1f3f4;
  --text-primary: #202124;
  --text-secondary: #5f6368;
  --text-tertiary: #9aa0a6;
  --border-light: #e8eaed;
  --border-medium: #dadce0;
  --accent: #1a73e8;
  --accent-light: #e8f0fe;
  --success: #34a853;
  --success-light: #e6f4ea;
  --error: #ea4335;
  --error-light: #fce8e6;
  --shadow-sm: 0 1px 2px rgba(60, 64, 67, 0.1);
  --shadow-md: 0 2px 6px rgba(60, 64, 67, 0.15);
  --shadow-lg: 0 8px 24px rgba(60, 64, 67, 0.15);
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  padding: 20px 32px;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-light);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-mark {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, var(--accent) 0%, #4285f4 100%);
  border-radius: 8px;
}

.logo span {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.app-main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
}

.container {
  width: 100%;
  max-width: 480px;
}

.hero-text {
  text-align: center;
  margin-bottom: 32px;
}

.hero-text h1 {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: -0.03em;
}

.hero-text p {
  font-size: 14px;
  color: var(--text-secondary);
  max-width: 320px;
  margin: 0 auto;
}

.app-footer {
  padding: 16px 32px;
  text-align: center;
  border-top: 1px solid var(--border-light);
  background: var(--bg-secondary);
}

.app-footer span {
  font-size: 12px;
  color: var(--text-tertiary);
}
</style>
