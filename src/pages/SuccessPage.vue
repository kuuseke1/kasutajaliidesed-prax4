<template>
  <div>
    <HeaderLogoOnly />
    <h1 class="title is-1">Tehing õnnestus!</h1>
    <h1 class="subtitle">Täname ostu eest.</h1>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <a class="button is-info is-pulled-left">Lae muster alla</a>
        <span>VÕI</span>
        <router-link to="patterns" class="button is-pulled-right"
          >Jätka sirvimist</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogoOnly from "../components/layout/HeaderLogoOnly";

export default {
  name: "SuccessPage",
  components: {
    HeaderLogoOnly
  }
};
</script>

<style scoped lang="scss"></style>
