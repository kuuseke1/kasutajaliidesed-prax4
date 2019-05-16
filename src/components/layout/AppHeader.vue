<template>
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/"
        ><img src="https://i.imgur.com/iOgVHVp.png" width="150" height="150"
      /></router-link>

      <span class="navbar-burger burger" data-target="navbarMenuHeroA">
        <span> </span>
        <span> </span>
        <span> </span>
      </span>
    </div>

    <div class="navbar-menu" id="navbarMenuHeroA">
      <div class="navbar-start">
        <router-link to="/patterns" class="navbar-item">
          Sirvi mustreid
        </router-link>
        <a class="navbar-item">
          Lisa muster
        </a>
      </div>

      <div class="navbar-end">
        <router-link to="basket">
          <img
            class="navbar-item"
            src="https://i.imgur.com/s6jQJjv.png"
            alt="cart"
            width="50"
            height="50"
          />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  mounted() {
    var $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(function(el) {
        el.addEventListener("click", function() {
          // Get the target from the "data-target" attribute
          var target = el.dataset.target;
          var $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.input {
  width: 400px;
}

nav {
  margin-bottom: 50px;
}
</style>
