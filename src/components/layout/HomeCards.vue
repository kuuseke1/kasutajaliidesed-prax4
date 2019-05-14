<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Avasta ja jaga uusi käsitöö juhendeid</h1>
        <router-link to="patterns" class="button is-large is-fullwidth is-link"
          >Kõik mustrid</router-link
        >
      </div>
      <div class="column is-offset-2 has-text-left">
        <h2 class="title is-2">Populaarsed</h2>
        <div class="tile is-ancestor is-spaced">
          <div class="tile is-vertical">
            <div class="tile">
              <router-link to="/detailview?id=3"
                ><img
                  src="https://i.pinimg.com/564x/07/42/81/074281d3bc848db0c28ddd716789dbd3.jpg"
              /></router-link>
            </div>
            <div class="tile">
              <router-link to="/detailview?id=4"
                ><img
                  src="https://i.pinimg.com/564x/e2/c6/ac/e2c6acaab15e83f7569434ed53a05a1f.jpg"
              /></router-link>
            </div>
          </div>
          <div class="tile is-vertical">
            <div class="tile">
              <router-link to="/detailview?id=6"
                ><img
                  src="https://i.pinimg.com/564x/36/52/4b/36524b3fb986b2b10174b913b4068dc2.jpg"
              /></router-link>
            </div>
            <div class="tile">
              <router-link to="/detailview?id=10"
                ><img
                  src="https://i.pinimg.com/564x/cf/5d/e1/cf5de101f036d357b9f9f7ec02fa9623.jpg"
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCards"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
