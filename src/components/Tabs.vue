<template>
  <article>
    <header class="tabs">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div
            id="item"
            class="nav-item"
            :class="[
              { 'is-active': tab.isActive },
              { 'disable-tab': tab.disable },
            ]"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="tabs-details">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  name: "tabs",
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>

<style scoped>
.tabs {
  border-bottom: 1px solid #fefefe;
  margin: auto;
}
.tabs-details {
  padding: 2em;
  text-align: center;
}
ul {
  display: flex;
  padding: 0;
  list-style: none;
  justify-content: center;
  align-items: center;
}
ul li {
  margin-right: 40px;
}
.nav-item {
  cursor: pointer;
  text-transform: capitalize;
  font-size: 18px;
  color: #929daf;
}
.nav-item:hover {
  color: #428bff;
}
.is-active {
  color: #428bff;
}
.disable-tab {
  cursor: not-allowed;
  pointer-events: none;
  /*Button disabled - CSS color class*/
  color: #c0c0c0;
  background-color: #ffffff;
}
</style>
