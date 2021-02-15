<template>
  <div class="modal" v-show="show">
    <div class="modal-wrapper">
      <div class="modal-container">
        <content select=".modal-header">
          <div class="modal-header">
            <h2 :class="{ win: success, loose: !success }">
              {{ isSuccess }}
            </h2>
            <h3>{{ getForecast }}</h3>
          </div>
        </content>
        <div class="modal-body">
          Maximum offer was : {{ employerOffer }}£<br />
          Minimum expected salary was : {{ employeeSalary }}£
        </div>
        <div class="modal-footer uk-clearfix">
          <button class="close-modal" @click="closeModal()">OK</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventService from "@/services/eventServices.js";
export default {
  props: {
    show: {
      type: Boolean,
      // required: true,
      twoWay: true,
    },
    success: {
      // required: true,
      type: Boolean,
    },
    employerOffer: {
      type: Number,
    },
    employeeSalary: {
      type: Number,
    },
  },
  data() {
    return {
      modalMessage: "Success !",
      forecastDetails: [],
      spinLoader: false,
    };
  },
  computed: {
    isSuccess() {
      return this.success ? "Success !" : "Wrong";
    },
    getForecast() {
      if (this.forecastDetails.weather) {
        return `${this.forecastDetails.name} : ${this.forecastDetails.weather[0].description}`;
      } else {
        return "Current weather unvailable";
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  created() {
    eventService
      .getForecast()
      .then((response) => {
        this.forecastDetails = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.win {
  color: green;
}
.loose {
  color: red;
}
.modal-container {
  background: #fff;
  width: 450px;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  margin: 0 auto;
  padding: 20px 30px;
}
.modal-body {
  text-align: left;
}
.modal-footer {
  margin-top: 15px;
}

button {
  font-family: Poppins;
  padding: 0.5rem 2rem;
  background: white;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin: 10px;
  height: 3rem;
}
</style>
