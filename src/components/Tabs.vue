<template>
  <article>
    <header class="tabs" data-cy="tabs-list">
      <ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <div
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
    <section class="tabs-details" data-cy="tab-content">
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
        console.log(tab.name === selectedTab.name);
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    console.log(this.$children);
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
