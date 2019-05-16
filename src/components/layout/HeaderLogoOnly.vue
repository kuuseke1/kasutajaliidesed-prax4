<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/"
        ><img src="https://i.imgur.com/iOgVHVp.png" width="150" height="150"
      /></router-link>
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
