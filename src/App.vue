<template>
  <div>
    <Modal />
    <TabWrapper />
  </div>
</template>

<script>
import TabWrapper from "./components/TabWrapper";
import Modal from "@/components/Modal.vue";
export default {
  components: {
    TabWrapper,
    Modal,
  },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
