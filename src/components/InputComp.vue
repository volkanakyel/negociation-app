<template>
  <div class="form-group">
    <input type="number" :placeholder="inputName" @input="updateValue" />
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  props: {
    inputName: {
      type: String,
      default: "Your value",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", parseInt(event.target.value));
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input {
  margin: auto;
  padding: 0.5em;
  font-size: 1em;
  font-family: poppins;
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.1);
  border: 1px solid green;
  border-radius: 5px;
  /* margin: 10px; */
}
</style>
