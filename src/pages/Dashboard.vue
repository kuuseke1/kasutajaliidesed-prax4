<template>
  <div class="container">
    <div class="container">
      <span class="subtitle">
        Visitors by days
      </span>
      <line-chart :chart-data="chartCollection1"></line-chart>
    </div>
    <div class="container">
      <span class="subtitle">
        Average visiting times
      </span>
      <line-chart :chart-data="chartCollection2"></line-chart>
    </div>
    <div class="container">
      <span class="subtitle">
        Money spent by days
      </span>
      <line-chart :chart-data="chartCollection3"></line-chart>
    </div>
  </div>
</template>

<script>
  import json from "../data.json";

  export default {
    name: "Dashboard",
    components: {
    },
    data() {
      return {
        dataCollection1: null,
        dataCollection2: null,
        dataCollection3: null
      };
    },
    created() {
      console.log(json);
      this.dataCollection1 = json[0];
    }
  };
</script>

<style scoped></style>
