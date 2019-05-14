<template>
  <div>
    <AppHeader />
    <div v-bind:key="pattern.id" v-for="pattern in patterns">
      <BasketItem v-bind:pattern="pattern"></BasketItem>
    </div>
    <router-link to="loginprompt" class="button is-large is-info"
      >Osta</router-link
    >
  </div>
</template>

<script>
import AppHeader from "../components/layout/AppHeader";
import BasketItem from "../components/layout/BasketItem";
export default {
  name: "Basket",
  components: { BasketItem, AppHeader },
  props: ["patterns"]
};
</script>
