<template>
  <div>
    <div v-bind:key="data.id" v-for="data in myJson">{{ data }}</div>
  </div>
</template>

<script>
import json from "../data.json";

export default {
  data() {
    return {
      myJson: json
    };
  }
};
</script>
<style scoped></style>
