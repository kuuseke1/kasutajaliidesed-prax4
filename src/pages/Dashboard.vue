<template>
  <div class="container">
    <div class="container">
      <span class="subtitle">
        Visitors by months
      </span>
      <line-chart
        :chartdata="this.linechartdata"
        :width="500"
        :height="200"
        :options="lineoptions"
      />
      <span class="subtitle">
        Number of purchases for different products
      </span>
      <bar-chart
        :chartdata="this.barchartdata"
        :options="baroptions"
        :width="500"
        :height="200"
      />
      <span class="subtitle">
        Number of purchases by county
      </span>
      <doughnut-chart
        :chartdata="this.piechartdata"
        :options="pieoptions"
        :width="500"
        :height="200"
      />
    </div>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
import BarChart from "../components/BarChart.vue";
import DoughnutChart from "../components/DonutChart";
import json from "../json/visitordata.js";
import productdata from "../json/productdata.js";
import visitorplaces from "../json/visitorplaces.js";

export default {
  name: "Dashboard",
  components: {
    LineChart,
    BarChart,
    DoughnutChart
  },
  data: () => [
    {
      linechartdata: null,
      lineoptions: { maintainAspectRatio: false },
      barchartdata: null,
      baroptions: { maintainAspectRatio: false },
      piechartdata: null,
      pieoptions: { maintainAspectRatio: false }
    }
  ],
  created() {
    this.linechartdata = json;
    this.barchartdata = productdata;
    this.piechartdata = visitorplaces;
  }
};
</script>

<style scoped lang="scss">
.subtitle {
  margin: 50px;
}
</style>
