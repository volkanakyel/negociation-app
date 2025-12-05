<template>
  <div class="notice">
    <div class="notice-icon">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
        <path d="M8 5V8.5M8 11V11.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </div>
    <p>{{ notifMessage }}</p>
  </div>
</template>

<script setup>
defineProps({
  notifMessage: {
    type: String,
    default: 'Notification'
  }
})
</script>

<style scoped>
.notice {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 16px;
  padding: 12px 14px;
  background: var(--error-light);
  border: 1px solid #f5c6cb;
  border-radius: var(--radius-sm);
  animation: slideIn 0.2s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.notice-icon {
  flex-shrink: 0;
  color: var(--error);
  margin-top: 1px;
}

p {
  font-size: 13px;
  color: #721c24;
  margin: 0;
  line-height: 1.4;
}
</style>
