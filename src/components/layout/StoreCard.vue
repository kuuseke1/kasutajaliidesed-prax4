<template>
  <div>
    <router-link :to="'/detailview?id=' + pattern.id"
      ><div class="card">
        <div class="card-content">
          <img class="is-256x256" :src="pattern.picture" />
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            {{ pattern.title }}
          </p>
          <p class="card-footer-item">
            {{ pattern.price }}
          </p>
        </footer>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "StoreCard",
  props: ["pattern"]
};
</script>
