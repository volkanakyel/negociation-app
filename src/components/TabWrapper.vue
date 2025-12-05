<template>
  <div class="card">
    <Tabs v-model="activeTab">
      <Tab name="employer" label="Employer" :disabled="disableEmployerTab">
        <div class="form-section">
          <div class="form-header">
            <div class="step-badge">Step 1</div>
            <h2>Maximum Offer</h2>
            <p>Enter the highest amount you're willing to offer.</p>
          </div>
          <InputComp
            id="offerEmployer"
            inputName="Enter offer amount"
            v-model="employerOffer"
          />
          <ButtonComp
            id="submitOffer"
            buttonName="Continue"
            @buttonEvent="closeEmployerPanel"
          />
          <Notification
            v-if="missingOffer"
            notifMessage="Please enter an offer amount to continue"
          />
        </div>
      </Tab>
      <Tab name="employee" label="Employee" :disabled="!disableEmployerTab && activeTab !== 'employee'">
        <div class="form-section">
          <div class="form-header">
            <div class="step-badge">Step 2</div>
            <h2>Minimum Salary</h2>
            <p>Enter the minimum salary you'd accept.</p>
          </div>
          <InputComp
            id="employeeSalary"
            inputName="Enter salary expectation"
            v-model="employeeSalary"
          />
          <ButtonComp
            id="submitSalary"
            buttonName="See Results"
            @buttonEvent="openModal"
          />
          <Modal
            v-if="showModal"
            :success="validOffer"
            :employerOffer="employerOffer"
            :employeeSalary="employeeSalary"
            @close="closeModal"
          />
          <Notification
            v-if="employeeNotification"
            notifMessage="Please complete step 1 first"
          />
        </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Tab from '@/components/Tab.vue'
import Notification from '@/components/Notification.vue'
import Tabs from '@/components/Tabs.vue'
import ButtonComp from '@/components/ButtonComp.vue'
import InputComp from '@/components/InputComp.vue'
import Modal from '@/components/Modal.vue'

const employerOffer = ref(0)
const employeeSalary = ref(0)
const showModal = ref(false)
const employeeNotification = ref(false)
const disableEmployerTab = ref(false)
const missingOffer = ref(false)
const activeTab = ref('employer')

const validOffer = computed(() => {
  return employerOffer.value ? employerOffer.value >= employeeSalary.value : false
})

const openModal = () => {
  if (employerOffer.value > 0) {
    showModal.value = true
    employeeNotification.value = false
  } else {
    employeeNotification.value = true
  }
}

const closeModal = () => {
  showModal.value = false
}

const closeEmployerPanel = () => {
  if (employerOffer.value) {
    disableEmployerTab.value = true
    missingOffer.value = false
    employeeNotification.value = false
    activeTab.value = 'employee'
  } else {
    missingOffer.value = true
  }
}
</script>

<style scoped>
.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.form-section {
  padding: 28px 32px 32px;
}

.form-header {
  margin-bottom: 24px;
}

.step-badge {
  display: inline-block;
  padding: 4px 10px;
  background: var(--accent-light);
  color: var(--accent);
  font-size: 11px;
  font-weight: 600;
  border-radius: 20px;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.form-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
  letter-spacing: -0.02em;
}

.form-header p {
  font-size: 13px;
  color: var(--text-secondary);
}
</style>
