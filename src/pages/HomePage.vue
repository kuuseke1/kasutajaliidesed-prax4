<template>
  <div>
    <AppHeader />
    <HomeCards />
  </div>
</template>

<script>
import AppHeader from "../components/layout/AppHeader";
import HomeCards from "../components/layout/HomeCards";
export default {
  name: "HomePage",
  components: {
    AppHeader,
    HomeCards
  }
};
</script>
