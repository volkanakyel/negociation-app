<template>
  <div class="tabs-container">
    <nav class="tabs-nav" data-cy="tabs-list">
      <button
        v-for="(tab, index) in tabs"
        :key="tab.name"
        class="tab-btn"
        :class="{
          'is-active': modelValue === tab.name,
          'is-disabled': tab.disabled,
          'is-completed': index === 0 && modelValue === 'employee'
        }"
        @click="selectTab(tab)"
        :disabled="tab.disabled"
      >
        <span class="tab-number">{{ index + 1 }}</span>
        <span class="tab-label">{{ tab.label }}</span>
        <svg v-if="index === 0 && modelValue === 'employee'" class="check-icon" width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3.5 7L6 9.5L10.5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </nav>
    <div class="tabs-content" data-cy="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const tabs = ref([])

provide('registerTab', (tab) => {
  tabs.value.push(tab)
})

provide('unregisterTab', (name) => {
  tabs.value = tabs.value.filter(t => t.name !== name)
})

provide('activeTab', () => props.modelValue)

const selectTab = (tab) => {
  if (!tab.disabled) {
    emit('update:modelValue', tab.name)
  }
}
</script>

<style scoped>
.tabs-container {
  width: 100%;
}

.tabs-nav {
  display: flex;
  background: var(--bg-tertiary);
  padding: 6px;
  gap: 4px;
}

.tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  font-family: inherit;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-btn:hover:not(.is-disabled) {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.5);
}

.tab-btn.is-active {
  color: var(--text-primary);
  background: var(--bg-secondary);
  box-shadow: var(--shadow-sm);
}

.tab-btn.is-completed {
  color: var(--success);
}

.tab-btn.is-disabled {
  color: var(--text-tertiary);
  cursor: not-allowed;
}

.tab-number {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  background: var(--border-light);
  border-radius: 50%;
  transition: all 0.2s ease;
}

.tab-btn.is-active .tab-number {
  background: var(--accent);
  color: white;
}

.tab-btn.is-completed .tab-number {
  background: var(--success);
  color: white;
}

.tab-label {
  font-weight: 500;
}

.check-icon {
  color: var(--success);
}

.tabs-content {
  /* Content inherits padding from child */
}
</style>
