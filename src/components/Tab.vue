<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script setup>
import { inject, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const registerTab = inject('registerTab')
const unregisterTab = inject('unregisterTab')
const activeTab = inject('activeTab')

const isActive = computed(() => activeTab() === props.name)

onMounted(() => {
  registerTab({
    name: props.name,
    label: props.label,
    disabled: props.disabled
  })
})

onUnmounted(() => {
  unregisterTab(props.name)
})
</script>
