<template>
  <div class="tab-wrapper">
    <Tabs>
      <Tab name="employer tab" :selected="true" :disable="disableEmployerTab">
        <h2>Enter Maximum offer</h2>
        <InputComp inputName="Maximum offer" v-model="employerOffer" />
        <ButtonComp
          buttonName="Submit offer"
          @buttonEvent="closeEmployerPanel()"
        />
        <Notification
          v-if="missingOffer"
          notifMessage="You can swith to the employee Tab"
        />
      </Tab>
      <Tab name="employee tab">
        <h2>Enter Maximum salary</h2>
        <InputComp inputName="Salary expectation" v-model="employeeSalary" />
        <ButtonComp buttonName="Submit salary" @buttonEvent="openModal" />
        <Modal
          v-if="!showNotification"
          :success="validOffer"
          :show="showModal"
          @closeModal="closeModal()"
          :employerOffer="employerOffer"
          :employeeSalary="employeeSalary"
        />
        <Notification
          v-if="showNotification"
          notifMessage="Employer Tab is not filled"
        />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import Tab from "@/components/Tab";
import Notification from "@/components/Notification";
import Tabs from "@/components/Tabs";
import ButtonComp from "@/components/ButtonComp";
import InputComp from "@/components/InputComp";
import Modal from "@/components/Modal";
export default {
  name: "tab-wrapper",
  components: {
    Tab,
    Tabs,
    ButtonComp,
    InputComp,
    Modal,
    Notification,
  },
  data() {
    return {
      employerOffer: 0,
      employeeSalary: 0,
      showModal: false,
      showNotification: false,
      disableEmployerTab: false,
      missingOffer: false,
    };
  },
  computed: {
    validOffer() {
      return this.employerOffer
        ? this.employerOffer >= this.employeeSalary
        : false;
    },
  },
  methods: {
    openModal() {
      if (this.employerOffer > 0) {
        this.showModal = true;
        this.showNotification = false;
      } else this.showNotification = true;
    },
    closeModal() {
      this.showModal = false;
    },
    closeEmployerPanel() {
      if (this.employerOffer) {
        this.disableEmployerTab = true;
        this.missingOffer = false;
      } else {
        this.missingOffer = true;
      }
    },
  },
};
</script>

<style scoped>
.tab-wrapper {
  font-family: poppins;
  margin: 0 auto;
  background: #ffffff;
  padding: 1.5em;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 8px 8px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
</style>
