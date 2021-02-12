<template>
  <div>
    <button @click="buttonEvent()" class="vlk-btn">{{ buttonName }}</button>
  </div>
</template>

<script>
export default {
  name: "button-comp",
  props: {
    buttonName: {
      required: true,
      default: "Submit",
      type: String,
    },
  },
  methods: {
    buttonEvent() {
      this.$emit("buttonEvent");
    },
  },
};
</script>

<style scoped>
.vlk-btn {
  font-family: Poppins;
  padding: 0.5rem 2rem;
  background: white;
  border: 1px solid #46b424;
  color: #46b424;
  cursor: pointer;
  border-radius: 15px;
  font-size: 16px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  font-weight: bold;
  margin: 10px;
  height: 3rem;
}
</style>
