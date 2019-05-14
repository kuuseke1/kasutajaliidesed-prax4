<template>
  <div>
    <HeaderLogoOnly />
    <h1 class="title is-1">Vali pank</h1>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter buttons are-medium">
        <router-link to="success" class="button is-success is-pulled-left"
          >SEB</router-link
        >
        <router-link to="success" class="button is-danger"
          >Swedbank</router-link
        >
        <router-link to="success" class="button is-info is-pulled-right"
          >LHV</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogoOnly from "../components/layout/HeaderLogoOnly";

export default {
  name: "BankChoose",
  components: {
    HeaderLogoOnly
  }
};
</script>
