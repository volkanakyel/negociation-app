<template>
  <Teleport to="body">
    <div class="overlay" @click.self="closeModal">
      <div class="modal">
        <div class="modal-header">
          <div class="result-icon" :class="{ success: success }">
            <svg v-if="success" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M7 14L12 19L21 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M9 9L19 19M19 9L9 19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </div>
          <h2>{{ isSuccess }}</h2>
          <p class="weather-info">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="2.5" stroke="currentColor" stroke-width="1.2"/>
              <path d="M7 1V2.5M7 11.5V13M13 7H11.5M2.5 7H1M11.24 2.76L10.19 3.81M3.81 10.19L2.76 11.24M11.24 11.24L10.19 10.19M3.81 3.81L2.76 2.76" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            {{ forecastText }}
          </p>
        </div>

        <div class="modal-body">
          <div class="comparison">
            <div class="comparison-item">
              <span class="comparison-label">Employer Offer</span>
              <span class="comparison-value">£{{ employerOffer.toLocaleString() }}</span>
            </div>
            <div class="comparison-divider">
              <span>vs</span>
            </div>
            <div class="comparison-item">
              <span class="comparison-label">Employee Expectation</span>
              <span class="comparison-value">£{{ employeeSalary.toLocaleString() }}</span>
            </div>
          </div>

          <div class="difference-card" :class="{ success: success }">
            <span class="difference-label">{{ success ? 'Room to negotiate' : 'Gap to close' }}</span>
            <span class="difference-value">
              {{ success ? '+' : '-' }}£{{ Math.abs(employerOffer - employeeSalary).toLocaleString() }}
            </span>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-secondary" @click="closeModal">Close</button>
          <button class="btn-primary" @click="closeModal">
            {{ success ? 'Accept Deal' : 'Renegotiate' }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import eventService from '@/services/eventServices.js'

const props = defineProps({
  success: {
    type: Boolean,
    default: false
  },
  employerOffer: {
    type: Number,
    default: 0
  },
  employeeSalary: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['close'])

const forecastDetails = ref({})

const isSuccess = computed(() => {
  return props.success ? 'Deal Reached!' : 'No Agreement'
})

const forecastText = computed(() => {
  if (forecastDetails.value.weather) {
    return `${forecastDetails.value.name} · ${forecastDetails.value.weather[0].description}`
  }
  return 'Weather unavailable'
})

const closeModal = () => {
  emit('close')
}

onMounted(async () => {
  try {
    const response = await eventService.getForecast()
    forecastDetails.value = response.data
  } catch (err) {
    console.log('Weather API error:', err)
  }
})
</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(32, 33, 36, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal {
  width: 100%;
  max-width: 420px;
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  animation: slideUp 0.25s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  text-align: center;
  padding: 32px 24px 24px;
  background: linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%);
}

.result-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--error-light);
  color: var(--error);
}

.result-icon.success {
  background: var(--success-light);
  color: var(--success);
}

.modal-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.weather-info {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-tertiary);
  padding: 4px 12px;
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 1px solid var(--border-light);
}

.weather-info svg {
  color: #f9ab00;
}

.modal-body {
  padding: 24px;
}

.comparison {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.comparison-item {
  flex: 1;
  text-align: center;
  padding: 16px 12px;
  background: var(--bg-tertiary);
  border-radius: var(--radius-sm);
}

.comparison-label {
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}

.comparison-value {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.comparison-divider {
  flex-shrink: 0;
}

.comparison-divider span {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--text-tertiary);
  text-transform: uppercase;
}

.difference-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: var(--error-light);
  border-radius: var(--radius-sm);
  border: 1px solid #f5c6cb;
}

.difference-card.success {
  background: var(--success-light);
  border-color: #b7e4c7;
}

.difference-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
}

.difference-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--error);
}

.difference-card.success .difference-value {
  color: var(--success);
}

.modal-footer {
  display: flex;
  gap: 12px;
  padding: 20px 24px;
  border-top: 1px solid var(--border-light);
  background: var(--bg-tertiary);
}

.btn-secondary,
.btn-primary {
  flex: 1;
  padding: 12px 20px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border: 1px solid var(--border-medium);
}

.btn-secondary:hover {
  background: var(--bg-tertiary);
  border-color: var(--text-tertiary);
}

.btn-primary {
  background: var(--accent);
  color: white;
  border: none;
}

.btn-primary:hover {
  background: #1557b0;
}
</style>
