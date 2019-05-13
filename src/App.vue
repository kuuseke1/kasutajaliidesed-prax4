<template>
  <div id="app">
    <span>Tesdting</span>
    <AppHeader />
  </div>
</template>

<script>
  console.log("in app.vue");
  import AppHeader from "./components/layout/AppHeader";
export default {
  name: "app",
  components: {
    AppHeader
  }

};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
