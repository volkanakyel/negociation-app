<template>
  <div class="input-group">
    <label class="input-label">Amount</label>
    <div class="input-wrapper" :class="{ 'is-focused': isFocused }">
      <span class="currency">£</span>
      <input
        ref="inputRef"
        type="text"
        inputmode="numeric"
        :placeholder="inputName"
        @input="updateValue"
        @focus="isFocused = true"
        @blur="onBlur"
      />
    </div>
    <span class="input-hint">Enter the amount in GBP</span>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  inputName: {
    type: String,
    default: 'Enter amount'
  },
  modelValue: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue'])
const inputRef = ref(null)
const isFocused = ref(false)

const updateValue = (event) => {
  const raw = event.target.value.replace(/[^0-9]/g, '')
  const numValue = parseInt(raw) || 0
  emit('update:modelValue', numValue)
}

const onBlur = () => {
  isFocused.value = false
  if (inputRef.value && props.modelValue > 0) {
    inputRef.value.value = props.modelValue.toLocaleString()
  }
}

watch(() => props.modelValue, (newVal) => {
  if (inputRef.value && document.activeElement !== inputRef.value) {
    inputRef.value.value = newVal > 0 ? newVal.toLocaleString() : ''
  }
})

onMounted(() => {
  if (inputRef.value && props.modelValue > 0) {
    inputRef.value.value = props.modelValue.toLocaleString()
  }
})
</script>

<style scoped>
.input-group {
  margin-bottom: 20px;
}

.input-label {
  display: block;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-medium);
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.input-wrapper:hover {
  border-color: var(--text-tertiary);
}

.input-wrapper.is-focused {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}

.currency {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-secondary);
}

input {
  flex: 1;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  background: transparent;
  border: none;
  outline: none;
  min-width: 0;
}

input::placeholder {
  color: var(--text-tertiary);
  font-weight: 400;
}

.input-hint {
  display: block;
  font-size: 12px;
  color: var(--text-tertiary);
  margin-top: 6px;
}
</style>
