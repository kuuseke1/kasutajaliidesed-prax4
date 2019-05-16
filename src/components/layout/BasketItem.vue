<template>
  <div>
    <div class="columns">
      <div class="column is-three-quarters is-offset-2">
        <div class="columns">
          <div class="column is-2">
            <img :src="pattern.picture" />
          </div>
          <div class="column is-2">
            <span>{{ pattern.title }}</span>
          </div>
          <div class="column is-2">
            <span>{{ pattern.price }}</span>
          </div>
          <div class="column is-2">
            <a v-on:click="$emit('deleteItem')">Kustuta</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketItem",
  props: ["pattern"]
};
</script>
