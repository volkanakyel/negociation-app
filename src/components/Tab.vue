<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab",
  props: {
    name: { required: true },
    selected: { default: false },
    disable: { default: false },
  },
  data: () => {
    return {
      isActive: false,
    };
  },
  watch: {
    selected() {
      this.isActive = this.selected;
    },
  },
  mounted() {
    this.isActive = this.selected;
  },
};
</script>
