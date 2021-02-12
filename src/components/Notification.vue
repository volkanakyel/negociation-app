<template>
  <div class="notice warning">
    <i class="fas fa-exclamation-circle fa-2x"></i>
    <p>
      {{ notifMessage }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    notifMessage: {
      type: String,
      default: "Warning Notification",
    },
  },
};
</script>

<style scoped>
.notice {
  display: flex;
  font-family: poppins;
  position: relative;
  margin: 1em;
  background: #f9f9f9;
  padding: 1em 1em 1em 2em;
  border-left: 10px solid #ddd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
}

.warning {
  border-color: #ffdc00;
}
i {
  color: #ffdc00;
  margin: 10px;
}
</style>
