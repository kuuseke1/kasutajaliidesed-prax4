<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/"
        ><img src="../../assets/ravelry-logo.svg" width="150" height="150"
      /></router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderLogoOnly"
};
</script>

<style scoped lang="scss">
nav {
  margin-bottom: 50px;
}
</style>
