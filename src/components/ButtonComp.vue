<template>
  <button @click="buttonEvent" class="btn">
    {{ buttonName }}
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script setup>
defineProps({
  buttonName: {
    type: String,
    required: true,
    default: 'Submit'
  }
})

const emit = defineEmits(['buttonEvent'])

const buttonEvent = () => {
  emit('buttonEvent')
}
</script>

<style scoped>
.btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 24px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background: var(--accent);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: #1557b0;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn:active {
  transform: translateY(0);
  box-shadow: none;
}

.btn svg {
  transition: transform 0.2s ease;
}

.btn:hover svg {
  transform: translateX(2px);
}
</style>
